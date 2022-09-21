import React, { Component } from 'react';
import { SideNav, RenderCard, RenderContact, RenderTestemonials } from '../functionalComponents/functionalComponents';

class BritishColumbia extends Component {

    render() {
        const locations = this.props.location;
        const BcLocations = locations.map((location) => {
            if(location.province === 'British Columbia') {
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
                        <h3 className='font'>British Columbia</h3>
                        <div className='row'>
                            { BcLocations }
                            <RenderTestemonials testemonial={this.props.testemonial1} />
                            <RenderTestemonials testemonial={this.props.testemonial2} />
                        </div>
                    </div>
                </div>
                <RenderContact />
            </div>
        );
    }
}

export default BritishColumbia;