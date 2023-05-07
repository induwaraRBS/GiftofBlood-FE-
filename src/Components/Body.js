import { height } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Row,Col, Container} from 'reactstrap';
import { Button } from 'reactstrap';
import './Body.css';
import { db } from '../Server/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Body() {
  const navigate = useNavigate();
  const[newsDetails,setNewsDetails] = useState([]);

  useEffect(()=>{
    const fetchNewsDetails =async () =>{
      try{
        const newsCollectionRef = collection(db,'News');
        const newsSnapshot = await getDocs(newsCollectionRef);
        const newsData = newsSnapshot.docs.map((doc)=> doc.data());
        setNewsDetails(newsData);
        console.log(setNewsDetails);
      }catch(error){
        console.log(error);
      }
    };
    fetchNewsDetails();
  },[]);

 const handlenavigate = () => {
      navigate("/news");
 }

  return (
    
    <><div className='body_Title'>
      <hr></hr>
      <h1>Latest News</h1>
    </div><div className='body'>
          <Container className="container1">
            {/* <Row className='row'> */}
        {newsDetails.map((news) => (
              <Col md={4} className='col'>
                <Card className='card1' style={{
                   width: '20rem',
                   height: '28rem'
                }}>
                  <img
                    className='body_img'
                    alt="Sample"
                    src="https://us.123rf.com/450wm/elenabutus/elenabutus2005/elenabutus200500009/146799460-abstract-giving-hand-with-drop-of-blood-low-poly-style-design-blue-blood-donor-day-concept-modern-3d.jpg?ver=6" />
                  <CardBody className='card-body'>
                    <CardTitle tag="h5">
                      {news.title}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {news.content}
                    </CardSubtitle>
                    <CardText>
                      {news.content}
                    </CardText>
                    <Button color="danger"
                      outline
                      className='body_button'
                      onClick={handlenavigate}>
                      Read more
                    </Button>
                  </CardBody>
                </Card>
              </Col>
        ))}
        {/* </Row> */}
          </Container>
      </div></>
  )
}

export default Body
