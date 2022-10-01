import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Row, Label, Col  } from 'reactstrap';   
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { FadeTransform, Stagger, Fade } from 'react-animation-components';

//-----------FORM VALIDATION---//
const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

//------REVIEW FORM COMPONENT-----//
class ReviewForm extends Component {
    constructor(props) {
        super(props);
        {/* initiating the state configuration */}
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //----review form component functions----//
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen 
        });
    }
    handleSubmit(vals, evt) {
        // evt.preventDefault();
        console.log('Current State is:' + JSON.stringify(vals));
        alert('Current State is:' + JSON.stringify(vals));
        this.props.postReview(this.props.locationId, vals.rating, vals.author, vals.review)
        
    }

    render() {
        return (
            <>  <div className='row my-3 ml-1'>
                <Button color='secondary' onClick={this.toggleModal}>
                    <span className='fa fa-comments fa-lg'>
                    </span> Submit Review
                </Button>
                </div>
                {/* REVIEW FORM MODAL */}
                <div className='container'>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader className='modal-news' toggle={this.toggleModal}>Submit Review</ModalHeader>
                        <ModalBody className='modal-news'>
                            <LocalForm onSubmit={(vals) => this.handleSubmit(vals)}>
                                {/* rating input */}
                                <Row className='form-group'>
                                    <Label htmlFor='rating' md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model='.rating' id='rating' name='rating'
                                            className='form-control'>
                                          <option>Select Rating</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </Control.select>
                                        {/* handling input errors */}
                                        <Errors
                                        className='text-danger'
                                        model='.rating'
                                        show='touched'
                                        messages={{
                                            required: 'Required!'
                                        }} />
                                    </Col>
                                </Row>
                                {/* author input */}
                                <Row className='form-group'>
                                    <Label htmlFor='author' md={12}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.text model='.author' id='author' name='author'
                                        className='form-control'
                                        placeholder='Your Name'
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                        {/* handling input errors */}
                                        <Errors 
                                        className='text-danger'
                                        model='.author'
                                        show='touched'
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than two characters!',
                                            maxLength: 'Must be 15 characters or less!'
                                        }}
                                        />
                                    </Col>
                                </Row>
                                {/* review input */}
                                <Row className='form-group'>
                                    <Label htmlFor='review' md={12}>Review</Label>
                                    <Col md={12}>
                                        <Control.textarea model='.review' id='review' name='review'
                                        className='form-control'
                                        rows='6'
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col md={12}>
                                        <Button type='submit' color='primary'>Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </>
        )
    }
}

//------RENDER LOCATION FUNCTION(passing in location props from MainComponent.js)
function RenderLocation({location}) {

    if(location != null) {
        return (
            <div className='col-12 col-sm-12 col-md-5 d-flex justify-content-center'>
                {/* REACT ANIMATION  */}
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.3) translateY(-20%)'
                }}>
                    {/* rendering LocationDetail card */}
                    <Card>
                        <CardImg src={location.image} alt={location.name} width='490' height='200' />
                        <CardBody>
                            <CardTitle>{location.name}</CardTitle>
                            <CardText>{location.description}</CardText>
                            <p><i>-{location.province}</i></p>
                            <hr></hr>
                            <h3>$ {location.price}</h3>
                            <p>per night</p>
                            <hr></hr>
                            <p><b>Host:</b> {location.host}</p>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
    
}

//------RENDER REVIEWS FUNCTION(passing in props from MainComponent.js to access review information)
function RenderReviews({locations, reviews, postReview, locationId}) {
    const rev = reviews.map(review => {
        return (
            <> 
                {/* REACT ANIMATION  */}
                <Stagger in>
                    <Fade in>
                        <li key={review.id} className='py-3'>
                            <h5><span className='fa fa-star'></span><b> {review.rating}</b> Stars</h5>
                            <p className='py-3'>{review.review}</p>
                            <p> --<i><b>{review.author}</b></i>, &nbsp;
                            {new Intl.DateTimeFormat('en-US',
                                    {year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'}).format(new Date(Date.parse(review.date)))}
                            </p>
                        </li>
                    </Fade>
                </Stagger>
            </>
        );
    });

    if(reviews != null) {
        return (
            <div className='col-12 col-sm-12 col-md-5 align-items-center'>
                <h4 className='font'>Reviews</h4>
                <div className='box my-3'>
                    <ul className='list-unstyled p-5'>
                        {rev}  
                    </ul>
                </div>
                {/* passing in ReviewForm using props to display reviews */}
                  <ReviewForm
                  locations={locations} 
                  reviews={reviews}
                  locationId={locationId} 
                  postReview={postReview}
                   />
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

//---LOCATION DETIAL COMPONENT------//
const LocationDetail = (props) => {
    //using props from MainComponent.js to access location data
    const location = props.locations;
   

    if(location != null) {
        return (
            <div className='container mb-5'>
                <div className='row'>
                    <Breadcrumb className='breadcrumb'>
                        <BreadcrumbItem>
                            <Link className='breadcrumb-link' to='/locations'>
                                <span className='fa fa-chevron-left'></span> Back to Locations
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className='text-white'>{props.locations.name}
                        </BreadcrumbItem>
                        </Breadcrumb>
                    <div className='col-12'>
                        <h3 className='font'>{props.locations.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                        {/* passing in our RenderLocation to display location content */}
                       <RenderLocation location={props.locations}
                        />
                        {/* passing in our RenderReviews to display reviews content */}
                        <RenderReviews
                            reviews={props.reviews}
                            postReview={props.postReview}
                            locationId={props.locations.id}
                        />
                    </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }

}

export default LocationDetail;

