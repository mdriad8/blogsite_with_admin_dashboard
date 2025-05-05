import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Layout,
  Home,
  FileText,
  Users,
  LogOut,
  Plus,
  Menu,
  X,
} from "lucide-react";

const AdminLayout = ({ children }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar */}
      <div className="md:hidden">
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity ${
            sidebarOpen
              ? "opacity-100 ease-out duration-300"
              : "opacity-0 ease-in duration-200 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div
          className={`fixed inset-y-0 left-0 flex flex-col z-30 w-64 transform bg-indigo-800 text-white transition ${
            sidebarOpen
              ? "translate-x-0 ease-out duration-300"
              : "-translate-x-full ease-in duration-200"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-4 bg-indigo-900">
            <Link
              to="/admin"
              className="text-white font-bold text-xl flex items-center"
            >
              <Layout className="mr-2" />
              Admin Panel
            </Link>
            <button
              className="text-white focus:outline-none"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          {renderNavLinks()}
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-indigo-800 text-white">
            <div className="h-16 flex items-center px-4 bg-indigo-900">
              <Link
                to="/admin"
                className="text-white font-bold text-xl flex items-center"
              >
                <Layout className="mr-2" />
                Admin Panel
              </Link>
            </div>
            {renderNavLinks()}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-indigo-700">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu size={24} />
          </button>
        </div>

        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  function renderNavLinks() {
    return (
      <nav className="flex-1 px-2 py-4 space-y-1">
        <Link
          to="/admin"
          className="flex items-center px-4 py-2 text-white hover:bg-indigo-700 rounded-md group"
        >
          <Home className="mr-3 h-5 w-5" />
          Dashboard
        </Link>
        <Link
          to="/admin/posts"
          className="flex items-center px-4 py-2 text-white hover:bg-indigo-700 rounded-md group"
        >
          <FileText className="mr-3 h-5 w-5" />
          Posts
        </Link>
        <Link
          to="/admin/posts/new"
          className="flex items-center px-4 py-2 text-white hover:bg-indigo-700 rounded-md group"
        >
          <Plus className="mr-3 h-5 w-5" />
          New Post
        </Link>
        <Link
          to="/admin/subscribers"
          className="flex items-center px-4 py-2 text-white hover:bg-indigo-700 rounded-md group"
        >
          <Users className="mr-3 h-5 w-5" />
          Subscribers
        </Link>
        <button
          onClick={handleSignOut}
          className="flex items-center px-4 py-2 text-white hover:bg-indigo-700 rounded-md group w-full text-left"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </button>
      </nav>
    );
  }
};

export default AdminLayout;
