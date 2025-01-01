import { Link } from "react-router-dom";
import { categories } from "@/lib/products";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wide">AURUM</h2>
            <p className="text-background/70 font-light leading-relaxed text-sm sm:text-base">
              Crafting timeless elegance since 1892. Each piece tells a story of
              exceptional artistry and enduring beauty.
            </p>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs tracking-widest uppercase text-background/50">
              Collections
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/collections?category=${category.id}`}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs tracking-widest uppercase text-background/50">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs tracking-widest uppercase text-background/50">
              Contact
            </h3>
            <address className="text-background/70 not-italic space-y-2">
              <p>12 Place Vendôme</p>
              <p>75001 Paris, France</p>
              <p className="pt-2">+33 1 42 61 00 00</p>
              <p>concierge@aurum.com</p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Aurum. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link
              to="#"
              className="text-background/50 hover:text-background transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-background/50 hover:text-background transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-background/50 hover:text-background transition-colors duration-300"
            >
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
