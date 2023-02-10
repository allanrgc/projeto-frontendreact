import React from "react";
import { Container } from "./styles";

const Aside = ({
  buscaId,
  setBuscaId,
  buscaName,
  setBuscaName,
  orderName,
  setOrderName,
  orderValue,
  setOrderValue,
}) => {

  return (
    <Container>
      <input disabled
        value={buscaId}
        onChange={(e) => {
          setBuscaId(e.target.value);
        }}
        type="number"
        placeholder="Id"
      />
      <input
        value={buscaName}
        onChange={(e) => {
          setBuscaName(e.target.value);
        }}
        type="text"
        placeholder="Produto"
      />
      <select
        value={orderName}
        onChange={(e) => {
          setOrderName(e.target.value);
        }}
      >
        <option value="">Ordenar</option>
        <option value="crescente">De A - Z</option>
        <option value="decrescente">De Z - A</option>
      </select>
      <select
        value={orderValue}
        onChange={(e) => {
          setOrderValue(e.target.value);
        }}
      >
        <option value="">Preço</option>
        <option value="Maior valor">Crescente</option>
        <option value="Menor valor">Decrescente</option>
      </select>
    </Container>
  );
};

export default Aside;

