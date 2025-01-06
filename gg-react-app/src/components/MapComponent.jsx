import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const MapComponent = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
  
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVtbW9yYWQiLCJhIjoiY201aXlxZzl3MDN6dDJ2cTJraW0yd3BzOCJ9.26qmYpFEIGdDTzukqoST6w';
  
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [-79.25, 43],
            zoom: 16,
            pitch: 45,
            bearing: 0,
            antialias: true
    });

    mapRef.current.on('load', () => {
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
          'fill-extrusion-color': '#aaa',
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
          'fill-extrusion-opacity': 0.6
        }
      },
      labelLayerId
    );
    });

  return () => mapRef.current.remove();
}, []);
  
    return <div ref={mapContainerRef} style={{ height: '100%' }} />;
  };
  
  export default MapComponent;