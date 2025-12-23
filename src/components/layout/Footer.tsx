import React from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { currentPageState } from "@/store/pageState";
import { primaryColor, secondaryColor } from "@/constants/colors";

function Footer() {
  const setCurrentPage = useSetRecoilState(currentPageState);

  return (
    <footer
      className={`bg-${primaryColor} text-${secondaryColor} py-12 px-4 relative overflow-hidden`}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-current"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-current"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 rounded-full bg-current"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-current"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="headings-font text-3xl md:text-4xl font-bold mb-4 tracking-wide">
              KukkeKart
            </h3>
            <p className="body-font text-base md:text-lg opacity-90 leading-relaxed mb-6">
              Your destination for authentic, homemade spices that transform
              every dish into a culinary masterpiece.
            </p>
            <div className="flex space-x-4">
              <div
                className={`w-12 h-12 bg-${secondaryColor} bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer`}
              >
                <span className="text-xl">📧</span>
              </div>
              <div
                className={`w-12 h-12 bg-${secondaryColor} bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer`}
              >
                <span className="text-xl">📱</span>
              </div>
              <div
                className={`w-12 h-12 bg-${secondaryColor} bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer`}
              >
                <span className="text-xl">🌐</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="headings-font text-xl font-bold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 body-font">
              <li>
                <Link
                  href="/"
                  className="text-base hover:text-opacity-75 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={() => setCurrentPage("/")}
                >
                  → Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-base hover:text-opacity-75 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={() => setCurrentPage("/products")}
                >
                  → Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base hover:text-opacity-75 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={() => setCurrentPage("/about")}
                >
                  → About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base hover:text-opacity-75 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={() => setCurrentPage("/contact")}
                >
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="headings-font text-xl font-bold mb-6 tracking-wide">
              Get In Touch
            </h4>
            <div className="body-font space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-lg">✉️</span>
                <span className="text-base">info@kukkekart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <span className="text-base">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📍</span>
                <span className="text-base">Spice Gardens, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-${secondaryColor} border-opacity-30 pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="body-font text-sm opacity-75">
              &copy; 2024 KukkeKart. All rights reserved. Made with ❤️ for spice
              lovers.
            </p>
            <div className="flex space-x-6 body-font text-sm">
              <Link
                href="/privacy"
                className="hover:opacity-75 transition-opacity"
                onClick={() => setCurrentPage("/privacy")}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:opacity-75 transition-opacity"
                onClick={() => setCurrentPage("/terms")}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;