import { useEffect, useState } from "react";
import { MyCSS } from "./MyCSS";
import { MarkerProps, MyHTMLProps } from "./MyTypes";
import { MyScripts } from "./MyScripts";

export const MyHTML = ({
    debug, region, markers, markerCenter, zoom, fitBound, showMarkerClicked, showAttribution
} : MyHTMLProps) => {

    const [markersScript, setMarkerScript] = useState('');
    const [addMarkerCenterScript, setAddMarkerCenterScript] = useState('');
    const [fitBoundsScript, setFitBoundsScript] = useState('');

    useEffect( () => {
        if ( debug ) {
            console.log("render leaflet map")
        }

        createScript();

    }, [markers,region,markerCenter])

    const createScript = () => {
        const markersScript = markers.length > 0 ? MyScripts.generateMarkers(markers) : '';
        setMarkerScript(markersScript)

        const addMarkerCenterScript =  markers.length > 0 ? MyScripts.addMarkerCenter(markerCenter) : '';
        setAddMarkerCenterScript(addMarkerCenterScript)

        const fitBoundsScript = markers.length > 0 ? MyScripts.fitBounds(markers) : '';
        setFitBoundsScript(fitBoundsScript)
    }

    return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Leaflet Map</title>
            <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
            <style>
              ${MyCSS}
            </style>
          </head>
          <body>
            <div id="map"></div>
            <div id="footer"></div>
            <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
            <script>

            
                var initialMarker;
                var marker_0;
                var clickMarker;
                var data = null;
                var map;

                // FIRST POSITION

                if ( ${ markers.length > 0 }) {
                    map = L.map('map', { attributionControl:${showAttribution} }).setView([${region.latitude}, ${region.longitude}], ${zoom});
                    moveMarker();
                } else {
                    map = L.map('map', { attributionControl:${showAttribution} }).setView([${region.latitude}, ${region.longitude}], ${zoom});
                }

                ${markersScript}
                ${fitBoundsScript}
                ${addMarkerCenterScript}

                // Add Layer OpenStreetMap
                const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OSM | @<a target="_blank" href="https://netizen-teknologi.github.io/react-native-maps-leaflet/">Netizen Teknologi</a>'
                }).addTo(map);

                // Event load for tile layer
                tileLayer.on('load', () => {

                });

                // Initial Marker
                // initialMarker = L.marker([-6.174929921156404, 106.8271114327312]).addTo(map);
                // initialMarker.bindPopup('<b>Monas</b><br>Monumen Nasional Jakarta.').openPopup();

                
                
                // START LISTERNER
                    map.on('move', mapOnMove); 
                    map.on('click', mapOnClick);
                    map.on('mousemove', mapOnMouseMove);
                    map.on('moveend', mapOnMoveEnd);
                // END LISTERNER


                // START FUNCTION
                    // ON MOUSE MOVE
                    function mapOnMouseMove(e) {
                        const mouseLat = e.latlng.lat;
                        const mouseLng = e.latlng.lng;
                        
                        let data = {
                            event_name: 'mapOnMouseMove',
                            latitude: mouseLat,
                            longitude: mouseLng
                        }
                        
                        
                    }

                    function mapOnClick(e) {
                        var lat = e.latlng.lat;
                        var lng = e.latlng.lng;
                        data = {
                            event_name: 'mapOnClick',
                            latitude: lat,
                            longitude: lng
                        }
                       
                        // REMOVE PREVIOUS CLICKED MARKE
                        if (clickMarker) {
                            map.removeLayer(clickMarker);
                        }

                        // START CLICKER MARKER
                            if ( ${showMarkerClicked} ) {
                                clickMarker = L.marker([lat, lng], {
                                icon: L.icon({
                                    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3425/3425073.png',
                                    // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        
                                    iconSize: [50, 50],
                                    iconAnchor: [25, 25],
                                    popupAnchor: [0, -25]
                                })
                                }).addTo(map)
                                // .bindPopup('Latitude: ' + lat.toFixed(6) + '<br> Longitude: ' + lng.toFixed(6))
                                .bindPopup('(' + lat.toFixed(6) + ', ' + lng.toFixed(6) + ')')
                                .openPopup();
                            } else {
                                clickMarker = null
                            }

                        // end clicker marker

                        // POST TO REACT NATIVE
                        window.ReactNativeWebView.postMessage(JSON.stringify(data));
                    }

                    // ON MOVE
                    function mapOnMove() {
                        var center = map.getCenter();
                        var zoom_level = map.getZoom(); // get zoom level
                        var bounds = map.getBounds(); // get bounds map
                        var south_west = bounds.getSouthWest(); // get south west
                        var north_east = bounds.getNorthEast(); // get north east
                        
                        center = {
                        latitude: center.lat,
                        longitude: center.lng
                        }
                    
                        data = {
                            event_name: 'mapOnMove',
                            center,
                            zoom_level,
                            bounds,
                            south_west,
                            north_east
                        }
                        
                        // POST TO REACT NATIVE
                        window.ReactNativeWebView.postMessage(JSON.stringify(data));
                    }

                    // ON MOVE
                    function mapOnMoveEnd() {
                        var center = map.getCenter();
                        var zoom_level = map.getZoom(); // get zoom level
                        var bounds = map.getBounds(); // get bounds map
                        var south_west = bounds.getSouthWest(); // get south west
                        var north_east = bounds.getNorthEast(); // get north east
                        
                        center = {
                        latitude: center.lat,
                        longitude: center.lng
                        }
                    
                        data = {
                            event_name: 'mapOnMoveEnd',
                            center,
                            zoom_level,
                            bounds,
                            south_west,
                            north_east
                        }
                        
                        // POST TO REACT NATIVE
                        window.ReactNativeWebView.postMessage(JSON.stringify(data));
                    }

                    function moveMarker() {
                        // marker_0.setLatLng([${region.latitude}, ${region.latitude}]);

                        // Mengatur tampilan peta ke posisi marker yang baru
                        map.flyTo([${region.latitude}, ${region.latitude}], map.getZoom());
                    }
                // END FUNCTION;

                function showCoordinates() {
                    const center = map.getCenter();
                    const lat = center.lat.toFixed(4);
                    const lng = center.lng.toFixed(4);
                    alert('Center: '+lat+' , ' +lng);
                }

          </script>
          </body>
          </html>
        `;
};