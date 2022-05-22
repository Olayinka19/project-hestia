import logo from "./logo.svg";
import About from "./components/About";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import Showcase from "./components/Showcase";
import Team from "./components/Team";
import Faq from "./components/Faq";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>HESTIA</h1>
      <About />
      <Home />
      <Roadmap />
      <Showcase />
      <Team />
      <Faq />

    </div>
  );
}

export default App;
