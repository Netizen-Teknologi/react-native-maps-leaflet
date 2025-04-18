export const defaultCenter: [number, number] = [-6.1754, 106.8272];
export const defaultZoom = 17;
export const defaultScrollWheelZoom = false;
export const defaultFunctionVoid = (data: any) => { };
export const defaultTileLayers = [
    {
        name: 'OpenStreetMap',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; OpenStreetMap contributors',
    },
];
export const optionsTileLayers = [
    {
        name: 'OpenStreetMap',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; OpenStreetMap contributors',
    },
    {
        name: 'Carto Light',
        url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
        attribution: '&copy; CartoDB',
    },
    {
        name: "Carto Dark",
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        attribution: "&copy; CartoDB",
    },
    {
        name: "Stamen Toner",
        url: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
        attribution: "Map tiles by Stamen Design, CC BY 3.0",
    },
    {
        name: "Stamen Terrain",
        url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
        attribution: "Map tiles by Stamen Design, CC BY 3.0",
    },
    {
        name: "Esri Topo",
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
        attribution: "Tiles © Esri — Topographic",
    },
    {
        name: "Esri Satellite",
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution: "Tiles © Esri — Satellite",
    },
    {
        name: "OpenTopoMap",
        url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        attribution: "© OpenTopoMap contributors",
    },
    {
        name: "Hydda Base",
        url: "https://{s}.tile.openstreetmap.fr/hydda/base/{z}/{x}/{y}.png",
        attribution: "© OpenStreetMap contributors, Tiles courtesy of OSM France",
    }
];