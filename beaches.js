//define variables

const beachesUrl = `https://failteireland.azure-api.net/opendata-api/v1/activities?subscription-key=&search=(%27beach%27)&$top=8`;
const allBeaches = `https://failteireland.azure-api.net/opendata-api/v1/activities?subscription-key=&search=(%27beach%27)`;
const beaches = document.getElementById('beaches');
const seeBeaches = document.getElementById('more-beaches');

fetchData(beachesUrl, updateDOM);

// see More event listener ;

seeBeaches.addEventListener("click", () => { 
    fetchData(allBeaches, updateDOM);        
    });


   
