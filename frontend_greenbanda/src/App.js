
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home/Home";
import "./App.css";
import Customer from "./components/dashboard/pages/Customer";
import Transaction from "./components/dashboard/pages/Transaction";
import Order from "./components/dashboard/pages/Order";
import Product from "./components/dashboard/pages/Product";


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















