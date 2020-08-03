// Define Cards Variables 

const placeCard = document.getElementById('place-card'); 
const placeImage = document.getElementById('place-image'); 
const placeName = document.getElementById('place-name'); 
const placeType = document.getElementById('place-type'); 
const placeUrl = document.getElementById('place-url'); 
const placeMapLocation = document.getElementById('place-map-location');
const placeTel = document.getElementById('place-tel'); 
const placeCountry = document.getElementById('place-country'); 
const placeRegion = document.getElementById('place-region'); 
const placeLocality = document.getElementById('place-locality'); 
const placeTags = document.getElementById('place-tags'); 


// Fetch API 
const apiUrl = `https://failteireland.azure-api.net/opendata-api/v1/attractions`;

fetch(apiUrl, {
    headers: {
    method: "GET",
    Host: 'failteireland.azure-api.net',
    'Ocp-Apim-Subscription-Key':'f6286d9d65514154b54c6c36cf3615d9'
    }
  })
      .then(res => res.json())
      .then(data => {
       for ( i = 0 ; i<=49 ; i++) {
        placeName.innerHTML = data.results[i].name ,
        placeImage.innerHTML = `<img class="card-img-top place-img" id="place-image" src="${data.results[i].image.url}" alt="Card image cap">`,
        placeUrl.innerHTML = `<a href="${data.results[i].url}" target="_blank"> Website </a>`,
        placeTel.innerHTML =  `<a href="tel:${data.results[i].telephone}">${data.results[0].telephone}</a>`,
        placeCountry.innerHTML = data.results[i].address.addressCountry ,
        placeRegion.innerHTML = data.results[i].address.addressRegion ,
        placeLocality.innerHTML = data.results[i].address.addressLocality ,
        placeTags.innerHTML = data.results[i].tags ,
        placeMapLocation.innerHTML = `<a href="http://www.google.com/maps/place/${data.results[i].geo.latitude},${data.results[i].geo.longitude}" target="_blank" > Location</a> `
        }    
      })
    .catch(function(error) {
         console.log(error);
    });

    

