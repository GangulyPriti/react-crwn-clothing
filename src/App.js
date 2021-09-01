import './App.css';
// import ComposeEmail from './composeEmail/compose-email.component';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      {/* <ComposeEmail /> */}
    </div>
  );
}

export default App;
