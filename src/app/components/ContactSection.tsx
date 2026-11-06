import { useState } from "react";
import { Send, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

export function ContactSection({ 
  email = "projectsaveourskin@gmail.com", 
  instagram = "projectsaveourskin",
  location = "Chicago, Illinois"
}: { 
  email?: string; 
  instagram?: string; 
  location?: string;
} = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: email,
      subtitle: "Send us your questions or ideas"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      content: location,
      subtitle: location === "Chicago, Illinois" ? "Our main office location" : "Chapter Location"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Get In Touch</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about our programs? Want to volunteer or start a chapter in your area? 
              We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl mb-8 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 border-pink-100 hover:border-pink-200 transition-colors duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1">{info.title}</h4>
                        <p className="text-lg text-primary mb-1 break-all">{info.content}</p>
                        <p className="text-gray-600 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Social Media Links */}
              <div className="mb-8">
                <h4 className="text-xl mb-4 text-gray-800">Follow Us</h4>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-gray-600">Instagram</p>
                      <p className="text-primary">@{instagram}</p>
                    </div>
                  </a>
                  <a
                    href="https://tiktok.com/@projectsaveourskin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    <div className="w-6 h-6 text-primary flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">TikTok</p>
                      <p className="text-primary">@projectsaveourskin</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                <h4 className="mb-3 text-gray-800">Looking to volunteer?</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We're always looking for passionate individuals to join our mission. 
                  Whether you're a healthcare professional, educator, or someone who 
                  cares about skin cancer prevention, there's a place for you.
                </p>
                <Button className="bg-primary hover:bg-pink-600 text-white rounded-full">
                  Learn About Volunteering
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl mb-8 text-gray-800">Send Us a Message</h3>
              
              <Card className="p-6 border-pink-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-pink-200 focus:border-primary focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-pink-200 focus:border-primary focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-gray-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-pink-200 focus:border-primary focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-pink-200 focus:border-primary focus:ring-primary min-h-32"
                      placeholder="Please share your questions, ideas, or how you'd like to get involved..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-pink-600 text-white rounded-full py-3 text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}