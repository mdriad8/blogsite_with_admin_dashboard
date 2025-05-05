import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Layout from "../components/common/Layout";
import BlogCard from "../components/blog/BlogCard";
import Button from "../components/common/Button";

const BlogListPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 6;

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    setIsLoading(true);

    try {
      const from = page * postsPerPage;
      const to = from + postsPerPage - 1;

      const { data, error, count } = await supabase
        .from("posts")
        .select("*", { count: "exact" })
        .eq("published", true)
        .order("created_at", { ascending: false })
        .range(from, to);

      if (error) {
        throw error;
      }

      setPosts((prev) => [...prev, ...(data || [])]);

      if (count) {
        setHasMore(from + (data ? data.length : 0) < count);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Layout>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-lg text-gray-600 mb-10">
            Explore our latest articles and insights
          </p>

          {isLoading && page === 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-200 h-64 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
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

              {posts.length === 0 && !isLoading && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">
                    No posts available yet. Check back soon!
                  </p>
                </div>
              )}
            </>
          )}

          {hasMore && (
            <div className="mt-12 text-center">
              <Button
                onClick={loadMore}
                variant="secondary"
                isLoading={isLoading && page > 0}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogListPage;
