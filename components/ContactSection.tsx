
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // Hardcoded Web3Forms access key
  const accessKey = 'b9f95d5b-8f90-477b-a068-55293c654708';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');
    setIsSuccess(null);

    const data = {
      ...formData,
      access_key: accessKey,
      subject: `New Message from ${formData.name} via BikeBroo Website`,
      from_name: "BikeBroo Contact Form"
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage('Thank you for your message! We will get back to you shortly.');
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setResponseMessage(result.message || 'Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setResponseMessage('An error occurred while submitting the form. Please try again later.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12">Have questions? We'd love to hear from you.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-brand-light p-8 rounded-lg shadow-md space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green" 
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : 'Send Message'}
              </button>
              {responseMessage && (
                  <p className={`mt-4 text-sm text-center font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                    {responseMessage}
                  </p>
              )}
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">What do I need to rent a scooter?</h4>
                <p className="text-gray-600">You'll need our mobile app, a valid driver's license, and a payment method.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">How far can a scooter go on a full battery?</h4>
                <p className="text-gray-600">Our scooters typically have a range of 40-50 km, but with our BaaS model, your range is virtually unlimited!</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Are the scooters safe?</h4>
                <p className="text-gray-600">Yes, safety is our top priority. Our fleet is regularly maintained, and each scooter is equipped with advanced safety features.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;