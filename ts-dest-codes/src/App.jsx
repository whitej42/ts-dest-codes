import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accordian from "./components/Accordian";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Accordian />
      </div>
      <Footer />
    </div>
  );
}

export default App;
