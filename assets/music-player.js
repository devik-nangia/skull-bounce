const TRACKS = [
  {id:'8g34y159zp',title:'Party Party Disco Party',artist:'John Bartmann',bpm:124},
  {id:'ll3qszak56',title:'Party Girls',artist:'SUPERARE',bpm:108},
  {id:'1embnaytvp',title:'happy theme',artist:'gilzoide',bpm:120},
  {id:'qdnwtzkput',title:'Post-Adventure Tea Party',artist:'Zane Little Music',bpm:125},
  {id:'w4of8ytl7u',title:'Pool Party',artist:'SUPERARE',bpm:105},
  {id:'61q1kqrnjg',title:'Tahini Party',artist:'Abigail Levine',bpm:112},
  {id:'ovq4wse30q',title:'Summertime Party',artist:'Play House',bpm:124},
  {id:'p7psqavsrg',title:'Party Night',artist:'Play House',bpm:126},
  {id:'q55weyhman',title:'Party',artist:'SUPERARE',bpm:105},
  {id:'rrptzvquz3',title:'We Do',artist:'SUPERARE',bpm:112},
  {id:'ywvg0ggfv1',title:'Welcome to The Party',artist:'SUPERARE',bpm:108},
  {id:'8gikbbb14q',title:'Party Next Door',artist:'SUPERARE',bpm:115},
  {id:'3hewv1khgo',title:'Rich Mahogany',artist:'John Bartmann',bpm:118},
  {id:'4bw3zpktx2',title:'Dayly5 - Day 5',artist:'Zane Little Music',bpm:130},
  {id:'mab3sxbo2u',title:'Party Life',artist:'SUPERARE',bpm:105},
  {id:'j636rshzg4',title:'Born to Boogie',artist:'John Bartmann',bpm:122},
  {id:'5y8edtv4jm',title:'Latin Village Party',artist:'John Bartmann',bpm:116},
  {id:'605wpt765w',title:'After Party',artist:'Loyalty Freak Music',bpm:118},
  {id:'55vqr6laaf',title:'Disco in the Sky',artist:'John Bartmann',bpm:120},
  {id:'6so5wwk5ej',title:'Elderberry Flavored Game Disco',artist:'John Bartmann',bpm:124},
  {id:'ceqm08an1s',title:'Thrills',artist:'SUPERARE',bpm:128},
  {id:'mz8508esfn',title:'Popular',artist:'SUPERARE',bpm:120},
  {id:'uo5m1vhyqw',title:"Don't Stop The Party",artist:'Tadz',bpm:115},
  {id:'2nkwzz9ijz',title:'Autotune Will Not Save You',artist:'John Bartmann',bpm:120},
  {id:'spagcgy2y4',title:'Outro party music',artist:'buffy',bpm:130},
  {id:'kbh6ux2wn1',title:'Party Of Your Life',artist:'SUPERARE',bpm:105},
  {id:'3j0rmdujnr',title:'Balkan Gypsy Party',artist:'John Bartmann',bpm:124},
  {id:'lpfi8c28n4',title:'Pixel Party',artist:'HoliznaCC0',bpm:120},
  {id:'c19660xhp8',title:'Halloween Ghost Party',artist:'Loyalty Freak Music',bpm:122},
  {id:'aeo11hq7is',title:'Mad Hatter Tea Party',artist:'John Bartmann',bpm:112},
  {id:'b083eso004',title:'1-UP Nightclub',artist:'neonarkade',bpm:128},
  {id:'ofog6kvjhm',title:'joyfully bpm170',artist:'MintoDog',bpm:170},
  {id:'fn3ctd1rzg',title:'Roller Fever',artist:'Loyalty Freak Music',bpm:130},
  {id:'82d3otuz68',title:'Dance',artist:'Sudocolon',bpm:128},
  {id:'bysov0wkf5',title:'Jam',artist:'symphony',bpm:130},
  {id:'ura00poc8a',title:'Sonatema - Renacimiento',artist:'Lebrozu',bpm:128},
  {id:'wjtdobp337',title:'Sonatema - Snob',artist:'Lebrozu',bpm:128},
  {id:'47od6ruheo',title:'Sonatema - Coherente',artist:'Lebrozu',bpm:128},
  {id:'mmsbegmy3p',title:'Sonatema - Sinfonía electrónica barroca',artist:'Lebrozu',bpm:124},
  {id:'jf7l0x2qb2',title:'Sonatema - Le bon vivant',artist:'Lebrozu',bpm:128},
  {id:'lj611hjgu2',title:'Sonatema - Expreso hacia otra dimensión',artist:'Lebrozu',bpm:124},
  {id:'ynr74bbnz9',title:'Why Oh You Are L O V E',artist:'Dancefloor is Lava',bpm:124},
  {id:'226j75b99z',title:'Sonatema - La hora de la mosca',artist:'Lebrozu',bpm:128},
  {id:'ywauinyxx7',title:'Sonatema - Disfruta de tus fracasos',artist:'Lebrozu',bpm:130},
  {id:'qgmk0fvk27',title:'drama',artist:'tricksntraps',bpm:140},
  {id:'in8jss73fl',title:'Dance Robot ACTIVATE',artist:'Loyalty Freak Music',bpm:124},
  {id:'bkyy75es2o',title:'Tinnitus Dance',artist:'Dancefloor is Lava',bpm:132},
  {id:'8rs2lfbj65',title:'We have to dance TOGETHER',artist:'Komiku',bpm:120},
  {id:'bgvkskoq0g',title:'Dance with two or more',artist:'Komiku',bpm:120},
  {id:'cr1r43tf6w',title:"Can't Stop My Feet !",artist:'Loyalty Freak Music',bpm:126}
];
const $ = (sel, root=document) => root.querySelector(sel);
const panel = document.createElement('aside');
panel.id='bones-music'; panel.innerHTML = `
  <button class="music-toggle" type="button" aria-expanded="false" aria-controls="music-panel"><span class="toggle-bars"><i></i><i></i><i></i><i></i></span><span class="toggle-label">MUSIC</span><span class="music-caret">⌄</span></button>
  <section class="music-panel" id="music-panel" hidden>
    <div class="music-heading"><div><small>50 CC0 PARTY TRACKS</small><strong>Pick the party</strong></div><button class="music-close" aria-label="Close music player">×</button></div>
    <label class="music-search-wrap"><span>⌕</span><input class="music-search" type="search" placeholder="Search tracks or artists…" autocomplete="off"></label>
    <div class="music-list" role="listbox" aria-label="CC0 party tracks"></div>
    <div class="now-playing"><div class="track-info"><span class="playing-kicker">READY TO PLAY</span><strong class="track-name">Choose a party track</strong><a class="track-source" target="_blank" rel="noreferrer" hidden>CC0 source & artist</a></div><div class="beat-meter" aria-label="Music visualizer"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
    <div class="music-controls"><button class="play-button" type="button" aria-label="Play">▶</button><label class="range-control"><span>VOL</span><input class="volume-range" type="range" min="0" max="100" value="55" aria-label="Music volume"><output class="volume-value">55%</output></label><label class="range-control"><span>SPEED</span><input class="speed-range" type="range" min="75" max="140" value="100" aria-label="Music and dance speed"><output class="speed-value">1.00×</output></label></div>
    <p class="music-note">CC0 / public-domain recordings · streams from nullrights.com</p>
  </section>`;
document.body.append(panel);
const list=$('.music-list',panel),search=$('.music-search',panel),nameOut=$('.track-name',panel),sourceLink=$('.track-source',panel),playButton=$('.play-button',panel),speed=$('.speed-range',panel),volume=$('.volume-range',panel),audio=new Audio();
let selected=0,playing=false;
audio.preload='none';audio.volume=Number(volume.value)/100;audio.addEventListener('play',()=>{playing=true;paintPlayback()});audio.addEventListener('pause',()=>{playing=false;paintPlayback()});audio.addEventListener('ended',()=>playTrack((selected+1)%TRACKS.length));audio.addEventListener('error',()=>{nameOut.textContent='Stream unavailable — check your connection';$('.playing-kicker',panel).textContent='AUDIO ERROR'});
function renderList(q=''){const filtered=TRACKS.map((t,i)=>({t,i})).filter(({t})=>(t.title+' '+t.artist).toLowerCase().includes(q.trim().toLowerCase()));list.innerHTML=filtered.map(({t,i})=>`<button class="track-option ${i===selected?'is-selected':''}" role="option" aria-selected="${i===selected}" data-index="${i}"><span class="track-index">${String(i+1).padStart(2,'0')}</span><span class="track-copy"><span class="track-title">${t.title}</span><span class="track-artist">${t.artist}</span></span><span class="track-bpm">CC0</span></button>`).join('')||'<div class="no-tracks">No matching tracks</div>';}
// Keep the actual player in the document so browser media controls and
// diagnostics can inspect the same stream the skeletons are dancing to.
audio.id='music-stream';audio.hidden=true;audio.setAttribute('aria-hidden','true');panel.append(audio);
renderList();
function updateDanceTempo(){const t=TRACKS[selected],bpm=t.bpm*(Number(speed.value)/100);panel.style.setProperty('--beat-time',(60/bpm)+'s');if(window.__bonesMusicConfig?.autoDance)window.__bonesMusicConfig.autoDance.bpm=bpm;}
function paintPlayback(){panel.classList.toggle('is-playing',playing);playButton.textContent=playing?'❚❚':'▶';playButton.setAttribute('aria-label',playing?'Pause':'Play');$('.playing-kicker',panel).textContent=playing?'NOW PLAYING':'PAUSED';}
function selectTrack(i,autoplay=true){selected=i;const t=TRACKS[i];nameOut.textContent=t.title;sourceLink.href='https://nullrights.com/track/'+t.id;sourceLink.hidden=false;renderList(search.value);updateDanceTempo();if(autoplay)playTrack(i);}
function playTrack(i){selected=i;const t=TRACKS[i];nameOut.textContent=t.title;sourceLink.href='https://nullrights.com/track/'+t.id;sourceLink.hidden=false;renderList(search.value);updateDanceTempo();if(audio.src!==`https://nullrights.com/audio/${t.id}`)audio.src=`https://nullrights.com/audio/${t.id}`;audio.playbackRate=Number(speed.value)/100;audio.play().catch(()=>{nameOut.textContent='Click play to start this track';$('.playing-kicker',panel).textContent='READY TO PLAY'});}
list.addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(b)selectTrack(Number(b.dataset.index),true)});search.addEventListener('input',()=>renderList(search.value));
const toggle=$('.music-toggle',panel),inner=$('.music-panel',panel);function setOpen(open){inner.hidden=!open;toggle.setAttribute('aria-expanded',String(open));panel.classList.toggle('is-open',open);if(open)search.focus()}toggle.addEventListener('click',()=>setOpen(inner.hidden));$('.music-close',panel).addEventListener('click',()=>setOpen(false));
playButton.addEventListener('click',()=>audio.paused?playTrack(selected):audio.pause());
volume.addEventListener('input',()=>{audio.volume=Number(volume.value)/100;$('.volume-value',panel).value=volume.value+'%';$('.volume-value',panel).textContent=volume.value+'%'});
speed.addEventListener('input',()=>{const multiplier=Number(speed.value)/100;audio.playbackRate=multiplier;$('.speed-value',panel).value=multiplier.toFixed(2)+'×';$('.speed-value',panel).textContent=multiplier.toFixed(2)+'×';updateDanceTempo()});
window.addEventListener('load',updateDanceTempo);updateDanceTempo();
// Remove only the original author's handle from the visible credit pill.
const removeAuthor=()=>document.querySelectorAll('.credit-author').forEach(a=>{const next=a.nextElementSibling;if(next?.classList.contains('credit-link-separator'))next.remove();a.remove()});removeAuthor();new MutationObserver(removeAuthor).observe(document.body,{childList:true,subtree:true});
