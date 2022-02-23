'use strict';

const cube = document.querySelector('.cube');

function game() {
  cube.style.transform = 'rotateX(0deg) rotateZ(0deg) rotateY(0deg)';
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  console.log(randomNumber);
  if (randomNumber === 1) {
    cube.style.transform = 'rotateX(3600deg) rotateZ(3600deg) rotateY(3600deg)';
  } else if (randomNumber === 2) {
    cube.style.transform = 'rotateX(808deg) rotateZ(3600deg) rotateY(3600deg)';
  } else if (randomNumber === 3) {
    cube.style.transform = 'rotateX(3600deg) rotateZ(3600deg) rotateY(2430deg)';
  } else if (randomNumber === 4) {
    cube.style.transform = 'rotateX(3600deg) rotateZ(3600deg) rotateY(4410deg)';
  } else if (randomNumber === 5) {
    cube.style.transform = 'rotateX(2430deg) rotateZ(3600deg) rotateY(3600deg)';
  } else if (randomNumber === 6) {
    cube.style.transform = 'rotateX(3600deg) rotateZ(3600deg) rotateY(1980deg)';
  }
}

cube.addEventListener('click', game);
