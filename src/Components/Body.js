import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Button } from "reactstrap";
import "./Body.css";
import { db } from "../Server/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
function Body() {
  const navigate = useNavigate();
  const [newsDetails, setNewsDetails] = useState([]);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const newsCollectionRef = collection(db, "News");
        const newsSnapshot = await getDocs(newsCollectionRef);
        const newsData = newsSnapshot.docs.map((doc) => doc.data());
        setNewsDetails(newsData);
        console.log(setNewsDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsDetails();
  }, []);

  const handlenavigate = () => {
    navigate("/news");
  };

  return (
    <>
      <div className="body_Title">
        <hr></hr>
        <h3>Latest News</h3>
      </div>
      <motion.div
        className="body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6 }}
      >
        <Container className="container1">
          {/* <Row className='row'> */}
          {newsDetails?.map((news) => (
            <Col md={4} className="col">
              <Card
                className="card1"
                style={{
                  width: "20rem",
                  height: "28rem",
                }}
              >
                <img
                  className="body_img"
                  alt="Sample"
                  src="https://us.123rf.com/450wm/elenabutus/elenabutus2005/elenabutus200500009/146799460-abstract-giving-hand-with-drop-of-blood-low-poly-style-design-blue-blood-donor-day-concept-modern-3d.jpg?ver=6"
                />
                <CardBody className="card-body">
                  <CardTitle tag="h5">{news.title}</CardTitle>
                  {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {news.content}
                  </CardSubtitle> */}
                  <CardText>{news.content}</CardText>
                  <Button
                    color="danger"
                    outline
                    className="body_button"
                    onClick={handlenavigate}
                  >
                    Read more
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
          {newsDetails.length === 0 && (
            <Stack sx={{ color: "grey.500" }} spacing={1} direction="row">
              <CircularProgress color="success" />
            </Stack>
          )}
          {/* </Row> */}
        </Container>
      </motion.div>
    </>
  );
}

export default Body;
