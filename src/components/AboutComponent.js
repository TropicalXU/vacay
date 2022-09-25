import React, { Component } from 'react';
import { RenderContact, RenderHostCard } from '../functionalComponents/functionalComponents'

class About extends Component {
    render() {
        return (
            <div className='container'>
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
                <div className='row my-5 my-5 py-5'>
                    <div className='col-12 col-md-6 d-flex justify-content-center mb-5'>
                        <img src='/assets/images/information.png' width='250' height='250' />
                    </div>
                    <div className='col-12 col-md-6 mt-5'>
                    <h3 className='font'>About Us</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <RenderContact />
            </div>
        )
    }
}

export default About;