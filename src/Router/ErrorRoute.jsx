import React from 'react';
import { Link } from 'react-router';

const ErrorRoute = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <img 
                src="https://i.ibb.co/SwjDvSF9/Error-page.gif" 
                alt="Error Page" 
                className="w-full max-w-md mb-6"
            />
            <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorRoute;
