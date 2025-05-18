import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />

            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-4">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                    <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                        Welcome to Your App
                    </h1>

                    <div className="flex flex-col gap-4">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-medium py-2 px-4 rounded-md transition duration-200"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
