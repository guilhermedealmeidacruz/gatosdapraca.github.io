// app.js

// Quando a página carregar, buscar a lista de gatos da API
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/gatos')
    .then(res => res.json())
    .then(data => {
      console.log(data); // só pra testar no console

      // Exemplo: mostrar o nome dos gatos na página
      const lista = document.createElement('ul');

      data.forEach(gato => {
        const item = document.createElement('li');
        item.textContent = gato.nome || 'Gato sem nome'; // adapte conforme o seu JSON
        lista.appendChild(item);
      });

      // Adiciona essa lista em algum lugar do seu HTML, ex: dentro do <main>
      document.querySelector('main').appendChild(lista);
    })
    .catch(err => {
      console.error('Erro ao buscar gatos:', err);
    });
});
