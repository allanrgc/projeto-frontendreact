import React from "react";
import {
  Container,
  ProdutosNumber,
  ProdutosName,
  ValueContainer,
  CatchButton,
  Produtos,
  ButtonsCart
} from "./styles";

export const ProductCard = (props) => {

  

  return (
    <Container color={props.cardColor}>
      <div>
        <Produtos src={props.produtos.img} alt="img"/>
      </div>
      <div>
        <ProdutosNumber>{props.produtos.id}</ProdutosNumber>
        <ProdutosName>{props.produtos.name}</ProdutosName>
        <ValueContainer>{props.produtos.value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</ValueContainer>
        <ButtonsCart>
          <CatchButton onClick={()=>props.addProductCart(props.produtos)}>       
          <img
          src="https://w7.pngwing.com/pngs/380/261/png-transparent-computer-icons-shopping-cart-add-to-cart-button-text-logo-monochrome.png"
          alt="Add to cart"
          width="48px"
          />
          </CatchButton>
        </ButtonsCart>
      </div>
      </Container>
  );
};
