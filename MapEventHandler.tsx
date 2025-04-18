import { useMapEvents } from "react-leaflet";
import { MapEventHandlerProps } from "./Interfaces";

const MapEventHandler = ({ onClick, onMoveEnd }: MapEventHandlerProps) => {
    // using useMapEvents for event map
    useMapEvents({
        click(e: any) {
            // console.log("Map clicked at:", e.latlng);
            onClick(e.latlng)
        },
        moveend() {
            // console.log("Map move ended");
        },
    });

    return null; // do nothing render
};

export default MapEventHandler;