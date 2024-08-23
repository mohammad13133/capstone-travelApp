document.getElementById("add-trip-button").addEventListener("click", () => {
  const city = document.getElementById("trip-city").value;
  const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${process.env.geonamesKey}`;
  console.log(city);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const id = null;
      // These variables are specific to each trip
      const tripDateInput = document.getElementById("trip-date").value;
      const countryName = data?.geonames[0]?.countryName;
      const location_latitude = data?.geonames[0]?.lat;
      const location_longitude = data?.geonames[0]?.lng;
      const trip = {
        city: city,
        country: countryName,
        latitude: location_latitude,
        longitude: location_longitude,
        date: tripDateInput,
      };
      const saved = false;
      updateUI(trip, saved);
    })

    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/all")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((trip) => {
        const saved = true;
        updateUI(trip, saved);
      });
    })
    .catch((error) => {
      console.error("Error fetching trips:", error);
    });
});
async function fetchImageURL(city, country) {
  const pixabayKey = process.env.pixabayKey;
  const imageFetchURL = `https://pixabay.com/api/?key=${pixabayKey}&q=tourist+placis+${city}+in+${country}&image_type=photo`;
  try {
    const response = await fetch(imageFetchURL);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    if (data.hits.length > 0) {
      return data.hits[0].largeImageURL;
    } else {
      console.log("No image found for this city.");
      return null;
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  }
}
async function fetchWeatherStatus(long, lat) {
  const weatherbitKey = process.env.weatherbitKey; // Your API key
  const WeatherFetchUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&days=7&key=${weatherbitKey}`;

  try {
    const response = await fetch(WeatherFetchUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  }
}
async function updateUI(trip, saved) {
  console.log(trip);
  const tripCard = document.createElement("div");
  tripCard.className = "trip-card";
  const tripDate = new Date(trip.date);
  const currentDate = new Date();
  const timeDiff = tripDate - currentDate;
  const daysAway = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Fetch image URL
  const imageurl = await fetchImageURL(trip.city, trip.country);
  const weather = await fetchWeatherStatus(trip.longitude, trip.latitude);

  tripCard.innerHTML = `
    <img
      src="${imageurl}"
      alt="${trip.city}, ${trip.country}"
      class="trip-image"
    />
    <div class="trip-details">
      <p><strong>My trip to:</strong> ${trip.city}, ${trip.country}</p>
      <p><strong>Departing:</strong> ${trip.date}</p>
      <div class="trip-buttons">
      ${
        saved
          ? `<button class="remove-trip">Remove Trip</button>`
          : `<button class="save-trip">Save Trip</button>`
      }
      </div>
      <p class="trip-info">${trip.city}, ${
    trip.country
  } is ${daysAway} days away</p>
    ${
      daysAway < 7 && daysAway > 0
        ? `<p class="trip-weather">
        Typical weather in ${weather?.data[daysAway]?.datetime} is:<br />
        max tempreture - ${weather?.data[daysAway]?.app_max_temp} min temp - ${weather?.data[daysAway]?.app_min_temp}<br />
        ${weather?.data[daysAway]?.weather?.description}
      </p>`
        : `<p>whether appear for 7 days or less`
    }
    
    </div>
  `;

  // Append the trip card to the container
  document.getElementById("travel-cont").appendChild(tripCard);

  // Add event listener for saving the trip
  tripCard.querySelector(".save-trip")?.addEventListener("click", (event) => {
    const tripData = {
      city: trip.city,
      country: trip.country,
      latitude: trip.latitude,
      longitude: trip.longitude,
      date: trip.date,
    };

    // Send trip data to the server
    fetch("http://localhost:3000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Trip saved:", data);
        tripCard.querySelector(".trip-buttons").innerHTML = `
          <button class="remove-trip">Remove Trip</button>
        `;
        addRemoveTripListener(tripCard, data.id);
      })
      .catch((error) => {
        console.error("Error saving trip:", error);
      });
  });

  // Add event listener for removing the trip
  if (saved) {
    addRemoveTripListener(tripCard, trip.id);
  }
}

// Function to add remove trip event listener
function addRemoveTripListener(tripCard, tripId) {
  tripCard.querySelector(".remove-trip").addEventListener("click", (event) => {
    fetch(`http://localhost:3000/delete/${tripId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        console.log(`Trip with ID ${tripId} removed.`);
        tripCard.remove();
      })
      .catch((error) => {
        console.error("Error removing trip:", error);
      });
  });
}
