
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Dashboard from "./dashboard/Dashboard";
import Home from "./Home/Home";
import "./App.css";
import Customer from "./dashboard/pages/Customer";
import Transaction from "./dashboard/pages/Transaction";
import Order from "./dashboard/pages/Order";
import Product from "./dashboard/pages/Product";


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















