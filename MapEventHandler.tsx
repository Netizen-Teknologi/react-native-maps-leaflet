import { useMapEvents } from "react-leaflet";

interface MapEventHandlerProps {
    onClick: (data: any) => void;
    onMoveEnd: (data: any) => void;
}

const MapEventHandler = ({ onClick, onMoveEnd }: MapEventHandlerProps) => {
    // Menggunakan useMapEvents untuk menangani event peta
    useMapEvents({
        click(e) {
            // console.log("Map clicked at:", e.latlng);
            onClick(e.latlng)
        },
        moveend() {
            // console.log("Map move ended");
        },
    });

    return null; // Tidak perlu merender komponen visual
};

export default MapEventHandler;