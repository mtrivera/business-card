import Details from "./components/Details";
import About from "./components/About";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import "./App.css";

function App() {
  return (
    <div className="container">
      <main className="main-content">
        <Details />
        <About />
        <Interests />
        <Footer />
      </main>
    </div>
  );
}

export default App;
