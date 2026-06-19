const targetDate =
new Date(
"July 25, 2026 09:00:00"
).getTime();

function updateCountdown(){

const now =
new Date().getTime();

const distance =
targetDate - now;

if(distance < 0){

document.getElementById("countdown")
.innerHTML =
"Conference Has Started!";

return;

}

const days =
Math.floor(
distance /
(1000 * 60 * 60 * 24)
);

const hours =
Math.floor(
(distance %
(1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(distance %
(1000 * 60 * 60))
/
(1000 * 60)
);

const seconds =
Math.floor(
(distance %
(1000 * 60))
/
1000
);

document.getElementById("countdown")
.innerHTML =

`${days}d ${hours}h ${minutes}m ${seconds}s`;

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0px)";

}

});

},

{
threshold:0.1
}

);

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
"all .7s ease";

observer.observe(card);

});
