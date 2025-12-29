import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { secondaryColor, primaryColor } from "@/constants/colors";

function Contact() {
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
                    <p className="text-amber-700">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
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
                </div>

                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className={`text-${primaryColor} text-xl`}
                  />
                  <div>
                    <p className="body-font text-amber-800 font-semibold">
                      Address
                    </p>
                    <p className="text-amber-700">
                      123 Organic Farm Lane
                      <br />
                      Green Valley, Karnataka 560001
                    </p>
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

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2
                className={`headings-font text-4xl text-${primaryColor} mb-6`}
              >
                Follow Us
              </h2>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com/kukkekart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-blue-600 transition-colors duration-300`}
                >
                  <span className="text-3xl">📘</span>
                </a>
                <a
                  href="https://instagram.com/kukkekart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-pink-600 transition-colors duration-300`}
                >
                  <span className="text-3xl">📷</span>
                </a>
                <a
                  href="https://twitter.com/kukkekart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-blue-400 transition-colors duration-300`}
                >
                  <span className="text-3xl">🐦</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-${primaryColor} hover:text-green-600 transition-colors duration-300`}
                >
                  <span className="text-3xl">💬</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className={`headings-font text-4xl text-${primaryColor} mb-6`}>
              Send us a Message
            </h2>

            <form className="space-y-4">
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
    </div>
  );
}

export default Contact;
