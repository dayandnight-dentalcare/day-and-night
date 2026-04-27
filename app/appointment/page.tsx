"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    treatment: "",
    notes: ""
  });
  
  const [errors, setErrors] = useState({
    phone: "",
    submit: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrors({ phone: "", submit: "" });

    // Validate phone: exactly 10 digits, starts with 6, 7, 8, or 9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)." }));
      return;
    }

    setIsSubmitting(true);

    try {
      const text = `*New Appointment Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}${formData.date ? `%0A*Preferred Date:* ${formData.date}` : ""}%0A*Treatment/Concern:* ${formData.treatment}${formData.notes ? `%0A*Additional Notes:* ${formData.notes}` : ""}`;
      
      // WhatsApp number for booking handover
      const whatsappNumber = "918977383622";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

      // Brief delay to show loading state
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setIsSubmitting(false);
      }, 800);

    } catch (error) {
      setErrors(prev => ({ ...prev, submit: "Failed to redirect to WhatsApp. Please try again." }));
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Clear phone error when user types
    if (name === "phone" && errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden bg-neutral-50 text-gray-900">
      {/* Clean Background */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h1 className="font-heading text-5xl font-bold mb-6">Schedule Your Visit</h1>
              <p className="text-gray-600 max-w-md text-lg font-light leading-relaxed">
                Step into a world of personalized dental care. Fill out the details below and our team will contact you to finalize your appointment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-4 bg-primary/5 text-primary shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Location</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Day & Night Medical Complex, Beside Reliance Digital,<br />Opp Forest Office, Srikakulam – 532001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-4 bg-primary/5 text-primary shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Direct Contact</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    +91 8977383622<br />+91 6305074696<br />daynightdental@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-4 bg-primary/5 text-primary shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Monday – Friday: 9:00 AM – 9:00 PM<br />Saturday: 9:00 AM – 8:00 PM<br />Sunday: Emergency Only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl relative"
          >
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Patient Details</h3>
              
              {errors.submit && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
                  {errors.submit}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name *</label>
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
                  <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-primary'} rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-sm transition-colors`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Appointment Date (Optional)</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary shadow-sm transition-colors appearance-none"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Hint: We will confirm available slots via WhatsApp.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Treatment / Concern *</label>
                  <input 
                    type="text" 
                    name="treatment"
                    required
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors"
                    placeholder="e.g., Toothache, Cleaning, Implants"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Additional Notes / Symptoms (Optional)</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors resize-none"
                  placeholder="Describe any symptoms or specific requests..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="animate-spin" size={20} />}
                {isSubmitting ? "Redirecting to WhatsApp..." : "Continue to WhatsApp to Book"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
