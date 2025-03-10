const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(response => response.json())
  .then((text) => {
    console.log(text.cep);
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerHTML = text.bairro;
  });

