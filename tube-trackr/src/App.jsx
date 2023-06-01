import Footer from "./components/Footer";
import Header from "./components/Header";
import Statuses from "./components/Statuses";

function App() {

  const tube_api = "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,tram,elizabeth-line/Status"
  const rail_api = "https://api.tfl.gov.uk/Line/Mode/national-rail/Status"
  const river_api = "https://api.tfl.gov.uk/Line/Mode/river-bus/Status"

  return (
    <>
      <Header />
      <div className='container'>
        <Statuses title={"Tube"} api_url={ tube_api } />
        <Statuses title={"National Rail"} api_url={ rail_api } />
        <Statuses title={"River Bus"} api_url={ river_api } />
      </div>
      <Footer />
    </>
  );
}

export default App;
