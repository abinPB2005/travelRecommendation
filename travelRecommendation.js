let travelData = {};

fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        travelData = data;
    })
    .catch(error => console.log(error));

document.getElementById('searchBtn').addEventListener('click', searchRecommendation);

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
});

function searchRecommendation() {

    const keyword = document
        .getElementById('searchInput')
        .value
        .toLowerCase();

    const results = document.getElementById('results');
    results.innerHTML = '';

    // Search Countries and Cities
    travelData.countries.forEach(country => {

        if (country.name.toLowerCase().includes(keyword)) {

            country.cities.forEach(city => {
                displayResult(city);
            });
        }

        country.cities.forEach(city => {

            if (city.name.toLowerCase().includes(keyword)) {
                displayResult(city);
            }

        });

    });

    // Search Temples
    travelData.temples.forEach(temple => {

        if (keyword.includes('temple') ||
            temple.name.toLowerCase().includes(keyword)) {

            displayResult(temple);
        }

    });

    // Search Beaches
    travelData.beaches.forEach(beach => {

        if (keyword.includes('beach') ||
            beach.name.toLowerCase().includes(keyword)) {

            displayResult(beach);
        }

    });
}

function displayResult(place) {

    const results = document.getElementById('results');

    results.innerHTML += `
        <div class="card">
            <img src="${place.imageUrl}" width="300">
            <h2>${place.name}</h2>
            <p>${place.description}</p>
        </div>
    `;
}