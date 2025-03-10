// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btn = document.querySelector('.btn-joke');
const url = 'https://api.chucknorris.io/jokes/random';
const jokes = document.querySelector('.joke');

function randomJoke(event){
  event.preventDefault();
  fetch(url)
    .then(responde => responde.json())
    .then(joke => {
      jokes.innerText = joke.value;
    });
}

btn.addEventListener('click', randomJoke);
