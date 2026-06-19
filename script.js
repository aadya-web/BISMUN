// COUNTDOWN TIMER

const targetDate = new Date(
"July 25, 2026 09:00:00"
).getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = targetDate - now;

if(distance < 0){

document.getElementById("countdown").innerHTML =
"Conference Has Started!";

return;
}

const days = Math.floor(
distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("countdown").innerHTML =
`${days}d ${hours}h ${minutes}m ${seconds}s`;

}

updateCountdown();

setInterval(
updateCountdown,
1000
);


// CARD ANIMATION ON SCROLL

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0px)";

}

});

},

{
threshold:0.15
}

);

cards.forEach(card=>{

card.style.opacity = "0";
card.style.transform =
"translateY(40px)";
card.style.transition =
"all 0.7s ease";

observer.observe(card);

});


// BUTTON RIPPLE EFFECT

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener(
"click",
function(e){

const circle =
document.createElement("span");

const diameter =
Math.max(
this.clientWidth,
this.clientHeight
);

const radius =
diameter / 2;

circle.style.width =
circle.style.height =
`${diameter}px`;

circle.style.left =
`${e.clientX -
this.offsetLeft -
radius}px`;

circle.style.top =
`${e.clientY -
this.offsetTop -
radius}px`;

circle.classList.add("ripple");

const ripple =
this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

}

);

});


// SMOOTH FADE FOR SECTIONS

const sections =
document.querySelectorAll("section");

const sectionObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0px)";

}

});

},

{
threshold:0.1
}

);

sections.forEach(section=>{

section.style.opacity = "0";
section.style.transform =
"translateY(30px)";
section.style.transition =
"all 0.8s ease";

sectionObserver.observe(section);

});


// TITLE GLOW EFFECT

const title =
document.querySelector("h1");

let glow = true;

setInterval(()=>{

if(glow){

title.style.textShadow =
"0 0 40px rgba(231,193,100,.35)";

}else{

title.style.textShadow =
"0 0 20px rgba(231,193,100,.15)";

}

glow = !glow;

},2000);