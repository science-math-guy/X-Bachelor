const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const zoom = document.getElementById('zoom');

document.querySelector('input').addEventListener('change',changeImage);

function changeImage(event){
    document.getElementById("image").src=`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${document.getElementById('latitude').value},${document.getElementById('longitude').value},${document.getElementById('zoom').value}/640x480?access_token=pk.eyJ1Ijoic3BpZXJlZCIsImEiOiJjbGYyY2d6dGcwaDQ3M3FueWhqMWd4MjhsIn0.DMl1Ufd5_x3oWCwzOb9KTA`
}