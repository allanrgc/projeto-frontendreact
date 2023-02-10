  import styled, { createGlobalStyle } from "styled-components";
  import produtos from "./produtos/produtos.json";
  import { ProductCard } from "./components/ProductsCard/ProductsCard";
  import { getColors } from "./utils/ReturnCardColor";
  import Header from "./components/Header/Header.js";
  import Aside from "./components/Aside/Aside.js";
  import { useEffect, useState } from "react";
  import background from "./assets/Cosmic.gif";
  import { Cart } from "./components/Cart/Cart"

  const GlobalStyle = createGlobalStyle`
  
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
      
    }
  `;
  const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    background: black;
  `;
  function App() {
    const [nomeLogin, setNomeLogin] = useState("User: Labenu");
    const [buscaId, setBuscaId] = useState("");
    const [buscaName, setBuscaName] = useState("");
    const [orderName, setOrderName] = useState("");
    const [orderValue, setOrderValue] = useState("");

    const [produtosCart, setProdutosCart] = useState([]);

    useEffect(() => {
      const stringProduct = JSON.stringify(produtosCart);
      if (produtosCart.length > 0) {
          localStorage.setItem('cart', stringProduct);
      }
  }, [produtosCart]);

  useEffect(() => {
      const getShoppingCart = localStorage.getItem('cart');
      const novaLista = JSON.parse(getShoppingCart);
      if (novaLista) {
          setProdutosCart(novaLista);
      }
  }, []);

    const addProductCart = (produtos) => {
  
      const produtoExistente = produtosCart.find(produto => produto.id === produtos.id);
  
      if (produtoExistente) {
        setProdutosCart(
          produtosCart.map(produto=>produto.id === produtos.id
            ? {...produto, quantity : produto.quantity +1} 
            : produto
            )
            
        )
      } else {
        setProdutosCart([...produtosCart, {...produtos, quantity: 1}])
      }
  
    }

    return (
      <>
      <GlobalStyle />
        <Header
          nomeLogin={nomeLogin}
          
        />
        <Cart
                  cardColor={getColors(produtos.type)}
                  produtosCart={produtosCart}
                  setProdutosCart={setProdutosCart}
                  
                />
        <Aside buscaId={buscaId}
          setBuscaId={setBuscaId}
          buscaName={buscaName}
          setBuscaName={setBuscaName}
          orderName={orderName}
          setOrderName={setOrderName}
          orderValue={orderValue}
          setOrderValue={setOrderValue}
          />
        
        <CardsContainer 
        style={{ 
          // backgroundImage: `url(https://`
          backgroundImage: `url(${background})`
          }}> 
          {/* <p>{JSON.stringify(produtosCart)}</p> */}
          {produtos
            .filter((produtos) => {
              if (buscaId && produtos.id.includes(buscaId)) {
                //OU//if (buscaId && produtos.id.includes(buscaId)) { PARA PROCURA CADA INPUT COLOCADO
                return produtos;
              } else if (!buscaId) {
                return produtos;
              }
            })
            .filter((produtos) => {
              if (
                buscaName &&
                produtos.name.toLowerCase().includes(buscaName)
              ) {
                return produtos;
              } else if (!buscaName) {
                return produtos;
              }
            })
            .sort((a, b) => {
              if (orderName === "crescente") {
                return a.name < b.name ? -1 : 0;
              } else if (orderName === "decrescente") {
                return a.name < b.name ? 0 : -1;
              }
            })
            .sort((a, b) => {
              if (orderValue === "Maior valor") {
                return a.value < b.value ? -1 : 0;
              } else if (orderValue === "Menor Valor") {
                return a.value < b.value ? 0 : -1;
              }
            })
            .map((products) => {
              return (
                <ProductCard
                  cardColor={getColors(products.type[0])}
                  key={products.id}
                  produtos={products}
                  // {...produtosCart.find((item) => item.id === produtos.id)?.qtd
                  //   ? produtosCart.find((item) => item.id === produtos.id)?.qtd
                  //   : 0}
                  addProductCart={addProductCart}
                />

              );
            })}
        </CardsContainer>
        <aside>
              {/* <Cart
                  cardColor={getColors(produtos.type)}
                  produtosCart={produtosCart}
                  setProdutosCart={setProdutosCart}
                  
                /> */}
        </aside>
        <footer>
          <p>feito por Allanzin. ₢ Todos os meus direitos estão reservados aqui em!</p>
        </footer>
      </>
    );
  }
  
  export default App;