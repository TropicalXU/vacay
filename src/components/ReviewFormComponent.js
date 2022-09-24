import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
Button, Modal, ModalHeader, ModalBody, Row, Label, Col  } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

//  VALIDATORS
const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen 
        });
    }
    handleSubmit(vals) {
        console.log('Current State is:' + JSON.stringify(vals));
        alert('Current State is:' + JSON.stringify(vals));
    }

    render() {
        return (
            <>  <div className='row my-3 ml-1'>
                <Button color='secondary' onClick={this.toggleModal}>
                    <span className='fa fa-comments fa-lg'>
                        Submit Review
                    </span>
                </Button>
                </div>

                <div className='container'>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader className='modal-news' toggle={this.toggleModal}>Submit Review</ModalHeader>
                        <ModalBody className='modal-news'>
                            <LocalForm onSubmit={this.handleSubmit}>
                                <Row className='form-group'>
                                    <Label htmlFor='rating' md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model='rating' id='rating' name='rating'
                                            className='form-control'>
                                          <option>Select Rating</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </Control.select>
                                        <Errors
                                        className='text-danger'
                                        model='.rating'
                                        show='touched'
                                        messages={{
                                            required: 'Required!'
                                        }} />
                                    </Col>
                                </Row>
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

export default ReviewForm;