import React, { useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export function FeatureLayerComponent({ map, url }) {
  useEffect(() => {
    if (!map) return;

    const layer = new FeatureLayer({ url });
    map.add(layer);

    return () => {
      map.remove(layer);
    };
  }, [map, url]);

  return null}