
document.body.style.overflow="hidden";
document.addEventListener("DOMContentLoaded",function(){
var openingScreen=document.getElementById("openingScreen");
var openBtn=document.getElementById("openInvitation");
var music=document.getElementById("bgMusic");
var musicToggle=document.getElementById("musicToggle");
var isPlaying=false;
if(!openBtn){
console.error("ERROR: Button #openInvitation not found!");
return;
}
if(!openingScreen){
console.error("ERROR: Section #openingScreen not found!");
return;
}
console.log("Button found, adding click listener...");
openBtn.onclick=function(){
console.log("Button CLICKED!");
openingScreen.classList.add("hide-opening");
setTimeout(function(){
document.body.style.overflow="auto";
},1200);
if(music){
music.play().then(function(){
isPlaying=true;
if(musicToggle){
musicToggle.innerHTML="♫ Pause Music";
musicToggle.classList.add("active");
}
}).catch(function(e){
console.log("Autoplay blocked:",e);
});
}
};
if(musicToggle&&music){
musicToggle.addEventListener("click",function(){
if(!isPlaying){
music.play().then(function(){
musicToggle.innerHTML="♫ Pause Music";
musicToggle.classList.add("active");
isPlaying=true;
}).catch(function(e){
console.log("Music play blocked:",e);
});
}else{
music.pause();
musicToggle.innerHTML="♫ Play Music";
musicToggle.classList.remove("active");
isPlaying=false;
}
});
}
var weddingDate=new Date("June 07, 2026 07:35:00").getTime();
var daysEl=document.getElementById("days");
var hoursEl=document.getElementById("hours");
var minutesEl=document.getElementById("minutes");
var secondsEl=document.getElementById("seconds");
function formatTime(time){
return time<10?"0"+time:time;
}
function updateCountdown(){
var now=new Date().getTime();
var distance=weddingDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);
if(daysEl)daysEl.innerHTML=formatTime(days);
if(hoursEl)hoursEl.innerHTML=formatTime(hours);
if(minutesEl)minutesEl.innerHTML=formatTime(minutes);
if(secondsEl)secondsEl.innerHTML=formatTime(seconds);
if(distance<0){
clearInterval(countdownInterval);
if(daysEl)daysEl.innerHTML="00";
if(hoursEl)hoursEl.innerHTML="00";
if(minutesEl)minutesEl.innerHTML="00";
if(secondsEl)secondsEl.innerHTML="00";
}
}
updateCountdown();
var countdownInterval=setInterval(updateCountdown,1000);
var revealElements=document.querySelectorAll(
".story-card, .event-card, .gallery-item, .save-date-card, .wish-card, .rsvp-card"
);
function revealOnScroll(){
var windowHeight=window.innerHeight;
revealElements.forEach(function(element){
var elementTop=element.getBoundingClientRect().top;
if(elementTop<windowHeight-100){
element.classList.add("show");
}
});
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();
var wishForm=document.querySelector(".wish-form");
if(wishForm){
wishForm.addEventListener("submit",function(e){
e.preventDefault();
var input=wishForm.querySelector("input");
var textarea=wishForm.querySelector("textarea");
var name=input.value.trim();
var message=textarea.value.trim();
if(name===""||message===""){
alert("Please fill all fields 💛");
return;
}
alert("Thank you for your lovely wishes 💖");
input.value="";
textarea.value="";
});
}
window.addEventListener("scroll",function(){
var scrolled=window.scrollY;
var heroImage=document.querySelector(".hero-image");
if(heroImage){
heroImage.style.transform="scale(1.08) translateY("+(scrolled*0.08)+"px)";
}
});
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
anchor.addEventListener("click",function(e){
var target=document.querySelector(this.getAttribute("href"));
if(target){
e.preventDefault();
target.scrollIntoView({behavior:"smooth"});
}
});
});
var touchButtons=document.querySelectorAll(
".open-btn, .rsvp-btn, .wish-form button, .music-btn"
);
touchButtons.forEach(function(button){
button.addEventListener("touchstart",function(){
button.classList.add("touch-active");
});
button.addEventListener("touchend",function(){
setTimeout(function(){
button.classList.remove("touch-active");
},150);
});
});
});
window.addEventListener("load",function(){
document.body.classList.add("loaded");
});

