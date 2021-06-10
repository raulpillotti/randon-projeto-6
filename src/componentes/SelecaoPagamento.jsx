import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import pagamento from "../Servicos/pagamento";
import Container from "@material-ui/core/Container";
import "../App.css";
function SelecaoPagamento(props) {
  const [desconto, setDesconto] = useState(0);

  const onChangeComboBox = (event) => {
    const selectedId = event.target.value;
    const selectedPagamento = pagamento.filter((d) => d.id === selectedId)[0];
    props.setFormaPagamento(selectedPagamento);
    setDesconto(selectedPagamento.descontoString);
  };

  return (
    <Container>
      <h3 className="titulo">Forma de pagamento</h3>
      <div className="titulo">
        <Select
          onChange={(event) => {
            onChangeComboBox(event);
          }}
        >
          {pagamento.map((pagamento) => (
            <option key={pagamento.id} value={pagamento.id}>
              {" "}
              {pagamento.nome}{" "}
            </option>
          ))}
        </Select>
      </div>

      <p className="desconto"> Desconto: {desconto}</p>
    </Container>
  );
}

export default SelecaoPagamento;
