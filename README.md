# CAPSTONE TRAVEL APP Project

## Overview

The travel-planner App is the final project for the Udacity Front-End Nanodegree. This travel planning app allows users to input a desired trip location and date, then provides real-time weather forecasts and an image of the destination using data from external APIs.

## Technologies Used

### Node.js

Node.js is used for setting up the server and handling backend logic.

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" width="200"/>

### Webpack

Webpack is used as the module bundler for managing and optimizing the project files.

<img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg" alt="Webpack Logo" width="200"/>

### SCSS

SCSS is used for styling the application with more powerful and structured CSS.

<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="SCSS Logo" width="200"/>

## Video Demonstration

Watch the video demonstration of the project [here](https://drive.google.com/drive/u/0/my-drive?q=type:video%20parent:0ABAyedROuJbAUk9PVA).

## Download and Run the Project

1. First, clone the repository:

   ```bash
   git clone https://github.com/mohammad13133/capstone-travelApp.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create the `dist` file using Webpack:

   ```bash
   npx webpack --config webpack.dev.js
   ```

4. Create a `.env` file for your API keys:

   This project uses the following API services:

   - [GeoNames API](http://www.geonames.org/)
   - [Pixabay API](https://pixabay.com/api/docs/)
   - [Weatherbit API](https://www.weatherbit.io/api)

   To run this project, make sure to create a `.env` file with your API keys:

   ```plaintext
   geonamesKey=your_geonames_key
   pixabayKey=your_pixabay_key
   weatherbitKey=your_weatherbit_key
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Start Webpack:

   ```bash
   npm run build-dev
   ```
