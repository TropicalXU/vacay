import React, { Component } from 'react';
import { RenderContact, RenderHostCard } from '../functionalComponents/functionalComponents'

class About extends Component {
    render() {
        return (
            //----HOST CARD SECTION------//(IMPORTING RenderHostCard from functionalComponents.js)
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
                {/* ABOUT US SECTION */}
                <div className='row my-5 my-5 py-5'>
                    <div className='col-12 col-md-6 d-flex justify-content-center mb-5'>
                        <img src='/assets/images/information.png' width='250' height='250' />
                    </div>
                    <div className='col-12 col-md-6 mt-5'>
                    <h3 className='font'>About Us</h3>
                    <p>Vacay is an interactive single page application that provides a rental service of cottages and cabins across Canada. Discover your
                        next getaway with many destinations to choose from. 
                    </p>
                    </div>
                </div>
                {/* IMPORTING RenderContact from functionalComponents.js */}
                <RenderContact />
            </div>
        )
    }
}

export default About;