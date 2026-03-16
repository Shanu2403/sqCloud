
// function showPage(id){
//   document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
//   document.getElementById('page-'+id).classList.add('active');
//   document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
//   const navEl=document.getElementById('nav-'+id);
//   if(navEl)navEl.classList.add('active');
//   document.getElementById('navLinks').classList.remove('open');
//   window.scrollTo({top:0,behavior:'smooth'});
// }
// function toggleMenu(){
//   document.getElementById('navLinks').classList.toggle('open');
// }
// function handleFormSubmit(){
//   document.getElementById('form-success').style.display='block';
//   setTimeout(()=>document.getElementById('form-success').style.display='none',5000);
// }
// function toggleChatbot(){
//   const w=document.getElementById('chatbotWindow');
//   w.classList.toggle('open');
// }
// function sendChat(){
//   const inp=document.getElementById('chatInput');
//   const msg=inp.value.trim();
//   if(!msg)return;
//   addMsg(msg,'user');
//   inp.value='';
//   document.getElementById('quickBtns').style.display='none';
//   setTimeout(()=>botReply(msg),800);
// }
// function quickReply(type){
//   const replies={
//     services:'Tell me about your services',
//     pricing:'What is your pricing?',
//     contact:'How can I contact SqCloud?',
//     whatsapp:'I want to chat on WhatsApp'
//   };
//   addMsg(replies[type],'user');
//   document.getElementById('quickBtns').style.display='none';
//   setTimeout(()=>botReply(replies[type]),800);
// }
// function addMsg(text,role){
//   const msgs=document.getElementById('chatMessages');
//   const div=document.createElement('div');
//   div.className='msg '+role;
//   div.innerHTML=text;
//   msgs.appendChild(div);
//   msgs.scrollTop=msgs.scrollHeight;
// }
// function botReply(msg){
//   const m=msg.toLowerCase();
//   let reply='';
//   if(m.includes('service')||m.includes('what do you'))
//     reply='We offer 4 main services: 🌐 <b>Website Development</b>, 📱 <b>App Development</b> (Android & iOS), ⚙️ <b>Custom Software</b>, and 📈 <b>SEO Optimization</b>. Which one interests you?';
//   else if(m.includes('price')||m.includes('cost')||m.includes('pricing'))
//     reply='Our pricing starts from ₹5,000 for a basic website. Prices vary based on your requirements. Want me to connect you for a free quote? 😊';
//   else if(m.includes('contact')||m.includes('reach'))
//     reply='You can reach us at 📧 sqcloud24@gmail.com or 📞 +91 7065407844. We\'re based in Reriya, Bikramganj, Bihar!';
//   else if(m.includes('whatsapp'))
//     reply='Click here to chat with us on WhatsApp: <a href="https://wa.me/917065407844" target="_blank" style="color:var(--blue);">+91 7065407844</a> 💬';
//   else if(m.includes('seo'))
//     reply='Our SEO team handles everything: Research & Planning, On-page SEO, Technical SEO, Backlinks, Content Creation, Local SEO & more! 📈';
//   else if(m.includes('app'))
//     reply='We build Android & iOS apps using React




function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const navEl=document.getElementById('nav-'+id);
  if(navEl)navEl.classList.add('active');
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
}
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}
function handleFormSubmit(){
  document.getElementById('form-success').style.display='block';
  setTimeout(()=>document.getElementById('form-success').style.display='none',5000);
}
function toggleChatbot(){
  const w=document.getElementById('chatbotWindow');
  w.classList.toggle('open');
}
function sendChat(){
  const inp=document.getElementById('chatInput');
  const msg=inp.value.trim();
  if(!msg)return;
  addMsg(msg,'user');
  inp.value='';
  document.getElementById('quickBtns').style.display='none';
  setTimeout(()=>botReply(msg),800);
}
function quickReply(type){
  const replies={
    services:'Tell me about your services',
    pricing:'What is your pricing?',
    contact:'How can I contact SqCloud?',
    whatsapp:'I want to chat on WhatsApp'
  };
  addMsg(replies[type],'user');
  document.getElementById('quickBtns').style.display='none';
  setTimeout(()=>botReply(replies[type]),800);
}
function addMsg(text,role){
  const msgs=document.getElementById('chatMessages');
  const div=document.createElement('div');
  div.className='msg '+role;
  div.innerHTML=text;
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}
function botReply(msg){
  const m=msg.toLowerCase();
  let reply='';
  if(m.includes('service')||m.includes('what do you'))
    reply='We offer 4 main services: 🌐 <b>Website Development</b>, 📱 <b>App Development</b> (Android & iOS), ⚙️ <b>Custom Software</b>, and 📈 <b>SEO Optimization</b>. Which one interests you?';
  else if(m.includes('price')||m.includes('cost')||m.includes('pricing'))
    reply='Our pricing starts from ₹5,000 for a basic website. Prices vary based on your requirements. Want me to connect you for a free quote? 😊';
  else if(m.includes('contact')||m.includes('reach'))
    reply='You can reach us at 📧 sqcloud24@gmail.com or 📞 +91 7065407844. We\'re based in Reriya, Bikramganj, Bihar!';
  else if(m.includes('whatsapp'))
    reply='Click here to chat with us on WhatsApp: <a href="https://wa.me/917065407844" target="_blank" style="color:var(--blue);">+91 7065407844</a> 💬';
  else if(m.includes('seo'))
    reply='Our SEO team handles everything: Research & Planning, On-page SEO, Technical SEO, Backlinks, Content Creation, Local SEO & more! 📈';
  else if(m.includes('app'))
    reply='We build Android & iOS apps using React Native, Flutter, Dart & AppWrite. User experience is our priority! 📱';
  else if(m.includes('website'))
    reply='We build responsive websites using WordPress, Shopify, React JS, Node JS, Python, Django and more! 🌐';
  else
    reply='Thanks for your message! For immediate help, WhatsApp us at +91 7065407844 or email sqcloud24@gmail.com. We reply fast! ⚡';
  addMsg(reply,'bot');
}