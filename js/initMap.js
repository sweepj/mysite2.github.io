function initMap(){
  var uluru = {lat: 59.938735, lng: 30.326743};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });

  var image = '../images/content/map-marker.svg';

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });

  var location = [
    {lat: 59.938735, lng: 30.326743},
    {lat: 57.938735, lng: 30.326743},
    {lat: 58.938735, lng: 30.326743},
    {lat: 56.938735, lng: 30.326743}
  ]
}


