(()=>{console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");const a=document.querySelector("body");document.addEventListener("mousedown",(()=>{a.classList.add("clicking")})),document.addEventListener("keydown",(e=>{"Tab"===e.key&&a.classList.remove("clicking")}))})();