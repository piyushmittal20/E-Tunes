import HomeScreen from './pages/HomeScreen';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route to='/' component={HomeScreen} />
    </Switch>
  )
}

export default App;
