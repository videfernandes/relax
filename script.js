const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Inspire!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Segure o fôlego';

    setTimeout(() => {
      text.innerText = 'Expire!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);