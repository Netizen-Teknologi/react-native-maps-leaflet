import { Dimensions, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { MapViewProps, MarkerProps, RegionProps } from './MyTypes';
import { MyHTML } from './MyHTML';

const defaultFunction = () => { };

export default function MapView({
  debug = false,
  markerCenter = false,
  markers = [],
  region = {
    latitude: -6.174929921156404,
    longitude: 106.8271114327312,
  },
  zoom = 15,
  fitBound = false,
  showMarkerClicked = false,

  mapOnClick = defaultFunction,
  mapOnMove = defaultFunction,
  mapOnMoveEnd = defaultFunction,
}: MapViewProps) {
  const { width, height } = useWindowDimensions();
  const [regionX, setRegionX] = useState<RegionProps>(region);
  const [markersX, setMarkersX] = useState<MarkerProps[]>(markers);
  const webviewRef = useRef(null);

  // Mengupdate marker dan region secara bertahap
  useEffect(() => {
    if (JSON.stringify(markers) !== JSON.stringify(markersX)) {
      setMarkersX(markers);
    }
    if (region.latitude !== regionX?.latitude || region.longitude !== regionX?.longitude) {
      setRegionX(region);
    }

    if (debug) {
      console.log("render MapView", new Date());
      console.log("MapView markers before update: ", markersX);
      console.log("MapView markers after update: ", markers);
      console.log("MapView region before update: ", regionX);
      console.log("MapView region after update: ", region);
    }
  }, [markers, region]);

  // Menghandle pesan yang diterima dari WebView
  const handleOnMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data.event_name === 'mapOnClick' && mapOnClick !== defaultFunction) {
      if (debug) {
        console.log(data.event_name + ": " + JSON.stringify(data));
      }
      mapOnClick(data);
    }

    if (data.event_name === 'mapOnMove' && mapOnMove !== defaultFunction) {
      if (debug) {
        console.log(data.event_name + ": " + JSON.stringify(data));
      }
    }

    if (data.event_name === 'mapOnMoveEnd' && mapOnMoveEnd !== defaultFunction) {
      if (debug) {
        console.log(data.event_name + ": " + JSON.stringify(data));
      }
      mapOnMoveEnd(data);
    }
  };

  // HTML SOURCE dari MyHTML
  const html = MyHTML({
    region: regionX,
    markers: markersX,
    markerCenter,
    zoom,
    fitBound,
    showMarkerClicked
  });


  const stylesX = StyleSheet.create({
    webView: {
      flex: 1,
      width,
      height,
    },
  });

  return (
    <WebView
      ref={webviewRef}
      source={{ html }}
      style={stylesX.webView}
      javaScriptEnabled={true}
      onMessage={handleOnMessage}
    />
  );
}

const styles = StyleSheet.create({
  // Definisi style lainnya jika diperlukan
});
