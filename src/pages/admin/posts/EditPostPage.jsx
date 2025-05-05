import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import AdminLayout from "../../../components/admin/AdminLayout";
import PostForm from "../../../components/admin/PostForm";

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          if (error.code === "PGRST116") {
            // Post not found
            navigate("/admin/posts");
          } else {
            throw error;
          }
        }

        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        alert("Failed to load post. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="pt-6 pb-16 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (!post) {
    return (
      <AdminLayout>
        <div className="pt-6 pb-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Post not found
          </h1>
          <p className="text-gray-600 mb-4">
            The post you're trying to edit could not be found.
          </p>
          <button
            onClick={() => navigate("/admin/posts")}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Back to Posts
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="pt-6 pb-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Post</h1>
        <PostForm post={post} isEdit={true} />
      </div>
    </AdminLayout>
  );
};

export default EditPostPage;
