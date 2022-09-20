import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Locations from './LocationsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { LOCATIONS } from '../shared/locations';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: LOCATIONS
        }

    }
    render() {
        // const HomePage = () => {
        //     <Home />
        // }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={ () => 
                        <Home location1={this.state.location.filter((location) => location.featured)[0]} 
                              location2={this.state.location.filter((location) => location.featured)[1]}
                              location3={this.state.location.filter((location) => location.featured)[2]}
                        /> 
                    }/>
                    <Route exact path='/locations' component={ () => <Locations /> } />
                    <Route exact path='/about' component={ () => <About /> } />
                    <Route exact path='/contact' component={ () => <Contact /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;