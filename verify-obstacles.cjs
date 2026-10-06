const assert=require('node:assert/strict'),E=require('./js/platform-engine.js');
let w=E.world(1),p=E.player(1800,384);w.enemies=[];w.hazards=[];
assert(E.step(p,w,{right:true},.016,1,false).includes('police-stop'));assert(p.x+p.w<=1830);
E.step(p,w,{right:true},.016,4,false);assert(!w.police.passed);assert(p.x+p.w<=1830,'Missing passport must keep green gate locked');
p=E.player(1670,384);assert(E.step(p,w,{},.016,4,false).includes('police-permit'));assert(w.police.permit);
p=E.player(1787,384);for(let i=0;i<30;i++)E.step(p,w,{right:true},1/60,1+i/60,false);assert(p.x+p.w<=1830);
let passed=false;for(let i=0;i<50;i++){const ev=E.step(p,w,{right:true},1/60,3.7+i/60,false);passed=passed||ev.includes('police-pass');}assert(passed);assert(w.police.passed);
assert(E.world(0).hazards.length>=3);assert(E.world(1).hazards.length>=5);assert(E.world(2).hazards.length>=5);w=E.world(2);p=E.player(w.hazards[0].x,384);assert(E.step(p,w,{},.016,0,false).includes('hurt'));p.invincible=2;assert(!E.step(p,w,{},.016,0,false).includes('hurt'));
console.log('PASS: police red/green timing, required passport collection, legal green crossing, new hazard collisions and shield protection.');
