import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Project Inquiry - ${formData.service || 'General'}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Required: ${formData.service}

Message:
${formData.message}

---
Sent from Aakaara Architecture website contact form
      `);
      
      const mailtoLink = `mailto:contact@aakaarastudio.in?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h1 className="text-aakaara-text font-playfair text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-normal mb-8">
              Get in Touch
            </h1>
            <p className="text-aakaara-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal mb-12 max-w-[500px]">
              Ready to transform your space? We'd love to discuss your project and bring your vision to life.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-aakaara-text font-playfair text-[20px] font-medium mb-2">
                  Principal Architect
                </h3>
                <p className="text-aakaara-text text-[16px] font-normal">
                  Ar. Shivangi Shivakumar
                </p>
              </div>

              <div>
                <h3 className="text-aakaara-text font-playfair text-[20px] font-medium mb-2">
                  Phone
                </h3>
                <p className="text-aakaara-text text-[16px] font-normal">
                  +91 99726 81819
                </p>
              </div>

              <div>
                <h3 className="text-aakaara-text font-playfair text-[20px] font-medium mb-2">
                  Email
                </h3>
                <p className="text-aakaara-text text-[16px] font-normal">
                  contact@aakaarastudio.in
                </p>
              </div>

              <div>
                <h3 className="text-aakaara-text font-playfair text-[20px] font-medium mb-2">
                  Office
                </h3>
                <p className="text-aakaara-text text-[16px] font-normal leading-[24px]">
                  Nagasandra,<br />
                  Bangalore - 560073<br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg animate-slide-in-right">
            <h2 className="text-aakaara-text font-playfair text-[24px] font-medium mb-6">
              Start Your Project
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-700 text-[14px]">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-700 text-[14px]">There was an error sending your message. Please try again.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-aakaara-text text-[14px] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-aakaara-text text-[14px] font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-aakaara-text text-[14px] font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-aakaara-text text-[14px] font-medium mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Architectural Planning">Architectural Planning</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Landscape Design">Landscape Design</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-aakaara-text text-[14px] font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aakaara-brown focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-aakaara-brown text-white py-3 px-6 rounded-md hover:bg-aakaara-dark-brown transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-aakaara-dark-brown text-aakaara-light-brown mt-16">
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