const assert=require('node:assert/strict'),E=require('./js/platform-engine.js');
for(let level=0;level<3;level++){
 const w=E.world(level),p=E.player();if(w.sister)w.sister.passed=true;if(w.police)w.police.passed=true;if(w.benoni)w.benoni.passed=true;for(let i=0;i<120;i++)E.step(p,w,{},1/60,i/60,false);assert.equal(p.y,384);assert(p.grounded);
 E.step(p,w,{jump:true},1/60,2,false);assert.equal(p.jumps,1);assert(p.vy<0);E.step(p,w,{jump:true},1/60,2.1,false);assert.equal(p.jumps,2);E.step(p,w,{jump:true},1/60,2.2,false);assert.equal(p.jumps,2);
 for(const [x,width]of w.gaps){const q=E.player(x-70,384);let crossed=false;for(let i=0;i<160;i++){const ev=E.step(q,w,{right:true,jump:i===0||i===24},1/60,i/60,false);assert(!ev.includes('fall'),`level ${level} gap ${x} must be crossable`);if(q.x>x+width&&q.grounded){crossed=true;break;}}assert(crossed,`gap ${x} crossed`);}
 const bridgeP=E.player(1425,384);for(let i=0;i<90;i++)E.step(bridgeP,w,{},1/60,i/60,true);assert(bridgeP.grounded);assert.equal(bridgeP.y,384);
 // A moving platform carries a standing player rather than leaving her behind.
 const mp=w.platforms.find(p=>p.moving),r=E.player(mp.x+20,mp.y-76);E.step(r,w,{},1/60,0,false);assert(r.grounded);assert(r.x>mp.baseX+20);
 // Run every complete course with a simple double-jump pilot.
 const runner=E.player();let jumpAge=-1,reached=false;
 for(let i=0;i<2500;i++){let jump=false;const edge=w.gaps.find(([x,width])=>runner.x+runner.w>x-90&&runner.x<x+width);const sister=w.sister&&!w.sister.passed&&runner.x+runner.w>w.sister.x-90&&runner.x<w.sister.x+w.sister.w;const hazard=w.hazards.find(h=>h.x>runner.x&&h.x-runner.x<115);const cloud=w.enemies.find(e=>e.y<600&&e.x>runner.x&&e.x-runner.x<110);if(runner.grounded&&(edge||cloud||sister||hazard)){jump=true;jumpAge=0;}else if(jumpAge===24||(edge&&!runner.grounded&&runner.jumps<2&&runner.vy>150)){jump=true;}if(jumpAge>=0)jumpAge++;const events=E.step(runner,w,{right:true,jump},1/60,i/60,true);assert(!events.includes('fall'),`world ${level+1} reachable without falling at x=${runner.x}`);if(events.includes('hurt'))runner.invincible=2;if(runner.x>w.goal){reached=true;break;}}assert(reached,`world ${level+1} finish reachable`);
}
const w=E.world(0),p=E.player(w.enemies[0].x,355);p.vy=250;const ev=E.step(p,w,{},.025,0,false);assert(ev.includes('stomp'));assert(w.enemies[0].y>650);
const falling=E.player(700,660);assert(E.step(falling,E.world(0),{},.016,0,false).includes('fall'));
console.log('PASS: all three courses reachable, every gap crossable, double-jump limit, ground/platform collisions, moving-platform carrying, love bridge, enemy stomping and fall detection.');

