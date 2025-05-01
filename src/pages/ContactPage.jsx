import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../components/ui/Button";

const Contact = () => {
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
    console.log("Form submitted:", formState);
    alert("Thank you for your message. We will get back to you soon!");
    setFormState({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                Get in Touch
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                We're here to help you build something amazing
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Us
                </h2>
                <p className="text-slate-600 mb-8">
                  Whether you're a founder looking for investment or want to
                  learn more about our portfolio companies, we'd love to hear
                  from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                      <MapPin size={24} className="text-red-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-slate-900">
                        Visit Us
                      </h3>
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
                      <h3 className="text-lg font-medium text-slate-900">
                        Email Us
                      </h3>
                      <p className="text-slate-600 mt-1">
                        info@lostechnologies.com
                        <br />
                        partnerships@lostechnologies.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                      <Phone size={24} className="text-red-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-slate-900">
                        Call Us
                      </h3>
                      <p className="text-slate-600 mt-1">
                        +8801720-000191
                        <br />
                        Mon-Fri 9am to 6pm PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  <Button type="submit" fullWidth>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-slate-200 h-96 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                Interactive Map Coming Soon
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
