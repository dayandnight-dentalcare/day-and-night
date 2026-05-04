"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    submit: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ phone: "", submit: "" });

    // Validate phone: exactly 10 digits, starts with 6, 7, 8, or 9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone:
          "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).",
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      // The payload now matches the backend schema exactly (name, phone, email, reason)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(), // Send raw 10 digits; backend adds the '91'
          email: formData.email.trim(),
          reason: formData.reason.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error(data.error || "Failed to initiate booking.");
      }
    } catch (error: any) {
      setErrors((prev) => ({
        ...prev,
        submit:
          error.message ||
          "Failed to connect to the server. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    // Clear phone error when user types
    if (name === "phone" && errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden bg-neutral-50 text-gray-900">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left column: clinic info ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h1 className="font-heading text-5xl font-bold mb-6">
                Schedule Your Visit
              </h1>
              <p className="text-gray-600 max-w-md text-lg font-light leading-relaxed">
                Step into a world of personalized dental care. Fill out the
                details below and our team will contact you to finalize your
                appointment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-4 bg-primary/5 text-primary shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Clinic Location
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Day & Night Medical Complex, Beside Reliance Digital,
                    <br />
                    Opp Forest Office, Srikakulam – 532001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-4 bg-primary/5 text-primary shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Direct Contact
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    +91 8977383622
                    <br />
                    +91 6305074696
                    <br />
                    daynightdental@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-4 bg-primary/5 text-primary shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Monday – Saturday: 9:30 AM – 7:30 PM
                    <br />
                    Sunday: 9:30 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column: form or success ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl relative"
          >
            {isSuccess ? (
              /* ── Success screen ── */
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
                <CheckCircle className="text-emerald-500 w-16 h-16" />
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Request Received!
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Please check your WhatsApp. We have just sent you a secure message to instantly select your preferred time slot for today.
                </p>
              </div>
            ) : (
              /* ── Booking form ── */
              <form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Patient Details
                </h3>

                {errors.submit && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
                    {errors.submit}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-white border ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-primary"
                      } rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-sm transition-colors`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Reason for Visit *
                  </label>
                  <textarea
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors resize-none"
                    placeholder="e.g., Routine Checkup, Toothache, Teeth Whitening..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting && (
                    <Loader2 className="animate-spin" size={20} />
                  )}
                  {isSubmitting ? "Processing..." : "Request Appointment"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}