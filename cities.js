
// fetchdata function

const cityPlaces = document.getElementById('city-places');



// Define Places Array 
let citiesData = [];

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
          citiesData.push(newPlace);
          }

        if (typeof callback == "function") 
            callback(citiesData);
          })
    .catch(function(error) {
        console.log(error);
        });
}

// Define UpdateDOM function 
function updateDOM(citiesData) {
    citiesData.forEach(item => {
    // split tags Array in view
        let tagsItems = item.tags.split(',');
        let tagView = '';
        tagsItems.forEach(tag => {
                   tagView = tagView + `<a class="tags-view">${tag}</a>` 
                });
    // insert new Places data in HTML Element
    const element = document.createElement('div');
    element.classList.add('col-md-3');
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
    cityPlaces.appendChild(element);
    });    
}






// extract the county value by click 
document.querySelectorAll('.county-btn').forEach(item => {
  item.addEventListener('click', e => {
    console.log(e.target.firstChild.nodeValue);
    
  })
})
/*

// add city click event lisiner to show city places reults ;

const seeCarlow = document.getElementById('see-carlow');
const carlowUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27carlow%27)';
seeCarlow.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(carlowUrl, updateDOM);        
    });


const seeCavan = document.getElementById('see-cavan');
const cavanUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27cavan%27)';
seeCavan.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(cavanUrl, updateDOM);        
    });

const seeClare = document.getElementById('see-clare');
const clareUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27clare%27)&$top=42';
seeClare.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(clareUrl, updateDOM);        
    });


const seeCork = document.getElementById('see-cork');
const corkUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27cork%27)';
seeCork.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(corkUrl, updateDOM);        
    });


const seeDonegal = document.getElementById('see-donegal');
const donegalUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27donegal%27)';
seeDonegal.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(donegalUrl, updateDOM);        
    });

const seeDublin = document.getElementById('see-dublin');
const dublinUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27dublin%27)&$top=24';
seeDublin.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(dublinUrl, updateDOM);        
    });


const seeGalway = document.getElementById('see-galway');
const galwayUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27galway%27)';
seeGalway.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(galwayUrl, updateDOM);        
    });


const seeKerry = document.getElementById('see-kerry');
const kerryUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27kerry%27)';
seeKerry.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(kerryUrl, updateDOM);        
    });


const seeKildare = document.getElementById('see-kildare');
const kildareUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27kildare%27)';
seeKildare.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(kildareUrl, updateDOM);        
    });


const seeKilkenny = document.getElementById('see-kilkenny');
const kilkennyUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27kilkenny%27)';
seeKilkenny.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(kilkennyUrl, updateDOM);        
    });


const seeLaois = document.getElementById('see-loais');
const laoisUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27laois%27)';
seeLaois.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(laoisUrl, updateDOM);        
    });


const seeLeitrim = document.getElementById('see-leitrim');
const leitrimUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27leitrim%27)';
seeLeitrim.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(leitrimUrl, updateDOM);        
    });


const seeLimerick = document.getElementById('see-limerick');
const limerickUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27limerick%27)';
seeLimerick.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(limerickUrl, updateDOM);        
    });


const seeLongford = document.getElementById('see-longford');
const longfordUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27longrod%27)';
seeLongford.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(longfordUrl, updateDOM);        
    });


const seeLouth = document.getElementById('see-louth');
const louthUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27Louth%27)&$top=40';
seeLouth.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(louthUrl, updateDOM);        
    });


const seeMayo = document.getElementById('see-mayo');
const mayoUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27mayo%27)';
seeMayo.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(mayoUrl, updateDOM);        
    });


const seeMeath = document.getElementById('see-meath');
const meathUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27meath%27)';
seeMeath.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(meathUrl, updateDOM);        
    });


const seeMonaghan = document.getElementById('see-monaghan');
const monaghanUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27monaghan%27)';
seeMonaghan.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(monaghanUrl, updateDOM);        
    });


const seeOffaly = document.getElementById('see-offaly');
const offalyUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27offaly%27)';
seeOffaly.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(offalyUrl, updateDOM);        
    });


const seeRoscommon = document.getElementById('see-roscommon');
const roscommonUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27roscommon%27)';
seeRoscommon.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(roscommonUrl, updateDOM);        
    });

const seeSligo = document.getElementById('see-sligo');
const sligoUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27sligo%27)';
seeSligo.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(sligoUrl, updateDOM);        
    });


const seeTipperary = document.getElementById('see-tipperary');
const tipperaryUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27tipperary%27)';
seeTipperary.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(tipperaryUrl, updateDOM);        
    });


const seeWaterford = document.getElementById('see-waterford');
const waterfordUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27waterford%27)';
seeWaterford.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(waterfordUrl, updateDOM);        
    });

const seeWestmeath = document.getElementById('see-westmeath');
const westmeathUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27westmeath%27)';
seeWestmeath.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(westmeathUrl, updateDOM);        
    });


const seeWexford = document.getElementById('see-wexford');
const wexfordUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27wexford%27)';
seeWexford.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(wexfordUrl, updateDOM);        
    });


const seeWicklow = document.getElementById('see-wicklow');
const wicklowUrl = 'https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=search.ismatch(%27wicklow%27)';
seeWicklow.addEventListener("click", () => { 
        cityPlaces.innerHTML = "";
        citiesData = [];
        fetchData(wicklowUrl, updateDOM);        
    });

*/
