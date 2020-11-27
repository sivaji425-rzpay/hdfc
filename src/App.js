import React from 'react'

import Home from './hdfc/home'
import Payment from './hdfc/payment'
import Header from './hdfc/header/index'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">   
      <Header/>
      <Route path="/" exact component={Home} /> 
      <Route path="/Payment" component={Payment}/>
    </div>
    </Router>
  );
}

export default App;
