import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Row, Label, Col  } from 'reactstrap';   
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function RenderLocation({location}) {

    if(location != null) {
        return (
            <div className='col-12 col-md-6 m-1'>
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

function RenderReviews({comments, locationId}) {
    const reviews = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p> --<i>{comment.author}</i>, &nbsp;
                {new Intl.DateTimeFormat('en-US',
                        {year: 'numeric',
                        month: 'short',
                        day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p>
            </li>
        );
    });

    if(comments != null) {
        return (
            <div className='col-12 col-md-3 m-1'>
                <h4>Reviews</h4>
                <ul className='list-unstyled'>
                    {reviews}  
                </ul>
                   {/* <CommentForm disId={locationId} /> */}
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
    const location = props.location;

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
                        <BreadcrumbItem active className='text-white'>{props.location.name}
                        </BreadcrumbItem>
                        </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.location.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row my-3'>
                       <RenderLocation location={props.location} />
                       <RenderReviews comments={props.comments}
                        locationId={props.location.id} />
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

