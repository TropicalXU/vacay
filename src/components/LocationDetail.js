import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Row, Label, Col  } from 'reactstrap';   
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import ReviewForm from './ReviewFormComponent';

function RenderLocation({location}) {

    if(location != null) {
        return (
            <div className='col-12 col-sm-12 col-md-5 d-flex justify-content-center'>
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.3) translateY(-20%)'
                }}>
                    <Card>
                        <CardImg src={location.image} width='490' height='200' />
                        <CardBody>
                            <CardTitle>{location.name}</CardTitle>
                            <CardText>{location.description}</CardText>
                            <p><i>-{location.province}</i></p>
                            <h3>$ {location.price}</h3>
                            <p>per night</p>
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

function RenderReviews({reviews}) {
    const rev = reviews.map(review => {
        return (
            <li key={review.id}>
                <p><span className='fa fa-star'></span><b> {review.rating}</b> Stars</p>
                <p>{review.review}</p>
                <p> --<i><b>{review.author}</b></i>, &nbsp;
                {new Intl.DateTimeFormat('en-US',
                        {year: 'numeric',
                        month: 'short',
                        day: '2-digit'}).format(new Date(Date.parse(review.date)))}
                </p>
            </li>
        );
    });

    if(reviews != null) {
        return (
            <div className='col-12 col-sm-12 col-md-5 align-items-center'>
                <h4 className='font'>Reviews</h4>
                <div className='review my-5'>
                    <ul className='list-unstyled p-5'>
                        {rev}  
                    </ul>
                </div>
                  <ReviewForm />
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const LocationDetail = (props) => {
    const location = props.locations;
    const review = props.reviews;

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
                       <RenderLocation location={props.locations}
                         />
                       <RenderReviews reviews={props.reviews}
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

