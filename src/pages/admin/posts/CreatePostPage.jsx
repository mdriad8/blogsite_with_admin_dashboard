import React from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import PostForm from "../../../components/admin/PostForm";

const CreatePostPage = () => {
  return (
    <AdminLayout>
      <div className="pt-6 pb-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create New Post
        </h1>
        <PostForm />
      </div>
    </AdminLayout>
  );
};

export default CreatePostPage;
