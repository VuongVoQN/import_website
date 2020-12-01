 // AIzaSyDfawsUUa-5D7bZ3c_zb2WrH49LIRAz9d4

function openCity(evt, option) {
    // Declare all variables
    let i, search__tabcontent, search__tablinks;
  
    // Get all elements with class="search__tabcontent" and hide them
    search__tabcontent = document.getElementsByClassName("search__tabcontent");
    for (i = 0; i < search__tabcontent.length; i++) {
        search__tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="search__tablinks" and remove the class "active"
    search__tablinks = document.getElementsByClassName("search__tablinks");
    for (i = 0; i < search__tablinks.length; i++) {
        search__tablinks[i].className = search__tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(option).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

  function openOption(event, opt) {
    // Declare all variables
    let i, show__tabcontent, show__tablinks;
  
    show__tabcontent = document.getElementsByClassName("show__tabcontent");
    for (i = 0; i < show__tabcontent.length; i++) {
        show__tabcontent[i].style.display = "none";
    }
  
    show__tablinks = document.getElementsByClassName("show__tablinks");
    for (i = 0; i < show__tablinks.length; i++) {
        show__tablinks[i].className = show__tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(opt).style.display = "block";
    event.currentTarget.className += " active";
  }
  document.getElementById("defaultContent").click();

 function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(10.777882123462325, 106.65579458344135),
      zoom:8,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }