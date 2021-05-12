import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Careers from './components/pages/Careers'
import About from './components/pages/About'
import Signup from './components/pages/Signup'
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/careers" component={Careers} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign-up" component={Signup} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
