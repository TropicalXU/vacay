import React from 'react';
import { Navbar, Nav, NavItem, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const RenderCard = ({location}) => {
    return (
        <Card className='text-center'>
            <CardImg src={location.image} width='40' height='200'/>
            <CardBody>
                <CardTitle>{location.name}</CardTitle>
                <CardText>{location.description}</CardText>
                <h3>$ {location.price}</h3>
            </CardBody>
            <Link className='btn btn-primary' to={`/locations/${location.id}`}>
               View
            </Link>
        </Card>
    );
}

export const RenderTestemonials = ({testemonial}) => {
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

export const RenderContact = () => {
    return (
        <div className='container'>
            <div className='row row-content home-bottom align-items-center my-5'>
                <span className='fa fa-ravelry fa-lg'></span>
                <h1 className='ml-5'>Get in touch</h1>
                <Button className='ml-5 btn-lg' color='light'>Contact</Button>
            </div>
        </div>
    );
}

export const SideNav = () => {
    return (
        <Card className='sidebar sticky-top'>
            <Navbar sticky dark expand='md'>
                <div className='container'>
                    <Nav navbar>
                        <div className='col'>
                            <NavItem>
                                <h4>Featured</h4>
                            </NavItem>
                            <div className='row'>
                                <NavItem className='my-3'>
                                    <NavLink to='/home'>
                                    Home
                                    </NavLink>
                                </NavItem>
                            </div>
                            <div className='row'>
                                <NavItem className='py-3'>
                                    <NavLink to='/locations/ontario' className='btn btn-light'>Ontario</NavLink>
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
                                <NavLink to='/about'>
                                    Info
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/contact'>
                                    Contact
                                </NavLink> 
                            </NavItem>
                        </div>  
                    </Nav>
                </div>
            </Navbar>
        </Card>
    );
}
