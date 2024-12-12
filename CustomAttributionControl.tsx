import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from 'leaflet';


const CustomAttributionControl = () => {
    const map = useMap();

    useEffect(() => {
        const customControl = L.control({ position: "bottomright" });
        customControl.onAdd = () => {
            const div = L.DomUtil.create("div", "custom-attribution");
            
            div.innerHTML = `<a href="https://netizen-teknologi.github.io/react-native-maps-leaflet/" target="_blank" rel="noopener noreferrer">Leaflet © Netizen Teknologi</a>`;
            div.style.backgroundColor = "white";
            div.style.padding = "10px";
            div.style.borderRadius = "5px";
            div.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
            div.style.fontSize = "12px";

            return div;
        };
        customControl.addTo(map);

        return () => {
            map.removeControl(customControl);
        };
    }, [map]);

    return null;
};

export default CustomAttributionControl;