import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../ui/Button";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form submitted! In a real application, this would send your message."
    );
    setFormState({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Whether you're a founder looking for investment or a potential
            partner, we'd love to hear from you.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                ></textarea>
              </div>

              <Button type="submit" fullWidth>
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Our Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                    <MapPin size={24} className="text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">
                      Location
                    </h4>
                    <p className="text-slate-600 mt-1">
                      260/B, Nabisco
                      <br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                    <Mail size={24} className="text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">
                      Email
                    </h4>
                    <p className="text-slate-600 mt-1">
                      info@lostechnologies.com
                      <br />
                      investments@lostechnologies.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                    <Phone size={24} className="text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">
                      Phone
                    </h4>
                    <p className="text-slate-600 mt-1">
                      +8801720-000191
                      <br />
                      +8801720-000191
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-lg font-medium text-slate-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {/* Twitter */}
                <a
                  href="https://twitter.com/"
                  className="bg-slate-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.12 9.12 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.51 0-4.54 2.14-4.54 4.77 0 .37.03.73.1 1.08A12.94 12.94 0 0 1 3.16.69a5 5 0 0 0-.61 2.4c0 1.66.8 3.13 2.01 3.99a4.5 4.5 0 0 1-2.05-.6v.06c0 2.31 1.57 4.23 3.66 4.67a4.41 4.41 0 0 1-2.03.08 4.53 4.53 0 0 0 4.26 3.28A9.07 9.07 0 0 1 1 19.54a12.94 12.94 0 0 0 7.29 2.28c8.75 0 13.52-7.65 13.52-14.29 0-.22-.01-.43-.02-.65A9.94 9.94 0 0 0 23 3z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  className="bg-slate-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 5.04 3.9 6.27 2.27 6.27 0.63 6.27 0 5.04 0 3.5 0 1.96 0.63 0.73 2.27 0.73 3.9 0.73 4.98 1.96 4.98 3.5zM0 8.5H4.5V24H0V8.5zM7.5 8.5H12V10.5H12.06C12.84 9.2 14.4 8.4 16.13 8.4 20 8.4 21 10.63 21 14.2V24H16.5V15.27C16.5 13.3 16.46 10.8 14.2 10.8 11.9 10.8 11.5 12.9 11.5 15.12V24H7V8.5H7.5z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/"
                  className="bg-slate-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85.004 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.84v2.73c0 .27.17.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
