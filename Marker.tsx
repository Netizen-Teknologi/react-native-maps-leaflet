'use dom';

import { ReactNode } from "react";
import { Marker as DefaultMarker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from "react";

interface MarkerIconProps {
    iconUrl: string;
    iconSize: [number, number],
    iconAnchor: [number, number],
    popupAnchor: [number, number],
}

interface MarkerProps {
    children?: ReactNode;
    position: [number, number];
    icon?: MarkerIconProps;
}


const customIcon: MarkerIconProps = {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3425/3425073.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
}

const Marker = ({ position, children, icon = customIcon }: MarkerProps) => {
    const iconX = L.icon(icon);

    return (
        <DefaultMarker position={position} icon={iconX}>
            {children}
        </DefaultMarker>
    )
}

export default Marker;


