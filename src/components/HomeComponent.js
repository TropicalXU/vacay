import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { RenderCard, RenderTestemonials, RenderHostCard, RenderNewsletter } from '../functionalComponents/functionalComponents'

//-------------HOME COMPONENT----------//
class Home extends Component  {
    constructor(props) {
        super(props);
        {/* initiating the state configuration */}
        this.state = {
            isModalOpen: false,
            isRegisterModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
       
    }
    //----home component functions----//
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }

    handleSubmit(evt) {
        this.toggleModal();
        alert('Name: ' + this.name.value + 'Email:' + this.email.value);
        evt.preventDefault();
    }
    toggleRegisterModal() {
        this.setState({
            isRegisterModalOpen: !this.state.isRegisterModalOpen
          });
    }

    render() {

        
        {/* HOMEPAGE HEADER */}
        function HomeHeader() {
            return (
                <div className='container home-header d-flex justify-content-center align-items-center my-3'>
                    <div className='row text-center text-white'>
                    <div className='col'>
                        <h1 className='home-header-title'>Check out our amazing locations!</h1>
                        <h3 className='home-header-text my-3'>Cottage trips made easy with <span className='navbrand'>vacay</span>.</h3>
                        <NavLink className='home-header-btn btn btn-dark'to='/locations'>View locations</NavLink>
                        </div>
                    </div>
                </div>
            );
        }

    
        return (

        <>
        {/* register modal from page bottom section */}
            <Modal isOpen={this.state.isRegisterModalOpen} toggle={this.toggleRegisterModal} fade={false} className="col-12">
				<ModalHeader className='modal-news' toggle={this.toggleRegisterModal}>Register</ModalHeader>
				<ModalBody className='modal-news'>
                    <Form onSubmit={this.handleSubmit}>
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
      
        
         
            <div className="container">
                <div className="row row-content">
                    <HomeHeader />
                </div>
                {/* importing RenderCard from functionalComponent.js and passing in props from MainComponent.js to display content */}
                <div className='row my-5 row-content my-3'>
                  <RenderCard location={this.props.location1}
                    isLoading={this.props.locationsLoading}
                    errMsg={this.props.locationsErrMsg} 
                    />
                  <RenderCard location={this.props.location2}
                     isLoading={this.props.locationsLoading}
                     errMsg={this.props.locationsErrMsg}
                  />
                  <RenderCard location={this.props.location3}
                    isLoading={this.props.locationsLoading}
                    errMsg={this.props.locationsErrMsg}
                    />
                </div>
                <div className='row justify-content-center my-5'>
                    <h3 className='font'>Meet Our Top Hosts</h3>
                    <div className='col-12'>
                        <div className='row justify-content-center'>
                            {/* importing RenderHostCard from functionalComponent.js and passing in props from MainComponent.js to display content */}
                            <RenderHostCard host={this.props.host1} />
                            <RenderHostCard host={this.props.host2} />
                            <RenderHostCard host={this.props.host3} />
                        </div>
                    </div>
                </div>
                {/* importing RenderNewsletter from functionalComponent.js and passing in props for functionality  */}
                <RenderNewsletter 
                    onClick={this.toggleModal}
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                    onSubmit={this.handleSubmit}
                    name={this.name}
                    email={this.email}
                />
                <h1 className='font text-center pt-5'>Testemonials</h1>
                <div className='row row-content my-5'>
                    {/* importing RenderTestemonials from functionalComponent.js and passing in props from MainComponent.js to display content */}
                    <RenderTestemonials testemonial={this.props.testemonial1} />
                    <RenderTestemonials testemonial={this.props.testemonial2} />
                    <RenderTestemonials testemonial={this.props.testemonial3} />
                </div>
                {/* home page get started bottom section*/}
                <div className='row row-content home-bottom align-items-center mt-3 mb-5'>
                    <span className='fa fa-ravelry fa-lg'></span>
                    <h1 className='ml-5'>Ready to dive in...</h1>
                    <Button onClick={this.toggleRegisterModal} className='ml-5 btn-lg' color='primary'>Get Started</Button>
                </div>
            </div>
        </>
        );
    }
}

export default Home;

