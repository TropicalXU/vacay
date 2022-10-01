import React, { Component } from 'react';
import { Button,  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { SideNav, RenderCard, RenderContact, RenderTestemonials } from '../functionalComponents/functionalComponents';

//-----ALBERTA COMPONENT -----//
class Alberta extends Component {
    constructor(props) {
        super(props);
        {/* initiating the state configuration */}
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const locations = this.props.location;
        //----mapping over locations to display locations with the province set as Alberta to only be displayed
        const AlbertaLocations = locations.map((location) => {
            if(location.province === 'Alberta') {
                return (
                    <div key={location.id}>
                        {/* importing RenderCard from functionalComponent.js */}
                        <RenderCard location={location}
                        isLoading={this.props.locationsLoading}
                        errMsg={this.props.locationsErrMsg} />
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
                {/* NEWSLETTER SIGNUP MODAL */}
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
                    <div className='col col-sm-2 offset-1 offset-md-0'>
                        {/* importing SideNav function from functionalComponents.js */}
                        <SideNav onClick={this.toggleModal} />
                    </div>
                    <div className='col col-lg-8 offset-2'>
                        <h3 className='font'>Alberta</h3>
                        <div className='row'>
                            { AlbertaLocations }
                            {/* importing RenderTestemonials func from functionalComponents.js passing in props from MainComponent to display information */}
                            <RenderTestemonials testemonial={this.props.testemonial2} />
                            <RenderTestemonials testemonial={this.props.testemonial3} />
                        </div>
                    </div>
                </div>
                {/* importing RenderContact from functionalComponents.js */}
                <RenderContact />
            </div>
        );
    }
}

export default Alberta;