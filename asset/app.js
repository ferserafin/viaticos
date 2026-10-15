const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const money=n=>(+n||0).toLocaleString('es-MX',{style:'currency',currency:'MXN'});
const ST=['Borrador','Solicitada','Autorizada','Pagada','Comprobada','Rechazada'];
const COL={Borrador:'#8b93a7',Solicitada:'#e9a100',Autorizada:'#0fb5ae',Pagada:'#3b6fd4',Comprobada:'#2e9d5b',Rechazada:'#d64545'};
const api=(k,m='GET',b,id)=>fetch(`/api/${k}${id?'?id='+id:''}`,{method:m,headers:{'content-type':'application/json'},body:b?JSON.stringify(b):undefined}).then(r=>{if(!r.ok)throw 0;return r.json()});
const uid=p=>p+'-'+Date.now().toString(36).toUpperCase().slice(-6);
const qs=k=>new URLSearchParams(location.search).get(k);
const today=()=>new Date().toISOString().slice(0,10);
const toast=t=>{const e=document.createElement('div');e.className='toast';e.textContent=t;document.body.append(e);setTimeout(()=>e.remove(),2600)};
const O=(a,v)=>a.map(x=>`<option ${x==v?'selected':''}>${x}</option>`).join('');
const pdf=t=>{document.title=t;print()};
function shell(a){$('#h').innerHTML=`<div class=logo>🚚 VIÁ<b>TICOS</b> <small>Logística</small></div><nav>${[['/','Requisición'],['/matriz.html','Matriz'],['/comprobacion.html','Comprobación']].map(([h,t],i)=>`<a href="${h}" class="${i==a?'on':''}">${t}</a>`).join('')}</nav>`}
