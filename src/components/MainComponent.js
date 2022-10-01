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
import { actions } from 'react-redux-form';
import { fetchLocations, fetchReviews, postReview, postFeedback } from '../redux/ActionCreators';


const mapSateToProps = state => {
    return {
        locations: state.locations,
        reviews: state.reviews,
        testemonials: state.testemonials,
        hosts: state.hosts
    }
}

const mapDispatchToProps = (dispatch) => ({
    postReview: (locationId, rating, author, review) => dispatch(postReview(locationId, rating, author, review)),

    postFeedback: (firstname, lastname, email, agree, message) => dispatch(postFeedback(firstname, lastname, email, agree, message)),

    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},

    fetchLocations: () => {
        dispatch(fetchLocations())
    },

    fetchReviews: () => {
        dispatch(fetchReviews())
    },

   
});


class Main extends Component {

    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchReviews();
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
                        host1={this.props.hosts.filter((host) => host.featured)[0]}
                        host2={this.props.hosts.filter((host) => host.featured)[1]}
                        host3={this.props.hosts.filter((host) => host.featured)[2]}
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
                reviews={this.props.reviews.reviews.filter((review) => review.locationId === parseInt(match.params.locationId, 10))}
                locationsLoading={this.props.locations.isLoading}
                locationsErrMsg={this.props.locations.errMsg}
                postReview={this.props.postReview} 
                reviewsErrMsg={this.props.reviews.errMsg}
                locationId={this.props.locations.locationId}
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
                    <Route exact path='/about' component={ () => <About host1={this.props.hosts.filter((host) => host.featured)[0]}
                        host2={this.props.hosts.filter((host) => host.featured)[1]} 
                        host3={this.props.hosts.filter((host) => host.featured)[2]} /> } />
                    <Route exact path='/contact' component={ () => 
                    <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm} 
                    postFeedback={this.props.postFeedback}
                     /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(Main));