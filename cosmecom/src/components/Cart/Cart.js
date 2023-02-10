import { useState } from "react";
import { Container } from "./styles"

export function Cart({
  produtosCart,
  setProdutosCart
}) {
  const removeCart = (produto) => {
    const novaListoVazia = produtosCart.filter((item)=>item!==produto)
    if(produto.quantity > 1 ){
      produto.quantity -= 1
    }else{
      setProdutosCart(novaListoVazia)
    }
  }

  const addItemCart = (id) => {
    const novaLista = produtosCart.map((produto)=>{
      if(produto.id === id){
        produto.quantity = produto.quantity +1
      }
      return produto
    })
    setProdutosCart(novaLista)
  }

  const removeItemCart = (produto, id) => {
    if(produto.quantity > 1){
      const novaLista = produtosCart.map((produto)=>{
        if(produto.id === id){
          produto.quantity = produto.quantity - 1
        }
        return produto
      })
      setProdutosCart(novaLista)
    }else{
      removeCart(produto)
    }
  }

  const totalCart = () => {
    return produtosCart.reduce((acc,produto)=>acc + produto.value * produto.quantity, 0)
  }
    
  return (
    <Container>
      <h3>Carrinho</h3>
      {produtosCart.map((produtos, index)=>(
        <div key={index}>
        <span>
          {produtos.name}
        </span>
        <br/>
        <span>
            Quantidade = {produtos.quantity}
        </span>
        <br/>
          <span>{produtos.value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",})}
          </span>
        <br/>
        <button onClick={()=>addItemCart(produtos.id)}>Adcionar</button>
        <button onClick={()=>removeItemCart(produtos,produtos.id)}>Remover</button>
        </div>
      ))}
      <br/>
      <span>
        Total: {''}
        {totalCart().toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",})}
      </span>
    </Container>
  );
}