import React, { useEffect, useState, type ReactNode } from "react";
import Map from "@arcgis/core/Map";
type props = {
    basemap?: string;
    children: ReactNode;
};
export function ArcGISMap({ basemap = "topo-vector", children }: props) {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        const mapInstance = new Map({ basemap });
        setMap(mapInstance);

        return () => {
            setMap(null);
        };
    }, [basemap]);

    return (
        <>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                          child as React.ReactElement<{ map: any }>,
                          { map }
                      )
                    : child
            )}
        </>
    );
}
