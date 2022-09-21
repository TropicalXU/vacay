import React, { Component } from 'react';
import { RenderContact } from '../functionalComponents/functionalComponents'

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <RenderContact />
            </div>
        )
    }
}

export default About;