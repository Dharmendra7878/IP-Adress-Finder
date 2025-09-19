// Map.jsx

import React from 'react';
import { Marker, Map } from 'react-map-gl';
import { RiUserLocationFill } from 'react-icons/ri';

// Mapbox public token
const API_KEY = 'pk.eyJ1IjoiZGhhcm1lbmRyYTIyMzM0NCIsImEiOiJjbWRjZ2NnbzYxODZ3Mm1wazAwem10YWtzIn0.vDoA-_oHoogZqhXtpi0wUQ';

const MapComponent = ({ lat, lon }) => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Map
                mapboxAccessToken={API_KEY}
                initialViewState={{
                    latitude: lat,
                    longitude: lon,
                    zoom: 14
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                <Marker latitude={lat} longitude={lon} anchor="center">
                    <RiUserLocationFill size="30px" color="blue" />
                </Marker>
            </Map>
        </div>
    );
};

export default MapComponent;
