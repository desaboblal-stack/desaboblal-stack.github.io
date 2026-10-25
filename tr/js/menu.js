/* mobile menu: the header links are hidden on phones, so open a full-screen menu from a pill button */
(function(){
  var nav=document.querySelector(".nav"),hdr=document.getElementById("hdr");if(!nav||!hdr)return;
  var links=[].slice.call(nav.querySelectorAll("a:not(.cta):not([role=menuitem])"));
  var b=document.createElement("button");b.type="button";b.className="mnu";b.setAttribute("aria-expanded","false");b.setAttribute("aria-controls","mm");
  b.innerHTML='<span class="mnu-i" aria-hidden="true"><i></i><i></i></span><span class="mnu-t">Menü</span>';
  var lw=nav.querySelector(".lang-w");nav.insertBefore(b,lw?lw.nextSibling:null);
  var LG=function(){var o="";[].forEach.call(document.querySelectorAll(".lang-m a"),function(a){o+='<a lang="'+a.lang+'" href="'+a.getAttribute("href")+'"'+(a.classList.contains("on")?' class="on"':"")+">"+a.querySelector("i").textContent+"</a>"});return o};var m=document.createElement("div");m.className="mm";m.id="mm";m.setAttribute("role","dialog");m.setAttribute("aria-label","Menü");
  m.innerHTML='<ul class="mm-l">'+links.map(function(a,i){return '<li><a href="'+a.getAttribute("href")+'"><span class="mm-n">'+(i<9?"0":"")+(i+1)+'</span>'+a.textContent+'</a></li>'}).join("")+'</ul>'+
    '<div class="mm-f"><span class="mm-av">Yeni projeler için müsait</span><span class="mm-lg">'+LG()+'</span></div>';
  document.body.appendChild(m);
  function set(o){m.classList.toggle("open",o);hdr.classList.toggle("mm-open",o);document.body.classList.toggle("lock",o);b.setAttribute("aria-expanded",o);b.querySelector(".mnu-t").textContent=o?"Kapat":"Menü";if(o)hdr.classList.remove("hide")}
  b.addEventListener("click",function(){set(!m.classList.contains("open"))});
  m.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
  addEventListener("keydown",function(e){if(e.key==="Escape"&&m.classList.contains("open"))set(false)});
  matchMedia("(min-width:1400px)").addEventListener("change",function(q){if(q.matches)set(false)});
  var cta=nav.querySelector(".cta");if(cta)cta.addEventListener("click",function(){set(false)});
})();
