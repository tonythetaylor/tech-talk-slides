import { useEffect } from "react";
import L from "leaflet";

export default function BackgroundMap() {
 useEffect(() => {
  const map = L.map("map", {
    center: [38.9072, -77.0369],
    zoom: 12,
    zoomControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
  });

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }
  ).addTo(map);

  return () => {
    map.remove();
  };
}, []);

  return (
    <div
      id="map"
      className="absolute inset-0 z-0"
      style={{
        opacity: 8.4,
        filter: "brightness(100%) contrast(140%)",
        pointerEvents: "none",
      }}
    />
  );
}