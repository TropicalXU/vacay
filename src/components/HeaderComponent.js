import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

//--------HEADER COMPONENT----------//
class Header extends Component {
    constructor(props) {
        super(props);
        {/* initiating the state configuration */}
        this.state = {
            isNavOpen: false,
            isLoginModalOpen: false,
            isRegisterModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    //----header component functions----//
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

    handleLogin(evt) {
        this.toggleModal();
        alert('Username: ' + this.username.value + 'Password:' + this.password.value + 'Remember: ' + this.remember.checked);
        evt.preventDefault();
    }
    handleRegister(evt) {
        this.toggleModal();
        alert('Firstname: ' + this.firstname.value + 'Lastname: ' + this.lastname.value + 'Email: ' + this.email.value + 'Password: ' + this.password.value + 'Remember: ' + this.remember.checked);
        evt.preventDefault();
    }

    render() {
        return (
            <>
                {/* MAIN NAVBAR*/}
                <Navbar light expand='md'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/'>
                            <img src='assets/images/logo.png' height='50' width='51'
                                 alt='Vacay Logo' 
                            />  <span className='navbrand ml-3'>vacay.</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='ml-auto'>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'>
                                    <span className='fa fa-home fa-lg'></span> <span className='font'>Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/locations'>
                                    <span className='fa fa-location-arrow fa-lg'></span> <span className='font'>Locations</span>
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
                            <NavLink className='nav-link text-dark ml-3' to='/about'>
                                <span className='fa fa-info-circle fa-lg'></span> About
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
                    <Form onSubmit={this.handleRegister}>
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