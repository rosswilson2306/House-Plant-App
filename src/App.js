import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Find from './components/Find.js';
import './App.css';

function App() {
  // State
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [status, setStatus] = useState('all');

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route
            path="/shop"
            render={props => <Shop {...props} setStatus={setStatus} />}
          />
          <Route path="/find" component={Find} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
