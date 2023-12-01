document.addEventListener('DOMContentLoaded', function () {
  var allPaths = document.getElementsByTagName('path');
  var og_color = 'rgb(175, 238, 238)';
  var detailsBox = document.getElementById('details-box');
  
  for (let i = 0; i < allPaths.length; i++) {
    let pathElement = allPaths[i];
    pathElement.style.fill = og_color;
    let state_name = pathElement.getAttribute('data-name');

    pathElement.addEventListener('mouseenter', function () {
      pathElement.style.fill = 'rgb(79, 152, 152)';
      detailsBox.innerHTML = state_name;
      detailsBox.style.opacity= "100%";
    });

    pathElement.addEventListener('mouseout', function () {
      pathElement.style.fill = og_color;
      detailsBox.style.opacity = "0%";
    });

    pathElement.addEventListener('click', function () {
      $('#' + state_name).modal('show');
    });    
    
  }
//make state name appear next to cursor basically
  window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    detailsBox.style.top = (y + 20) + 'px';
    detailsBox.style.left = (x) + 'px';
  };

});
