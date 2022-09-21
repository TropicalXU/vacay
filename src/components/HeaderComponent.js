import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isLoginModalOpen: false,
            isRegisterModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
          });
    }
    toggleRegisterModal() {
        this.setState({
            isRegisterModalOpen: !this.state.isRegisterModalOpen
          });
    }

    render() {
        return (
            <>
                {/* MAIN NAVBAR*/}
                <Navbar light expand='md'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/'>
                            <img src='assets/images/logo.png' height='50' width='51'
                                 alt='Ristorante Con Fusion Logo' 
                            />  <span className='navbrand ml-3'>vacay.</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='ml-auto'>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'>
                                    <span className='fa fa-home fa-lg'></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/locations'>
                                    <span className='fa fa-location-arrow fa-lg'></span> Locations
                                </NavLink>
                            </NavItem>
                            </Nav>
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <Button className='register-btn' onClick={this.toggleRegisterModal}>
                                        Register
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <Button className='ml-2' outline onClick={this.toggleLoginModal}>
                                        <span className='fa fa-sign-in fa-lg'></span>Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <hr></hr>
                <div className='container'>
                    {/* SECONDARY NAVBAR */}
                    <Navbar expand='md'>
                        <Nav navbar className='ml-auto'>
                        <NavItem>
                            <NavLink className='nav-link text-dark' to='/about'>
                                <span className='fa fa-info fa-lg'></span> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link text-dark' to='/contact'>
                                <span className='fa fa-envelope-o fa-lg'></span> Contact
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Navbar>
                </div>

                {/* LOGIN MODAL */}
                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal} fade={false} className="col-12">
				<ModalHeader className='modal-news' toggle={this.toggleLoginModal}>Login</ModalHeader>
				<ModalBody className='modal-news'>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'>Username</Label>
                            <Input type='text' id='username' name='username'
                            innerRef={(input) => this.username = input}
                            placeholder='username'/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Input type='password' id='password' name='password'
                            innerRef={(input) => this.password = input}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' name='remember'
                                 innerRef={(input) => this.remember = input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type='submit' color='primary'>Login</Button>
                    </Form>
				</ModalBody>
			</Modal>

            {/* REGISTER MODAL*/}
            <Modal isOpen={this.state.isRegisterModalOpen} toggle={this.toggleRegisterModal} fade={false} className="col-12">
				<ModalHeader className='modal-news' toggle={this.toggleRegisterModal}>Register</ModalHeader>
				<ModalBody className='modal-news'>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='firstname'>First Name</Label>
                            <Input type='text' id='firstname' name='firstname'
                            innerRef={(input) => this.firstname = input}
                            placeholder='First Name'/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='lastname'>Last Name</Label>
                            <Input type='text' id='lastname' name='lastname'
                            innerRef={(input) => this.lastname = input}
                            placeholder='Last Name'/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='email'>Email</Label>
                            <Input type='email' id='email' name='email'
                            innerRef={(input) => this.email = input}
                            placeholder='Email'/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Input type='password' id='password' name='password'
                            innerRef={(input) => this.password = input}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' name='remember'
                                 innerRef={(input) => this.remember = input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type='submit' color='primary'>Register</Button>
                    </Form>
				</ModalBody>
			</Modal>
            </>
        )
    }
}

export default Header;