import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/Model";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/model" element={<Model />} />
        </Routes>
      </Router>
    

    </div>
  );
}

export default App;
