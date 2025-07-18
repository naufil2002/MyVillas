"use client"

import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Content Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-muted">Ready to Enjoy the Charm of Luxury Villas?</h2>
          <p className="mb-6">
            Reserve your villa today and unwind in a haven of comfort, elegance, and scenic beauty.
          </p>
          <a href="/booking">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="group bg-primary text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
          >
            Make Your Villa Reservation Today
            <motion.span
              className="inline-block transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </motion.span>
          </motion.button></a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-muted">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary/40" />
              Mumbai, Maharastra.
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary/40" />
              +91 9834070695
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-primary/40" />
              Myvilla@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
  <h3 className="text-xl font-semibold mb-4 text-muted">Quick Links</h3>
  <ul className="space-y-2">
    {[  
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" }
    ].map((link, index) => (
      <li key={index}>
        <Link href={link.href} className="hover:text-primary transition-colors duration-300">
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-muted">Follow Us</h3>
          <p className="mb-4">Stay connected with us on social media for special offers and updates.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/arfat__hr/" className="text-white hover:text-primary/40 text-2xl transition-colors duration-300">
              <FaInstagram />
            </a>
            <a
  href="https://www.facebook.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-primary/40 text-2xl transition-colors duration-300"
>
  <FaFacebookF />
</a>

<a
  href="https://www.youtube.com/@smart_trips"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-primary/40 text-2xl transition-colors duration-300"
>
  <FaYoutube />
</a>

<a
  href="https://wa.me/919834070695" // Replace with your WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-primary/40 text-2xl transition-colors duration-300"
>
  <FaWhatsapp />
</a>

          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center py-4 text-sm bg-secondary/80 text-black/50" >
        © {new Date().getFullYear()} WebHub Technologees. All rights reserved.
      </div>
    </footer>
  );
}
