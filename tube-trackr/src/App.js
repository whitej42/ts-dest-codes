import { useState } from "react";
import Header from "./components/Header";
import Lines from "./components/Lines";

function App() {

  const [lines] = useState(
    [
      {
        id: 1,
        line: 'Bakerloo',
        status: 'Good Service'
      },
      {
        id: 2,
        line: 'Circle',
        status: 'Part Suspended'
      },
      {
        id: 3,
        line: 'Victoria',
        status: 'Minor Delays'
      },
      {
        id: 4,
        line: 'Hammersmith and City Line',
        status: 'Severe Delays'
      },
      {
        id: 5,
        line: 'District',
        status: 'Severe Delays'
      },
      {
        id: 6,
        line: 'Jubilee',
        status: 'Severe Delays'
      },
      {
        id: 7,
        line: 'Central',
        status: 'Minor Delays'
      }

    ]
  );

  return (
    <div className='container'>
      <Header />
      <Lines lines={lines} />
    </div>
  );
}

export default App;
