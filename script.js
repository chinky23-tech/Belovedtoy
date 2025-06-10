/*const barbie = document.getElementById('barbie');
    const speech = document.getElementById('speech');
    const music = document.getElementById('bg-music');
    let musicPlaying = false;

    const outfits = {
      pink: 'https://i.imgur.com/1Xj6u1p.png',
      blue: 'https://i.imgur.com/hkqykFf.png',
      gold: 'https://i.imgur.com/2C8YjOi.png'
    };

    function changeOutfit(color) {
      barbie.src = outfits[color];
      barbie.style.transform = 'rotateY(360deg)';
      speech.innerText = `Ooh! I love the ${color} dress!`;
      setTimeout(() => {
        barbie.style.transform = 'rotateY(0deg)';
      }, 500);
    }

    function toggleMusic() {
      if (!musicPlaying) {
        music.play();
        musicPlaying = true;
      } else {
        music.pause();
        musicPlaying = false;
      }
    }*/
//hamburger 

document.addEventListener('DOMContentLoaded',function (){
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click" , function(){
navLinks.classList.toggle("active");
});
});