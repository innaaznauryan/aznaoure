import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. Our team will respond within 24 hours.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="luxury-subheading mb-3 sm:mb-4">Get in Touch</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">
              Our concierge team is here to assist you with any inquiries.
            </p>
            <div className="luxury-divider mt-6 sm:mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">
                  Visit Us
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-4">
                    <Facebook className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <Link
                        className="text-muted-foreground"
                        to="https://www.facebook.com/aznaoure"
                        target="_blank"
                      >
                        Aznaoure Art Facebook
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Instagram className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <Link
                          className="text-muted-foreground"
                          to="https://www.instagram.com/aznaoure"
                          target="_blank"
                      >
                        Aznaoure Art Instagram
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link
                        className="text-muted-foreground"
                        to="tel:+37493629370"
                      >
                        (+374) 93 629 370
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link
                        to="mailto:aznaoure@gmail.com"
                        className="text-muted-foreground"
                      >
                        aznaoure@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      required
                      placeholder="Your first name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      required
                      placeholder="Your last name"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(+374) 00 000 000"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    required
                    placeholder="How can we help?"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="luxury"
                  size="lg"
                  className="sm:size-xl w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
