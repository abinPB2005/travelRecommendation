let travelData = {};

fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        travelData = data;
    });

document.getElementById('searchBtn').addEventListener('click', searchRecommendation);

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
});

function searchRecommendation() {

    const keyword = document
        .getElementById('searchInput')
        .value
        .trim()
        .toLowerCase();

    const results = document.getElementById('results');
    results.innerHTML = '';

    // Beaches
    if (keyword === 'beach' || keyword === 'beaches') {

        travelData.beaches.forEach(beach => {
            displayResult(beach);
        });

        return;
    }

    // Temples
    if (keyword === 'temple' || keyword === 'temples') {

        travelData.temples.forEach(temple => {
            displayResult(temple);
        });

        return;
    }

    // Countries
    travelData.countries.forEach(country => {

        if (country.name.toLowerCase() === keyword) {

            country.cities.forEach(city => {
                displayResult(city);
            });

        }

    });
}

function displayResult(place) {

    const results = document.getElementById('results');

    results.innerHTML += `
        <div class="card">
            <img src="${place.imageUrl}" alt="${place.name}" width="300">
            <h2>${place.name}</h2>
            <p>${place.description}</p>
        </div>
    `;
}