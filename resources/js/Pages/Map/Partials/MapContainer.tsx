import React from 'react';
import { ArcGISMap } from "./ArcGISMap";
import { MapViewContainer } from "./MapViewContainer";


const MapContainer = () => {
  return (
    <div>
      <ArcGISMap basemap="streets-vector">
      <MapViewContainer center={[77.209, 28.613]} zoom={10} />
    </ArcGISMap>

    </div>
  );
}

export default MapContainer;
