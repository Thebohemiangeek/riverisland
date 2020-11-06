import './App.css';
import Home from './pages/Home'
import Itemtab from './pages/Itemtab'
import Navbar from './components/navbar/Navbar'
import Catalog from './pages/Catalog'
import Context from './components/context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <Navbar >  <li>
        <Link to="/">Home</Link>
      </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li></Navbar>


      <Switch>
        <Context>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/itemtab/:id" >
            <Itemtab />
          </Route>
        </Context>
      </Switch>
    </Router >
  );
}

export default App;
