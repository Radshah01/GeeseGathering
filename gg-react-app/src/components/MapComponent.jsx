import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';




const MapComponent = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    const markerRoomLocations = [
      { lng: -79.2625, lat: 43.0147, title: "M216" },
      { lng: -79.262, lat: 43.014, title: "AH140" },
      { lng: -79.26295, lat: 43.01407, title: "L4" },
      { lng: -79.2626, lat: 43.01375, title: "AH165" },
      { lng: -79.26349, lat: 43.0142, title: "L8" },
      { lng: -79.2639, lat: 43.0154, title: "S300" },
      { lng: -79.26245, lat: 43.0153, title: "M112" },
      { lng: -79.26455, lat: 43.01485, title: "V114" },
      { lng: -79.26455, lat: 43.01415, title: "V107" },
    ];

    
    
    const addMarkers = () => {
      
      markerRoomLocations.forEach(room => {
        const el = document.createElement('div');
        el.className = 'sessions-room-marker';
        el.onclick = function () { 
          const allMarkers = document.querySelectorAll(".sessions-room-marker")
          allMarkers.forEach(marker => {
            marker.classList.remove("clicked")
          })
          el.classList.toggle("clicked")
        }

        new mapboxgl.Marker(el)
          .setLngLat([room.lng, room.lat])
          .setPopup(new mapboxgl.Popup({className: "mapboxgl-popup"}).setHTML(`<h3>${room.title}</h3>`))
          .addTo(mapRef.current)
      })

  
  
    }

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVtbW9yYWQiLCJhIjoiY201aXlxZzl3MDN6dDJ2cTJraW0yd3BzOCJ9.26qmYpFEIGdDTzukqoST6w';


        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/standard',
            center: [-79.264, 43.0147],
            zoom: 16.2,
            pitch: 65,
            bearing: 230,
            antialias: true
    });




    mapRef.current.on('load', () => {

        const canvas = mapRef.current.getCanvas();
        canvas.style.borderRadius = '36px';


        const layers = mapRef.current.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;


        
     

        mapRef.current.addLayer({
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
              'fill-extrusion-color': 'rgb(152, 157, 163)',
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.45
            }
          },
          labelLayerId
        );
          
    });

    mapRef.current.on('style.load', () => {
      mapRef.current.setConfigProperty('basemap', 'lightPreset', 'dusk');
      mapRef.current.setConfigProperty('basemap', 'showPointOfInterestLabels', true);
      mapRef.current.setConfigProperty('basemap', 'show3dObjects', true);

      addMarkers();
      });

    

    return () => {
    mapRef.current.remove();
    }
  }, []);

    return (
    <>
        <div ref={mapContainerRef} style={{ height: "100%" , borderRadius: '36px', overflow: 'hidden'}} />
    </>
    )

}

export default MapComponent;