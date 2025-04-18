'use dom';

import { ReactNode } from "react";
import { Marker as DefaultMarker, MarkerProps } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from "react";
import { MarkerIconProps } from "./Interfaces";
import { defaultCenter } from "./Constants";

const customIcon: MarkerIconProps = {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3425/3425073.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
}

const Marker = ({ position = defaultCenter, children, icon = customIcon }: MarkerProps) => {
    const iconX = L.icon(icon);

    return (
        <DefaultMarker position={position} icon={iconX}>
            {children}
        </DefaultMarker>
    )
}

export default Marker;

