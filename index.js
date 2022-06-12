// var audio = document.createElement('audio');
// audio.setAttribute('src', 'music.mp3');
// audio.loop=true;
// audio.play();


window.addEventListener('DOMContentLoaded',event =>{
  const audio = document.querySelector('audio');
  audio.volume= 0.2;
  audio.loop = true;
  audio.play();
});

