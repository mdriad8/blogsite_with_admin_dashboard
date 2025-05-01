import React from "react";
import { Rocket } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center text-red-500 font-bold text-xl mb-4">
              <Rocket className="mr-2" size={24} />
              <span>LOS Technologies</span>
            </div>
            <p className="text-slate-400 text-sm">
              We invest in exceptional founders building the future of
              technology.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#companies"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#jobs"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Startup School
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Investment Criteria
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-slate-400">
                123 Innovation Drive
                <br />
                San Francisco, CA 94105
              </li>
              <li className="text-slate-400">info@lostechnologies.com</li>
              <li className="text-slate-400">+1 (415) 555-0123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} LOS Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
