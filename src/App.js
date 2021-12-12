import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Introduce from './Pages/HomePage/Introduce/Introduce';
import Projects from './Pages/HomePage/Projects/Projects';
import Contact from './Pages/HomePage/Contact/Contact';
import Navigation from './Shared/Navigation/Navigation';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/introduce" element={<Introduce />}>
          </Route>
          <Route path="/projects" element={<Projects />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
