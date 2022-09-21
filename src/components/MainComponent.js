import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Locations from './LocationsComponent';
import LocationDetail from './LocationDetail';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Ontario from './OntarioComponent';
import BritishColumbia from './BritishColumbia';
import Alberta from './AlbertaComponent';
import Quebec from './QuebecComponent';
import { LOCATIONS } from '../shared/locations';
import {TESTEMONIALS} from '../shared/testemonials';
import { COMMENTS } from '../shared/comments';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: LOCATIONS,
            testemonial: TESTEMONIALS,
            comments: COMMENTS
        }

    }
    render() {
        // const HomePage = () => {
        //     <Home />
        // }
        const OntarioFeatured = (location) => {
            return (
                <Ontario location={this.state.location.filter((location) => location.province === 'Ontario')} />
            );
        }

        const BcFeatured = () => {
            return (
                <BritishColumbia location={this.state.location.filter((location) => location.province === 'British Columbia')} />
            );
        }

        const AlbertaFeatured = () => {
            return (
                <Alberta location={this.state.location.filter((location) => location.province === 'Alberta')} />
            );
        }

        const QuebecFeatured = () => {
            return (
                <Quebec location={this.state.location.filter((location) => location.province === 'Quebec')} />
            );
        }

        const LocationWithId = ({match}) => {
            return (
                <LocationDetail
                location={this.state.location.filter((location) => location.id === parseInt(match.params.locationId, 10))[0]}
                comments={this.state.comments.filter((comments) => comments.locationId === parseInt(match.params.locationId, 10))}
                 />
            );
        }
        return (
            // MAIN ROUTES
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={ () => 
                        <Home location1={this.state.location.filter((location) => location.featured)[0]} 
                              location2={this.state.location.filter((location) => location.featured)[1]}
                              location3={this.state.location.filter((location) => location.featured)[2]}
                              testemonial1={this.state.testemonial.filter((testemonial) => testemonial.featured)[0]}
                              testemonial2={this.state.testemonial.filter((testemonial) => testemonial.featured)[1]}
                              testemonial3={this.state.testemonial.filter((testemonial) => testemonial.featured)[2]}
                        /> 
                    }/>
                    <Route exact path='/locations' component={ () => <Locations location={this.state.location} /> } />
                    <Route exact path='/locations/ontario' component={ OntarioFeatured } />
                    <Route exact path='/locations/british-columbia' component={ BcFeatured } />
                    <Route exact path='/locations/alberta' component={ AlbertaFeatured } />
                    <Route exact path='/locations/quebec' component={ QuebecFeatured } />
                    <Route exact path='/locations/:locationId' component={ LocationWithId } />
                    <Route exact path='/about' component={ () => <About /> } />
                    <Route exact path='/contact' component={ () => <Contact /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;