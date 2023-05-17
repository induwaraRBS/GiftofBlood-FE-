import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import'./About.css'
function about() {
  return (
    <div className="aboutpage">
      <div className="about-box">

      <Container className="conatiner">
      <Row className="row1">
        <Col className="col2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We are a blood donation organization dedicated to saving lives and
            improving health. Our goal is to ensure that patients receive the
            blood they need, when they need it. We believe that blood donation
            is a simple, safe, and effective way to give back to the community
            and make a positive impact on the world.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Our organization is run by a team of dedicated volunteers who are
            passionate about helping others. We work with hospitals, blood banks,
            and other organizations to ensure that blood is available to those in
            need. Our donors come from all walks of life, but they all share a
            common goal: to save lives and make a difference in the world.
          </motion.p>
        </Col>
      </Row>
    </Container>
      </div>
    </div>
  )
}

export default about
