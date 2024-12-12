import { ReactNode } from "react";

export interface MapViewProps {
    children?: ReactNode;
    center?: [number, number];
    zoom?: number;
    scrollWheelZoom?: boolean;
    mapOnClick?: (data: any) => void;
    mapOnMove?: (data: any) => void;
    mapOnMoveEnd?: (data: any) => void;
}