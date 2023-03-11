// import pages that makes up the app;
import LandingPage from "./pages/landing";

// import  routes from router-dom;
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ServicesPage from "./pages/services";
import PaymentPage from "./pages/payment";

// App component
function App() {
  return  (
      <Router>
       <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
     </Router>
      );
}

export default App;
