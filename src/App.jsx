import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
// import DevMessage from './components/layout/DevMessage';

// Import your page components
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Lines from './pages/Lines';
import Headcodes from './pages/Headcodes';
import Status from './pages/Status';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container">

        <div className="dev-message">
          This site is still under development. Some features may not work as expected.
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/lines" element={<Lines />} />
          <Route path="/headcodes" element={<Headcodes />} />
          <Route path="/status" element={<Status />} />
        </Routes>

        </div>

        <Footer />
    </Router>
  );
}

export default App;