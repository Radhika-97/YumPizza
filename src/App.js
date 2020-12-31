import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Customize from './Components/Customize'
import Checkout from './Components/Checkout'
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [ingredients, setIngredients] = useState
  ({
   
    basil:false,
    cheese:false,
    mushoom:false,
    olive:false,
    pineapple:false,
    tomato:false,
  });
  useEffect(()=>{
    const data = localStorage.getItem('ingredients');
   if(data){
    setIngredients(JSON.parse(data))

   }
  },[])
  return (
    <div className="App">
      
      <Header />
      <Router>
      <Switch>
          <Route exact path="/">
           <Customize ingredients={ingredients} setIngredients={setIngredients}/>
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
