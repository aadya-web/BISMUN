// COUNTDOWN

const targetDate =
new Date("July 25, 2026 09:00:00").getTime();

function updateCountdown() {

const now = new Date().getTime();

const distance = targetDate - now;

if (distance < 0) {

document.getElementById("countdown").innerHTML =
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

document.getElementById("countdown").innerHTML =

`${days}d ${hours}h ${minutes}m ${seconds}s`;

}

updateCountdown();

setInterval(updateCountdown, 1000);

// SECTION ANIMATIONS

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},

{
threshold: 0.15
}

);

sections.forEach(section => {

section.style.opacity = "0";

section.style.transform =
"translateY(40px)";

section.style.transition =
"all 0.8s ease";

observer.observe(section);

});

// CARD ANIMATIONS

const cards =
document.querySelectorAll(".card");

cards.forEach((card, index) => {

card.style.opacity = "0";

card.style.transform =
"translateY(30px)";

card.style.transition =
`all 0.7s ease ${index * 0.1}s`;

});

const cardObserver =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},

{
threshold: 0.2
}

);

cards.forEach(card => {

cardObserver.observe(card);

});

// HEADER FADE IN

window.addEventListener("load", () => {

const header =
document.querySelector("header");

header.style.opacity = "0";

header.style.transform =
"translateY(30px)";

header.style.transition =
"all 1.2s ease";

setTimeout(() => {

header.style.opacity = "1";

header.style.transform =
"translateY(0px)";

}, 200);

});
