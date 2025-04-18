import { useMap } from "react-leaflet";

export default function ChangeView({ center, zoom }: { center: any, zoom: any }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}