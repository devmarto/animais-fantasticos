const titulo = document.querySelector('.titulo');


async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json');
    console.log(dadosResponse);
    const dadosJSON = await dadosResponse.json();
    console.log(dadosJSON);
    document.body.innerText = dadosJSON.aula;
  } catch {
    console.log('Erro!');
  }
}

puxarDados();
