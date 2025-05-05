import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import AdminLayout from "../../components/admin/AdminLayout";
import { FileText, Users, Clock, Eye } from "lucide-react";

const DashboardPage = () => {
  console.log("AdminLayout import check:", AdminLayout);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalSubscribers: 0,
  });
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { count: totalPosts, error: postsError } = await supabase
          .from("posts")
          .select("*", { count: "exact", head: true });
        if (postsError) throw postsError;

        const { count: publishedPosts, error: publishedError } = await supabase
          .from("posts")
          .select("*", { count: "exact", head: true })
          .eq("published", true);
        if (publishedError) throw publishedError;

        const { count: subscribersCount, error: subscribersError } =
          await supabase
            .from("subscribers")
            .select("*", { count: "exact", head: true })
            .eq("unsubscribed", false);
        if (subscribersError) throw subscribersError;

        const { data: recent, error: recentError } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5);
        if (recentError) throw recentError;

        setStats({
          totalPosts: totalPosts || 0,
          publishedPosts: publishedPosts || 0,
          draftPosts: (totalPosts || 0) - (publishedPosts || 0),
          totalSubscribers: subscribersCount || 0,
        });

        setRecentPosts(recent || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="pt-6 pb-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {isLoading ? (
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-200 h-32 rounded-lg"></div>
              ))}
            </div>
            <div className="bg-gray-200 h-64 rounded-lg"></div>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Posts
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {stats.totalPosts}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                    <Eye size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Published
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {stats.publishedPosts}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Drafts</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {stats.draftPosts}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-teal-100 text-teal-600 mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Subscribers
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {stats.totalSubscribers}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Recent Posts
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentPosts.length > 0 ? (
                  recentPosts.map((post) => (
                    <div key={post.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/admin/posts/edit/${post.id}`}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 truncate"
                          >
                            {post.title}
                          </Link>
                          <p className="text-sm text-gray-500 truncate">
                            {new Date(post.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          {post.published ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Published
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              Draft
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-4 text-center text-gray-500">
                    No posts yet.{" "}
                    <Link
                      to="/admin/posts/new"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Create your first post
                    </Link>
                    .
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
