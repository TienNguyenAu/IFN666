import Navbar from "./component/navbar/navbar";
import Info from "./component/homepage/info";
import About from "./component/about/about"
import Portfolio from "./component/portfolio/portfolio"
import Contact from "./component/contact/contact"
import Resume from "./component/resume/resume"
import Footer from "./component/footer/footer";
import React,{useState} from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('info');
  const handleNavbarClick = (page) => {
    setCurrentPage(page);
  };
  const renderComponent = () => {
    switch (currentPage) {
      case 'info':
        return <Info />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <Navbar onNavbarClick={handleNavbarClick} />
      {renderComponent()}
      <Footer />
    </div>
  );
}

export default App;
