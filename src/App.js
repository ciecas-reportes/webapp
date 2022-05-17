// Static Resources
import "bulma/css/bulma.css"; //BULMA
import "@fortawesome/fontawesome-free/js/all"; // ICONS
import "./components/commons/css/generic.css";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate} from "react-router-dom";

// Components
import Home from "./pages/Home";
import Organizations from "./pages/Organizations";
import Researchers from "./pages/Researchers";
//Context Providers
import Axios from "axios";
import 'animate.css';
import ResearcherDetail from "./pages/ResearcherDetail";
import NotFound from "./components/commons/404";

Axios.interceptors.request.use(function(config) {
  config.url =  `${process.env.REACT_APP_API_BASE_URL}${config.url}`;
  return config;
});



function App() {
  return (
  
    <div className="App">
      <Router>
          <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/organizations" element={<Organizations/>} />
            
            <Route path="/researchers" element={<Researchers/>} />
            <Route path="/researchers/detail/:id"  element={<ResearcherDetail/>} />
            
            <Route path="*" element={<Navigate to="/not-found" replace />}/>

            <Route path="/not-found" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
