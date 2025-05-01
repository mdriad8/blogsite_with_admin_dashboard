import React, { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "LOS Technologies' investment and mentorship were crucial to our success. Their network and strategic guidance helped us scale faster than we could have imagined.",
      author: "Rumman Arefin",
      position: "CEO, IntelSense AI",
    },
    {
      id: 2,
      text: "Working with LOS has been transformative. Their hands-on approach and commitment to our vision made all the difference in our growth journey.",
      author: "Rumman Arefin",
      position: "Founder, SenseScan",
    },
    {
      id: 3,
      text: "The team at LOS Technologies not only provided capital but became true partners in our business. Their insights and connections opened doors we didn't know existed.",
      author: "Rumman Arefin",
      position: "CTO, SenseChat",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current, isAnimating]);

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
      id="testimonials"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Founders Say
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Hear directly from the entrepreneurs we've partnered with on their
            journey to success.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
            <Quote size={60} className="text-red-500 opacity-20" />
          </div>

          <div className="testimonial-slider relative overflow-hidden h-64 md:h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  index === current
                    ? "opacity-100 translate-x-0"
                    : index < current
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="text-center px-4">
                  <p className="text-lg md:text-xl mb-6 text-slate-200">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-300">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-red-500 w-6" : "bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0">
            <button
              onClick={prevSlide}
              className="bg-slate-800/50 hover:bg-slate-700/50 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0">
            <button
              onClick={nextSlide}
              className="bg-slate-800/50 hover:bg-slate-700/50 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
