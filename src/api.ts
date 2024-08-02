import axios from 'axios';

const API_KEY = 'GVz1cSslJ9iQ8gVaEnxE2UebrSTrGCtakzTDYswN';

export interface NasaAPOD {
  url: string;
  title: string;
  date: string;
  explanation: string;
}

export const fetchAPOD = async (): Promise<NasaAPOD | null> => {
  try {
    const response = await axios.get<NasaAPOD>(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the NASA APOD:", error);
    return null;
  }
};