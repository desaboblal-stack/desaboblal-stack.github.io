/* mobile menu: the header links are hidden on phones, so open a full-screen menu from a pill button */
(function(){
  var nav=document.querySelector(".nav"),hdr=document.getElementById("hdr");if(!nav||!hdr)return;
  var links=[].slice.call(nav.querySelectorAll("a:not(.cta)"));
  var b=document.createElement("button");b.type="button";b.className="mnu";b.setAttribute("aria-expanded","false");b.setAttribute("aria-controls","mm");
  b.innerHTML='<span class="mnu-i" aria-hidden="true"><i></i><i></i></span><span class="mnu-t">القائمة</span>';
  var lw=nav.querySelector(".lang-w");nav.insertBefore(b,lw?lw.nextSibling:null);
  var m=document.createElement("div");m.className="mm";m.id="mm";m.setAttribute("role","dialog");m.setAttribute("aria-label","القائمة");
  m.innerHTML='<ul class="mm-l">'+links.map(function(a,i){return '<li><a href="'+a.getAttribute("href")+'"><span class="mm-n">'+(i<9?"0":"")+(i+1)+'</span>'+a.textContent+'</a></li>'}).join("")+'</ul>'+
    '<div class="mm-f"><span class="mm-av">متاح لمشاريع جديدة</span><span class="mm-lg"><b lang="ar" class="on">AR</b><b lang="en">EN</b><b lang="tr">TR</b></span></div>';
  document.body.appendChild(m);
  function set(o){m.classList.toggle("open",o);hdr.classList.toggle("mm-open",o);document.body.classList.toggle("lock",o);b.setAttribute("aria-expanded",o);b.querySelector(".mnu-t").textContent=o?"إغلاق":"القائمة";if(o)hdr.classList.remove("hide")}
  b.addEventListener("click",function(){set(!m.classList.contains("open"))});
  m.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
  addEventListener("keydown",function(e){if(e.key==="Escape"&&m.classList.contains("open"))set(false)});
  matchMedia("(min-width:1400px)").addEventListener("change",function(q){if(q.matches)set(false)});
  var cta=nav.querySelector(".cta");if(cta)cta.addEventListener("click",function(){set(false)});
})();
