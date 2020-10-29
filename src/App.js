import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './compontents/Home';
import About from './compontents/About';
import Contact from './compontents/Contact';
import Navbar from './compontents/MyNavbar';
import Footer from './compontents/Footer';
import Category from './compontents/Category'
import Dummy from './compontents/Dummy';
import Post from './compontents/Post';


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/:cat' component={Category} />
                    <Route exact path='/:cat/:slug' component={Dummy} />
                    <Route exact path='/apfncywldhfp' component={Post} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;