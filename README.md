# NASA Astronomy Picture of the Day (APOD) Viewer

This is a React application built with TypeScript that allows users to explore NASA's Astronomy Picture of the Day (APOD) API. The application fetches data from the NASA APOD API and displays the picture of the day along with its title, published date, and a detailed explanation. The explanation text can be expanded or collapsed using a "Read More" button.

# Features

* Fetches and displays the Astronomy Picture of the Day from NASA's APOD API.
* Shows the picture, title, published date, and an expandable/collapsible explanation.
* Handles errors gracefully with user-friendly messages.
* Responsive design ensuring compatibility across various devices.
* Single-screen application without scrolling.

# Demo

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

* Node.js (>= 14.0.0)
* npm (>= 6.0.0)

### Installation

1. **Clone the repository:**

git clone https://github.com/jedidia-nku/nasa-apod-test.git
cd nasa-apod-test

2. **Install dependencies:**

npm install

3. **Replace the NASA API key:**

* Go to NASA API and get your API key.
* Open `src/api.ts` and replace API_KEY with your actual NASA API key.

4. **Start the development server:**

npm start

5. **Open your browser and navigate to:**

http://localhost:3000

# Usage

* **APOD Component (`src/components/APOD.tsx`):** Fetches data from the NASA APOD API and displays the picture, title, date, and explanation. It includes a "Read More" button to expand the explanation text.

* **API Handler (`src/api.ts`):** Contains the function to fetch data from the NASA APOD API.
* **Styles (`src/components/APOD.css` & `src/App.css`):**  Contains the CSS styles for the APOD component and the global styles for the app.

# Error Handling

The application gracefully handles errors that may occur while fetching data from the NASA API. If the data cannot be fetched, a user-friendly error message is displayed.

# Responsive Design

The app is designed to be responsive and compatible with various devices. The layout adjusts to fit different screen sizes, ensuring a good user experience on both desktop and mobile devices.

# Built With

* **React** - A JavaScript library for building user interfaces.
* **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
* **Axios** - A promise-based HTTP client for the browser and Node.js.

# Deployed App
Click this link: [NASA'S PICTURE OF THE DAY](https://sprightly-cranachan-7ade9e.netlify.app/)

# Acknowledgments

* Thanks to [NASA](https://www.nasa.gov/) for providing the APOD API.
