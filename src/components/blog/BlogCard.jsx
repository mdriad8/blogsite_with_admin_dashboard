import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

const BlogCard = ({
  title,
  excerpt,
  slug,
  coverImage,
  createdAt,
  featured = false,
}) => {
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy");

  const imageUrl =
    coverImage ||
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
        featured ? "lg:col-span-2 md:flex" : ""
      }`}
    >
      <div className={`${featured ? "md:w-1/2" : "w-full"}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className={`p-6 ${featured ? "md:w-1/2" : ""}`}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          {featured && (
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-indigo-600 transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-700 mb-4 line-clamp-2">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          Read more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
