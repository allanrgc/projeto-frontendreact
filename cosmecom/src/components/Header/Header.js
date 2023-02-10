import React from "react";
import { Container } from "./styles";

const Header = (props) => {

  return (
    <Container>
      <p>{props.nomeLogin}</p>
      <h3>Cosmecom</h3>
      
      
    </Container>
  );
};

export default Header;

