import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route path="/checkout/">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login page</h1>
          </Route>
          {/* This is the default router */}
          <Route path="/"><Home/></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
//maicolgamer23@hotmail.com

// {/* we Need React-Router */ }


// {/* localhost.com/ */ }

// {/* localhost.com/checkout */ }

// {/* localhost.com/login */ }