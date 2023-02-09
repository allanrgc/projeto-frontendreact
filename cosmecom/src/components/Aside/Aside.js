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
      <input
        value={buscaId}
        onChange={(e) => {
          setBuscaId(e.target.value);
        }}
        type="number"
        placeholder="Buscar por id"
      />
      <input
        value={buscaName}
        onChange={(e) => {
          setBuscaName(e.target.value);
        }}
        type="text"
        placeholder="Buscar por nome"
      />
      <select
        value={orderName}
        onChange={(e) => {
          setOrderName(e.target.value);
        }}
      >
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
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

