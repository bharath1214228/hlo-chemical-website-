!function(r,i){var n,o,s,l,d,e,t,a,c,u,f,m,p=".ad902dd1",y=r.head;"function"==typeof[].indexOf&&y&&(i.a2a=i.a2a||{},n=i.a2a_config=i.a2a_config||{},e=(o=r.currentScript)&&o.src?o.src:"",NodeList&&NodeList.prototype.forEach&&(i.a2a.init=function(e,t){void 0===t&&(t=n);var a=":not([data-a2a-url]):not(.a2a_target)";r.querySelectorAll(".a2a_dd"+a+",.a2a_kit"+a).forEach(function(e){e.matches(".a2a_kit .a2a_dd");e.a2a_index||null!==e.getAttribute("data-a2a-url")||e.matches(".a2a_kit .a2a_dd")||(e.dataset.a2aUrl=t.linkurl||"",t.linkname&&(e.dataset.a2aTitle=t.linkname))}),delete n.linkurl,delete n.linkname},i.a2a_init=i.a2a.init,!o||o.async||o.defer||i.a2a.init("page",{linkurl:n.linkurl,linkname:n.linkname})),i.a2a.page||(i.a2a.page=!0,s=[],["init_all","svg_css"].forEach(function(a){i.a2a[a]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s.push([a,e])}}),a=(m=n.static_server)?m+"/":"https://static.addtoany.com/menu/",t=e&&-1!==e.split("/")[2].indexOf("addtoany"),l=(t=(l=!m&&t?e:a).match(/^[^?#]+\//))?t[0]:l,d=function(e,t,a){void 0===e&&(e=l+"eso"+p+".js"),void 0===t&&(t=!1);var n=r.createElement((a=void 0===a?!1:a)?"link":"script"),i="module",a=(a?(a="preload",n.href=e,n.rel=t?i+a:a,t||(n.as="script")):(n.src=e,t&&(n.type=i,n.onerror=function(){return d()})),o&&o.nonce?o.nonce:null);a&&(n.nonce=a),y.appendChild(n)},"function"==typeof(e="".matchAll)&&e.toString().includes("[native code]")?(t=a+(m?"":"svg/"),d((e=l+(m?"":"modules/"))+"core"+p+".js",!0),a=document.createElement("link").relList.supports("modulepreload"),n.overlays&&n.overlays.length&&a&&d(e+"overlays"+p+".js",!0,!0),r.querySelector('.a2a_dd:empty,.a2a_kit [class*="a2a_button_"]:empty')&&d(t+"icons.31.svg.js",!1,!0)):d(),u=function(e){var t=i.a2a.core;"function"!=typeof t||e?e?e():i.a2a.core=function(e){return u(e)}:t()},m=function(){var e,t,a,n;f||(f=!0,t="a2a_menu_container",e=r.getElementById(t),i.a2a.main=c=e||r.createElement("div"),c.id!=t&&(c.style.position="static",r.body.insertBefore(c,null)),u(),s.forEach(function(e){var t;(t=i.a2a)[e[0]].apply(t,e[1])}),i.addEventListener("message",function(e){var t;".addtoany.com"===e.origin.substr(-13)&&"object"==typeof(e=e.data)&&e.a2a&&("function"==typeof(t=i.a2a.userServices)?t(e.user_services):i.a2a.userServices=e.user_services,r.getElementById("a2a_sm_ifr").style.display="none")}),e=r.createElement("iframe"),t=r.createElement("div"),a=e.style,n=t.style,e.id="a2a_sm_ifr",a.width=a.height=n.width=n.height="1px",a.top=a.left=a.border="0",a.position=n.position="absolute",a.zIndex=n.zIndex="100000",e.title="AddToAny Utility Frame",e.setAttribute("transparency","true"),e.setAttribute("allowTransparency","true"),e.setAttribute("frameBorder","0"),e.src="https://static.addtoany.com/menu/sm.23.html#type=core&event=load",n.top="0",n.visibility="hidden",c.insertBefore(t,null),t.insertBefore(e,null))},"loading"!==r.readyState?m():(r.addEventListener("readystatechange",m),r.addEventListener("DOMContentLoaded",m))))}(document,window);