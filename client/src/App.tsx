// import pages that makes up the app;
import LandingPage from "./pages/landing";

// import  routes from router-dom;
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ServicesPage from "./pages/services";

// App component
function App() {
  return  (
      <Router>
       <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/services' element={<ServicesPage/>} />
      </Routes>
     </Router>
      );
}

export default App;
