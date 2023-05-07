import React, { useEffect, useState } from 'react'
import './News.css';
import { useParams } from 'react-router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Server/firebase';

function News() {
  const [newsDetails, setNewsDetails] = useState([]);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const newsCollectionRef = collection(db, 'News');
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
  <div className='news'>
    <h2>News</h2>

    {newsDetails.map((news) => (
      <div className='card' key={news.timestamp}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src='https://st2.depositphotos.com/3223379/5688/i/600/depositphotos_56880259-stock-photo-words-news.jpg'
              alt='abwudaw'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{news.title}</h5>
              <p className='card-text'>{news.content}</p>
              <p className='card-text'>
                <small className='text-muted'>Time:{news.timestamp}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
}

export default News