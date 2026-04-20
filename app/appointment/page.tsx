"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Proceed with form handling
    alert("Thank you. We will confirm your appointment shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Booking Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
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
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary shadow-sm transition-colors appearance-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                  <div className="relative">
                    <select 
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary shadow-sm transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-white">Select time</option>
                      <option value="morning" className="bg-white">Morning (8AM - 12PM)</option>
                      <option value="afternoon" className="bg-white">Afternoon (12PM - 4PM)</option>
                      <option value="evening" className="bg-white">Evening (4PM - 10PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Reason for Visit</label>
                <textarea 
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors resize-none"
                  placeholder="Describe your concern or treatment need"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                Confirm Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
