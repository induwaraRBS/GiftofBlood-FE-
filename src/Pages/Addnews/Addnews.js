import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { db } from "../../Server/firebase";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Addnews.css";

const Addnews = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "News"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      console.log("done");
      toast.success("Success");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.dev
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row>
          <Col>
            <h3 className="newstext">Add News</h3>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={data.title}
                  onChange={handleChange}
                  placeholder="Enter news title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="content">Content</Label>
                <Input
                  type="textarea"
                  name="content"
                  id="content"
                  value={data.content}
                  onChange={handleChange}
                  placeholder="Enter news content"
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.dev>
  );
};

export default Addnews;
