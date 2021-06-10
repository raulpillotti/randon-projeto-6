import Container from "@material-ui/core/Container";
import "./App.css";
import CadastroUsuario from "./componentes/CadastroUsuario";
import SelecaoPagamento from "./componentes/SelecaoPagamento";
import SelecaoItens from "./componentes/SelecaoItens";
import CadastroCompleto from './componentes/CadastroCompleto'


function App() {
  return (
    <Container>
      
       <CadastroCompleto aoEnviar = {aoEnviarForm} />  
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
