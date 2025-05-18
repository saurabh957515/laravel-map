import React, { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";

export function MapViewContainer({ map=null, center = [77, 28], zoom = 5, style={} }) {
  const viewDiv = useRef(null);
  const [view, setView] = useState<any>(null);

  useEffect(() => {
    if (!map) return;

    const viewInstance = new MapView({
      container: viewDiv.current,
      map: map,
      center,
      zoom,
    });

    setView(viewInstance);

    return () => {
      viewInstance.destroy();
      setView(null);
    };
  }, [map, center, zoom]);

  return <div ref={viewDiv} style={style || { width: "100%", height: "500px" }} />;
}
