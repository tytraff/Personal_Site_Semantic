function Validation() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert('Not valid valid email address!');
    }else if(name.length >30)
    {
        alert("Name is too long");
    }else {
        alert('Thanks for contact us');
    }

}
function  myMap() {
    var myCenter = new google.maps.LatLng(43.6532,-79.3832);
    var mapCanvas = document.getElementById('googleMap');
    var mapOptions = {center: myCenter, zoom: 10};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position: myCenter});
    marker.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker, 'click', function () {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
    });
}