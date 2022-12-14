import React from 'react';
import { Navbar, Nav, NavItem, Card, CardImg, CardText, CardBody,
    CardTitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Loading } from '../components/LoadingComponent';
import { FadeTransform } from 'react-animation-components';

//----MAIN APP FUNCTIONALITIES

//--RenderCard function--------------------------------
export const RenderCard = ({location, isLoading, errMsg}) => {
    if(isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMsg) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{errMsg}</h4>
                </div>
            </div>
        )
    }
    else {
        return (
          /* REACT ANIMATION  */
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.3) translateY(-20%)'
            }}>
                <Card className='text-center card-main'>
                    <CardImg src={location.image} alt={location.name} width='40' height='200'/>
                    <CardBody>
                        <CardTitle>{location.name}</CardTitle>
                        {/* <CardText>{location.description}</CardText> */}
                        <p><i>-{location.province}</i></p>
                        <hr></hr>
                        <h3>$ {location.price}</h3>
                        <p>per night</p>
                        <hr></hr>
                        <p><b>Host:</b> {location.host}</p>
                    </CardBody>
                    <Link className='btn btn-info' to={`/locations/${location.id}`}>
                    View
                    </Link>
                </Card>
            </FadeTransform>
        );
    }
}

//RenderTestemonials function--------------------------
export const RenderTestemonials = ({testemonial}) => {

    if(testemonial != null) {
        return (
            <Card className='testemonial'>
                <CardBody>
                    <span className='fa fa-quote-left'></span>
                    <CardText className='py-3'>{testemonial.comment}</CardText>
                    <CardText> <i>- {testemonial.author},</i></CardText>
                    <CardText>
                        {new Intl.DateTimeFormat('en-US',
                        {year: 'numeric',
                        month: 'short',
                        day: '2-digit'}).format(new Date(Date.parse(testemonial.date)))}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

//RenderHostCard function-----------------------
export const RenderHostCard = ({host}) => {
    return (
        <Card className='text-center'>
            <CardImg />
            <CardBody>
                <img src={host.image} alt={host.name} width='70' height='70' className='my-3' />
                <CardTitle>{host.name}</CardTitle>
                <CardText><span className='fa fa-star'></span><b> {host.rating}</b> Stars</CardText>
                <CardText>{host.description}</CardText>
            </CardBody>
        </Card>
    )
}

//RenderNewsletter function------------------------------
export const RenderNewsletter = ({onClick, isOpen, toggle, onSubmit, name, email}) => {
    return (
        <>  <div className='row newsletter my-3 py-5'>
                <div className='col-12'>
                    <h2 className='font'>Sign up for our newsletter!</h2>
                    <Button color='primary' onClick={onClick}>Sign up</Button>
                </div>
            </div>

            <div className="container">
                <Modal isOpen={isOpen} toggle={toggle} fade={false} className="col-12">
                    <ModalHeader className='modal-news' toggle={toggle}>Sign up!</ModalHeader>
                    <ModalBody className='modal-news'>
                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label htmlFor='name'>Name</Label>
                                <Input type='text' id='name' name='name'
                                innerRef={(input) => (name) = input}
                                placeholder='Name'/>
                            </FormGroup> 
                            <FormGroup>
                            <Label htmlFor='name'>Email</Label>
                                <Input type='text' id='email' name='email'
                                innerRef={(input) => (email) = input}
                                placeholder='Email'/>
                            </FormGroup>
                            <Button type='submit' color='info'>Sign up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        </>
    );
}

//RenderContact function -----------------------------------
export const RenderContact = () => {
    return (
        <div className='container'>
            <div className='row row-content home-bottom align-items-center my-5'>
                <span className='fa fa-ravelry fa-lg'></span>
                <h1 className='ml-5'>Get in touch</h1>
                <NavLink to='/contact' className='ml-5 btn btn-secondary btn-lg'>Contact</NavLink>
            </div>
        </div>
    );
}

//SideNav function --------------------------------------------
export const SideNav = ({onClick}) => {
    return (
        <>
        <Card className='sidebar sticky-top'>
            <Navbar sticky dark expand='md'>
                <div className='container'>
                    <Nav navbar>
                        <div className='col'>
                            <NavItem>
                                <h4><span className='fa fa-star-o fa-lg'></span> Featured</h4>
                            </NavItem>
                            <div className='row'>
                            <NavItem className='py-3'>
                                    <NavLink to='/locations' className='btn btn-light'>All Locations</NavLink>
                                </NavItem>
                                <NavItem className='py-3'>
                                    <NavLink to='/locations/ontario' className='btn btn-light ml-2'>Ontario</NavLink>
                                </NavItem>
                                <NavItem className='py-3'>
                                    <NavLink to='/locations/british-columbia' className='btn btn-light'>British Columbia</NavLink>
                                </NavItem>
                            </div>
                            <div className='row'>
                                <NavItem className='py-3'>
                                    <NavLink to='/locations/alberta' className='btn btn-light'>Alberta</NavLink>
                                </NavItem>
                                <NavItem className='py-3 pl-2'>
                                    <NavLink to='/locations/quebec' className='btn btn-light'>Quebec</NavLink>
                                </NavItem>
                            </div>
                            <NavItem className='my-3'>
                                <NavLink className='text-dark' to='/home'>
                                    <span className='fa fa-home'></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem className='my-3'>
                                <NavLink className='text-dark' to='/about'>
                                    <span className='fa fa-info'></span> Info
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='text-dark' to='/contact'>
                                    <span className='fa fa-envelope'></span> Contact
                                </NavLink> 
                            </NavItem>
                            <NavItem className='newsletter py-3'>
                                <h4>Sign up for our newsletter!</h4>
                                <Button onClick={onClick} className='my-2' color='info'>Sign up!</Button>
                            </NavItem>
                        </div>  
                    </Nav>
                </div>
            </Navbar>
        </Card>
        </>
    );
}
