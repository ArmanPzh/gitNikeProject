"use strict";
// jordan page header
const mainHeader=document.querySelector(".main-header");
const jordanNav=document.querySelector(".jordan-nav");
const navContent=document.querySelector(".nav-content");
const jordanLogo=document.querySelector(".jordan-logo img");
const jordanMenu=document.querySelector("jordan-menu");
window.addEventListener("scroll",()=>{
    const isScrolled = window.scrollY > 100;
    mainHeader.classList.toggle("hidden",isScrolled);
    jordanNav.classList.toggle("scrolled",isScrolled);

    navContent.classList.toggle("flex-colemn",!isScrolled);
    navContent.classList.toggle("flex-row",isScrolled);
    navContent.classList.toggle("justify-content-center",!isScrolled);
    navContent.classList.toggle("justify-content-between",isScrolled);
    jordanLogo.classList.toggle("small-logo",isScrolled);
    jordanMenu.classList.toggle("ms-auto",isScrolled);
})
// end jordan page header