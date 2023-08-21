import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Accordian from "./components/Accordian";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Welcome />
        <Accordian />
      </div>
      <Footer />
    </div>
  );
}

export default App;
