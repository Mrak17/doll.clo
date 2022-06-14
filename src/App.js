import Header from "./components/header/Header";
import About from "./components/about/About";
import Ware from "./components/ware/Ware";
import Response from "./components/response/Response";
import Social from "./components/social/Social";

function App() {
  return (
    <div className="wrapper clear" id="Home">
      <Header />
      <hr></hr>
      <div className="content p-30">
        <About />
        <hr></hr>
        <Ware />
        <hr></hr>
        <Response />
        <hr></hr>
        <Social />
      </div>
      <div className="arrow-up">
        <a href="#Home">
          <img src="/img/arrow-up.svg" alt="up"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
