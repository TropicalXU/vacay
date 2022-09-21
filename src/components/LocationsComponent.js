import React, { Component } from 'react';
import {
    Navbar, Nav, NavbarToggler, Collapse, NavItem, Card, Button,
     CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input} from 'reactstrap';
import { RenderCard, RenderContact, RenderTestemonials, SideNav } from '../functionalComponents/functionalComponents'


class Locations extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }


    render() {
      
        const location = this.props.location;
        const locations = location.map((location) => {
            if(location != null) {
                return(
                <div key={location.id}>
                    <RenderCard location={location}  />
                </div>
                );
            }
            else {
                return (
                    <div></div>
                );
            }
      });

        return (
            <div className='container-fluid'>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} fade={false} className="col-12 modal-main">
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
                <div className='row'>
                    <div className='col col-sm-2'>
                        <SideNav onClick={this.toggleModal} />
                    </div>
                    <div className='col col-lg-8 offset-2'>
                        <div className=''>
                            <h3 className='font'>Featured Locations</h3>
                            <div className='row'>
                                {locations}
                                <RenderTestemonials testemonial={this.props.testemonial1}  />
                                <RenderTestemonials testemonial={this.props.testemonial3}  />
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