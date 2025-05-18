import React from 'react';
import { ArcGISMap } from "./ArcGISMap";
import { MapViewContainer } from "./MapViewContainer";
import { FeatureLayerComponent } from "./FeatureLayerComponent";


const MapContainer = () => {
  return (
    <div>
      <ArcGISMap basemap="streets-vector">
      <MapViewContainer center={[77.209, 28.613]} zoom={10} />
      <FeatureLayerComponent url="https://services.arcgis.com/.../FeatureServer/0" />
    </ArcGISMap>

    </div>
  );
}

export default MapContainer;
