export default function initTime(){
  const body = document.querySelector('body');

  function toggleBgColor(){
    body.classList.toggle('color-red');
  }

  setInterval(toggleBgColor, 2000);

  const cronometro =  document.querySelector('[data-time]');
  const btnStart = document.querySelector('#start');
  const btnPause = document.querySelector('#pause');

  let init = 0;
  let timer;

  function startCronometro(){
    btnStart.setAttribute('disabled', '');
    btnPause.removeAttribute('disabled', '');

    timer = setInterval(() => {
      cronometro.innerHTML = init++;
    }, 1000);
  }

  function pauseCronometro(){
    clearInterval(timer);
    btnStart.removeAttribute('disabled', '');
  }

  function resetCronometro(){
    cronometro.innerHTML = 0;
    init = 0;
  }

  btnStart.addEventListener('click', startCronometro);
  btnPause.addEventListener('click', pauseCronometro);
  btnPause.addEventListener('dblclick', resetCronometro);
};
