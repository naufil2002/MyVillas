"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaHeart, FaLeaf, FaStar, FaLightbulb } from "react-icons/fa";
import thumbnail from "../../../public/images/about-thumbnail.jpg";
import vision from "../../../public/images/vision.gif";
import mission from "../../../public/images/mission.gif";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [hoveredVision, setHoveredVision] = useState(false);
  const [hoveredMission, setHoveredMission] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const values = [
    {
      icon: <FaStar className="text-3xl text-yellow-400" />,
      title: "Excellence",
      description: "We aim for perfection in every moment, setting new standards in villa hospitality.",
      color: "bg-yellow-50"
    },
    {
      icon: <FaHeart className="text-3xl text-red-400" />,
      title: "Authenticity",
      description: "Genuine care that makes every villa stay unique and unforgettable.",
      color: "bg-red-50"
    },
    {
      icon: <FaLeaf className="text-3xl text-green-500" />,
      title: "Sustainability",
      description: "Luxury that respects people and the planet — committed to sustainable villa living.",
      color: "bg-green-50"
    },
    {
      icon: <FaLightbulb className="text-3xl text-blue-400" />,
      title: "Innovation",
      description: "Anticipating your needs with thoughtful and creative villa experiences",
      color: "bg-blue-50"
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const valueItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="my-1">
      {/* Story Section */}
      <motion.div
        className="py-10 bg-white backdrop-blur-sm"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-600 mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg mb-6 text-gray-500">
                Nestled amidst breathtaking landscapes, our villa booking experience was born in 2025 from a passion to redefine luxury getaways. What started as a vision has evolved into an escape where every sunrise awakens new possibilities and every sunset marks moments to cherish. Here, your comfort is our priority—book your villa and indulge in unforgettable stays.
              </p>
            </div>
            <Image
              src={thumbnail}
              alt="Hotel lobby"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Vision & Mission Section */}
    <motion.div  className="py-16 bg-gray-500 from-primary/10 to-secondary/10" variants={fadeIn} initial="hidden"
        whileInView="visible" viewport={{ once: true }} >

        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Guiding Principles</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-xl bg-white"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary opacity-10"></div>
                <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                    <div className="bg-secondary p-3 rounded-full mr-4">
                    <Image 
                        src={vision} 
                        alt="Vision" 
                        width={60} 
                        height={60}
                        className="object-contain"
                    />
                    </div>
                    <h3 className="text-3xl font-bold text-primary/70">Vision</h3>
                </div>
                <div className="pl-4 border-l-4 border-primary/70">
                    <p className="text-lg text-gray-700 leading-relaxed">
                    To redefine luxury villa stays by becoming the most cherished choice for travelers — where authentic experiences, personalized service, and unforgettable moments come together in every villa.
                    </p>
                </div>
                
                </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-xl bg-white"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-10"></div>
                <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Image 
                        src={mission} 
                        alt="Mission" 
                        width={60} 
                        height={60}
                        className="object-contain"
                    />
                    </div>
                    <h3 className="text-3xl font-bold text-green-700">Mission</h3>
                </div>
                <div className="pl-4 border-l-4 border-green-400">
                    <p className="text-lg text-gray-700 leading-relaxed">
                    To craft unforgettable villa stays by blending personalized service with bespoke luxury — where every detail is meticulously designed to exceed expectations and create lasting memories.
                    </p>
                </div>
                
                </div>
            </motion.div>
            </div>
        </div>
    </motion.div>

      {/* Core Values Section */}
      <motion.div
        className="py-16 px-4 bg-amber-50"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-6">Our Core Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 text-black lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={valueItem}
                whileHover={{ y: -10 }}
                className={`${value.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center`}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}