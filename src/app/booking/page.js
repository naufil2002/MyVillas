"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function Booking() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    checkIn: '',
    checkOut: ''
  });

  const [showModal, setShowModal] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "firstName" || name === "lastName") {
    const regex = /^[A-Za-z\s]*$/;
    if (!regex.test(value)) return;
  }

  if (name === "mobile") {
    const regex = /^[0-9]*$/;
    if (!regex.test(value)) return;
  }

  if (name === "email") {
    const atCount = (value.match(/@/g) || []).length;
    if (atCount > 1) return;
  }

  if (name === "checkInDate" || name === "checkOutDate") {
    // Simple check for dd-mm-yyyy format
    const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/;
    if (value && !regex.test(value)) return;
  }

  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};



  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919834070695"; 
    const message = `Booking Request:
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Mobile: ${formData.mobile}
Email: ${formData.email || 'N/A'}
Check-In Date: ${formData.checkIn}
Check-Out Date: ${formData.checkOut}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");


    // Here you would typically send the data to your backend
    // console.log('Form submitted:', formData);
    setShowModal(true);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      checkIn: '',
      checkOut: ''
    });
  };

  return (
    <div className=" bg-gradient-to-b bg-gray-400 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ${showModal ? 'blur-sm' : ''}`}>
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Book Your Stay</h1>
            <p className="mt-2 text-gray-600">Fill out the form below to reserve your room</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 p-2 border"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 p-2 border"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 p-2 border"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 p-2 border"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                  Check-In Date *
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-gray-700 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 p-2 border"
                />
              </div>

              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
                  Check-Out Date *
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-gray-700 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50 p-2 border"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white/80 shadow-xl rounded-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Thank You!</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Thanks for reaching out. One of our receptionists will contact you asap.
                </p>
              </div>
              <div className="mt-4">
                <button
  type="button"
  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 sm:text-sm"
  onClick={() => {
    setShowModal(false);   // modal band karo
    router.replace('#'); ;      // yahan '/' ko tum apne home page ya kisi desired route se replace kar sakte ho
  }}
>
  Close
</button>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
