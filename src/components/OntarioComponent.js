import React, { Component } from 'react';
import { SideNav, RenderContact, RenderTestemonials, RenderCard } from '../functionalComponents/functionalComponents';

class Ontario extends Component {

    render() {
        const locations = this.props.location;
        const ontarioLocations = locations.map((location) => {
            if(location.province === 'Ontario') {
                return (
                    <div key={location.id}>
                        <RenderCard location={location}
                        isLoading={this.props.locationsLoading}
                        errMsg={this.props.locationsErrMsg}  />
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
                    <div className='col col-sm-2 offset-1 offset-md-0'>
                        <SideNav />
                    </div>
                    <div className='col col-sm-8 offset-2'>
                        <h3 className='font'>Ontario</h3>
                        <div className='row'>
                            {ontarioLocations}
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

export default Ontario;