// Import the axios library for making HTTP requests
import axios from 'axios';

// Define the API key for accessing the NASA APOD API
const API_KEY = 'GVz1cSslJ9iQ8gVaEnxE2UebrSTrGCtakzTDYswN';

// Define the TypeScript interface for the data structure returned by the NASA APOD API
export interface NasaAPOD {
  url: string;         // URL of the picture of the day
  title: string;       // Title of the picture
  date: string;        // Date the picture was published
  explanation: string; // Description of the picture
}

// Define an asynchronous function to fetch the NASA APOD data
export const fetchAPOD = async (): Promise<NasaAPOD | null> => {
  try {
    // Make a GET request to the NASA APOD API using axios
    const response = await axios.get<NasaAPOD>(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    
    // Return the data received from the API
    return response.data;
  } catch (error) {
    // Log an error message if the API request fails
    console.error("Oops! Sorry, we can't get today's picture.");
    
    // Return null if an error occurs
    return null;
  }
};