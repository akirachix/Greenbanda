import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home/home';
import Vegetables from './Vegetables/veg';
import Fruits from './Fruits/fruits';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
          <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/Vegetables">
            <Vegetables/>
            </Route>
            <Route exact path="/Fruits">
            <Fruits/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
