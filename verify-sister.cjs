const assert=require('node:assert/strict'),E=require('./js/platform-engine.js');
let w=E.world(0),p=E.player(500,384);let ev=E.step(p,w,{peace:true},.016,1,false);assert.equal(w.sister.hits,0);assert(ev.includes('sister-wait'));ev=E.step(p,w,{peace:true},.016,3.2,false);assert.equal(w.sister.hits,1);E.step(p,w,{peace:true},.016,3.3,false);assert.equal(w.sister.hits,1);E.step(p,w,{peace:true},.016,8,false);assert.equal(w.sister.hits,2);assert(!w.sister.passed);ev=E.step(p,w,{peace:true},.016,12.9,false);assert(w.sister.passed);assert(ev.includes('sister-peace'));
w=E.world(0);p=E.player(580,180);for(let i=0;i<90;i++){const events=E.step(p,w,{right:true,jump:i===0||i===20},1/60,i/60,false);assert(!events.includes('sister-jump'));}assert(!w.sister.passed);assert(p.x+p.w<=615);assert(w.projectiles.length>0);
// Play the boss from its real checkpoint with retries and no invincibility cheat.
w=E.world(0);p=E.player(360,384);let retries=0;
for(let i=0;i<3600&&!w.sister.passed;i++){const t=i/60,jump=!w.sister.calm&&p.grounded&&p.x>455;const events=E.step(p,w,{right:p.x<495,jump,peace:true},1/60,t,false);if(events.includes('hurt')||events.includes('fall')){p=E.player(360,384);p.invincible=2;w.projectiles=[];retries++;}}
assert(w.sister.passed,'Boss must remain beatable from its checkpoint');assert.equal(w.sister.hits,3);
// Projectile collision is active and attack pattern stops after a truce.
w=E.world(0);p=E.player(490,384);w.projectiles=[{x:490,y:405,w:44,h:26,vx:0,life:1}];assert(E.step(p,w,{},.016,2,false).includes('hurt'));w.sister.passed=true;w.projectiles=[];E.step(p,w,{},.016,2.5,false);assert.equal(w.projectiles.length,0);
console.log('PASS: three distinct calm-window hearts required, spam rejected, jumping cannot bypass boss gate, beef-bubble collisions, boss beatable from checkpoint with unlimited retries.');
