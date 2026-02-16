import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { secondaryColor, primaryColor } from "@/constants/colors";
import { WHATSAPP_CONFIG } from "@/constants/whatsapp";
import AnimatedModal from "@/components/ui/AnimatedModal";

function Contact() {
  const [showSocialPopup, setShowSocialPopup] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSocialPopup(true);
  };
  return (
    <div className="min-h-screen bg-amber-800 py-8 px-4 -mt-8 md:-mt-12 lg:-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className={`headings-font text-6xl md:text-8xl text-${secondaryColor} mt-20`}
          >
            Get in Touch
          </h1>
          <p className="body-font text-lg md:text-xl text-amber-50 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Reach out to us for any questions
            about our organic products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2
                className={`headings-font text-4xl text-${primaryColor} mb-6`}
              >
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={`text-${primaryColor} text-xl`}
                  />
                  <div>
                    <p className="body-font text-amber-800 font-semibold">
                      Phone
                    </p>
                    <p className="text-amber-700">
                      +{WHATSAPP_CONFIG.PHONE_NUMBER}
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`text-${primaryColor} text-xl`}
                  />
                  <div>
                    <p className="body-font text-amber-800 font-semibold">
                      Email
                    </p>
                    <p className="text-amber-700">hello@kukkekart.com</p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className={`text-${primaryColor} text-xl`}
                  />
                  <div>
                    <p className="body-font text-amber-800 font-semibold">
                      Address
                    </p>
                    <p className="text-amber-700">{WHATSAPP_CONFIG.ADRESS}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={faClock}
                    className={`text-${primaryColor} text-xl`}
                  />
                  <div>
                    <p className="body-font text-amber-800 font-semibold">
                      Business Hours
                    </p>
                    <p className="text-amber-700">
                      Mon - Sat: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-lg p-6">
              <h2
                className={`headings-font text-4xl text-${primaryColor} mb-6`}
              >
                Follow Us
              </h2>
              <div className="flex space-x-6">
                {/* <a
                  href="https://facebook.com/kukkekart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-blue-600 transition-colors duration-300`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/kukkekart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-pink-700 transition-colors duration-300`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/kukkekart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-blue-400 transition-colors duration-300`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href={"https://wa.me/" + WHATSAPP_CONFIG.PHONE_NUMBER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-green-600 transition-colors duration-300`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className={`headings-font text-4xl text-${primaryColor} mb-6`}>
              Send us a Message
            </h2>

            <form className="space-y-4" onSubmit={handleSendMessage}>
              <div>
                <label className="body-font text-amber-800 font-semibold block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-amber-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="body-font text-amber-800 font-semibold block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-amber-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="body-font text-amber-800 font-semibold block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-amber-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="body-font text-amber-800 font-semibold block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-amber-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="body-font text-amber-800 font-semibold block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-amber-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-vertical"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full bg-${primaryColor} text-${secondaryColor} py-3 px-6 rounded-lg body-font font-bold text-lg hover:bg-${secondaryColor} hover:text-${primaryColor} border-2 hover:border-${primaryColor} transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2
            className={`headings-font text-4xl text-${primaryColor} mb-6 text-center`}
          >
            Find Us
          </h2>
          <div className="bg-amber-800 rounded-lg h-64 flex items-center justify-center">
            <p className="body-font text-amber-50 text-lg">
              Interactive map will be integrated here
            </p>
          </div>
        </div>
      </div>

      <AnimatedModal
        isOpen={showSocialPopup}
        onClose={() => setShowSocialPopup(false)}
      >
        <div
          className={`bg-${secondaryColor} rounded-2xl shadow-2xl p-6 md:p-8`}
        >
          <h3
            className={`headings-font text-2xl md:text-3xl text-${primaryColor} mb-6 text-center`}
          >
            Connect With Us
          </h3>
          <div className="flex gap-6 justify-center">
            <a
              href="https://facebook.com/kukkekart"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${primaryColor} hover:text-blue-600 transition-colors`}
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/kukkekart"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${primaryColor} hover:text-pink-700 transition-colors`}
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={"https://wa.me/" + WHATSAPP_CONFIG.PHONE_NUMBER}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${primaryColor} hover:text-green-600 transition-colors`}
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
              </svg>
            </a>
            <a
              href="https://twitter.com/kukkekart"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${primaryColor} hover:text-blue-400 transition-colors`}
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </AnimatedModal>
    </div>
  );
}

export default Contact;
