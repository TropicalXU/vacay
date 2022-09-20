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
                        <h1 className='home-header-title'>Check out our amazing locations!</h1>
                        <h3 className='home-header-text'>Cottage trips made easy with VACAY.</h3>
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

        function RenderTestemonials({testemonial}) {
            return (
                <Card className='testemonial'>
                    <CardBody>
                        <span className='fa fa-quote-left'></span>
                        <CardText className='py-3'>{testemonial.comment}</CardText>
                        <CardText> <i>- {testemonial.author},</i></CardText>
                        <CardText>
                            {new Intl.DateTimeFormat('en-US',
                            {year: 'numeric',
                            month: 'short',
                            day: '2-digit'}).format(new Date(Date.parse(testemonial.date)))}
                        </CardText>
                    </CardBody>
                </Card>
            )
        }

        return (
            <div className="container">
                <div className="row row-content">
                    <HomeHeader />
                </div>
                <div className='row my-5 row-content my-3'>
                  <RenderCard location={this.props.location1} />
                  <RenderCard location={this.props.location2} />
                  <RenderCard location={this.props.location3} />
                </div>
                <div className='row row-content my-3'>
                    <RenderTestemonials testemonial={this.props.testemonial1} />
                    <RenderTestemonials testemonial={this.props.testemonial2} />
                    <RenderTestemonials testemonial={this.props.testemonial3} />
                </div>
                <div className='row row-content home-bottom align-items-center my-5'>
                    <span className='fa fa-ravelry fa-lg'></span>
                    <h1 className='ml-5'>Ready to dive in...</h1>
                    <Button className='ml-5 btn-lg' color='light'>Get Started</Button>
                </div>
            </div>
        )
    }
}

export default Home;