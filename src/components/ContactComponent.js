import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//checks to see if the value is greater than 0
const required = (val) => val && val.length;
//function of functions - ensures that the length <= to the length value
const maxLength = (len) => (val) => !(val) || (val.length <= len);
//ensures that the length <= to the length value
const minLength = (len) => (val) => (val) && (val.length >= len);
//checks to make sure is a num
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  
    render() {
        
        return (
            <div className='container align-items-center'>
                <div className='row'>
                    <div className='col col-sm-8'>
                        <LocalForm>
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
                                        required: 'Required',
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
                                        required: 'Required',
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
                                    rows='12'
                                    className='form-control' 
                                />
                            </Row>
                            <Row className='form-group'>
                                <Button type='submit' color='primary'>
                                    Send Feedback
                                 </Button>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    };
}

export default Contact;