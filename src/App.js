import "./App.css";
import { Header } from "./Header/Header";
import { Presentation } from "./Presentation/Presentation";
import { Projets } from "./Projets/Projets";
import { Competences } from "./Competences/Competences";


function App() {
  return (
    <div id="app">
      <Header />
      <Presentation />
      <Projets />
      {/* <Competences /> */}
    </div>
  );
}

export default App;
