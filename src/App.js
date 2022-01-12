// Static Resources
import "bulma/css/bulma.css"; //BULMA
import "@fortawesome/fontawesome-free/js/all"; // ICONS
import "./components/commons/css/generic.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Organizations from "./pages/Organizations";
import Researchers from "./pages/Researchers";
//Context Providers

function App() {
  return (
  
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/organizations" element={<Organizations/>}> 
            </Route>
            <Route path="/researchers" element={<Researchers/>}> </Route>
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
