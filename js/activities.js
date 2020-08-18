// extract clicked value 
let activityTag= '';

document.querySelectorAll('.activity-tags').forEach(item => {
  item.addEventListener('click', e => {  
    activityTag = e.target.firstChild.nodeValue ;
  console.log(activityTag);
  searchData = [];
  fetchData(`${searchUrl}('${activityTag}')&$top=20`, updateDOM);
  scroll(0,0);
  })
})


  