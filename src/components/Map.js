import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

export default function Map() {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 18.503047,
    lng: 73.852079,
  };

  var stores = [
    {
      name: "Honda",
      location: { lat: 18.514903, lng: 73.852705 },
      hours: "8AM to 10PM",
      address: "Shivaji nagar Pune",
    },
    {
      name: "Puma",
      location: { lat: 18.506047, lng: 73.854079 },
      hours: "9AM to 9PM",
      address: "Shivaji nagar Pune",
    },
    {
      name: "Tata",
      location: { lat: 18.506047, lng: 73.859079 },
      hours: "9AM to 9PM",
      address: "Shivaji nagar Pune",
    },
    {
      name: "Cafe",
      location: { lat: 18.503047, lng: 73.856079 },
      hours: "9AM to 9PM",
      address: "Shivaji nagar Pune",
    },
    {
      name: "Pizza Hut",
      location: { lat: 18.503047, lng: 73.852079 },
      hours: "9AM to 9PM",
      address: "Shivaji nagar Pune",
    },
  ];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBlcCbi4Rm_207ofUDWksMPcfspZa_vTBE",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        {stores.map((store) => (
          <MarkerF
            position={store.location}
            title={store.name}
          />
        ))}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
