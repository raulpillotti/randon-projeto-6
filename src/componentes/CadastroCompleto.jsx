import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { TextField, Button } from "@material-ui/core";
import "../App.css";
import CadastroUsuario from "./CadastroUsuario";
import SelecaoItens from "./SelecaoItens";
import SelecaoPagamento from "./SelecaoPagamento";
import axios from "axios";

function CadastroCompleto() {
  const [usuario, setUsuario] = useState({});
  const [itens, setItens] = useState([]);
  const [somaItens, setSomaItens] = useState();
  const [formaPagamento, setFormaPagamento] = useState("");
  const [valorFinal, setValorFinal] = useState(0);
  useEffect(() => {

    const valor = somaItens * formaPagamento.desconto;
    console.log(valor);

    if(isNaN(valor)){
      setValorFinal(0);
    }
    else{
      setValorFinal(valor);
    }
    
  }, [formaPagamento]);


  return (
    <Container>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let dados = {};
          axios
            .post("google.com", dados)
            .then((result) => {})
            .catch((error) => {});
        }}
      >
        <CadastroUsuario setUsuario={setUsuario} />

        <SelecaoItens setItens={setItens} setSomaItens={setSomaItens} />
        <SelecaoPagamento setFormaPagamento={setFormaPagamento} />
        <Container> <h2> Valor Final:R$: {(Math.round(valorFinal * 100) / 100).toFixed(2)} </h2></Container>
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroCompleto;
