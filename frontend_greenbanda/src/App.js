
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import Home from "./Home";
import "./App.css";
import Customer from "./pages/Customer";
import Transaction from "./pages/Transaction";
import Order from "./pages/Order";
import Product from "./pages/Product";


const App=()=>{

    return (
      <div>
             
        <BrowserRouter>
       
          <Switch>
          <Route exact path="/">
              <Home/>
            </Route>
            
          <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path ="/login">
              <LogIn />
            </Route>
            <Route path ="/dashboard">
              <Dashboard/>
            </Route>
          
          
            <Route path="/customer">
              <Customer/>
            </Route>
            <Route path="/Transaction">
              <Transaction/>
            </Route>
            <Route path="/order">
              <Order/>
            </Route>
            <Route path="/product">
              <Product/>
            </Route>

          </Switch>
       
        </BrowserRouter>
      </div>
    );
 
}

export default App;















