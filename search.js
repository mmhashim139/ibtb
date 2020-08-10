// define search form variables
const searchName = document.getElementById('search-name');
const searchLocation = document.getElementById('search-location');
const searchTag = document.getElementById('search-tag');
const searchBtn = document.getElementById('search-button');
const searchResults = document.getElementById('search-reults');
const searchUrl = "https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch";


// Define Places Array 
let searchData = [];

// Define FetchData function
function fetchData(apiUrl,callback){
    fetch(apiUrl, {
    headers: {
        method: "GET",
        Host: 'failteireland.azure-api.net',
        'Ocp-Apim-Subscription-Key':'f6286d9d65514154b54c6c36cf3615d9'
        }
    })
    .then(res => res.json())
    .then(data => {
        for (i = 0 ; i< data.results.length ; i++) {
            
          // Define Place Values from the API

          const newPlace = {
              name : `${data.results[i].name}`,
              imageUrl : `${data.results[i].image.url}`,
              websiteUrl : `${data.results[i].url}`,
              tel : `${data.results[i].telephone}`,
              country :`${data.results[i].address.addressCountry}`,
              region : `${data.results[i].address.addressRegion}`,
              locality : `${data.results[i].address.addressLocality}`,
              tags : `${data.results[i].tags}`, 
              mapUrl : `http://www.google.com/maps/place/${data.results[i].geo.latitude},${data.results[i].geo.longitude}`,


          }
          // push the newPlace values to the places Array 
          searchData.push(newPlace);
          }

        if (typeof callback == "function") 
            callback(searchData);
          })
    .catch(function(error) {
        console.log(error);
        });
}

// Define UpdateDOM function 
function updateDOM(searchData) {
    searchData.forEach(item => {
    // split tags Array in view
        let tagsItems = item.tags.split(',');
        let tagView = '';
        tagsItems.forEach(tag => {
                   tagView = tagView + `<a class="tags-view">${tag}</a>` 
                });
    // insert new Places data in HTML Element
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
                <div class="card-text place-activities " id="place-tags">
                    ${tagView} 
                </div>
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
        </div> `
    // Add the Place to the DOM 
    searchResults.appendChild(element);
    });    
}

// add search button click event lisiner to show search reults ;

searchBtn.addEventListener("click", () => { 
        fetchData(`${searchUrl}('${searchName.value}')`, updateDOM);
        fetchData( `${searchUrl}('${searchTag.value}')`, updateDOM);
        fetchData(`${searchUrl}('${searchLocation.value}')`, updateDOM);
        
    });

