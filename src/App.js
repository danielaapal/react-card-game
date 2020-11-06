import  { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/game/game.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/game' component={Game} />
        </Switch>
    </div>
  );
}

export default App;
