import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Find from './components/Find';
import Donate from './components/Donate';
import Requests from './components/Requests';
import Home from './components/Home';
function App() {
  return (
    <Router>
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/find" exact component={Find}/>
     <Route path="/donate" exact component={Donate}/>
     <Route path="/requests" exact component={Requests}/>
     </Switch>
     </Router>

  );
}

export default App;
