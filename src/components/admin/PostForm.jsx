import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";

const PostForm = ({ post, isEdit = false }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      excerpt: post?.excerpt || "",
      content: post?.content || "",
      cover_image: post?.cover_image || "",
      published: post?.published || false,
    },
  });

  const title = watch("title");

  const generateSlug = () => {
    if (!isEdit) {
      const newSlug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");
      setValue("slug", newSlug);
    }
  };

  const notifySubscribers = async (postId, postTitle, postSlug) => {
    console.log(`Notifying subscribers about new post: ${postTitle}`);
  };

  const onSubmit = async (data) => {
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      if (isEdit && post) {
        const { error: updateError } = await supabase
          .from("posts")
          .update({
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            content: data.content,
            cover_image: data.cover_image || null,
            published: data.published,
            updated_at: new Date().toISOString(),
          })
          .eq("id", post.id);

        if (updateError) throw new Error(updateError.message);

        if (data.published && !post.published) {
          await notifySubscribers(post.id, data.title, data.slug);
        }
      } else {
        const { data: newPost, error: insertError } = await supabase
          .from("posts")
          .insert([
            {
              title: data.title,
              slug: data.slug,
              excerpt: data.excerpt,
              content: data.content,
              cover_image: data.cover_image || null,
              published: data.published,
              author_id: user.id,
            },
          ])
          .select()
          .single();

        if (insertError) throw new Error(insertError.message);

        if (data.published && newPost) {
          await notifySubscribers(newPost.id, data.title, data.slug);
        }
      }

      navigate("/admin/posts");
    } catch (err) {
      console.error("Error saving post:", err);
      setError("Failed to save post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md">{error}</div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <Input
            label="Title"
            placeholder="Enter post title"
            {...register("title", {
              required: "Title is required",
              onBlur: generateSlug,
            })}
            error={errors.title?.message}
          />
        </div>

        <div className="md:col-span-2">
          <Input
            label="Slug"
            placeholder="post-url-slug"
            {...register("slug", { required: "Slug is required" })}
            error={errors.slug?.message}
            disabled={isEdit}
          />
        </div>

        <div className="md:col-span-2">
          <Input
            label="Cover Image URL"
            placeholder="https://media.licdn.com/dms/image/v2/C5103AQHpOY7ZVTL8vw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1585227443210?e=2147483647&v=beta&t=JxkXlAxTBudm86beWs3cu1uR1M6OQEHARxJ-7RAAU2I"
            {...register("cover_image")}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Excerpt
          </label>
          <textarea
            rows={3}
            placeholder="Brief summary of the post"
            className="w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block rounded-md sm:text-sm focus:ring-1"
            {...register("excerpt", { required: "Excerpt is required" })}
          ></textarea>
          {errors.excerpt && (
            <p className="mt-1 text-sm text-red-600">
              {errors.excerpt.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            rows={12}
            placeholder="Write your post content here. Markdown is supported."
            className="w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block rounded-md sm:text-sm focus:ring-1"
            {...register("content", { required: "Content is required" })}
          ></textarea>
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">
              {errors.content.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              {...register("published")}
            />
            <label
              htmlFor="published"
              className="ml-2 block text-sm text-gray-900"
            >
              Publish post (will notify subscribers)
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate("/admin/posts")}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary" isLoading={isLoading}>
          {isEdit ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
