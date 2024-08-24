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
      const tripDateStart = document.getElementById("trip-date").value;
      const tripDateEnd = document.getElementById("end-date").value;
      const countryName = data?.geonames[0]?.countryName;
      const location_latitude = data?.geonames[0]?.lat;
      const location_longitude = data?.geonames[0]?.lng;
      const trip = {
        city: city,
        country: countryName,
        latitude: location_latitude,
        longitude: location_longitude,
        date: tripDateStart,
        endDate: tripDateEnd,
      };
      const saved = false;
      const id = trip.id;
      updateUI(trip, saved, id);
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
        const id = trip.id;
        updateUI(trip, saved, id);
      });
    })
    .catch((error) => {
      console.error("Error fetching trips:", error);
    });
});

async function fetchImageURL(city, country) {
  const pixabayKey = process.env.pixabayKey;
  const imageFetchURL = `https://pixabay.com/api/?key=${pixabayKey}&q=Tourist+places+in+${city}+${country}&image_type=photo`;
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

async function updateUI(trip, saved, id) {
  console.log(trip);
  const tripCard = document.createElement("div");
  tripCard.className = "trip-card";
  const tripDate = new Date(trip.date);
  const endDate = new Date(trip.endDate);
  const currentDate = new Date();
  const daysAway = Client.calculateDaysDiff(currentDate, trip.date);

  const triplength = Client.calculateDaysDiff(trip.date, trip.endDate);

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
      <p><strong>Departing:</strong> ${trip.date} <strong>to:</strong> ${
    trip.endDate
  }</p>
      <p><strong>Trip length:</strong> ${triplength} days</p>
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
      <div class="list">
        <div class="list-item" id="add-item">
          <p>Add to-do item<span>+</span></p>
        </div>
        ${
          trip.list
            ? trip.list
                .map((item) => `<div class="list-item"><p>${item}</p></div>`)
                .join("")
            : ""
        }
       
      </div>
    </div>
  `;

  document.getElementById("travel-cont").appendChild(tripCard);

  tripCard.querySelector(".save-trip")?.addEventListener("click", () => {
    const listItems = Array.from(tripCard.querySelectorAll(".list-item p"))
      .filter((item, index) => index > 0) // Skip the first item
      .map((item) => item.textContent);
    const tripData = {
      city: trip.city,
      country: trip.country,
      latitude: trip.latitude,
      longitude: trip.longitude,
      date: trip.date,
      endDate: trip.endDate,
      list: listItems,
    };
    console.log(tripData);

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
        id = data.id;
        tripCard.querySelector(".trip-buttons").innerHTML = `
          <button class="remove-trip">Remove Trip</button>
        `;
        addRemoveTripListener(tripCard, data.id);
      })
      .catch((error) => {
        console.error("Error saving trip:", error);
      });
  });

  tripCard.querySelector(".list-item").addEventListener("click", function () {
    let newItemText = prompt("Enter a new to-do item:");
    if (newItemText) {
      let newListItem = document.createElement("div");
      newListItem.className = "list-item";
      let newP = document.createElement("p");
      newP.textContent = newItemText;
      newListItem.appendChild(newP);
      tripCard.querySelector(".list").appendChild(newListItem);
      if (id != null) {
        tripCard.querySelector(".trip-buttons").innerHTML = `
        <button class="update-list">update Trip</button>
      `;
        updateTrip(tripCard, trip, id);
      }
    }
  });

  if (saved) {
    addRemoveTripListener(tripCard, trip.id);
  }
}

function addRemoveTripListener(tripCard, tripId) {
  if (!tripId) {
    throw new Error("tripId must be found");
  }
  tripCard.querySelector(".remove-trip").addEventListener("click", () => {
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
function updateTrip(tripCard, trip, id) {
  tripCard.querySelector(".update-list").addEventListener("click", async () => {
    const listItems = Array.from(tripCard.querySelectorAll(".list-item p"))
      .filter((item, index) => index > 0) // Skip the first item
      .map((item) => item.textContent);
    const updatedTripData = { ...trip, list: listItems };

    try {
      const response = await fetch(`http://localhost:3000/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTripData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      tripCard.querySelector(".trip-buttons").innerHTML = `
      <button class="remove-trip">Remove Trip</button>
    `;
      addRemoveTripListener(tripCard, data.id);
      console.log("Trip updated:", data);
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  });
}
