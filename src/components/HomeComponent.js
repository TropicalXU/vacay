import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { RenderCard, RenderTestemonials, RenderHostCard, RenderNewsletter } from '../functionalComponents/functionalComponents'


class Home extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

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
                <div className="row row-content">
                    <HomeHeader />
                </div>
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
                            <RenderHostCard host={this.props.host1} />
                            <RenderHostCard host={this.props.host2} />
                            <RenderHostCard host={this.props.host3} />
                        </div>
                    </div>
                </div>
                <RenderNewsletter 
                    onClick={this.toggleModal}
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                    onSubmit={this.handleSubmit}
                    name={this.name}
                    email={this.email}
                />
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

