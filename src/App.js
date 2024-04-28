import Navbar from "./component/navbar/navbar";
import Info from "./component/homepage/info";
import About from "./component/about/about"
import Portfolio from "./component/portfolio/portfolio"
import Contact from "./component/contact/contact"
import Resume from "./component/resume/resume"
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
