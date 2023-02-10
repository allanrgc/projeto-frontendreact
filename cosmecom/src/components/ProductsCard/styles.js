import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  min-width: 15rem;
  max-width: 16rem;
  min-height: 20rem;
  max-height: auto;
  background-color: ${(props) => props.color};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  color: #ffffff;
`;

export const ProdutosNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 9px;
  font-weight: 600;
  text-align: left;
`;

export const ProdutosName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const ProdutosType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const ValueContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const ButtonsCart = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.25rem;
  justify-content: center;
  align-items: center;
`;

export const CatchButton = styled.button`
  margin: 0.25rem 0.5rem;
  width: 4rem;
  height: 2rem;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const Produtos = styled.img`
  width: 153px;
  height: 193px;
  box-shadow: 5px 5px 15px 5px #000000;
`;