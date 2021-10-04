// import logo from './logo.svg';
import './App.css';
import Navbar from './MyCompo/Navbar';
import Article from './MyCompo/Article';
import About from './MyCompo/About';
import Footer from './MyCompo/Footer';
import Home from './MyCompo/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
