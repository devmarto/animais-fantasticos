// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const price = document.querySelector('.price');
const url = 'https://blockchain.info/ticker';

setInterval(() => {
  fetch(url)
    .then(response => response.json())
    .then(bitcoin => {
      const priceBitcoin = bitcoin.BRL.buy.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      price.innerText = priceBitcoin;
    })
    .catch(error => {
      price.innerText = "Erro ao carregar o preço.";
    });
}, 30000);
