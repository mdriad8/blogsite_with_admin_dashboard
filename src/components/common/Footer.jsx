import React from "react";
import { Link } from "react-router-dom";
import { Bookmark, Github, Twitter, Linkedin } from "lucide-react";
import NewsletterForm from "../newsletter/NewsletterForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and info */}
          <div>
            <Link
              to="/"
              className="text-white font-bold text-xl flex items-center"
            >
              <Bookmark className="mr-2" />
              BlogHub
            </Link>
            <p className="mt-4 text-gray-400">
              Sharing insights, knowledge, and stories with our community.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest articles and news.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} BlogHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
