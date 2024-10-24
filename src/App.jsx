import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Welcome from "./components/Welcome";
import Accordian from "./components/features/accordian/Accordian";

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
