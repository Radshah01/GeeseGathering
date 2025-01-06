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
            style: 'mapbox://styles/mapbox/standard',
            center: [-79.264, 43.0147],
            zoom: 16.2,
            pitch: 65,
            bearing: 230,
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
        });

  return () => mapRef.current.remove();
}, []);
  
    return <div ref={mapContainerRef} style={{ height: '100%' }} />;
  };
  
  export default MapComponent;