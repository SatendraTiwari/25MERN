function updateOutput(){
  const n=document.getElementById('d-name').value;
  const d=document.getElementById('d-dob').value;
  const r=document.getElementById('d-role').value;
  const b=document.getElementById('d-bio').value;
  const box=document.getElementById('form-output');
  if(!n&&!d&&!r&&!b){box.style.fontStyle='italic';box.style.color='var(--color-text-secondary)';box.textContent='Kuch bhi type karo — yahan dikhega...';return;}
  box.style.fontStyle='normal';box.style.color='var(--color-text-primary)';
  let out='';
  if(n) out+='Name: '+n+'\n';
  if(d) out+='DOB: '+d+'\n';
  if(r) out+='Role: '+r+'\n';
  if(b) out+='Bio: '+b;
  box.style.whiteSpace='pre-line';
  box.textContent=out.trim();
}

function validateEmailField(){
  const v=document.getElementById('v-email').value;
  const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const err=document.getElementById('email-err');
  const ok=document.getElementById('email-ok');
  if(!v){err.classList.remove('show');ok.classList.remove('show');return;}
  if(re.test(v)){err.classList.remove('show');ok.classList.add('show');}
  else{ok.classList.remove('show');err.classList.add('show');}
}

function validatePhoneField(){
  const v=document.getElementById('v-phone').value;
  const re=/^[6-9]\d{9}$/;
  const err=document.getElementById('phone-err');
  const ok=document.getElementById('phone-ok');
  if(!v){err.classList.remove('show');ok.classList.remove('show');return;}
  if(re.test(v)){err.classList.remove('show');ok.classList.add('show');}
  else{ok.classList.remove('show');err.classList.add('show');}
}

function checkStrength(){
  const v=document.getElementById('v-pass').value;
  const fill=document.getElementById('strength-fill');
  const label=document.getElementById('strength-label');
  let score=0;
  if(v.length>=8)score++;
  if(/[A-Z]/.test(v))score++;
  if(/[0-9]/.test(v))score++;
  if(/[^A-Za-z0-9]/.test(v))score++;
  const pct=[0,25,50,75,100][score];
  const colors=['#E24B4A','#E24B4A','#EF9F27','#1D9E75','#0F6E56'];
  const labels=['Password type karo','Bahut weak hai','Thoda better — numbers add karo','Good — special char bhi daalo','Strong password!'];
  fill.style.width=pct+'%';
  fill.style.background=colors[score];
  label.textContent=labels[score];
  label.style.color=colors[score];
  checkMatch();
}

function checkMatch(){
  const p=document.getElementById('v-pass').value;
  const c=document.getElementById('v-confirm').value;
  const err=document.getElementById('match-err');
  const ok=document.getElementById('match-ok');
  if(!c){err.classList.remove('show');ok.classList.remove('show');return;}
  if(p===c){err.classList.remove('show');ok.classList.add('show');}
  else{ok.classList.remove('show');err.classList.add('show');}
}

function triggerAria(){
  const box=document.getElementById('aria-live-box');
  box.textContent='';
  setTimeout(()=>{
    box.textContent='Form successfully submit ho gaya! Aapka registration complete hai. Confirmation email bheja ja raha hai.';
    box.style.color='var(--color-text-success)';
  },300);
}