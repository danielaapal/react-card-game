import React from 'react';
import  { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/game/game.component';
import HomePage from './pages/homepage/homepage.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }; 
  }
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/react-card-game/' component={HomePage} />
            <Route path='/react-card-game/game' component={Game} />
          </Switch>
      </div>
    );
  }
}

export default App;
