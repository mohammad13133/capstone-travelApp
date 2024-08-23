# CAPSTONE TRAVEL APP Project

## Overview

The travel-planner App is the final project for the Udacity Front-End Nanodegree. This travel planning app allows users to input a desired trip location and date, then provides real-time weather forecasts and an image of the destination using data from external APIs.

## downlaod and run the project

1.first you need to clone the repo

```
git clone https://github.com/mohammad13133/capstone-travelApp.git
```

2.install depandancies

```
npm install
```

3.make the dist file

```
npx webpack --config webpack.dev.js
```

4.create .env file for your apis keys
This project uses the following API services:

1. [GeoNames API](http://www.geonames.org/)
2. [Pixabay API](https://pixabay.com/api/docs/)
3. [Weatherbit API](https://www.weatherbit.io/api)

To run this project, make sure to create a `.env` file with your API keys:

```plaintext
geonamesKey=your_geonames_key
pixabayKey=your_pixabay_key
weatherbitKey=your_weatherbit_key


5.start server

```

npm start

```

6.start webpack

```

npm run build-dev

```

```
