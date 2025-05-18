import React, { useEffect, useState, type ReactNode } from "react";
import Map from "@arcgis/core/Map";
import type MapType from "@arcgis/core/Map"; // import type only (if you use npm package)


type props ={
  basemap?:string,
  children:ReactNode
}
export function ArcGISMap({ basemap = "topo-vector", children }:props) {
const [map, setMap] = useState<MapType | null>(null);

  useEffect(() => {
    const mapInstance = new Map({ basemap });
    setMap(mapInstance);

    return () => {
      setMap(null);
    };
  }, [basemap]);

  return (
    <>
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child as any, { map }) : child
      )}
    </>
  );
}
