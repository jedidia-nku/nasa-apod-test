import React, { useState, useEffect } from 'react';  // Importing necessary React hooks and components
import './Apod.css';  // Importing CSS file for styling
import { fetchAPOD, NasaAPOD } from '../api';  // Importing the fetchAPOD function and NasaAPOD type from the api module

const Apod: React.FC = () => {
  // State variables for holding data, error messages, and the show more/less toggle
  const [data, setData] = useState<NasaAPOD | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  // useEffect hook to fetch data from the NASA API when the component mounts
  useEffect(() => {
    const getData = async () => {
      const apodData = await fetchAPOD();  // Fetching the Astronomy Picture of the Day data
      if (apodData) {
        setData(apodData);  // Setting the fetched data to the state
      } else {
        setError("Failed to fetch data from NASA API");  // Setting an error message if fetching fails
      }
    };

    getData();  // Calling the async function to fetch data
  }, []);  // Empty dependency array ensures this effect runs only once on component mount

  // If there's an error, display the error message
  if (error) {
    return <div className="error">{error}</div>;
  }

  // If data hasn't loaded yet, display a loading message
  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  // Render the component when data is available
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
          <button className="button" onClick={() => setShowMore(!showMore)}> 
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Apod;  // Exporting the Apod component as the default export