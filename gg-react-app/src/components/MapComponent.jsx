import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';




const MapComponent = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);


    const markerRoomLocations = [
      { lng: -79.2545, lat: 43.0093, title: "Location 1" },
      { lng: -79.2475, lat: 43.0089, title: "Location 2" },
  ];

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


    mapRef.current.addSource('room-markers', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: markerRoomLocations.map(location => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [location.lng, location.lat]
          },
          properties: {
            title: location.title
          }
        }))
      }
    });
    
    mapRef.current.addLayer({
      id: 'room-markers',
      type: 'circle',
      source: 'room-markers',
      paint: {
        'circle-radius': 100,
        'circle-color': 'rgb(167, 103, 236)',
        'circle-opacity': 0.75,
        'circle-stroke-width': 1,
        'circle-stroke-color': 'rgb(57, 21, 95)'
      },
      layout: {
        'circle-sort-key': 1 
      }
    });
    
    mapRef.current.addLayer({
      id: 'room-labels',
      type: 'symbol',
      source: 'room-markers',
      layout: {
        'text-field': ['get', 'title'],
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, -1.5],
        'text-anchor': 'bottom'
      },
      paint: {
        'text-color': '#ffffff'
      }
    });

    });



    mapRef.current.on('style.load', () => {
        mapRef.current.setConfigProperty('basemap', 'lightPreset', 'dusk');
        mapRef.current.setConfigProperty('basemap', 'showPointOfInterestLabels', true);
        mapRef.current.setConfigProperty('basemap', 'show3dObjects', true);
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