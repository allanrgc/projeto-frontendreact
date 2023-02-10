import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  // gap: 16px;
  // padding: 16px;
  border: 1px solid #000;
  background-color: black;
  

  input, select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 4.5rem;
    margin: auto;
    border: 1px solid #fff;
    margin: 1rem;
    box-shadow: 1px 1px 6px 1px #fff;
  }
`;
