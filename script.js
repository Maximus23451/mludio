const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

function closeMenu() {
  navLinks.classList.remove('show');
  overlay.classList.remove('show');
}

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  overlay.classList.toggle('show');
});

// 🖱️ Click outside nav closes menu
overlay.addEventListener('click', closeMenu);

// 🔗 Close menu on nav click (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
// Typing Effect
const typingText = document.getElementById("typing-text");
const phrases = ["Maxツ.", "Music Lover.", "vmhd.my.id."];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (phraseIndex >= phrases.length) phraseIndex = 0;
  let currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, letterIndex--);
    if (letterIndex < 0) {
      isDeleting = false;
      phraseIndex++;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, letterIndex++);
    if (letterIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Scroll Animation
const animatedElements = document.querySelectorAll('.animate');
function handleScrollAnimation() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// 🎵 Music Toggle
const audio = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('musicToggle');
const volumeBtn = document.getElementById('volumeToggle');

toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = '⏸';
  } else {
    audio.pause();
    toggleBtn.textContent = '▶️';
  }
});

volumeBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  volumeBtn.textContent = audio.muted ? '🔇' : '🔊';
});


