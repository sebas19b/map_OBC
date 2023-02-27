const map = L.map('map').setView([11.0071, -74.8092], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 29,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//lugar fav 1
const marker1 = L.marker([-22.90123, -43.18235],{
    title: 'Rio de janeiro'
}).addTo(map);
//lugar fav 2
const marker2 = L.marker([20.21131, -87.46681],{
    title: 'Tulum'
}).addTo(map);
//lugar fav 3
const marker3 = L.marker([-0.60643, 73.10483],{
    title: 'Maldives'
}).addTo(map);