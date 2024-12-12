'use dom';

import { ReactNode, useEffect } from "react";
// import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import React from "react";
import MapEventHandler from "./MapEventHandler";
import CustomAttributionControl from "./CustomAttributionControl";
import ChangeView from "./ChangeView";
import { defaultCenter, defaultFunctionVoid, defaultScrollWheelZoom, defaultZoom } from "./Constants";
import { MapViewProps } from "./Interfaces";

const MapView = ({
    children,
    center = defaultCenter,
    zoom = defaultZoom,
    scrollWheelZoom = defaultScrollWheelZoom,
    mapOnClick = defaultFunctionVoid,
    mapOnMoveEnd = defaultFunctionVoid,
}: MapViewProps) => {

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={scrollWheelZoom}
            style={{ width: '100%', height: '100%' }}
            attributionControl={false}
        >
            <ChangeView center={center} zoom={zoom} />
            <CustomAttributionControl />
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapEventHandler onClick={mapOnClick} onMoveEnd={mapOnMoveEnd} />
            {children}
        </MapContainer>
    );
};


export default MapView;