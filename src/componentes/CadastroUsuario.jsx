import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { TextField, Button } from "@material-ui/core";
import "../App.css";

function CadastroUsuario(props) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    props.setUsuario({ nome: nome ?? "" });
  }, [nome, cpf]);

  useEffect(() => console.log(props), []);

  return (
    <Container>
      <form>
        <h3 className="titulo">Dados usuário</h3>
        <div className="inputUsuario">
          <TextField
            onChange={(event) => {
              setNome(event.target.value);
            }}
            placeholder="Nome completo"
            value={nome}
            name="nome"
            variant="filled"
          />
        </div>
        <div className="inputUsuario">
          <TextField
            onChange={(event) => {
              setCpf(event.target.value);
            }}
            placeholder="CPF"
            value={cpf}
            name="cpf"
            type="text"
            variant="filled"
          />
        </div>
      </form>
    </Container>
  );
}

export default CadastroUsuario;
