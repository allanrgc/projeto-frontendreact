  import styled, { createGlobalStyle } from "styled-components";
  import produtos from "./produtos/produtos.json";
  import ProductCard from "./components/ProductsCard/ProductsCard";
  import { getColors } from "./utils/ReturnCardColor";
  import Header from "./components/Header/Header.js";
  import Aside from "./components/Aside/Aside.js";
  import { useState } from "react";
  import background from "./assets/Cosmic.gif";
  const GlobalStyle = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    
    }
  `;
  const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;
    background: black;
  `;
  function App() {
    const [nomeLogin, setNomeLogin] = useState("Nome doo Usuário");
    const [buscaId, setBuscaId] = useState("");
    const [buscaName, setBuscaName] = useState("");
    const [orderName, setOrderName] = useState("");
    const [orderValue, setOrderValue] = useState("");
    return (
      <>
        <GlobalStyle />
        <Header
          nomeLogin={nomeLogin}
          
        />
        <Aside>
          buscaId={buscaId}
          setBuscaId={setBuscaId}
          buscaName={buscaName}
          setBuscaName={setBuscaName}
          orderName={orderName}
          setOrderName={setOrderName}
          orderValue={orderValue}
          setOrderValue={setOrderValue}
        </Aside>
        <CardsContainer 
        style={{ 
          // backgroundImage: `url(https://`
          backgroundImage: `url(${background})`
          }}> 
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
            .map((produtos) => {
              return (
                <ProductCard
                  cardColor={getColors(produtos.type[0])}
                  key={produtos.id}
                  produtos={produtos}
                />
              );
            })}
        </CardsContainer>
        <footer>
          <p>feito por Allanzin. ₢ Todos os meus direitos estão reservados aqui em! Você só tem o direito de ficar calado.</p>
        </footer>
      </>
    );
  }
  
  export default App;