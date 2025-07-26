let menubar = document.querySelector(".menuiconbox .icon");
let menucontent = document.querySelector(".menucontentbox");
menubar.addEventListener("click", () => {
  menucontent.classList.toggle("menucontentboxopacity");
});

// for mobile version
let mobile = window.matchMedia("(min-width:200px) and (max-width:575px)");
let screen = document.querySelector("#screen");
menubar.addEventListener("click", (event) => {
  event.stopPropagation(event);
  if (mobile.matches) {
    if (!mcontentbox.classList.contains("mcontentboxslider")) {
      menucontent.classList.toggle("menucontentboxslider");
    }
  }
});
screen.addEventListener("click", () => {
  if (mobile.matches) {
    menucontent.classList.remove("menucontentboxslider");
  }
});

// active link script
let pages = document.querySelectorAll(".page");
let alllinks = document.querySelectorAll(".menucontentbox .icon");
for (let i = 0; i < alllinks.length; i++) {
  alllinks[i].addEventListener("click", () => {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    alllinks[i].classList.add("active");
    alllinks[i] = pages[i];
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].style.opacity == "1") {
        pages[i].style.opacity = "0";
      }
      if(i!=0){
        whomibox.style.display="none";
      }
    }
    if(i==0){
        whomibox.style.display="flex"; 
    }
    pages[i].style.opacity="1";
  });
}

// presenticon script
let allicon = document.querySelectorAll(".menucontentbox .icon i");
let presenticon = document.querySelector(".presenticon");
for (let i = 0; i < allicon.length; i++) {
  alllinks[i].addEventListener("click", () => {
    presenticon.innerHTML = allicon[i].outerHTML;
  });
}

let whomi = document.querySelector(".whomibox .icon");
let mcontentbox = document.querySelector(".mcontentbox");
let whomibox=document.querySelector(".whomibox")

whomi.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!menucontent.classList.contains("menucontentboxslider")) {
    mcontentbox.classList.add("mcontentboxslider");
    whomibox.style.zIndex=0;
  }
});
screen.addEventListener("click", () => {
  mcontentbox.classList.remove("mcontentboxslider");
   whomibox.style.zIndex=1;
});

let cvicon = document.querySelector(".cv");
cvicon.addEventListener("click", (event) => {
  event.stopPropagation();
});

