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
    <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h1 className="font-heading text-5xl font-bold mb-6">Schedule Your Visit</h1>
              <p className="text-white/70 max-w-md text-lg font-light leading-relaxed">
                Step into a world of bespoke dental care. Fill out the details below and our concierge will contact you to finalize your appointment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-4 bg-dark-800/50 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Clinic Location</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    123 Luxury Avenue, Healthcare Hub<br />Cityville, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-4 bg-dark-800/50 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Direct Contact</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    +1 (555) 123-4567<br />care@daynightclinic.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-4 bg-dark-800/50 text-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Working Hours</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Mon - Fri: 8:00 AM - 10:00 PM<br />Sat: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-tr-3xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="font-heading text-2xl font-bold mb-6 pb-4 border-b border-white/10">Booking Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Preferred Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                    />
                    <Calendar className="absolute right-4 top-3.5 text-white/40 pointer-events-none" size={20} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Preferred Time</label>
                  <select 
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-dark-900">Select time</option>
                    <option value="morning" className="bg-dark-900">Morning (8AM - 12PM)</option>
                    <option value="afternoon" className="bg-dark-900">Afternoon (12PM - 4PM)</option>
                    <option value="evening" className="bg-dark-900">Evening (4PM - 10PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Reason for Visit</label>
                <textarea 
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about what you'd like to achieve..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(44,188,228,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
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
