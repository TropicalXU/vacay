import React, { Component } from 'react';

import RenderContact from './LocationsComponent'

class Quebec extends Component {
    render() {
        return (
            <div>
                <h1>Quebec</h1>
                <RenderContact />
            </div>
        )
    }
}

export default Quebec;