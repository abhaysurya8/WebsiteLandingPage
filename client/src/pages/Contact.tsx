import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    // Validate phone number: must have 10 digits
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      // Basic frontend required check
      return;
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again or contact us directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (!/^[\d+\s]*$/.test(value)) {
        setPhoneError("Please enter a valid phone number");
        return;
      } else {
        setPhoneError("");
      }
    }
    setFormData({ ...formData, [name]: value });
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
          {/* Google Form Embed in right column */}
          <div className="animate-slide-in-right flex items-start justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdesFQPRf3ppWjbkWN7vKWHhUA7YHMvNWoPQ6fgOtT0ANswQA/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
              style={{ background: 'white', maxWidth: 600 }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;