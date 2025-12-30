"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentTitle: "",
    referralSource: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setIsLoading(false);
        return;
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pr-8">
          Stop trying to just survive AI.
          <br />
          Use it to your advantage to thrive.
        </h2>

        {/* Pricing */}
        <div className="flex items-center gap-4 mb-8 justify-center">
          <span className="text-2xl text-gray-400 line-through">$800</span>
          <span className="text-4xl font-bold text-green-600">
            $650
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Current Title */}
          <div>
            <label htmlFor="currentTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Current Title
            </label>
            <input
              type="text"
              id="currentTitle"
              name="currentTitle"
              value={formData.currentTitle}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* How did you hear about us? */}
          <div>
            <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us?
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select an option</option>
              <option value="instagram">Instagram</option>
              <option value="webinar">Webinar</option>
              <option value="referral">Someone I know told me</option>
            </select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Get Started Now"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

