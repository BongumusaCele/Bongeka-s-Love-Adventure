const assert=require('node:assert/strict'),E=require('./js/platform-engine.js');
let w=E.world(2),p=E.player(1260,384);let ev=E.step(p,w,{right:true,unlock:true},.016,0,false);assert(!w.benoni.passed);assert(ev.includes('benoni-locked'));assert(p.x+p.w<=1300);
// Each rooftop key is attainable using real jumps and platform landing.
for(const key of w.benoni.keys){const from=key.id===2?1250:key.x-90,q=E.player(from,384);let found=false;for(let i=0;i<240;i++){const delta=key.x-5-q.x;const events=E.step(q,w,{left:delta< -4,right:delta>4,jump:i===0||i===24},1/60,i/60,false);assert(!events.includes('fall'),'Rooftop key jump should not require a fall');assert(!events.includes('hurt'),'Rooftop key '+key.id+' must be collectible without getting caught');if(key.collected){found=true;break;}}assert(found,'Key '+key.id+' must be reachable');}
assert.equal(w.benoni.keys.filter(k=>k.collected).length,3);p=E.player(1250,384);ev=E.step(p,w,{unlock:true},.016,4,false);assert(ev.includes('benoni-pass'));assert(w.benoni.passed);for(let i=0;i<80;i++)E.step(p,w,{right:true},1/60,4+i/60,true);assert(p.x>1350);
// Patrol spots a grounded player; rooftops and warm lamp zones prevent spotting.
w=E.world(2);const t=2,beamX=w.benoni.beams[0].base+Math.sin(t*.85+w.benoni.beams[0].base)*w.benoni.beams[0].range;p=E.player(beamX-21,384);ev=E.step(p,w,{},.016,t,false);assert(ev.includes('benoni-alert'));assert(w.benoni.alert>0);
w=E.world(2);p=E.player(beamX-21,260);ev=E.step(p,w,{},.016,t,false);assert(!ev.includes('benoni-alert'));
w=E.world(2);p=E.player(1250-21,384);w.benoni.villain.x=1250;w.benoni.alert=2;ev=E.step(p,w,{},.016,t,false);assert(w.benoni.hidden);assert(!ev.includes('hurt'));
// A chase collision is active and grace time protects a fresh respawn.
w=E.world(2);p=E.player(1020,384);w.benoni.alert=2;assert(E.step(p,w,{},.016,0,false).includes('hurt'));p.invincible=2;assert(!E.step(p,w,{},.016,0,false).includes('hurt'));
assert(!E.world(0).benoni);assert(!E.world(1).benoni);console.log('PASS: all rooftop keys reachable, locked gate cannot be bypassed, three-key escape, searchlight detection, rooftop/lamp safety, chase collision and respawn grace.');
