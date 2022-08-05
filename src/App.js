import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Input from "./pages/Input";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/model" element={<Model />} />
          <Route exact path="/inputmodel" element={<Input />} />
        </Routes>
      </Router>
    

    </div>
  );
}

export default App;
