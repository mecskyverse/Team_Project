
import './App.css';
import Home from './Component/Home';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom";
import Navbar from './Component/Navbar';
function App() {
  return (
    <>
{/* <Router> */}
    {/* <Navbar/> */}
     <Home/>
     {/* <Switch>
     <Route path='/'>
        <Home/>
      </Route>
      <Route exact path='/service'>
        <Services/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
     </Switch> */}
{/* </Router> */}
    </>
  );
}

export default App;
