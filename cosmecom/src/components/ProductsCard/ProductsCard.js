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

const ProductCard = (props) => {
  return (
    <Container color={props.cardColor}>
      <div>
        <Produtos src={props.produtos.img} alt="img"/>
      </div>
      <div>
        <ProdutosNumber>{props.produtos.id}</ProdutosNumber>
        <ProdutosName>{props.produtos.name}</ProdutosName>
        <ValueContainer>R$ {props.produtos.value},00</ValueContainer>
        <p>Detalhes</p>
        <ButtonsCart>
          <CatchButton>Comprar</CatchButton>
          <img
          src="https://w7.pngwing.com/pngs/380/261/png-transparent-computer-icons-shopping-cart-add-to-cart-button-text-logo-monochrome.png"
          alt="Add to cart"
          width="48px"
          />
        </ButtonsCart>
      </div>
      </Container>
  );
};

export default ProductCard;
