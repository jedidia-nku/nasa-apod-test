import React, { useState, useEffect } from 'react';
import './Apod.css';
import { fetchAPOD, NasaAPOD } from '../api';

const Apod: React.FC = () => {
  const [data, setData] = useState<NasaAPOD | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const apodData = await fetchAPOD();
      if (apodData) {
        setData(apodData);
      } else {
        setError("Failed to fetch data from NASA API");
      }
    };

    getData();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
    <div className="container">
      <h1 className="logo">NASA'S PICTURE OF THE DAY</h1>
      <h1 className="title">{data.title}</h1>
      <p className="date">Published Date: {data.date}</p>
      
      <div className="img-box">
      <img className="image" src={data.url} alt={data.title} />
      </div>
      <div className='explanation-box'>
      <p className={`explanation ${showMore ? 'show-more' : ''}`}>
        {data.explanation}
      </p>
      <a className="button" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Read More'}
      </a>
      </div>
    </div>
    </>
  );
};

export default Apod;