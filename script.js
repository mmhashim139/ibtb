// Define Cards Variables 

const cardDeck = document.getElementById('card-deck')


let data = [];

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
          for (i = 0 ; i<=50 ; i++) {
          const place = data.results[i];
          const newPlace = {
              name : `${place.name}`,
              imageUrl : `${place.image.url}`,
              websiteUrl : `${place.url}`,
              tel : `${place.telephone}`,
              country :`${place.address.addressCountry}`,
              region : `${place.address.addressRegion}`,
              locality : `${place.address.addressLocality}`,
              tags : `${place.tags}`,
              mapUrl : `http://www.google.com/maps/place/${place.geo.latitude},${place.geo.longitude}`
          }

        addNewPlace(newPlace);
          }
      })

    .catch(function(error) {
         console.log(error);
    });

     function addNewPlace(obj) {
     data.push(obj);
     updateDOM();
    }

    function updateDOM(providedData = data) {
 

    providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('col-md-4');
    element.innerHTML = `
    <div class="card">
    <div id="place-image"><img class="card-img-top" src="${item.imageUrl}" alt="Card image cap"></div>
    <div class="card-body">
        <h5 class="card-title" id="place-name">${item.name}</h5>
        <div class="row justify-content-center">
            <div class="col-4 card-text place-location" id="place-region">${item.region}</div>
            <div class="col-4 card-text place-location" id="place-locality">${item.locality}</div>
        </div>
        <div class="card-text place-activities" id="place-tags">${item.tags} </div>
        <div class="row justify-content-center">
            <div class="col-4" id="place-url">
                <a href="${item.websiteUrl}" target="_blank" class="card-link-btn btn btn-primary"><i class="fa fa-external-link" aria-hidden="true"></i></a>
            </div>
            <div class="col-4" id="place-tel">
                <a href="tel:${item.tel}" class="card-link-btn btn btn-primary"><i class="fa fa-phone-square" aria-hidden="true"></i></a>
            </div>
            <div class="col-4" id="place-map-location">
                <a href="${item.mapUrl}" target="_blank" class="card-link-btn btn btn-primary"><i class="fa fa-map-marker" aria-hidden="true"></i></a>
            </div> 
        </div>
    </div>
 </div>
      `
        cardDeck.appendChild(element);
      });
      
}

    


    

