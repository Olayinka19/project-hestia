import logo from "./logo.svg";
import About from "./components/About";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import Showcase from "./components/Showcase";
import Team from "./components/Team";
import Faq from "./components/Faq";
import "./App.css";
import {light} from './myStyle/Themes'
// import GlobalStyles from "./myStyle/GlobalStyle";

function App() {
  return (
    <div className="App">
      <section theme={light}>
      <h1>HESTIA</h1>
      <About />
      <Home />
      <Roadmap />
      <Showcase />
      <Team />
      <Faq />
      {/* <GlobalStyles /> */}
      </section>

    </div>
  );
}

export default App;
