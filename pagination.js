//define variables

const more = document.getElementById('show-more');
const pagesUrl = `https://failteireland.azure-api.net/opendata-api/v1/activities?subscription-key=&search=*&$skip=`;
let pageNum = 100;

// Add Event lisitener to show all places when all places btn clicked

more.addEventListener("click", () => { 
    
    cardDeck.innerHTML = "";
    // call fetchData Function and update DOM 
    fetchData(`${pagesUrl}${pageNum}`, updateDOM);
     pageNum = pageNum +50 ;
    });





