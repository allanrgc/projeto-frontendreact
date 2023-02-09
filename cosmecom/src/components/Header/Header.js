import React from "react";
import { Container } from "./styles";

const Header = ({
  nomeLogin
}) => {

  return (
    <Container>
      <p>{nomeLogin}</p>
      <h3>Cosmecom</h3>
    </Container>
  );
};

export default Header;

