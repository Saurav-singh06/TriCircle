import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';


export default function Map() {
    const containerStyle = {
        width: "50vw",
        height: "70vh",
      };
    
      const center = {
        lat: 18.520430,
        lng: 73.856743,
      };
    
      var stores = [
            {
                name: 'Store 1',
                location: {lat: 18.514903, lng: 73.852705},
                hours: '8AM to 10PM'
            },
            {
                name: 'Store 2',
                location: {lat: 18.506047, lng: 73.854079},
                hours: '9AM to 9PM'
            }
        ];
    
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBlcCbi4Rm_207ofUDWksMPcfspZa_vTBE"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
    

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
           <>
            {stores.map((store) => 
                  <MarkerF position={store.location} title={store.name} getTitle={store.name}  />
                )}
            </>
          </GoogleMap>
      ) : <></>
    }
