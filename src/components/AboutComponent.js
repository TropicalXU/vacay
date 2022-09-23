import React, { Component } from 'react';
import { RenderContact } from '../functionalComponents/functionalComponents'

class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6 col-md-6'>
                        <img src='/assets/images/logo.png' className='img-fluid' />
                    </div>
                    <div className='col col-md-6'>
                    <h3 className='font'>About Us</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
                <h1>About</h1>
                <RenderContact />
            </div>
        )
    }
}

export default About;