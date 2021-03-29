import "./App.css";
import { Header } from "./Header/Header";
import { Presentation } from "./Presentation/Presentation";
import { Projets } from "./Projets/Projets";

function App() {
  return (
    <div id="app">
      <Header />
      <Presentation />
      <Projets />
    </div>
  );
}

export default App;
