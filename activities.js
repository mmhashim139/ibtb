// extract clicked value 


document.querySelectorAll('.activity-tags').forEach(item => {
  item.addEventListener('click', e => {
    
    console.log(e.target.firstChild.nodeValue);
    
  })
})