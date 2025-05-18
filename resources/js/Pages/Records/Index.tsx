import React from "react";
import Layout from "@/Components/Layout";
import { Head } from "@inertiajs/react";
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
            Record
        </Layout>
    );
};

export default Index;
