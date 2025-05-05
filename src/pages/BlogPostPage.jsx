import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Layout from "../components/common/Layout";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NewsletterForm from "../components/newsletter/NewsletterForm";

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .single();

        if (error) {
          if (error.code === "PGRST116") {
            navigate("/blog");
          } else {
            throw error;
          }
        }

        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
          <div className="h-10 bg-gray-200 rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded mb-12 w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Post not found
          </h1>
          <p className="text-gray-600 mb-8">
            The post you're looking for does not exist or has been removed.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Back to Blog
          </button>
        </div>
      </Layout>
    );
  }

  const formattedDate = format(new Date(post.created_at), "MMMM dd, yyyy");

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="text-gray-600">
            <time dateTime={post.created_at}>{formattedDate}</time>
          </div>
        </header>

        {post.cover_image && (
          <div className="mb-8">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}

        <div className="prose prose-indigo max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Enjoy this article? Subscribe for more!
          </h3>
          <NewsletterForm />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
