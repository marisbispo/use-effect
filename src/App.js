import React from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    if (produtos !== null) window.localStorage.setItem('produto', produtos);
  }, [produtos]);

  React.useEffect(() => {
    const localProdutos = window.localStorage.getItem('produto');
    if (localProdutos !== null) setProdutos(localProdutos);
  });

  function handleClick({ target }) {
    setProdutos(target.innerText);
  }

  return (
    <div>
      <p>preferencia: {produtos} </p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produtos} />
    </div>
  );
};

export default App;
