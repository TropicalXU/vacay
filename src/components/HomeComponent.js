import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
    Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { RenderCard, RenderTestemonials } from '../functionalComponents/functionalComponents'


class Home extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
       
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
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
         
            <div className="container">
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} fade={false} className="col-12">
                    <ModalHeader className='modal-news' toggle={this.toggleModal}>Sign up!</ModalHeader>
                    <ModalBody className='modal-news'>
                        <Form onSubmit={this.handleLogin}>
                          <FormGroup>
                            <Label htmlFor='name'>Name</Label>
                            <Input type='text' id='name' name='name'
                             innerRef={(input) => this.name = input}
                             placeholder='Name'/>
                          </FormGroup> 
                          <FormGroup>
                            <Label htmlFor='name'>Email</Label>
                            <Input type='text' id='email' name='email'
                             innerRef={(input) => this.email = input}
                             placeholder='Email'/>
                          </FormGroup>
                          <Button type='submit' color='primary'>Sign up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <div className="row row-content">
                    <HomeHeader />
                </div>
                <div className='row my-5 row-content my-3'>
                  <RenderCard location={this.props.location1} />
                  <RenderCard location={this.props.location2} />
                  <RenderCard location={this.props.location3} />
                </div>
                <div className='row newsletter my-3 py-5'>
                    <div className='col-12'>
                        <h2>Sign up for our newsletter!</h2>
                        <Button color='primary' onClick={this.toggleModal}>Sign up</Button>
                    </div>
                </div>
                <div className='row row-content my-5'>
                    <RenderTestemonials testemonial={this.props.testemonial1} />
                    <RenderTestemonials testemonial={this.props.testemonial2} />
                    <RenderTestemonials testemonial={this.props.testemonial3} />
                </div>
                <div className='row row-content home-bottom align-items-center mt-3 mb-5'>
                    <span className='fa fa-ravelry fa-lg'></span>
                    <h1 className='ml-5'>Ready to dive in...</h1>
                    <Button className='ml-5 btn-lg' color='primary'>Get Started</Button>
                </div>
            </div>
        );
    }
}

export default Home;

