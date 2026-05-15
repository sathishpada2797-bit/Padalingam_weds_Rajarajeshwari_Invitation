

document.addEventListener("DOMContentLoaded",function(){
var openingScreen=document.getElementById("openingScreen");
var openBtn=document.getElementById("openInvitation");
var mainContent=document.getElementById("mainContent");
if(!openBtn){
console.error("ERROR: #openInvitation not found");
return;
}
if(!openingScreen){
console.error("ERROR: #openingScreen not found");
return;
}
console.log("✅ Opening screen ready");
openBtn.onclick=function(){
console.log("✅ Button clicked — opening invitation");
openingScreen.classList.add("hide-opening");
setTimeout(function(){
document.body.style.overflow="auto";
if(mainContent){
mainContent.style.display="block";
}
},1200);
};
});


