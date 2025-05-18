import React from "react";
import Layout from "@/Components/Layout";
import { Head } from "@inertiajs/react";
import MapContainer from "./Partials/MapContainer";
const Index = () => {
    return (
        <Layout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <MapContainer/>
        </Layout>
    );
};

export default Index;
