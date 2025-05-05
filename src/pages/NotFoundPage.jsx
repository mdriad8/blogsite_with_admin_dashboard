import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mt-2 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Return to homepage
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
