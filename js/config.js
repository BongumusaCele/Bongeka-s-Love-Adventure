/* PERSONALISE EVERYTHING HERE. Replace the example answers and letters before sharing. */
window.LOVE_CONFIG = {
 girlfriendName: 'Bongeka', boyfriendName: 'Bongumusa',
 openingMessage: "Hey Bongeka ❤️\nSince we're miles apart, I made you a little something.\nThere are a few challenges waiting for you. Complete them and there's a surprise waiting at the end 👀❤️",
 finalMessage: "Distance is temporary.\nWhat we're building isn't.\n\nThank you for loving me, annoying me, making me laugh and being my person.\n\nI choose you.\nAgain and again. ❤️\n\n— Bongumusa",
 quizQuestions: [
 {question:'Where did we first meet?',options:['Through friends','At school','Online','A happy coincidence'],answer:2},
 {question:'Who said “I love you” first?',options:['You did','I did','At the same time','Our eyes said it first'],answer:1},
 {question:'What is one of our favourite memories?',options:['Our first long call','Getting lost together','A movie night','All the little moments'],answer:3},
 {question:'What annoys Bongeka about me? 😂',options:['My terrible jokes','Being too handsome','Stealing her attention','All of the above'],answer:3},
 {question:'What do we want to do together?',options:['Travel somewhere new','Cook dinner','Watch the sunset','All of these'],answer:3},
 {question:'Who is more stubborn?',options:['Bongeka','Bongumusa','Both of us','We plead the fifth'],answer:2},
 {question:'Who misses the other person more?',options:['You','Me','It’s a tie','The phone battery suffers most'],answer:2}
 ],
 loveLetters: [
 {title:'Open when you miss me ❤️',short:'You miss me',message:'If I could, I would close the distance right now and pull you into the longest hug. Until then, remember: somewhere out here, I’m thinking of you too. Every kilometre is one less than the love I have for you.'},
 {title:'Open when you’re having a bad day 🥺',short:'It’s a bad day',message:'You don’t have to have everything figured out today. Breathe, drink some water, and be gentle with yourself. I’m proud of you on the hard days too. I’m always in your corner.'},
 {title:'Open when you need reminding how much I love you 💕',short:'You need a little love',message:'I love your smile, your laugh, your heart, and all the little things that make you you. You’re my favourite person to tell everything to. I choose you, even from far away.'}
 ],
 reactions:{correct:'Okayyy you actually know me 😭❤️',wrong:'Bongeka??? We need to talk 😭😂',catch:'You caught my heart...\nAlthough technically you already had it. ❤️',puzzle:'One of my favourite memories with my favourite person ❤️',meter:'Bongeka stop touching it 😭❤️',overflow:'ERROR: Love level exceeds maximum supported value 😂❤️',boy:'Yes, that’s your man 😌❤️',girl:'Okay she’s cute, we get it 😭❤️',secret:'You found the secret ❤️ Achievement unlocked: Professional Girlfriend 🏆'},
 suspense:['Calculating final score...','Checking relationship compatibility...','Checking how much Bongeka loves Bongumusa...','Result found...'],
 winMessage:'Although let’s be honest...\nyou already won when you got me 😂❤️',loveMessage:'No matter how many kilometres are between us, you’re still my favourite person.',
 puzzlePhoto:'assets/images/our-photo.jpg',couplePhoto:'assets/images/our-photo.jpg',
 characters:{bongeka:'assets/characters/bongeka/',bongumusa:'assets/characters/bongumusa/',couple:'assets/characters/couple/together.svg'},
 music:'assets/audio/background-music.mp3',voiceNote:'assets/audio/voice-note.mp3',video:'assets/video/our-video.mp4',playlistURL:''
};
// Personalise the platform adventure here. Original quiz/letter configuration remains available.
window.LOVE_CONFIG.platform = {
 title: 'From Eswatini. With love to Joburg.',
 intro: 'Bongeka, I’m waiting for you in Johannesburg. Your adventure begins in Eswatini: cross the hills, survive a little sister drama, and follow the hearts all the way to me.',
 worlds: [
 {name:'Eswatini: The Great Escape',subtitle:'From your home in Eswatini, with love.',place:'ESWATINI',scene:'hills',sky:['#dbe9e5','#fcf0d7'],hill:'#b8c99d',grass:'#7d9e70',soil:'#b58a6c',enemy:'Miss-you blues',message:'One world closer. I knew you’d find your way, my love.'},
 {name:'Across the Border, Under the Stars',subtitle:'Two countries. One favourite person.',place:'ON THE ROAD',scene:'road',sky:['#343656','#b68197'],hill:'#635e85',grass:'#bc8da8',soil:'#655571',enemy:'Bad-day clouds',message:'You made it through the dark. I’m always in your corner.'},
 {name:'Benoni After Dark → Johannesburg',subtitle:'A spooky detour. Then straight into my arms.',place:'JOHANNESBURG',scene:'city',sky:['#f3d9cd','#fff0d1'],hill:'#c5bd97',grass:'#a5ad78',soil:'#c49177',enemy:'Overthinking clouds',message:'Distance never stood a chance against us.'}
 ],
 signs: ['Double-tap jump to fly a little higher!', 'Pink flowers remember your progress.', 'Jump on grumpy clouds to pop them.', 'Touch the heart switch: build a bridge.', 'Love letters hide on the high platforms.', 'No perfect score needed. Just keep coming.'],
 reunion: 'From Eswatini’s hills to Johannesburg, you found your way to me. Two places, one little love story. Wherever we are, my favourite place will always be beside you.',
 checkpoint:'A little closer to home. Checkpoint saved ♥',
 retry:'A little stumble, not the end of our story. Try again ♥',
 bridge:'You built a bridge with love! ♥',
 power:'Love boost! You’re untouchable for a little while ♥',
 journey:{from:'Eswatini',via:'Across the border',to:'Johannesburg',stamp:'Love passport',arrival:'Johannesburg ♥',next:['To the border →','To Johannesburg →','You’re home ♥']},
 sister:{name:'Gcinile',asset:'assets/characters/gcinile/normal.svg',happyAsset:'assets/characters/gcinile/peace.svg',title:'Gcinile: The Drama Queen',bubble:'Three peace hearts. Then we talk!',hint:'Dodge the beef bubbles! Land close to Gcinile and offer a heart during her calm window (P).',button:'Offer peace ♥',blocked:'Gcinile has locked the path. Earn three peace hearts to open it! 😂',peace:'Gcinile: “Okay, truce. Now go see your man!” ♥',after:'Truce unlocked ♥',wait:'Not yet! Wait for Gcinile’s pink CALM signal.',hit:'A little less beef! Peace heart accepted ♥',calm:'CALM · offer a heart!',attack:'BEEF BUBBLES · dodge!',progress:'Peace hearts'},
 police:{name:'Officer Cupid',title:'Love Passport Check',hint:'Pick up your pink passport, wait behind the line, then cross on green.',permit:'Love passport collected! Now wait for the green signal.',stop:'Officer Cupid: “Hold up! Passport ready? Wait for green.”',passed:'Officer Cupid: “Love passport approved. Safe travels to Joburg!” ♥',red:'STOP · wait behind the line',green:'GO · passport check open',missing:'Pick up the pink passport first!',card:'LOVE PASSPORT'},
 challenge:{label:'Adventure mode · extra obstacles',instruction:'Jump over thorns, cones and puddles. Time your jumps around the moving clouds.',boss:'Gcinile’s drama. Officer Cupid’s checkpoint. A spooky Benoni escape.'},
 benoni:{title:'Benoni After Dark',fiction:'A fictional spooky detour',villain:'The Midnight Stalker',story:'A fictional masked serial killer is prowling this imaginary Benoni. Find three rooftop keys, avoid his searchlights, and unlock the way to Johannesburg. Warm streetlamps are safe hiding spots.',hint:'Find 3 rooftop keys. Jump above the searchlights or hide by a warm lamp. Unlock the gate with E.',button:'Unlock escape gate 🔑',key:'Escape key found! Your keys stay saved if you get caught.',locked:'The gate needs all 3 keys. Look on the high platforms!',alert:'He spotted you! Jump to a rooftop or reach a warm streetlamp!',passed:'Benoni escaped! Johannesburg — and Bongumusa — are waiting. ♥',hidden:'SAFE · hiding by a warm lamp',chase:'SPOTTED · reach a lamp or rooftop!',search:'SEARCHLIGHTS · stay above the beams',keys:'Escape keys',gate:'TO JOHANNESBURG',caught:'A close call! Back to your safe checkpoint. Your keys are still yours.'}
};
// LOVE QUEST presentation and character dialogue. Personalise this section for your voice.
Object.assign(window.LOVE_CONFIG.platform, {
 checkpoint:'CHECKPOINT! Okay babe, we’re saving that. No doing all that twice.',
 retry:'Eish 😭 Back to the checkpoint. I’m still waiting, don’t worry.',
 bridge:'BRIDGE BUILT! See? We can work with this distance thing.',
 power:'LOVE SHIELD! Six seconds of main-character energy. Go go go!',
 gameUI:{title:'LOVE QUEST',tagline:'A girlfriend. A mission. A very impatient boyfriend.',brief:'Babe. You’re in Eswatini. I’m in Joburg. Gcinile’s got an attitude, there’s a roadblock, and Benoni is doing the most. Come find me?',mission:'MISSION: GET TO YOUR MAN',newGame:'START QUEST',continueGame:'CONTINUE QUEST',reunion:'REUNION UNLOCKED',how:'HOW TO PLAY',mapTitle:'THE ROAD TO YOUR MAN',mapSub:'Select a stop to scout the mission.',radio:'BONGUMUSA · QUEST RADIO',pauseTitle:'PAUSED',pauseMessage:'Drink water. Stretch your fingers. I’m not going anywhere.',resume:'BACK IN THE GAME →',worldClear:'STAGE CLEAR!',letter:'SECRET LETTER FOUND',helpTitle:'THE BASICS',help:'Hold LEFT / RIGHT to move.\nTap JUMP once, then again in the air.\nFlowers save your checkpoint.\nHearts charge a six-second shield every eight pickups.\nBoss actions appear when you get close.\nGet caught? Retry. Your progress stays.',defaultTip:'Two jumps, babe. Use both. And those clouds? Land on their heads.',letterTip:'I left you something up there. Tap READ NOTE — or press E.',shieldTip:'The shield’s on. Six seconds. Make them count.',stomp:'CLOUD POPPED! That’s my girl.',win:'QUEST COMPLETE',winTitle:'YOU FOUND\nYOUR PERSON.',winLine:'All that running just to get a hug. Worth it, though.',fresh:'NEW SAVE',freshConfirm:'Start a new quest from Eswatini? Your current platform save will be cleared.'},
 missions:[
 {short:'ESWATINI',title:'01 · SISTER SIDE QUEST',speaker:'Bongumusa',message:'First problem: your sister. She wants the last word. Dodge the beef, then give her a peace heart when she calms down. Three should do it. I hope.',objective:'Give Gcinile 3 timed peace hearts.',reward:'THE ROAD OPENS',tip:'You don’t pick up peace hearts. The OFFER PEACE button gives them.',icon:'♥'},
 {short:'THE BORDER',title:'02 · PASSPORT, PLEASE',speaker:'Officer Cupid',message:'Destination: Johannesburg. Reason for travel: apparently, “my man”. Fine. Grab that pink passport and wait for green. I’m watching the line.',objective:'Collect the passport. Cross on green.',reward:'JOBURG ACCESS',tip:'Red means wait. Jumping won’t get you out of paperwork.',icon:'▣'},
 {short:'BENONI → JOBURG',title:'03 · ONE LAST DETOUR',speaker:'Bongumusa',message:'Babe… take the rooftops. Three gold keys open the exit. If the lights find you, run to a warm lamp. After that, it’s just you and me.',objective:'Find 3 keys. Escape Benoni. Reach me.',reward:'ONE EXTREMELY LONG HUG',tip:'This is our fictional spooky chapter. Warm lamps are safe; rooftops keep you above the searchlights.',icon:'⚿'}
 ]
});
Object.assign(window.LOVE_CONFIG.platform.sister,{title:'BOSS: Gcinile',bubble:'Oh, so NOW you want to leave?',hint:'She’s talking? Dodge. She’s CALM? Land close and tap OFFER PEACE. Three hearts, three calm windows. The button gives the hearts.',button:'OFFER PEACE ♥',blocked:'Gcinile: “You’re going WHERE? We haven’t finished.”',peace:'Gcinile: “Fine. Go. But this conversation isn’t over.” 😂',after:'Truce. For now.',wait:'Bad timing, babe. Wait for CALM, then land beside her.',hit:'PEACE +1! Don’t celebrate yet. She’s still side-eyeing you.'});
Object.assign(window.LOVE_CONFIG.platform.benoni,{story:'Okay, this fictional horror detour was NOT on the itinerary. Three rooftop keys. One locked gate. Please don’t introduce yourself to the masked guy.',hint:'Keys are UP on the platforms. His lights watch the ground. Warm lamps = safe. Three keys → UNLOCK GATE.',button:'UNLOCK GATE 🔑',key:'KEY FOUND! It’s yours, even if the next jump goes badly.',locked:'Still locked. Three gold keys, babe. Check the rooftops.',alert:'BABE. RUN. Rooftop or warm lamp — now!',passed:'BENONI CLEARED! I owe you a very long hug for that one.',caught:'Too close! Checkpoint reload. You kept your keys. Try the high route.'});
window.LOVE_CONFIG.platform.police.asset='assets/characters/officer/normal.svg';
