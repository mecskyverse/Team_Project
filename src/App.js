
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './Component/Login';
import Signin from './Component/Signin';
import Home from './Component/Home';
import Services from './Component/Services';
import Contact from './Component/Contact';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
      

        </Routes>
      </div>
    </Router>

  );
}

export default App;
