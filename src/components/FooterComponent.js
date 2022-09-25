import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            //FOOTER COMPONENT
            <div className='footer'>
                <div className='container pt-5'>
                <div className='row py-5'>
                    <div className='col col-sm-4'>
                        <div className='row'>
                            <img src='/assets/images/logo.png' height='60' width='61' />
                            <h4 className='navbrand px-3 pt-3'>vacay.</h4>
                        </div>
                    </div>
                    <div className='col col-sm-2'>
                        <h5 className='font'>Home</h5>
                        <ul className='list-unstyled'>
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/locations'>Locations</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className='col col-sm-2'>
                        <h5 className='font'>Locations</h5>
                        <ul className='list-unstyled'>
                            <li><NavLink to='/locations/ontario'>Ontario</NavLink></li>
                            <li><NavLink to='/locations/british-columbia'>British Columbia</NavLink></li>
                            <li><NavLink to='/locations/alberta'>Alberta</NavLink></li>
                            <li><NavLink to='/locations/quebec'>Quebec</NavLink></li>
                        </ul>
                    </div>
                    <div className='col col-sm-2'>
                        <h5 className='font'>Legal</h5>
                        <ul className='list-unstyled'>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className='col col-sm-2 align-items-center'>
                        <h5 className='font'>Socials</h5>
                        <span className='fa fa-instagram fa-lg'></span>
                        <span className='fa fa-facebook fa-lg ml-2'></span>
                        <span className='fa fa-github fa-lg ml-2'></span>
                    </div>
                </div>
                <hr></hr>
                <div className='row mt-2'>
                    <div className='col col-sm-6'>
                        <p>@Copyright vacay 2022. All rights reserved.</p>
                    </div>
                    <div className='col col-sm-3'>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className='col col-sm-3'>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;