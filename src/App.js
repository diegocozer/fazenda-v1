import "./App.css";
import Conteudo from "./pages/Conteudo";
import Depoimentos from "./pages/Depoimentos";
import Footer from "./pages/Footer";
import Inicio from "./pages/Inicio";
import Localizacao from "./pages/Localizacao";
import Midia from "./pages/Midia";

function App() {
  return (
    <div className="App">
      <Inicio />
      <Conteudo />
      <Localizacao />
      <Midia />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default App;
