import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
    render() {

        return (<Router>


            <NavigationBar />

            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </Switch>

            <Footer />

        </Router>);
    }
}

export default App;