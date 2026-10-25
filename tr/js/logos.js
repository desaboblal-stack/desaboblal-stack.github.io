/* logos page: flip squares, lightbox, header behaviour, language menu */
(function(){
var $=function(s){return document.querySelector(s)};
var hdr=$("#hdr"),ly=0,tick=false;
addEventListener("scroll",function(){
  if(tick)return;tick=true;
  requestAnimationFrame(function(){
    var y=scrollY,d=y-ly;
    hdr.classList.toggle("solid",y>60);
    if(y<=400)hdr.classList.remove("hide");
    else if(d>12)hdr.classList.add("hide");
    else if(d<-12)hdr.classList.remove("hide");
    if(Math.abs(d)>12||y<=400)ly=y;
    tick=false;
  });
},{passive:true});

var B=window.LOGOS||[],flat=[],start=[];
/* flip squares: every brand is one square card; versions flip over on hover (auto on touch) */
/* bento plan on a 3-column grid (RTL: column 1 is the right one).
   L = long+square, R = square+long, C = 3 squares, W = one wide card, A = tall card + 4 squares, B = 4 squares + tall card */
var BLOCKS=["L","C","A","W","R","C","B","W"],NEED={L:2,R:2,C:3,W:1,A:5,B:5},pos=[];
(function(){
  var i=0,r=1,n=B.length,bi=0,nonS=0,PL=B.filter(function(b){return !b.sq}).length;
  function add(c,rr,cs,rs,k){pos.push({c:c,r:rr,cs:cs,rs:rs,k:k})}
  while(i<n){
    var t=BLOCKS[bi%BLOCKS.length],left=n-i;
    if(left<NEED[t])t=left>=3?"C":left===2?"L":"W";
    if(t==="W"&&left===2)t="L";
    /* never plan more wide/long/tall cards than there are plain-background brands to fill them */
    if(t!=="C"&&nonS>=PL)t=left>=3?"C":"Q";
    if(t!=="C")nonS++;
    if(t==="Q"){for(var q=0;q<left;q++)add(q+1,r,1,1,"S");r++;NEED.Q=left}
    else if(t==="L"){add(1,r,2,1,"L");add(3,r,1,1,"S");r++}
    else if(t==="R"){add(1,r,1,1,"S");add(2,r,2,1,"R");r++}
    else if(t==="C"){add(1,r,1,1,"S");add(2,r,1,1,"S");add(3,r,1,1,"S");r++}
    else if(t==="W"){add(1,r,3,1,"W");r++}
    else if(t==="A"){add(1,r,1,2,"T");add(2,r,1,1,"S");add(3,r,1,1,"S");add(2,r+1,1,1,"S");add(3,r+1,1,1,"S");r+=2}
    else{add(1,r,1,1,"S");add(2,r,1,1,"S");add(3,r,1,2,"T");add(1,r+1,1,1,"S");add(2,r+1,1,1,"S");r+=2}
    i+=NEED[t];bi++;
  }
})();
/* brands with a textured/photo/gradient background always get a square card (no cropping);
   only plain-background brands may take the wide/long/tall slots */
(function(){
  var plain=[],sq=[],out=[],pi=0,si=0;
  B.forEach(function(b){(b.sq?sq:plain).push(b)});
  pos.forEach(function(p){
    var x;
    if(p.k!=="S")x=pi<plain.length?plain[pi++]:sq[si++];
    else x=si<sq.length?sq[si++]:plain[pi++];
    out.push(x);
  });
  B=out;
})();
B.forEach(function(b,i){start[i]=flat.length;b.v.forEach(function(v){flat.push({f:v.f,n:b.n,e:b.e})})});
var pad=function(n){return(n<10?"0":"")+n};
var grid=$("#lgg");
var n=$("#lgn");if(n)n.textContent=pad(B.length)+" Logo";

var fine=matchMedia("(hover:hover) and (pointer:fine)").matches;
var src=function(v,l){return "../img/logos/"+v.f+(l?"":"-m")+".webp"};
var cards=B.map(function(b,i){
  var k=b.v.length,f=document.createElement("figure"),ps=pos[i],lo=false;f.className="lg-bc"+(ps.k==="T"?" lg-tall":ps.k==="W"?" lg-wide":ps.k==="S"?"":" lg-long");f.style.gridColumn=ps.c+(ps.cs>1?" / span "+ps.cs:"");f.style.gridRow=ps.r+(ps.rs>1?" / span "+ps.rs:"");
  f.innerHTML='<div class="lg-fp" data-b="'+i+'" role="button" tabindex="0" aria-label="'+b.n+'"><div class="lg-fi"><img class="lg-fc fa" src="'+src(b.v[0],lo)+'" alt="'+b.e+' logosu" '+(i<3?'':'loading="lazy" ')+'decoding="async"><img class="lg-fc fb" src="'+src(b.v[k>1?1:0],lo)+'" alt="" aria-hidden="true" decoding="async"></div>'+(k>1?'<span class="lg-dots">'+b.v.map(function(_,j){return '<i'+(j?'':' class="on"')+'></i>'}).join("")+'</span>':'')+'</div><figcaption class="lg-c"><b>'+b.n+(k>1?'<small>'+k+' versiyon'+'</small>':'')+'</b><i>'+(b.co?'<em class="lg-co">'+b.co+'</em>':'')+'</i></figcaption>';
  grid.appendChild(f);f.querySelector(".lg-fp").style.backgroundColor=b.v[0].c;
  var st={b:i,vi:0,rot:0,t:0,lo:lo,el:f.querySelector(".lg-fp")};
  st.fi=st.el.querySelector(".lg-fi");st.dots=st.el.querySelectorAll(".lg-dots i");
  st.show=function(n){
    var k=B[i].v.length;if(k<2)return;
    var sw=st.fi.classList.contains("sw"),hid=st.el.querySelector(".lg-fc."+(sw?"fa":"fb"));
    hid.src=src(B[i].v[n],st.lo);st.el.style.backgroundColor=B[i].v[n].c;st.vi=n;
    /* wait a frame so the new src is applied before the cross-fade */
    requestAnimationFrame(function(){st.fi.classList.toggle("sw")});
    st.dots.forEach(function(d,j){d.classList.toggle("on",j===n)});
  };
  st.step=function(){st.show((st.vi+1)%B[i].v.length)};
  st.go=function(ms){clearInterval(st.t);st.step();st.t=setInterval(st.step,ms)};
  st.stop=function(){clearInterval(st.t)};
  return st;
});
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -6% 0px"}):null;
cards.forEach(function(c,i){var f=c.el.parentNode;f.style.transitionDelay=(i%3*90)+"ms";if(io)io.observe(f);else f.classList.add("in")});
B.forEach(function(b,bi){b.v.forEach(function(v){var im=new Image();im.src=src(v,false)})});
if(fine){
  cards.forEach(function(c){
    c.el.addEventListener("mouseenter",function(){c.go(1400)});
    c.el.addEventListener("mouseleave",function(){c.stop();if(c.vi)c.show(0)});
  });
}else{
  cards.forEach(function(c,i){setTimeout(function(){c.t=setInterval(c.step,3200)},900+i*600)});
}

/* lightbox */
var lb=$("#lb"),li=lb.querySelector("img"),lc=0;
function show(i){lc=(i+flat.length)%flat.length;li.src="../img/logos/"+flat[lc].f+".webp";li.alt=flat[lc].e+" logosu";lb.classList.add("open");document.body.classList.add("lock")}
function hide(){lb.classList.remove("open");document.body.classList.remove("lock");li.removeAttribute("src")}
grid.addEventListener("click",function(e){
  var p=e.target.closest(".lg-fp");if(!p)return;
  var c=cards[+p.dataset.b];show(start[c.b]+c.vi);
});
grid.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){var p=e.target.closest(".lg-fp");if(p){e.preventDefault();p.click()}}});
lb.addEventListener("click",hide);
document.addEventListener("keydown",function(e){
  if(!lb.classList.contains("open"))return;
  if(e.key==="Escape")hide();
  else if(e.key==="ArrowLeft")show(lc+1);
  else if(e.key==="ArrowRight")show(lc-1);
});

/* language menu (visual only for now) */
var w=$(".lang-w");
if(w){var b=w.querySelector(".lang");
  var set=function(o){w.classList.toggle("open",o);b.setAttribute("aria-expanded",o)};
  b.addEventListener("click",function(e){e.stopPropagation();set(!w.classList.contains("open"))});
  w.querySelectorAll(".lang-m button").forEach(function(x){x.addEventListener("click",function(){set(false)})});
  document.addEventListener("click",function(e){if(!w.contains(e.target))set(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});
}
})();
