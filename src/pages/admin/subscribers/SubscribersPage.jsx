import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import AdminLayout from "../../../components/admin/AdminLayout";
import Button from "../../../components/common/Button";
import { Download, Mail, Search, UserX } from "lucide-react";
import { format } from "date-fns";

const SubscribersPage = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("subscribers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsubscribe = async (id) => {
    if (!window.confirm("Are you sure you want to unsubscribe this email?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from("subscribers")
        .update({ unsubscribed: true })
        .eq("id", id);

      if (error) throw error;

      setSubscribers(
        subscribers.map((sub) =>
          sub.id === id ? { ...sub, unsubscribed: true } : sub
        )
      );
    } catch (error) {
      console.error("Error unsubscribing:", error);
      alert("Failed to unsubscribe. Please try again.");
    }
  };

  const downloadCsv = () => {
    const activeSubscribers = subscribers.filter((s) => !s.unsubscribed);
    const csvContent = [
      "Email,Date Subscribed",
      ...activeSubscribers.map(
        (s) => `${s.email},${format(new Date(s.created_at), "yyyy-MM-dd")}`
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `subscribers_${format(new Date(), "yyyy-MM-dd")}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeCount = subscribers.filter((s) => !s.unsubscribed).length;

  return (
    <AdminLayout>
      <div className="pt-6 pb-16">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Newsletter Subscribers
            </h1>
            <p className="text-gray-600 mt-1">
              {activeCount} active subscribers
            </p>
          </div>
          <Button
            variant="secondary"
            onClick={downloadCsv}
            disabled={activeCount === 0}
          >
            <Download size={18} className="mr-1" /> Export CSV
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by email..."
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {isLoading ? (
            <div className="animate-pulse p-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-200 rounded mb-4"></div>
              ))}
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredSubscribers.length > 0 ? (
                filteredSubscribers.map((subscriber) => (
                  <li key={subscriber.id}>
                    <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <Mail size={18} className="text-gray-400 mr-2" />
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {subscriber.email}
                          </p>
                        </div>
                        <div className="mt-1 flex items-center">
                          <p className="text-sm text-gray-500 mr-2">
                            Subscribed on{" "}
                            {format(
                              new Date(subscriber.created_at),
                              "MMM d, yyyy"
                            )}
                          </p>
                          {subscriber.unsubscribed && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Unsubscribed
                            </span>
                          )}
                        </div>
                      </div>
                      {!subscriber.unsubscribed && (
                        <div>
                          <button
                            onClick={() => handleUnsubscribe(subscriber.id)}
                            className="text-gray-500 hover:text-red-600"
                            title="Unsubscribe"
                          >
                            <UserX size={18} />
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-6 text-center text-gray-500">
                  {searchQuery
                    ? "No subscribers found matching your search criteria."
                    : "No subscribers yet."}
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default SubscribersPage;
