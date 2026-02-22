// Mobile Toggle
const toggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-links");
if(toggle){
toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});
}

// Dark Mode
const themeBtn=document.getElementById("theme-toggle");
if(themeBtn){
themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark-mode");
});
}

// Slider
let slides=document.querySelectorAll(".slide");
let index=0;
setInterval(()=>{
if(slides.length>0){
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
}
},4000);

// Scroll Reveal
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});

// Counter
document.querySelectorAll(".counter").forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;
const inc=target/200;
if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,10);
}else{
counter.innerText=target;
}
};
update();
});

// Dynamic Notice
const notices=["Admissions Open 2026-27","Annual Sports Day Soon","PTM Next Month"];
const container=document.getElementById("notice-container");
if(container){
notices.forEach(n=>{
const li=document.createElement("li");
li.textContent=n;
container.appendChild(li);
});
}

// Gallery Modal
function openModal(img){
document.getElementById("imageModal").style.display="flex";
document.getElementById("modalImg").src=img.src;
}
function closeModal(){
document.getElementById("imageModal").style.display="none";
}
const hamburger=document.getElementById("hamburger");
const navLinks=document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});