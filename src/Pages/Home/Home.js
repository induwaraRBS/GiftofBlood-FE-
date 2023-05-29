import React from "react";
import "./Home.css";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Body from "../../Components/Body";
import Callnow from "../../Components/Callnow";
import ClientSay from "../../Components/ClientSay";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* AppBody */}
      <motion.div
        className="Banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Banner />
      </motion.div>
      {/* Readmore */}
      <motion.div
        className="Body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Body />
      </motion.div>
      {/* Callnow */}
      <motion.div
        className="Callnow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Callnow />
      </motion.div>
      {/* ClientSay */}
      <motion.div
        className="ClientSay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ClientSay />
      </motion.div>
      {/* Footer  */}
    </motion.div>
  );
}

export default Home;
