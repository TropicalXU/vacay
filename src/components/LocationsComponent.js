import React, { Component } from 'react';
import { Button,  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { RenderCard, RenderContact, RenderTestemonials, SideNav } from '../functionalComponents/functionalComponents'

//----LOCATIONS COMPONENT-------//

class Locations extends Component {
    constructor(props) {
        super(props);
        {/* initiating the state configuration */}
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    //----header component functions----//
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }
    handleSubmit(evt) {
        this.toggleModal();
        alert('Name: ' + this.name.value + 'Email: ' + this.email.value);
        evt.preventDefault();
    }


    render() {
      
        const location = this.props.locations;
        //----mapping over locations to display locations 
        const locations = location.map((location) => {
       
            return (
                <div key={location.id}>
                    <RenderCard location={location}//calling RenderCard imported from functional component
                    isLoading={location.locationsLoading}
                    errMsg={location.locationsErrMsg}   />
                </div> 
            );
      });

        return (
            <div className='container-fluid align-items-center'>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} fade={false} className="col-12 modal-main">
                    <ModalHeader className='modal-news' toggle={this.toggleModal}>Sign up!</ModalHeader>
                    <ModalBody className='modal-news'>
                        <Form onSubmit={this.handleSubmit}>
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
                    <div className='col-12 col-sm-12 col-md-2 offset-1 offset-md-0'>
                        <SideNav onClick={this.toggleModal} />
                    </div>
                    <div className='col-12 col-sm-12 col-md-10 col-lg-8 offset-md-1'>
                        <div className=''>
                            <h3 className='font d-flex justify-content-center my-3'>Featured Locations</h3>
                            <div className='row d-flex justify-content-center'>
                                {locations}
                                {/* importing RenderTestemonials func from functionalComponents.js passing in props from MainComponent to display information */}
                                <RenderTestemonials testemonial={this.props.testemonial1}  />
                                <RenderTestemonials testemonial={this.props.testemonial3}  />
                            </div>
                        </div>
                    </div>
                </div>
                {/* importing RenderContact from functionalComponents.js */}
                <RenderContact />
            </div>
        )
    }
}

export default Locations;