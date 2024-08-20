/* Global Variables */
const apiKey = "b66b3b20f5b9237d264efbe6b4e06527&units=imperial";

let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;

document.getElementById("generate").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  const userResponse = document.getElementById("feelings").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`; //by zip cod not working in my country

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return postData("http://localhost:3000/add", {
        temperature: data.main.temp,
        date: newDate,
        userResponse: userResponse,
      });
    })
    .then(() => updateUI())
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});

// Create a new date instance dynamically with JS
console.log(newDate); // Example to show the new date
const postData = async (url = "", data = {}) => {
  console.log("Sending POST request");
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log("POST response:", newData);
  } catch (error) {
    console.error("Error:", error);
  }
};
const updateUI = async () => {
  const request = await fetch("http://localhost:3000/all");
  try {
    const allData = await request.json();
    document.getElementById(
      "temp"
    ).innerHTML = `Temperature: ${allData.temperature} °F`;
    document.getElementById("date").innerHTML = `Date: ${allData.date}`;
    document.getElementById(
      "content"
    ).innerHTML = `User Response: ${allData.userResponse}`;
  } catch (error) {
    console.error("Error updating UI:", error);
  }
};
