import Footer from "./components/Footer";
import Header from "./components/Header";
import Lines from "./components/Lines";

function App() {

  const tube_api = "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,tram,elizabeth-line/Status"
  const rail_api = "https://api.tfl.gov.uk/Line/Mode/national-rail/Status"

  return (
    <>
      <Header />
      <div className='container'>
        <Lines title={"Tube"} api_url={ tube_api } />
        <Lines title={"National Rail"} api_url={ rail_api } />
      </div>
      <Footer />
    </>
  );
}

export default App;
