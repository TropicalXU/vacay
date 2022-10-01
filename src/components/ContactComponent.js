import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { RenderNewsletter } from '../functionalComponents/functionalComponents';

//checks to see if the value is greater than 0
const required = (val) => val && val.length;
//function of functions - ensures that the length <= to the length value
const maxLength = (len) => (val) => !(val) || (val.length <= len);
//ensures that the length <= to the length value
const minLength = (len) => (val) => (val) && (val.length >= len);

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }
    handleSubmit(values) {
        // console.log('Current State is:' + JSON.stringify(values));
        alert('Thank you for your feedback!' + JSON.stringify(values));
        this.props.postFeedback( values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message );
        this.props.resetFeedbackForm();

    }

  
    render() {
        
        return (
            //CONTACT FORM
            <div className='container contact-form align-items-center'>
                <RenderNewsletter 
                    onClick={this.toggleModal}
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                    onSubmit={this.handleSubmit}
                    name={this.name}
                    email={this.email}
                />           
                <h3 className='font my-5 text-center'>Contact Us</h3>
                <div className='row row-content'>
                    <div className='col-12 col-sm-12 col-md-5 text-center mt-5'>
                        <img src='/assets/images/mail.png' width='350' height='350' />
                        <h2 className='font py-5'>Have any questions?</h2>
                        <h5 className='font'>Our specialists are ready at hand to answer any of your questions or concerns!</h5>
                        <p className='font py-5'>We provide 24/7 support. Our teams are ready to answer your queries.</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 offset-md-1 row-bg py-3'>
                        <Form className='p-5' model='feedback' onSubmit={(values) => this.handleSubmit(values)} resetOnSubmit={true}>
                            <Row className='form-group'>
                                <Label htmlFor='firstname'>First Name</Label>
                                <Control.text model='.firstname' id='firstname' name='firstname' 
                                    className='form-control'
                                    placeholder='First Name'
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15),
                                    }}
                                />
                                <Errors
                                    className='text-danger'
                                    model='.firstname'
                                    show='touched'
                                    messages={{
                                        required: 'Required! ',
                                         minLength: 'Must be greater than two characters!',
                                        maxLength: 'Must be 15 characters or less!'
                                    }} 
                                />
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastname'>Last Name</Label>
                                <Control.text model='.lastname' id='lastname' name='lastname'
                                    className='form-control' 
                                    placeholder='Last Name'
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15),
                                    }}
                                />
                                <Errors
                                    className='text-danger'
                                    model='.lastname'
                                    show='touched'
                                    messages={{
                                        required: 'Required! ',
                                        minLength: 'Must be greater than two characters!',
                                        maxLength: 'Must be 15 characters or less!'
                                    }} 
                                />
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email'>Email</Label>
                                <Control.text model='email' id='email' name='email' 
                                    className='form-control'
                                    placeholder='Email' 
                                    validators={{
                                        required, validEmail
                                    }}
                                />
                                <Errors
                                    className='text-danger'
                                    model='.email'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid Email Address!'
                                    }} 
                                />
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 6}}>
                                    <div className='form-check'>
                                        <Label check>
                                        <Control.checkbox onClick={this.boxCheck} model='.agree' name='agree'
                                            className='form-check-input'/> { '' }
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='message'>Your Feedback</Label>
                                <Control.textarea model='.message' id='message' name='message' 
                                    rows='8'
                                    className='form-control' 
                                />
                            </Row>
                            <Row className='form-group'>
                                <Button type='submit' color='primary'>
                                    Send Feedback
                                 </Button>
                            </Row>
                        </Form>
                    </div>
                </div>
                <h2 className='font text-center my-5'>Frequently Asked Questions</h2>
                <div className='row row-content'>
                    <div className='col-12'>
                        <div className='py-5'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Contact;