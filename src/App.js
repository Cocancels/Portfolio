import "./App.css";
import { Header } from "./Header/Header";
import { Presentation } from "./Presentation/Presentation";
import { Projets } from "./Projets/Projets";
import { BubblesNav } from "./Bubbles-nav/BubblesNav";


function App() {
  return (
    <div id="app">
      <BubblesNav />
      <Header />
      <Presentation />
      <Projets />
    </div>
  );
}

export default App;
