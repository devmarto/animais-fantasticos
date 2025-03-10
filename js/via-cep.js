// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar


const address = document.querySelector('.address');
const textCep = document.querySelector('#textCep');
const btnCep = document.querySelector('#btnCep');
const rua = document.querySelector('#rua');
const numeroCep = document.querySelector('#cep');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');

btnCep.addEventListener('click', handleClick);

function handleClick(event){
  event.preventDefault();
  const cep = textCep.value;
  searchCep(cep);
  address.classList.remove('inactive');
}

function searchCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(endereco => {
      rua.innerText = endereco.logradouro;
      numeroCep.innerText = endereco.cep;
      bairro.innerText = endereco.bairro;
      localidade.innerText = endereco.localidade;
      uf.innerText = endereco.uf;
    });
};

