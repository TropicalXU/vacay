import React, { Component } from 'react';
import { SideNav, RenderCard, RenderContact } from '../functionalComponents/functionalComponents';

class Quebec extends Component {

    render() {
        const locations = this.props.location;
        const QuebecLocations = locations.map((location) => {
            if(location.province === 'Quebec') {
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
                        <h1 className='font'>Quebec</h1>
                        <div className='row'>
                            { QuebecLocations }
                        </div>
                    </div>
                </div>
                <RenderContact />
            </div>
        );
    }
}

export default Quebec;