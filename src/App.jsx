import Details from "./components/Details";
import About from "./components/About";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Details />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
