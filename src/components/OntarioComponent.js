import React, { Component } from 'react';
import { SideNav, RenderContact, RenderCard } from '../functionalComponents/functionalComponents';

class Ontario extends Component {

    render() {
        const locations = this.props.location;
        const ontarioLocations = locations.map((location) => {
            if(location.province === 'Ontario') {
                return (
                    <div key={location.id}>
                        <RenderCard location={location} />
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
                <div className='row'>
                    <div className='col col-sm-2'>
                        <SideNav />
                    </div>
                    <div className='col col-lg-8 offset-2'>
                        <h1 className='font'>Ontario</h1>
                        <div className='row'>
                            {ontarioLocations}
                        </div>
                    </div>
                </div>
                <RenderContact />
            </div>
        );
    }
}

export default Ontario;