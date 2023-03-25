import { height } from '@mui/system';
import React from 'react';
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Row,Col, Container} from 'reactstrap';
import { Button } from 'reactstrap';

import './Body.css';

const News = () => {};


function Body() {
  return (
    
    <><div className='body_Title'>
      <hr></hr>
      <h1>Latest News</h1>

    </div><div className='body'>
        <Container>
          <Row>
            <Col md={3}>
              <Card className='card1'
                style={{
                  width: '20rem',
                  height: '28rem'
                }}
              >
                <img
                  className='body_img'
                  alt="Sample"
                  src="https://us.123rf.com/450wm/elenabutus/elenabutus2005/elenabutus200500009/146799460-abstract-giving-hand-with-drop-of-blood-low-poly-style-design-blue-blood-donor-day-concept-modern-3d.jpg?ver=6" />
                <CardBody className='card-body'>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                  <Button color="danger"
                    outline
                    className='body_button'
                    onClick={News}>
                    Read more
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='card2'
                style={{
                  width: '20rem',
                  height: '28rem'
                }}
              >
                <img
                  className='body_img'
                  alt="Sample"
                  src="https://wallpaperaccess.com/full/6553564.jpg" />
                <CardBody className='card-body'>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                  <Button color="danger"
                    outline
                    className='body_button'
                    onClick={News}>
                    Read more
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='card3'
                style={{
                  width: '20rem',
                  height: '28rem'
                }}
              >
                <img
                  className='body_img'
                  alt="Sample"
                  src="https://cdn.wallpapersafari.com/75/92/GFi4Nh.png" />
                <CardBody className='card-body'>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                  <Button color="danger"
                    outline
                    className='body_button'
                    onClick={News}>
                    Read more
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='card4'
                style={{
                  width: '20rem',
                  height: '28rem'
                }}
              >
                <img
                  className='body_img'
                  alt="Sample"
                  src="https://cdn.wallpapersafari.com/75/92/GFi4Nh.png" />
                <CardBody className='card-body'>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                  <Button color="danger"
                    outline
                    className='body_button'
                    onClick={News}>
                    Read more
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

      </div></>
  )
}

export default Body
