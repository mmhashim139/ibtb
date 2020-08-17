// extract clicked value 
let countyTag= '';

document.querySelectorAll('.county-btn').forEach(item => {
  item.addEventListener('click', e => {  
    countyTag = e.target.firstChild.nodeValue ;
  console.log(countyTag);
  searchData = [];
  fetchData(`${searchUrl}('${countyTag}')&$top=20`, updateDOM);
  })
})