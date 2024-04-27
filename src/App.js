import Navbar from "./component/navbar/navbar";
import Info from "./component/homepage/info";
import About from "./component/about/about"
import Portfolio from "./component/portfolio/portfolio"
import Contact from "./component/contact/contact"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
