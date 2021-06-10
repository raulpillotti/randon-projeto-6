import React, { useEffect, useState } from "react";
import "../App.css";
import { Multiselect } from "multiselect-react-dropdown";
import itens from "../Servicos/itens";
import Container from "@material-ui/core/Container";
function SelecaoItens(props) {
  const [somaTotal, setSomaTotal] = useState(0);
  const onSelect = (data) => {
    props.setItens(data);
    let soma = 0;
    soma = data.reduce((a, { valor }) => a + valor, 0);
    props.setSomaItens(soma);
    setSomaTotal(soma);
  };

  return (
    <Container>
      <h3 className="titulo"> Selecionar produtos </h3>
      <Multiselect
        options={itens}
        displayValue="nome"
        onSelect={onSelect}
        placeholder="Produtos"
      />
      <p>Valor: R${(Math.round(somaTotal * 100) / 100).toFixed(2)} </p>
    </Container>
  );
}

export default SelecaoItens;
