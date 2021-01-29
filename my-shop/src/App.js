import './App.css';
import HeaderTop from './components/HeaderTop';
import HeaderMiddle from './components/HeaderMiddle';
import HeaderBottom from './components/HeaderBottom';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Login from './components/user/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/products/Products';
import ContactUs from './components/containers/ContactUs';
import AboutUs from './components/containers/AboutUs';


function App() {
  return (
    <div className="App">
      <Router>
          <HeaderTop />
          <HeaderMiddle />
          {/* <HeaderBottom /> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
