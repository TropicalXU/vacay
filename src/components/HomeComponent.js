import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


class Home extends Component  {
    constructor(props) {
        super(props);
       
    }


    render() {

        function HomeHeader() {
            return (
                <div className='container my-3'>
                    <div className='row justify-content-center'>
                        <img src='/assets/images/homeHeader.jpg' className='img-fluid' />
                        <h1 className='home-header-text'>Check out our amazing locations</h1>
                        <Button className='home-header-btn' color='primary'>View locations</Button>
                    </div>
                </div>
            )
        }


        function RenderCard({location}) {
            return (
                <Card className='text-center'>
                    <CardImg src={location.image} width='40' height='200'/>
                    <CardBody>
                        <CardTitle>{location.name}</CardTitle>
                        <CardText>{location.description}</CardText>
                        <h3>$ {location.price}</h3>
                    </CardBody>
                    <Button color='primary'>View</Button>
                </Card>
            )
        }

        return (
            <div className="container">
                <div className="row align-items-center">
                    <HomeHeader />
                </div>
                <div className='row justify-content-center my-5'>
                  <RenderCard location={this.props.location1} />
                  <RenderCard location={this.props.location2} />
                  <RenderCard location={this.props.location3} />
                    
                </div>
            </div>
        )
    }
}

export default Home;