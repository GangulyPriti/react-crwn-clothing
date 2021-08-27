import './App.css';
// import ComposeEmail from './composeEmail/compose-email.component';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
      {/* <ComposeEmail /> */}
    </div>
  );
}

export default App;
