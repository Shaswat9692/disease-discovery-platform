
// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast.success("Message sent successfully! We'll get back to you soon.");
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <Navbar />

//       <main className="flex-1 py-12">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Have questions about symptoms or need help navigating our health
//               guide? Our team is here to assist you. Please fill out the form
//               below and we'll get back to you as soon as possible.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="glass-card p-8 rounded-2xl">
//               <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">
//                     Your Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-1">
//                     Your Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     placeholder="Please describe your question or concern"
//                     rows={5}
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-health-blue hover:bg-health-blue/90"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <Send className="mr-2 h-4 w-4" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div>
//               <div className="glass-card p-8 rounded-2xl mb-8">
//                 <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
//                 <div className="space-y-5">
//                   <div className="flex items-start">
//                     <Mail className="h-5 w-5 text-health-blue mr-3 mt-1" />
//                     <div>
//                       <h3 className="font-medium">Email</h3>
//                       <p className="text-muted-foreground">support@healthguide.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <Phone className="h-5 w-5 text-health-red mr-3 mt-1" />
//                     <div>
//                       <h3 className="font-medium">Phone</h3>
//                       <p className="text-muted-foreground">+91 80 1234 5678</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <MapPin className="h-5 w-5 text-health-teal mr-3 mt-1" />
//                     <div>
//                       <h3 className="font-medium">Address</h3>
//                       <p className="text-muted-foreground">
//                         123 Health Avenue,<br />
//                         Indiranagar, Bangalore,<br />
//                         Karnataka 560038
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-health-light-purple/20 p-6 rounded-2xl">
//                 <h3 className="font-medium text-lg mb-3">Working Hours</h3>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday:</span>
//                     <span>9:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday:</span>
//                     <span>10:00 AM - 4:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday:</span>
//                     <span>Closed</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className="bg-secondary py-8 px-4 mt-10">
//         <div className="container mx-auto max-w-6xl">
//           <p className="text-sm text-muted-foreground text-center">
//             © {new Date().getFullYear()} HealthGuide. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://formspree.io/f/mbljryjl", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? Fill out the form below and we'll get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full bg-health-blue hover:bg-health-blue/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="glass-card p-8 rounded-2xl mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-health-blue mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">shaswatmishra5533@gmail.com  hariradhi2006@gmail.com </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-health-red mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91 80 1234 5678 <br></br>+919692677806</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-health-teal mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">The Art Of Living, Bangalore, Karnataka 560038</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

