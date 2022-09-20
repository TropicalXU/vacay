import React, { Component } from 'react';
import {
    Navbar, Nav, NavbarToggler, Collapse, NavItem, Card, Button, CardBody, CardTitle, CardText} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Locations extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {


        function RenderCard() {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>title</CardTitle>
                        <CardText>text</CardText>
                    </CardBody>
                </Card>
            )
        }

        function RenderContact() {
            return (
                <div className='container'>
                    <div className='row row-content home-bottom align-items-center my-5'>
                    <span className='fa fa-ravelry fa-lg'></span>
                    <h1 className='ml-5'>Get in touch</h1>
                    <Button className='ml-5 btn-lg' color='light'>Contact</Button>
                    </div>
                </div>
            )
        }


        function SideNav(props) {
            return (
                <Card className='sidebar'>
                    <Navbar dark expand='md'>
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
            )
        }
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-sm-2'>
                        <SideNav />
                    </div>
                    <div className='col col-lg-8 offset-2'>
                        <div className=''>
                            <h1>Container</h1>
                            <div className='row'>
                                <RenderCard />
                                <RenderCard />
                                <RenderCard />
                                <RenderCard />
                            </div>
                        </div>
                    </div>
                </div>
                <RenderContact />
            </div>
        )
    }
}

export default Locations;