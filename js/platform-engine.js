(function(root){
'use strict';
const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
function world(level){
 const length=3300+level*240,ground=460,gaps=[[650,110],[1400,130],[2210,145]];
 if(level===2)gaps.push([3060,125]);
 const platforms=[];let start=0;for(const [x,w]of gaps){platforms.push({x:start,y:ground,w:x-start,h:110,ground:true});start=x+w;}platforms.push({x:start,y:ground,w:length-start,h:110,ground:true});
 for(const [x,y,w]of [[310,365,130],[500,310,100],[870,360,160],[1160,350,120],[1590,355,140],[1900,330,150],[2420,355,140],[2660,315,120]])platforms.push({x,y,w,h:22});
 platforms.push({x:2070,y:375,w:105,h:20,moving:true,baseX:2070});
 const hearts=[];for(let x=180;x<length-160;x+=130){const platform=platforms.find(p=>!p.ground&&x>p.x&&x<p.x+p.w);hearts.push({x,y:platform?platform.y-43:ground-48,w:26,h:26,id:'h'+x});}
 const enemies=[980,1740,2500,2900].map((x,i)=>({x,y:428,w:37,h:32,baseX:x,range:55,speed:1+i*.3}));
 const hazards=(level===0?[1090,1830,2570]:level===1?[940,1530,2000,2650,3030]:[1090,1810,2550,2920,3350]).map((x,i)=>({x,y:level===2&&i%2===0?448:426,w:level===2&&i%2===0?80:44,h:level===2&&i%2===0?12:34,kind:level===0?'thorns':level===2&&i%2===0?'puddle':'cone'}));
 const benoni=level===2?{start:300,end:1350,gate:1300,passed:false,keys:[{id:0,x:415,y:317,w:26,h:28,collected:false},{id:1,x:930,y:312,w:26,h:28,collected:false},{id:2,x:1195,y:302,w:26,h:28,collected:false}],shelters:[360,820,1250],beams:[{base:520,x:520,range:160},{base:1040,x:1040,range:180}],villain:{x:1010,y:378,w:42,h:82},alert:0,hidden:false}:null;
 const checkpoints=[{x:360,y:460},{x:820,y:460},{x:1640,y:460},{x:2390,y:460},{x:3220,y:460}];if(benoni)checkpoints.splice(2,0,{x:1220,y:460});
 return {length,ground,gaps,platforms,hearts,enemies,hazards,projectiles:[],benoni,sister:level===0?{x:550,y:374,w:48,h:86,passed:false,hits:0,lastOffer:-10,lastCast:-10,calm:false}:null,police:level===1?{x:1830,y:374,w:50,h:86,passed:false,permit:false,green:false,card:{x:1670,y:409,w:32,h:38}}:null,checkpoints,letters:[{x:395,y:323,id:0},{x:1950,y:288,id:1},{x:2710,y:273,id:2}],switch:{x:1240,y:425,w:38,h:35},bridge:{x:1400,y:460,w:130,h:22,bridge:true},goal:length-130};
}
function player(x=65,y=380){return{x,y,w:43,h:76,vx:0,vy:0,jumps:0,grounded:false,facing:1,invincible:0};}
function step(p,w,input,dt,time,bridge){
 const events=[];p.invincible=Math.max(0,p.invincible-dt);const oldY=p.y;
 p.vx=((input.right?1:0)-(input.left?1:0))*265;if(p.vx)p.facing=Math.sign(p.vx);
 if(input.jump&&p.jumps<2){p.vy=-610;p.jumps++;p.grounded=false;events.push('jump');}
 p.vy=Math.min(850,p.vy+1550*dt);p.x=Math.max(0,Math.min(w.length-p.w,p.x+p.vx*dt));p.y+=p.vy*dt;p.grounded=false;
 for(const b of bridge?w.platforms.concat(w.bridge):w.platforms){if(b.moving)b.x=b.baseX+Math.sin(time*1.1)*85;
 if(p.vy>=0&&oldY+p.h<=b.y+5&&overlap(p,b)){p.y=b.y-p.h;p.vy=0;p.grounded=true;p.jumps=0;if(b.moving)p.x+=Math.cos(time*1.1)*93.5*dt;}}
 for(const e of w.enemies){e.x=e.baseX+Math.sin(time*e.speed)*e.range;if(overlap(p,e)&&p.invincible===0){if(p.vy>0&&oldY+p.h<=e.y+14){e.y=900;p.vy=-420;events.push('stomp');}else events.push('hurt');}}
 for(const h of w.hazards)if(overlap(p,h)&&p.invincible===0)events.push('hurt');
 const s=w.sister;if(s&&!s.passed){
 s.calm=time%4.8>=3;s.remaining=s.calm?4.8-time%4.8:3-time%4.8;
 if(p.x>350&&p.x<650&&!s.calm&&time-s.lastCast>1.1){s.lastCast=time;const direction=p.x>s.x?1:-1;w.projectiles.push({x:s.x+direction*25,y:404,w:44,h:26,vx:direction*170,life:2.1});}
 if(input.peace&&Math.abs(p.x-s.x)<130&&Math.abs(p.y-s.y)<35){if(s.calm&&time-s.lastOffer>2){s.hits++;s.lastOffer=time;events.push('sister-heart');if(s.hits>=3){s.passed=true;w.projectiles=[];events.push('sister-peace');}}else events.push('sister-wait');}
 if(!s.passed&&overlap(p,s)){p.x=s.x-p.w-1;p.vx=0;}
 if(!s.passed&&p.x+p.w>615){p.x=615-p.w;p.vx=0;events.push('sister-blocked');}
 }
 w.projectiles=w.projectiles.filter(b=>{b.x+=b.vx*dt;b.life-=dt;if(overlap(p,b)&&p.invincible===0){b.life=0;events.push('hurt');}return b.life>0;});
 const officer=w.police;if(officer&&!officer.passed){officer.green=time%6>=3.6;officer.remaining=officer.green?6-time%6:3.6-time%6;
 if(!officer.permit&&overlap(p,officer.card)){officer.permit=true;events.push('police-permit');}
 if(p.x+p.w>officer.x){if(!officer.permit||!officer.green){p.x=officer.x-p.w;p.vx=0;events.push('police-stop');}else if(p.x>officer.x+officer.w){officer.passed=true;events.push('police-pass');}}
 }
 const b=w.benoni;if(b&&!b.passed){
 for(const k of b.keys)if(!k.collected&&overlap(p,k)){k.collected=true;events.push('benoni-key');}
 b.hidden=b.shelters.some(x=>Math.abs(p.x+p.w/2-x)<42);b.alert=Math.max(0,b.alert-dt);
 for(const beam of b.beams){beam.x=beam.base+Math.sin(time*.85+beam.base)*beam.range;if(p.x>b.start&&p.x<b.gate&&p.y>335&&!b.hidden&&Math.abs(p.x+p.w/2-beam.x)<30&&p.invincible===0){if(b.alert===0)events.push('benoni-alert');b.alert=2.5;}}
 const v=b.villain;if(b.alert>0&&!b.hidden)v.x+=Math.sign(p.x-v.x)*235*dt;else v.x=1010+Math.sin(time*.8)*115;
 v.x=Math.max(850,Math.min(1260,v.x));if(overlap(p,v)&&!b.hidden&&p.invincible===0)events.push('hurt');
 if(input.unlock&&Math.abs(p.x-b.gate)<115){if(b.keys.every(k=>k.collected)){b.passed=true;b.alert=0;events.push('benoni-pass');}else events.push('benoni-locked');}
 if(!b.passed&&p.x+p.w>b.gate){p.x=b.gate-p.w;p.vx=0;}
 }
 if(p.y>650)events.push('fall');return events;
}
const api={overlap,world,player,step};if(typeof module!=='undefined')module.exports=api;else root.LovePlatform=api;
})(typeof window!=='undefined'?window:globalThis);

