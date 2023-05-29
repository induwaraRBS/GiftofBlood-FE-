import React, { useEffect, useState } from "react";
import "./News.css";
import { useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Server/firebase";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import savelifeImage from "../../Assets/savelife.jpg";
function News() {
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

  return (
    <motion.div
      className="news"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 6 }}
    >
      <h2>News</h2>

      {newsDetails.map((news) => (
        <div className="card" key={news.timestamp}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={savelifeImage} alt="abwudaw" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.content}</p>
                <p className="card-text">
                  <small className="text-muted">Time:{news.timestamp}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {newsDetails.length === 0 && (
        <Stack spacing={1} direction="row" className="circle">
          <CircularProgress color="success" />
        </Stack>
      )}
    </motion.div>
  );
}

export default News;
