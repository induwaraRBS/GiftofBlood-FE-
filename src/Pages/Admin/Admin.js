import React from "react";
import SideMenu from "../../Components/SideMenu";
import "./Admin.css";
import Widgets from "../../Components/Widgets";
import Newstable from "../../Components/Tables/Newstable";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Admin() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SideMenu />
      <div className="homeContainer">
        <div className="Widgets">
          <Widgets type="Donor" />
          <Widgets type="Admins" />
          <Widgets type="Messages" />
        </div>

        <div className="newstable">
          <hr></hr>
          <div className="newstitle">
            <h3>News</h3>
            <Link to={"/addnews"}>
              <Button variant="outlined" color="success">
                Add new
              </Button>
            </Link>
          </div>
          <hr></hr>
          <Newstable />
        </div>
      </div>
    </motion.div>
  );
}

export default Admin;
