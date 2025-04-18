import { ReactNode } from "react";

export interface TileLayerOption {
    name: string;
    url: string;
    attribution?: string;
}

export interface MapViewProps {
    children?: ReactNode;
    center?: [number, number];
    zoom?: number;
    scrollWheelZoom?: boolean;
    mapOnClick?: (data: any) => void;
    mapOnMove?: (data: any) => void;
    mapOnMoveEnd?: (data: any) => void;
    tileLayers?: TileLayerOption[];
}

export interface MapEventHandlerProps {
    onClick: (data: any) => void;
    onMoveEnd: (data: any) => void;
}


export interface MarkerIconProps {
    iconUrl: string;
    iconSize: [number, number],
    iconAnchor: [number, number],
    popupAnchor: [number, number],
}

export interface MarkerProps {
    children?: ReactNode;
    position: [number, number];
    icon?: MarkerIconProps;
}

export interface PopupProps {
    children: ReactNode;
}

