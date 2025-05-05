import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabase";
import Button from "../common/Button";

const NewsletterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: existingSubscriber, error: checkError } = await supabase
        .from("subscribers")
        .select("*")
        .eq("email", data.email)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        throw new Error("Error checking subscription status");
      }

      if (existingSubscriber) {
        if (existingSubscriber.unsubscribed) {
          const { error: updateError } = await supabase
            .from("subscribers")
            .update({ unsubscribed: false })
            .eq("id", existingSubscriber.id);

          if (updateError) throw new Error("Failed to resubscribe");
        } else {
          setError("This email is already subscribed to our newsletter");
          setIsLoading(false);
          return;
        }
      } else {
        const { error: insertError } = await supabase
          .from("subscribers")
          .insert([
            {
              email: data.email,
              confirmed: true,
              unsubscribed: false,
            },
          ]);

        if (insertError) throw new Error("Failed to subscribe");
      }

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Newsletter subscription error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="newsletter-form">
      {isSuccess ? (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          Thanks for subscribing! You'll receive our latest updates.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-grow">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-md bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              isLoading={isLoading}
              className="sm:whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>

          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}

          {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
