import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-craftsmanship.jpg";

const About = () => {
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
            <p className="luxury-subheading mb-3 sm:mb-4">Our Story</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              A Legacy of Excellence
            </h1>
            <div className="luxury-divider" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutImage}
                alt="Aurum atelier"
                className="w-full h-auto rounded-sm shadow-elevated"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="luxury-subheading">Since 1892</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">
                Crafting Dreams in Gold
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                For over a century, Aurum has been synonymous with exceptional
                craftsmanship and timeless design. Founded in the heart of Paris
                by master jeweler Henri Duval, our maison has remained true to
                its founding principles: uncompromising quality, innovative
                design, and a deep respect for the art of jewelry making.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Each piece that leaves our atelier carries with it the expertise
                of generations of artisans. From the initial sketch to the final
                polish, every step is executed with precision and passion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <p className="text-xs font-sans tracking-widest uppercase text-background/50 mb-3 sm:mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Pillars of Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                title: "Artistry",
                description:
                  "Our master craftsmen dedicate their lives to perfecting their art. Each piece is a testament to decades of expertise passed down through generations.",
              },
              {
                title: "Integrity",
                description:
                  "We source only the finest materials, ethically obtained and meticulously verified. Transparency and trust are the foundations of our relationships.",
              },
              {
                title: "Innovation",
                description:
                  "While honoring traditional techniques, we embrace innovation. Our designs blend classical elegance with contemporary vision.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 text-gold">
                  {value.title}
                </h3>
                <p className="text-background/70 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-champagne">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Experience Aurum
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
              Visit our flagship boutique on Place Vendôme or schedule a private
              appointment with our concierge team.
            </p>
            <Button variant="luxury" size="lg" className="sm:size-xl w-full sm:w-auto" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
