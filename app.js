// HEART BUBBLES
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);


// DOOR OPEN
function openDoor() {
    document.querySelector(".left").style.transform = "rotateY(-100deg)";
    document.querySelector(".right").style.transform = "rotateY(100deg)";

    setTimeout(() => {
        document.getElementById("door").style.display = "none";
        document.getElementById("card").classList.remove("hidden");
    }, 1200);
}
