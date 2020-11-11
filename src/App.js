import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import News from '../src/components/News';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
