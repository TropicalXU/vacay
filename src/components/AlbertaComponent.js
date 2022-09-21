import React, { Component } from 'react';
import { SideNav, RenderCard, RenderContact, RenderTestemonials } from '../functionalComponents/functionalComponents';

class Alberta extends Component {

    render() {
        const locations = this.props.location;
        const AlbertaLocations = locations.map((location) => {
            if(location.province === 'Alberta') {
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
                        <h3 className='font'>Alberta</h3>
                        <div className='row'>
                            { AlbertaLocations }
                            <RenderTestemonials testemonial={this.props.testemonial2} />
                            <RenderTestemonials testemonial={this.props.testemonial3} />
                        </div>
                    </div>
                </div>
                <RenderContact />
            </div>
        );
    }
}

export default Alberta;