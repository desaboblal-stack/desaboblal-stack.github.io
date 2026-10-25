(function(){
"use strict";
var P={
datapill:{co:"",t:"داتا بيل",en:"Data Pill",srv:"هوية بصرية وشعار",sec:"أكاديمية البيانات والمسارات المهنية",
d:"هوية بصرية لأكاديمية «Data Pill» لتعليم البيانات والتوظيف، تحت شعار «Learn. Build. Get Hired». شعار كتابي هندسي بحروف مصمَّمة خصيصًا يحمل طابعًا رقميًا واضحًا ويقف وحده دون أيقونة، مع رمز D مستخلص منه للتطبيقات. بتدرّج البنفسجي والأزرق الكهربائي على النيلي العميق، وتمتد الهوية إلى اللوحات الإعلانية وقاعة الفعاليات وبوسترات السوشيال ميديا والحقيبة وتطبيق الجوال والموقع."},
alomar:{co:"مصر",t:"آل عمر للمحاماة",en:"Al Omar Law Firm",srv:"هوية بصرية وشعار",sec:"مكتب محاماة واستشارات قانونية",
d:"هوية بصرية متكاملة لمكتب «آل عمر للمحاماة والاستشارات القانونية». يجمع الشعار بين العمود الروماني رمزًا للقانون والمحكمة، وكفتي الميزان رمزًا للعدل، وكلمة «آل» داخل تكوين مربع رصين. ويتكرر العمود زخرفةً تمتد على المطبوعات."},
aldeyafa:{co:"سوريا",t:"الضيافة",en:"Aldeyafa",srv:"هوية بصرية وتغليف",sec:"قهوة وضيافة عربية",
d:"هوية علامة «الضيافة» تمزج الأصالة الثقافية بجمالية حديثة. يقوم الشعار على نمط هندسي تراثي، وتمتد الهوية إلى عبوات القهوة وعالم الضيافة العربية من الدلال والفناجين والتمر."},
intelligence:{co:"قطر",t:"انتلجنس للمشاريع",en:"Intelligence Project",srv:"هوية بصرية وشعار",sec:"إدارة وتطوير المشاريع",
d:"شعار يجمع الخلية العصبية، رمز الذكاء، مع البيت، رمز المشاريع، ليعبّر عن التفكير الاستراتيجي والتطوير الحديث. تُطبَّق الهوية بالعنابي والبيج على البطاقات والمطبوعات ولوحات العرض."},
blueline:{co:"قطر",t:"بلولاين للمشاريع",en:"Blue Line Projects",srv:"هوية بصرية وشعار",sec:"مقاولات عامة",
d:"هوية قائمة على خط واحد متصل يرسم حرفي B وL، ويشكّل في الوقت نفسه ملامح المباني. ويعكس الأزرق الثبات والاستقرار في مجال المقاولات."},
khyoot:{co:"مصر",t:"خيوط",en:"Khyoot",srv:"هوية وتغليف",sec:"متجر إلكتروني",
d:"هوية وتغليف لعلامة «خيوط». كرة من الخيوط المتشابكة تستلهم حرف الواو، وتعبّر عن الترابط والاستمرارية. تتحول الخطوط السوداء السميكة إلى نمط مخصص يمتد على الأكياس وأغلفة الشحن."},
ghamer:{co:"السعودية",t:"غامر",en:"Ghamer",srv:"هوية بصرية وشعار",sec:"وكالة تسويق إبداعي",
d:"شعار يدمج حرفي «غ» وG في تكوين هندسي واحد، مع سهم يرمز إلى الحركة والنمو والطموح. يجمع التصميم بين الهوية العربية والطابع العالمي، ليعكس شخصية وكالة تسعى إلى دفع العلامات التجارية نحو النمو وتحقيق أثر ملموس. بالعنابي والبيج والأسود، مع باترن مستلهم من شكل السهم."},
mostafa:{co:"مصر",t:"مصطفى عبدالرازق أحمد",en:"Mostafa Abdelrazek Ahmed",srv:"شعار",sec:"استشارات عقارية",
d:"شعار يدمج حرفي M وA مع شكل هندسي مجرد للمنزل في تكوين واحد، يجمع بين الهوية الحرفية والدلالة العقارية. وتعكس الخطوط الهندسية الجريئة الثبات والاحترافية، لتقدّم علامة عصرية تعبّر عن الثقة والقيمة في عالم العقارات."},
adilbey:{co:"تركيا",t:"مزرعة عادل باي",en:"Adilbey Çiftliği",srv:"هوية بصرية وشعار",sec:"مزرعة ومنتجات ألبان",
d:"هوية «Adilbey Çiftliği» لمزرعة ومنتجات ألبان. يجمع الشعار وجه المزارع بقبعته مع ورقتين تشكّلان شاربه، ليعبّر عن الأصالة والارتباط بالأرض والمنتج الطبيعي. تمتد الهوية إلى ملصقات العبوات والفلاير وبطاقات الأعمال بالأخضر الغامق والذهبي."},
myvet:{co:"تركيا",t:"ماي فيت",en:"MYVET",srv:"هوية بصرية ودليل هوية",sec:"فندق حيوانات أليفة وعيادة بيطرية",
d:"هوية بصرية لعلامة «MYVET» لفندق الحيوانات الأليفة والعيادة البيطرية، تقوم على شكل عضوي بالأحمر يوحي بالدفء والرعاية. يضم الدليل الشعار ومساحات الأمان والألوان والخطوط والباترن والصور، مع تطبيقات على المطبوعات المؤسسية والبطاقات والتيشيرت والسيارة."},
besler:{co:"تركيا",t:"بشلر",en:"BEŞLER",srv:"هوية بصرية وتغليف",sec:"مطاحن دقيق وأعلاف",
d:"هوية بصرية لشركة «BEŞLER» للدقيق والأعلاف. يقوم الشعار على رمز مربع بأربع وريقات ذهبية، يوحي بالحبوب والحقل والترابط، مع كلمة الاسم بخط عريض. تمتد الهوية بالأسود والذهبي إلى المطبوعات المؤسسية وعبوات الدقيق والحبوب ولافتة المصنع والسيارة."},
mushaf:{co:"تركيا",t:"مشروع مصحف الأمة",en:"Mushaf Al-Ummah Project",srv:"هوية بصرية ومطبوعات",sec:"مشروع قرآني",
d:"هوية بصرية لمشروع «مصحف الأمة» بالأزرق الملكي والذهبي، تستلهم الزخرفة الإسلامية والخط العربي. تمتد الهوية إلى واجهات الموقع الإلكتروني وصفحات المصحف والكتيبات ولوحات الرول أب والمجلدات وبطاقات الأعمال والأكياس والشهادات ومواد التواصل الاجتماعي."},
akif:{co:"تركيا",t:"د. عاكف يولداش",en:"Dt. Akif Yuldaş Dental Clinic",srv:"هوية بصرية",sec:"عيادة أسنان",
d:"هوية عيادة د. عاكف يولداش للأسنان: ابتسامة تحتضن سنًّا بخطوط مبسّطة، وقيم الوضوح والأصالة والراحة. بالكحلي والتركوازي، مع نمط مخصص وتطبيقات على الملابس واللوحات."}
};
/* ── Add a project: 1) put images in img/<slug>/ (NN.webp, NN-l.webp, NN-m.webp), 2) add its heights to js/sizes.js,
   3) add an entry to P (text) and X (cover + tags). Order of ORDER = order on the site. ── */
var X={
datapill:{cv:"img/datapill/01-m.webp",big:"img/datapill/01-l.webp",col:["#9666f7","#447ef6","#1a1830"],tags:["هوية بصرية","شعار","سوشيال ميديا","واجهات موقع"]},
alomar:{cv:"img/alomar/01-m.webp",big:"img/alomar/01-l.webp",col:["#98693f","#c9a15d","#fff3e2"],tags:["هوية بصرية","شعار","مطبوعات مؤسسية","ختم","تصميم اللافتات"]},
aldeyafa:{cv:"img/aldeyafa/09-m.webp",big:"img/aldeyafa/09-l.webp",col:["#c2501c","#2a1a12","#f1e6d0"],tags:["هوية بصرية","تغليف","باترن","اتجاه بصري"]},
intelligence:{cv:"img/intelligence/01-m.webp",big:"img/intelligence/01-l.webp",col:["#4f1022","#c9a67a","#f1e6d0"],tags:["هوية بصرية","شعار","مطبوعات مؤسسية","رول أب"]},
blueline:{cv:"img/blueline/07-m.webp",big:"img/blueline/07-l.webp",col:["#0b3fd2","#ffffff","#0a1a4f"],tags:["هوية بصرية","شعار","باترن","مطبوعات مؤسسية"]},
khyoot:{cv:"img/khyoot/09-m.webp",big:"img/khyoot/09-l.webp",col:["#eee5d8","#141210","#c9b79c"],tags:["شعار","تغليف","باترن"]},
ghamer:{cv:"img/ghamer/03-m.webp",big:"img/ghamer/03-l.webp",col:["#8e1f38","#f7efe8","#111111"],tags:["هوية بصرية","شعار","باترن","فلسفة الشعار"]},
mostafa:{cv:"img/mostafa/08-m.webp",big:"img/mostafa/08-l.webp",col:["#141414","#efeeeb","#d9a55b"],tags:["شعار","تصميم اللافتات","فلسفة الشعار"]},
adilbey:{cv:"img/adilbey/05-m.webp",big:"img/adilbey/05-l.webp",col:["#24502a","#ffffff","#b08a3c"],tags:["هوية بصرية","شعار","ملصقات المنتجات","مطبوعات مؤسسية"]},
myvet:{cv:"img/myvet/cover-m.webp",big:"img/myvet/cover-l.webp",col:["#d93a35","#ffffff","#2b2b2b"],tags:["هوية بصرية","شعار","دليل الهوية","مطبوعات مؤسسية"]},
besler:{cv:"img/besler/cover-m.webp",big:"img/besler/cover-l.webp",col:["#111111","#c9a24b","#ffffff"],tags:["هوية بصرية","شعار","تغليف","مطبوعات مؤسسية"]},
mushaf:{cv:"img/mushaf/cover-m.webp",big:"img/mushaf/cover-l.webp",col:["#14327a","#c9a24b","#f1ead6"],tags:["هوية بصرية","مطبوعات مؤسسية","رول أب","سوشيال ميديا","واجهات موقع"]},
akif:{cv:"img/akif/05-m.webp",big:"img/akif/05-l.webp",col:["#080650","#2bd1c6","#ffffff"],tags:["هوية بصرية","شعار","باترن","تصميم اللافتات"]}
};
/* rows of images shown side by side inside a project page (1-based image numbers) */
var G={mushaf:[[2,3],[4,5],[6,7],[8,9],[10,11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[24,25,26],[27,28,29],[30,31],[34,35],[36,37],[39,40],[42,43],[44,45]]};
var ORDER=["datapill","mushaf","alomar","aldeyafa","ghamer","intelligence","blueline","mostafa","besler","khyoot","adilbey","myvet","akif"];
var $=function(s,r){return (r||document).querySelector(s)};
var pv=$("#pv"),lb=$("#lb"),lbi=$("img",lb),cur=null;

/* header: solid + hide on scroll down (rAF-throttled, passive) */
var hdr=$("#hdr"),ly=0,tick=false;
addEventListener("scroll",function(){
  if(tick)return;tick=true;
  requestAnimationFrame(function(){
    var y=scrollY;
    hdr.classList.toggle("solid",y>60);
    var d=y-ly;
    if(y<=400)hdr.classList.remove("hide");
    else if(d>12)hdr.classList.add("hide");
    else if(d<-12)hdr.classList.remove("hide");
    if(Math.abs(d)>12||y<=400)ly=y;
    tick=false;
  });
},{passive:true});

/* reveal on view */
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}});
  },{rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
}else{document.querySelectorAll(".rv").forEach(function(el){el.classList.add("in")})}

function pad(n){return n<10?"0"+n:""+n}
function path(s,i,v){return "img/"+s+"/"+pad(i)+(v?"-"+v:"")+".webp"}

/* warm the first images of a project on intent (hover / touch) */
var warmed={};
function warm(s){
  if(warmed[s]||!SZ[s])return;warmed[s]=1;
  for(var i=1;i<=2;i++){var im=new Image();im.decoding="async";im.src=path(s,i,"m")}
}
document.querySelectorAll(".card").forEach(function(c){
  var s=c.dataset.p;
  c.addEventListener("pointerenter",function(){warm(s)},{once:true,passive:true});
  c.addEventListener("touchstart",function(){warm(s)},{once:true,passive:true});
});

function build(s){
  var p=P[s],n=SZ[s].length,i=ORDER.indexOf(s),nx=ORDER[(i+1)%ORDER.length];
  function img(k,hero){
    var d=SZ[s][k-1];
    return '<img src="'+path(s,k,"m")+'" srcset="'+path(s,k,"m")+' 1500w, '+path(s,k,"l")+' 2200w, '+path(s,k)+' 3600w" sizes="(min-width:900px) 86vw, 100vw" width="1500" height="'+d+'" alt="'+p.t+' ('+p.en+') — '+p.srv+'، صورة '+k+' من '+n+'" '+(hero?'fetchpriority="high" ':(k>2?'loading="lazy" ':''))+'decoding="async" data-full="'+path(s,k)+'">';
  }
  var h='<div class="pv-bar"><button class="pv-x" data-close>✕ <span>إغلاق</span></button><span class="label pv-cn" style="direction:ltr"><b>01</b> / '+pad(n)+'</span><i class="pv-pg"></i></div>'+
  '<div class="pv-hero">'+img(1,1)+'</div>'+
  '<div class="pv-head"><div class="pv-t"><span class="label">'+p.en+'</span><h1>'+p.t+'</h1></div>'+
  '<div class="pv-i"><p>'+p.d+'</p>'+
  '<dl class="pv-meta"><div><dt class="label">الخدمات</dt><dd>'+p.srv+'</dd></div><div><dt class="label">المجال</dt><dd>'+p.sec+'</dd></div>'+(p.co?'<div><dt class="label">الدولة</dt><dd>'+p.co+'</dd></div>':'')+'</dl></div></div>'+
  '<div class="pv-imgs">'+(window.ANIM&&ANIM[s]?ANIM[s]():"");
  var gr=G[s]||[],gf={},gm={};gr.forEach(function(g){gf[g[0]]=g;g.forEach(function(k){gm[k]=1})});
  function fig(k,st){return '<figure class="pv-f"'+(st?' style="flex:'+(1500/SZ[s][k-1]).toFixed(3)+' 1 0"':'')+'>'+(window.ANIM_FIG&&ANIM_FIG[s]&&ANIM_FIG[s][k]?ANIM_FIG[s][k]:img(k,0))+'<figcaption><span>'+pad(k)+'</span><span class="pv-fn">'+p.en+'</span></figcaption></figure>'}
  for(var k=2;k<=n;k++){
    if(gf[k])h+='<div class="pv-row">'+gf[k].map(function(j){return fig(j,1)}).join("")+'</div>';
    else if(!gm[k])h+=fig(k,0);
  }
  h+='</div><button class="pv-next" data-go="'+nx+'"><span class="pv-nt"><span class="label">المشروع التالي</span><h2>'+P[nx].t+'</h2></span><span class="pv-ni"><img src="'+X[nx].cv+'" alt="" loading="lazy"></span></button>';
  return h;
}

function open(s,push){
  if(!P[s])return;
  cur=s;pv.innerHTML=build(s);pv.scrollTop=0;
  pv.classList.add("open");document.body.classList.add("lock");
  pv.querySelectorAll(".pv-hero img,.pv-imgs img").forEach(function(im){
    if(im.complete)im.classList.add("ok");else im.addEventListener("load",function(){im.classList.add("ok")},{once:true});
  });
  document.title=P[s].t+" — عبدالله بن حامد";
  if(window.ANIM_RUN)ANIM_RUN(pv);
  var cn=pv.querySelector(".pv-cn b"),pg=pv.querySelector(".pv-pg"),figs=[].slice.call(pv.querySelectorAll(".pv-hero,.pv-f"));
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add("in");var j=figs.indexOf(e.target);if(cn&&j>-1)cn.textContent=pad(j+1)}
    })},{root:pv,rootMargin:"-45% 0px -45% 0px"});
    var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");rv.unobserve(e.target)}})},{root:pv,rootMargin:"0px 0px -8% 0px"});
    figs.forEach(function(f){io.observe(f);rv.observe(f)});
  }else figs.forEach(function(f){f.classList.add("in")});
  pv.onscroll=function(){if(pg)pg.style.transform="scaleX("+(pv.scrollTop/Math.max(1,pv.scrollHeight-pv.clientHeight))+")"};
}
function close(){
  pv.classList.remove("open");document.body.classList.remove("lock");cur=null;
  document.title="عبدالله بن حامد — مصمم هويات بصرية";
  setTimeout(function(){if(!cur)pv.innerHTML=""},520);
}
function route(){
  var m=location.hash.match(/^#work\/(\w+)/);
  if(m&&P[m[1]]){open(m[1])}else if(cur){close()}
}
addEventListener("hashchange",route);
route();

pv.addEventListener("click",function(e){
  var t=e.target;
  if(t.closest("[data-close]")){
    if(history.length>1&&/^#work/.test(location.hash))history.back();else{history.replaceState(null,"","#works");close()}
    return;
  }
  var g=t.closest("[data-go]");
  if(g){history.replaceState(null,"","#work/"+g.dataset.go);route();return}
  if(t.tagName==="IMG"&&t.dataset.full){
    lbi.src=t.currentSrc||t.src;           /* show what is loaded instantly… */
    lb.classList.add("open","fit");
    var big=new Image();big.decoding="async";big.src=t.dataset.full; /* …then swap to the full-resolution original */
    big.onload=function(){if(lb.classList.contains("open"))lbi.src=big.src};
  }
});
lb.addEventListener("click",function(e){
  if(e.target===lbi&&lb.classList.contains("fit")){lb.classList.remove("fit");return}
  lb.classList.remove("open","fit");lbi.removeAttribute("src");
});
addEventListener("keydown",function(e){
  if(e.key!=="Escape")return;
  if(lb.classList.contains("open")){lb.classList.remove("open","fit")}
  else if(cur){if(/^#work/.test(location.hash))history.back();else close()}
});
var cp=document.querySelector("[data-copy]");
if(cp)cp.addEventListener("click",function(){
  var t=document.createElement("div");t.className="toast";t.textContent="تم نسخ البريد ✓";document.body.appendChild(t);
  var done=function(){requestAnimationFrame(function(){t.classList.add("on")});setTimeout(function(){t.classList.remove("on");setTimeout(function(){t.remove()},400)},1600)};
  if(navigator.clipboard)navigator.clipboard.writeText(cp.dataset.copy).then(done,done);else done();
});
var ck=document.getElementById("clock");
if(ck){var f=function(){try{ck.textContent="Cairo — "+new Date().toLocaleTimeString("en-GB",{timeZone:"Africa/Cairo",hour:"2-digit",minute:"2-digit"})}catch(e){}};f();setInterval(f,30000)}
/* smooth wheel scrolling (mouse / trackpad only; touch keeps native momentum) */
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){
  var mk=function(el){
    var win=el===window,s={t:0,c:0,r:0,l:0};
    s.pos=function(){return win?scrollY:el.scrollTop};
    s.max=function(){return win?document.documentElement.scrollHeight-innerHeight:el.scrollHeight-el.clientHeight};
    s.set=function(y){if(win)scrollTo(0,y);else el.scrollTop=y};
    s.step=function(n){
      var dt=Math.min((n-s.l)/1000,.05);s.l=n;
      s.c+=(s.t-s.c)*(1-Math.exp(-dt/.11));
      if(Math.abs(s.t-s.c)<.4){s.c=s.t;s.set(s.c);s.r=0;return}
      s.set(s.c);s.r=requestAnimationFrame(s.step);
    };
    s.go=function(t){
      if(!s.r)s.c=s.pos();
      s.t=Math.max(0,Math.min(s.max(),t));
      if(!s.r){s.l=performance.now();s.r=requestAnimationFrame(s.step)}
    };
    (win?window:el).addEventListener("scroll",function(){if(!s.r){s.c=s.t=s.pos()}},{passive:true});
    return s;
  };
  var SW=mk(window),SP=mk(pv);
  addEventListener("wheel",function(e){
    if(e.ctrlKey||e.defaultPrevented||lb.classList.contains("open"))return;
    var s=SW;
    if(pv.classList.contains("open")){if(!pv.contains(e.target))return;s=SP}
    var dy=e.deltaY;
    if(e.deltaMode===1)dy*=40;else if(e.deltaMode===2)dy*=innerHeight;
    if(Math.abs(e.deltaX)>Math.abs(dy))return;
    e.preventDefault();
    s.go((s.r?s.t:s.pos())+dy);
  },{passive:false});
  /* anchor jumps: eased glide, duration grows with distance and it slows down gently before arriving */
  var ani=0;
  function stopGlide(){if(ani){cancelAnimationFrame(ani);ani=0}}
  ["wheel","touchstart","keydown","mousedown"].forEach(function(t){addEventListener(t,stopGlide,{passive:true})});
  function glide(get){
    stopGlide();if(SW.r){cancelAnimationFrame(SW.r);SW.r=0}
    var y0=scrollY,t0=performance.now(),dur=Math.min(4200,Math.max(1300,900+Math.abs(get()-y0)*.3));
    (function f(n){
      var k=Math.min(1,(n-t0)/dur),u=1-Math.pow(1-k,1.7),e=(1-Math.cos(Math.PI*u))/2;
      scrollTo({top:y0+(get()-y0)*e,behavior:"instant"});
      if(k<1)ani=requestAnimationFrame(f);else{ani=0;SW.c=SW.t=scrollY}
    })(t0);
  }
  document.addEventListener("click",function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;
    var h=a.getAttribute("href");if(h==="#"||h.indexOf("#work/")===0)return;
    var el=h==="#top"?null:document.querySelector(h);if(h!=="#top"&&!el)return;
    e.preventDefault();
    glide(el?(el.classList.contains("pin")?function(){return SW.max()}:function(){return el.getBoundingClientRect().top+scrollY}):function(){return 0});
  });
}
/* magnetic email button */
var mg=document.querySelector(".mail");
if(mg&&matchMedia("(pointer:fine)").matches){
  mg.addEventListener("pointermove",function(e){var r=mg.getBoundingClientRect();mg.style.transform="translate("+((e.clientX-r.left-r.width/2)*.18)+"px,"+((e.clientY-r.top-r.height/2)*.3)+"px)"});
  mg.addEventListener("pointerleave",function(){mg.style.transform=""});
}

/* works index: formal case-study index (list + side preview) or grid; filters; load more — rendered from data */
(function(){
  var wk=$("#wk");if(!wk)return;
  var PAGE=6,tag="all",limit=PAGE,view="show";
  var fb=$("#wkf")||document.createElement("div"),cnt=$("#wkc")||document.createElement("span"),more=$("#wkm"),vb=$("#wkv");
  var wide=matchMedia("(min-width:900px)");
  var tags=[];ORDER.forEach(function(s){X[s].tags.forEach(function(t){if(tags.indexOf(t)<0)tags.push(t)})});
  var nEl=$("#wkn");if(nEl)nEl.textContent=pad(ORDER.length)+" Projects";
  function fbuild(){
    var h='<button data-t="all" class="on">الكل<sup>'+ORDER.length+'</sup></button>';
    tags.forEach(function(t){var n=ORDER.filter(function(s){return X[s].tags.indexOf(t)>-1}).length;h+='<button data-t="'+t+'">'+t+'<sup>'+n+'</sup></button>'});
    fb.innerHTML=tags.length>1?h:"";
  }
  function row(s,i){
    var p=P[s],g=ORDER.indexOf(s)+1;
    return '<a class="wc" href="work/'+s+'.html" data-p="'+s+'" style="animation-delay:'+(i%PAGE*40)+'ms"><div class="wc-img"><img src="'+X[s].cv+'" width="1500" height="1125" alt="'+p.t+' — '+p.srv+'" '+(i>2?'loading="lazy" ':'')+'decoding="async"></div><div class="wc-m"><span class="wc-n">'+pad(g)+'</span><h3>'+p.t+'<small>'+p.en+'</small></h3><span class="wc-s">'+p.sec+(p.co?' · '+p.co:'')+'</span><span class="wc-t">'+X[s].tags.map(function(t){return '<i class="ch">'+t+'</i>'}).join("")+'</span></div><span class="wc-a">←</span></a>';
  }
  var cur=0;
  function act(i){
    var rs=wk.querySelectorAll(".ix-l .wc"),im=wk.querySelectorAll(".ix-s img");
    if(!rs.length)return;cur=i;
    [].forEach.call(rs,function(r,k){r.classList.toggle("act",k===i)});
    [].forEach.call(im,function(m,k){m.classList.toggle("on",k===i)});
    var c=wk.querySelector(".ix-c");
    if(c)c.innerHTML='<span>'+pad(ORDER.indexOf(rs[i].dataset.p)+1)+' / '+pad(ORDER.length)+'</span><b>'+P[rs[i].dataset.p].srv+'</b>';
  }
  function show(s,i){
    var p=P[s],g=ORDER.indexOf(s)+1;
    return '<a class="sc" href="work/'+s+'.html" data-p="'+s+'"><div class="sc-img"><img src="'+X[s].big+'" width="2200" height="1200" alt="'+p.t+' — '+p.srv+'" '+(i>0?'loading="lazy" ':'fetchpriority="high" ')+'decoding="async"><span class="sc-go">عرض المشروع <b>←</b></span></div><div class="sc-m"><div class="sc-h"><span class="sc-n">'+pad(g)+'</span><h3>'+p.t+'<small>'+p.en+'</small></h3></div><div class="sc-d"><span class="sc-s">'+p.sec+(p.co?' · '+p.co:'')+'</span><span class="wc-t">'+X[s].tags.map(function(t){return '<i class="ch">'+t+'</i>'}).join("")+'</span></div></div></a>';
  }
  function render(){
    var all=ORDER.filter(function(s){return tag==="all"||X[s].tags.indexOf(tag)>-1});
    var shown=all.slice(0,limit),h="";
    if(view==="list"){
      h='<div class="ix"><div class="ix-l">'+shown.map(row).join("")+'</div><aside class="ix-s">'+shown.map(function(s){return '<img src="'+X[s].cv+'" alt="" decoding="async">'}).join("")+'<div class="ix-c"></div></aside></div>';
    }else if(view==="show")h=shown.map(show).join("");
    else h=shown.map(row).join("");
    wk.className="wk "+view;wk.innerHTML=h;
    cnt.textContent=all.length+" مشروع";
    var left=all.length-shown.length;
    more.hidden=left<=0;more.textContent="عرض المزيد ("+left+")";
    if(view==="list")act(0);
    if(view==="show"&&"IntersectionObserver" in window){
      var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");so.unobserve(e.target)}})},{rootMargin:"0px 0px -6% 0px"});
      [].forEach.call(wk.querySelectorAll(".sc"),function(el){so.observe(el)});
    }else [].forEach.call(wk.querySelectorAll(".sc"),function(el){el.classList.add("in")});
  }
  fb.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;tag=b.dataset.t;limit=PAGE;
    [].forEach.call(fb.children,function(x){x.classList.toggle("on",x===b)});render()});
  vb.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;view=b.dataset.v;
    [].forEach.call(vb.children,function(x){x.classList.toggle("on",x===b)});render()});
  more.addEventListener("click",function(){limit+=PAGE;render()});
  wk.addEventListener("pointerover",function(e){
    var r=e.target.closest(".ix-l .wc");if(!r||!wide.matches)return;
    var rs=[].slice.call(wk.querySelectorAll(".ix-l .wc")),i=rs.indexOf(r);if(i>-1&&i!==cur)act(i);
  },{passive:true});
  fbuild();render();
})();
})();

/* hero label: starts at the ة of "بصرية", ends at the h1 edge, sits on the damma's level (desktop) */
(function(){
  var l=document.getElementById("hl"),w=document.getElementById("hw"),h=document.querySelector(".hero h1"),d=h&&h.querySelector(".dm");
  if(!l||!w||!h||!d)return;
  function fit(){
    l.style.top="";l.style.fontSize="";l.style.letterSpacing="";l.style.width="";l.style.whiteSpace="";
    if(window.innerWidth<1100)return;
    l.style.whiteSpace="nowrap";l.style.width="max-content";
    var hr=h.getBoundingClientRect(),wr=w.getBoundingClientRect(),lr=l.getBoundingClientRect();
    var target=hr.right-wr.left-(wr.right-wr.left)*.0;
    var fs=parseFloat(getComputedStyle(l).fontSize),cur=lr.width;
    if(cur>0&&target>0&&fs*target/cur<10){l.style.letterSpacing=".02em";lr=l.getBoundingClientRect();cur=lr.width}
    if(cur>0&&target>0)l.style.fontSize=Math.max(8.5,Math.min(26,fs*target/cur))+"px";
    lr=l.getBoundingClientRect();var hf=parseFloat(getComputedStyle(h).fontSize),cy=wr.top+hf*.02;
    l.style.top=(cy-(lr.top+lr.height/2))+"px";
  }
  function go(){fit();}
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(go);else window.addEventListener("load",go);
  window.addEventListener("resize",go);
})();



(function(){var w=document.querySelector(".lang-w");if(!w)return;var b=w.querySelector(".lang");
function set(o){w.classList.toggle("open",o);b.setAttribute("aria-expanded",o)}
b.addEventListener("click",function(e){e.stopPropagation();set(!w.classList.contains("open"))});
w.querySelectorAll(".lang-m button").forEach(function(x){x.addEventListener("click",function(){set(false)})});
document.addEventListener("click",function(e){if(!w.contains(e.target))set(false)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});
})();

/* scroll choreography (hero curtain + growing showcase images) */
(function(){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  var hero=document.querySelector(".hero");if(!hero)return;
  var hin=hero.querySelector(".hero-in"),him=hero.querySelector("img"),tk=0;
  var cl=function(v){return v<0?0:v>1?1:v};
  function upd(){
    tk=0;var vh=innerHeight,y=scrollY,p=cl(y/vh);
    if(y<vh*1.2){
      hin.style.transform="translate3d(0,"+(-p*9)+"vh,0)";
      hin.style.opacity=1-p*.95;
      him.style.transform="scale("+(1+p*.1)+")";
    }
    var sm=innerWidth<700,k0=sm?.9:.8;
    var cs=document.querySelectorAll(".sc-img");
    for(var i=0;i<cs.length;i++){
      var r=cs[i].getBoundingClientRect();
      if(r.bottom<-50||r.top>vh+50)continue;
      var q=cl((vh-r.top)/(vh*.62)),e=1-Math.pow(1-q,3);
      cs[i].style.setProperty("--k",(k0+(1-k0)*e).toFixed(4));
      cs[i].style.setProperty("--r",(28-10*(1-e)*0).toFixed(1));
    }
  }
  function req(){if(!tk)tk=requestAnimationFrame(upd)}
  addEventListener("scroll",req,{passive:true});addEventListener("resize",req);
  new MutationObserver(req).observe(document.getElementById("wk"),{childList:true});
  upd();
})();

/* pin the contact section under the layer above it, only when it fits in the viewport */
(function(){
  var ct=document.getElementById("contact");if(!ct||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  var hr=document.querySelector(".hero"),tk=0;
  function fit(){ct.classList.remove("pin");if(ct.offsetHeight<=innerHeight)ct.classList.add("pin");vis()}
  function vis(){tk=0;var end=document.documentElement.scrollHeight-innerHeight-scrollY;ct.classList.toggle("show",end<innerHeight*1.6+ct.offsetHeight);if(hr)hr.style.visibility=scrollY>innerHeight*1.5?"hidden":""}
  addEventListener("scroll",function(){if(!tk)tk=requestAnimationFrame(vis)},{passive:true});
  addEventListener("resize",fit);addEventListener("load",fit);fit();
})();

/* #contact is pinned beneath the page, so jump to the bottom when opened with that hash */
(function(){
  var ct=document.getElementById("contact");
  function go(){if(location.hash==="#contact"&&ct&&ct.classList.contains("pin"))scrollTo(0,document.documentElement.scrollHeight)}
  addEventListener("load",function(){setTimeout(go,60)});addEventListener("hashchange",go);
})();

/* project cards are real links (work/<slug>.html) for search engines and new tabs; a normal click opens the overlay */
(function(){
  var w=document.getElementById("wk");if(!w)return;
  w.addEventListener("click",function(e){
    if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    var a=e.target.closest&&e.target.closest("a[data-p]");if(!a)return;
    e.preventDefault();location.hash="#work/"+a.dataset.p;
  });
})();

/* home: logos count */
(function(){var L=window.LOGOS,n=document.getElementById("lgn");if(L&&n)n.textContent="Logos · "+(L.length<10?"0":"")+L.length})();
