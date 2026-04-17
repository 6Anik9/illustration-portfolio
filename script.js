let progress = 0;
const bar = document.getElementById('progress-bar');
const pct = document.getElementById('percent');

// 1. Loader Simulation
const loading = setInterval(() => {
    progress += Math.floor(Math.random() * 15);
    if(progress >= 100) {
        progress = 100;
        clearInterval(loading);
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('welcome-screen').style.display = 'flex';
        }, 500);
    }
    bar.style.width = progress + '%';
    pct.innerText = progress + '%';
}, 80);

// 2. Entry Logic
function enterSite() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    setTimeout(() => {
        document.getElementById("dialogue-overlay").style.display = "flex";
        typeEffect();
    }, 800);
}

// 3. Typewriter Effect
const message = "Welcome. I am Anik Sheikh, the artist and designer behind this portfolio. This gallery showcases where my art meets high-end code. Everything you see is my original creation.";
const speed = 35; 
let index = 0;

function typeEffect() {
    if (index < message.length) {
        document.getElementById("dialogue-text").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

// 4. Modal Control
function closeDialogue() {
    document.getElementById("dialogue-overlay").style.display = "none";
}

// 5. Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('animate-in'); }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));