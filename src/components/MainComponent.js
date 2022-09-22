import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { addReview, fetchLocations } from '../redux/ActionCreators';


const mapSateToProps = state => {
    return {
        locations: state.locations,
        reviews: state.reviews,
        testemonials: state.testemonials
    }
}

const mapDispatchToProps = (dispatch) => ({
    addReview: (locationId, rating, author, review) => dispatch(addReview(locationId, rating, author, review)),

    fetchLocations: () => {
        dispatch(fetchLocations())
    }
});


class Main extends Component {
    constructor(props) {
        super(props);

       

    }
    componentDidMount() {
        this.props.fetchLocations();
    }

    render() {
        const HomePage = () => {
            return (
                <Home location1={this.props.locations.locations.filter((location) => location.featured)[0]} 
                        location2={this.props.locations.locations.filter((location) => location.featured)[1]}
                        location3={this.props.locations.locations.filter((location) => location.featured)[2]}
                        testemonial1={this.props.testemonials.filter((testemonial) => testemonial.featured)[0]}
                        testemonial2={this.props.testemonials.filter((testemonial) => testemonial.featured)[1]}
                        testemonial3={this.props.testemonials.filter((testemonial) => testemonial.featured)[2]}
                        locationsLoading={this.props.locations.isLoading}
                        locationsErrMsg={this.props.locations.errMsg}
                /> 
            );
        };

        const OntarioFeatured = () => {
            return (
                <Ontario location={this.props.locations.locations.filter((location) => location.province === 'Ontario')}
                    testemonial1={this.props.testemonials.filter((testemonial) => testemonial.featured)[0]}
                    testemonial2={this.props.testemonials.filter((testemonial) => testemonial.featured)[1]}
                    locationsLoading={this.props.locations.isLoading}
                    locationsErrMsg={this.props.locations.errMsg}

                />
            );
        };

        const BcFeatured = () => {
            return (
                <BritishColumbia location={this.props.locations.locations.filter((location) => location.province === 'British Columbia')}
                testemonial1={this.props.testemonials.filter((testemonial) => testemonial.featured)[0]}
                testemonial2={this.props.testemonials.filter((testemonial) => testemonial.featured)[1]}
                locationsLoading={this.props.locations.isLoading}
                locationsErrMsg={this.props.locations.errMsg}
                />
            );
        };

        const AlbertaFeatured = () => {
            return (
                <Alberta location={this.props.locations.locations.filter((location) => location.province === 'Alberta')}
                testemonial2={this.props.testemonials.filter((testemonial) => testemonial.featured)[1]}
                testemonial3={this.props.testemonials.filter((testemonial) => testemonial.featured)[2]}
                locationsLoading={this.props.locations.isLoading}
                locationsErrMsg={this.props.locations.errMsg}
                />
            );
        };

        const QuebecFeatured = () => {
            return (
                <Quebec location={this.props.locations.locations.filter((location) => location.province === 'Quebec')}
                testemonial1={this.props.testemonials.filter((testemonial) => testemonial.featured)[0]}
                testemonial3={this.props.testemonials.filter((testemonial) => testemonial.featured)[2]}
                locationsLoading={this.props.locations.isLoading}
                locationsErrMsg={this.props.locations.errMsg}
                />
            );
        };

        const LocationWithId = ({match}) => {
            return (
                <LocationDetail
                locations={this.props.locations.locations.filter((location) => location.id === parseInt(match.params.locationId, 10))[0]}
                comments={this.props.reviews.filter((review) => review.locationId === parseInt(match.params.locationId, 10))}
                locationsLoading={this.props.locations.isLoading}
                locationsErrMsg={this.props.locations.errMsg}
                 />
            );
        };

        return (
            // MAIN ROUTES
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={ HomePage }/>
                    <Route exact path='/locations' component={ () => 
                    <Locations locations={this.props.locations.locations}
                    testemonial1={this.props.testemonials.filter((testemonial) => testemonial.featured)[0]}
                    testemonial3={this.props.testemonials.filter((testemonial) => testemonial.featured)[2]}
                    locationsLoading={this.props.locations.isLoading}
                        locationsErrMsg={this.props.locations.errMsg}
                    /> } />
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

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(Main));