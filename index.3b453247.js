!function(){function e(e){o.classList.remove("block"),t.classList.add("none"),c.classList.add("block");return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e,"&api_key=").concat("live_RYeRNGczSYYwxluYqgiYL5bURXhWnBdkUUgsHhycoFAcnz9NPWS8HbcRH9uE8fYB")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var n=document.querySelector(".cat-info"),t=document.querySelector(".breed-select"),c=document.querySelector(".loader"),o=document.querySelector(".error");function r(){return c.classList.remove("block"),o.classList.add("block")}(t.classList.add("none"),c.classList.add("block"),fetch("".concat("https://api.thecatapi.com/v1/breeds","?api_key=").concat("live_RYeRNGczSYYwxluYqgiYL5bURXhWnBdkUUgsHhycoFAcnz9NPWS8HbcRH9uE8fYB")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){return function(e){var n=e.map((function(e){var n=e.id,t=e.name;return' <option value="'.concat(n,'">').concat(t,"</option> ")}));return t.innerHTML=n,t.classList.remove("none"),c.classList.remove("block")}(e)})).catch((function(e){return r()})),t.addEventListener("change",(function(s){e(s.currentTarget.value).then((function(e){return function(e){var r,s,a,i;if(!e.length>0)return t.classList.remove("none"),c.classList.remove("block"),o.classList.add("block"),n.innerHTML="";e.forEach((function(e){s=e.breeds[0].description,r=e.url,a=e.breeds[0].temperament,i=e.breeds[0].name}));return n.innerHTML=' <img src="'.concat(r,'" alt="Cat" width="460"  />\n        <div class ="box">\n        <h1>').concat(i,"</h1>\n        <p>").concat(s,"</p>\n        <p><b>Temperament:</b>").concat(a,"</p></div>"),t.classList.remove("none"),c.classList.remove("block")}(e)})).catch((function(e){return r()}))}))}();
//# sourceMappingURL=index.3b453247.js.map
