import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Layout from "../components/common/Layout";
import BlogCard from "../components/blog/BlogCard";
import NewsletterForm from "../components/newsletter/NewsletterForm";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: featured, error: featuredError } = await supabase
          .from("posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (featuredError && featuredError.code !== "PGRST116") {
          console.error("Error fetching featured post:", featuredError);
        }

        const { data: recent, error: recentError } = await supabase
          .from("posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false })
          .range(1, 3);

        if (recentError) {
          console.error("Error fetching recent posts:", recentError);
        }

        setFeaturedPost(featured || null);
        setRecentPosts(recent || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome to BlogHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your source for insightful articles and the latest updates.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center bg-white text-indigo-600 font-medium px-6 py-3 rounded-md hover:bg-indigo-50 transition-colors"
            >
              Browse Articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured and Recent Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Latest Articles
          </h2>

          {isLoading ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="bg-gray-200 h-64 rounded-lg"></div>
            </div>
          ) : (
            <>
              {featuredPost && (
                <div className="mb-12">
                  <BlogCard
                    id={featuredPost.id}
                    title={featuredPost.title}
                    excerpt={featuredPost.excerpt}
                    slug={featuredPost.slug}
                    createdAt={featuredPost.created_at}
                    coverImage={featuredPost.cover_image}
                    featured={true}
                  />
                </div>
              )}

              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    createdAt={post.created_at}
                    coverImage={post.cover_image}
                  />
                ))}
              </div>

              {recentPosts.length === 0 && !featuredPost && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">
                    No posts available yet. Check back soon!
                  </p>
                </div>
              )}

              <div className="mt-10 text-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View all articles <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with our latest articles and news. Never miss an
            update!
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
