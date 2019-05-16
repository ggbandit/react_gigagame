import React from 'react';
import { Home } from './components/Home/Home.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Profile } from './components/Profile/Profile.js'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
      </div>
    </Router>
  );
}

export default App;
