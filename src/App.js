
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignUp from "./components/Signup/SignUp";
import LogIn from "./components/Login/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home/Home";
import Fruits from "./components/Home/Fruits";
import Vegetables from "./components/Home/Vegetables";
import "./App.css";
import Customer from "./components/dashboard/pages/Customer";
import Transaction from "./components/dashboard/pages/Transaction";
import Order from "./components/dashboard/pages/Order";
import Product from "./components/dashboard/pages/Product";
import Delivery from "./components/Delivery/delivery";
import Payment from "./components/Payment/payment";
import ContinuedPayment from "./components/Payment/continued-payment";
import OrderReview from "./components/OrderReview/orderreview";



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
            <Route path ="/vegetables">
              <Vegetables />
            </Route>

            <Route path ="/fruits">
              <Fruits />
            </Route>
            <Route path ="/delivery">
              <Delivery/>
            </Route>
            <Route path ="/payment">
              <Payment/>
            </Route> 
            <Route path ="/continuedpayment">
              <ContinuedPayment/>
            </Route>
            <Route path ="/orderreview">
              <OrderReview/>
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















