import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import SectionOne from "./pages/SectionOne";
import Products from "./pages/Products";
import Cards from "./components/Cards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/category/:id" component={Cards} />

        <Route path="/" element={<Home />} />
        <Route path="/sectionone" element={<SectionOne />} />
        <Route path="/two" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
