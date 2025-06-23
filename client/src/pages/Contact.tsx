import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send email using the backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          projectType: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-6">
            Get In Touch
          </h1>
          <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal max-w-3xl mx-auto">
            Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h2 className="text-aakaara-text font-playfair text-[24px] md:text-[28px] font-normal mb-8">
              Let's Start a Conversation
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone size={20} className="text-aakaara-brown mr-4 mt-1" />
                <div>
                  <h4 className="text-aakaara-text font-medium mb-1">Phone</h4>
                  <p className="text-aakaara-text/80">+91 99726 81819</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="text-aakaara-brown mr-4 mt-1" />
                <div>
                  <h4 className="text-aakaara-text font-medium mb-1">Email</h4>
                  <p className="text-aakaara-text/80">contact@aakaarastudio.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="text-aakaara-brown mr-4 mt-1" />
                <div>
                  <h4 className="text-aakaara-text font-medium mb-1">Address</h4>
                  <p className="text-aakaara-text/80">
                    Nagasandra,<br />
                    Bangalore- 560073.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-aakaara-light-brown/20 rounded-lg p-6">
              <h4 className="text-aakaara-text font-medium mb-3">Office Hours</h4>
              <div className="space-y-2 text-aakaara-text/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-aakaara-text font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-aakaara-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-aakaara-text font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-aakaara-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-aakaara-text font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-aakaara-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-aakaara-text font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-aakaara-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="architecture">Architecture</option>
                    <option value="interior">Interior Design</option>
                    <option value="landscape">Landscape Design</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-aakaara-text font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-aakaara-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                  placeholder="Brief description of your project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-aakaara-text font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-aakaara-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent resize-vertical"
                  placeholder="Tell us more about your project, requirements, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-aakaara-brown text-white py-3 px-6 rounded-lg font-medium hover:bg-aakaara-dark-brown transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-aakaara-dark-brown text-aakaara-light-brown">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
          <h2 className="font-playfair text-[28px] md:text-[32px] leading-[38px] font-normal border-b border-aakaara-light-brown/30 pb-4 mb-6">
            Ar. Shivangi Shivakumar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-normal">
            <div>+91 99726 81819</div>
            <div>contact@aakaarastudio.in</div>
            <div>
              Nagasandra,<br />
              Bangalore- 560073.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;