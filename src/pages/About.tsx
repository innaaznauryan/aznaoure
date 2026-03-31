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
              From Inspiration to Jewelry
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
                alt="Aznaoure atelier"
                className="w-full h-auto rounded-sm shadow-elevated"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="luxury-subheading">Since 2025</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">
                Crafting Dreams in Silver
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                At our studio, jewelry begins with an idea.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We are a creative jewelry concept brand dedicated to transforming inspiration into distinctive designs. Every piece starts as a story — a thought, a symbol, or a moment — which we translate into jewelry that feels meaningful and expressive.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Our work is guided by a passion for artistry, originality, and thoughtful design. From the first sketch to the final creation, each concept is developed with attention to detail and a deep respect for the beauty of craftsmanship.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We believe jewelry is more than decoration. It is a form of self-expression, a small work of art that carries emotion, identity, and imagination.
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
                  "Creativity is at the heart of everything we do. Each design begins with an idea and evolves through sketching, experimentation, and careful attention to detail until it becomes a piece of wearable art.",
              },
              {
                title: "Integrity",
                description:
                  "We value honesty, quality, and respect for our craft. Every design is created thoughtfully, with attention to materials and a commitment to building trust with those who appreciate our work."              },
              {
                title: "Innovation",
                description:
                  "We are inspired by both tradition and imagination. By exploring new ideas, forms, and concepts, we create jewelry that blends timeless elegance with a modern creative vision.",
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
              Experience Aznaoure Art
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
              Discover our creations and explore the ideas behind every design. Each piece is crafted to express individuality, creativity, and the beauty of thoughtful design.
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
