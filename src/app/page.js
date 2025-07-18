"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import thumbnail from "../../public/images/thumbnail.png";

import skyline1 from "../../public/images/lonavla-kalyani-outside.jpg";
import kalyaniBed from "../../public/images/lonavla-kalyani-bed.jpg";
import kalyaniHall from "../../public/images/lonavla-kalyani-hall.jpg";
import kalyaniSwim from "../../public/images/lonavla-kalyani-swim.jpg";

import skyline2 from "../../public/images/lonavla-Tranquil-hall.jpg";
import TranquilBed from "../../public/images/lonavla-Tranquil-bed.jpg";
import TranquilGarden from "../../public/images/lonavla-Tranquil-garden.jpg";
import TranquilSwim from "../../public/images/lonavla-Tranquil-swim.jpg";

import skyline3 from "../../public/images/lonavla-Sky-outside.jpg";
import SkyBed from "../../public/images/lonavla-Sky-bed.jpg";
import SkyOutsideSecond from "../../public/images/lonavla-Sky-outside2.jpg";
import SkySwim from "../../public/images/lonavla-Sky-swim.jpg";

import cozyCabin1 from "../../public/images/igatpuri-outside-nek.jpg";
import nekBed from "../../public/images/igatpuri-bed-nek.jpg";
import nekSwim from "../../public/images/igatpuri-swim-nek.jpg";
import nekSwim2 from "../../public/images/igatpuri-swim2-nek.jpg";

import cozyCabin2 from "../../public/images/igatpuri-Dolce-outside.jpg";
import DolceHall from "../../public/images/igatpuri-Dolce-hall.jpg";
import DolceBed from "../../public/images/igatpuri-Dolce-bed.jpg";
import Dolceswim from "../../public/images/igatpuri-Dolce-swim.jpg";

import DostiOutside from "../../public/images/karjat-dusti-outisde.jpg";
import Dostibed from "../../public/images/karjat-dusti-bed.jpg";
import Dostiswim from "../../public/images/karjat-dusti-swim.jpg";
import Dostifun from "../../public/images/karjat-dusti-fun.jpg";

import clubNeembadaOutside from "../../public/images/karjat-Club-Neembada-outside.jpg";
import clubNeembadahall from "../../public/images/karjat-Club-Neembada-hall.jpg";
import clubNeembadaswim from "../../public/images/karjat-Club-Neembada-swim.jpg";
import clubNeembadadfun from "../../public/images/karjat-Club-Neembada-funside.jpg";

import cozyCabin3 from "../../public/images/igatpuri-raj-outside.jpg";
import Raajbed from "../../public/images/igatpuri-Raaj-bed.jpg";
import RaajHall from "../../public/images/igatpuri-Raaj-hall.jpg";
import RaajBed2 from "../../public/images/igatpuri-Raaj-bed2.jpg";

import cozyCabin4 from "../../public/images/igatpuri-Villa 20-outside.jpg";
import VillaBed from "../../public/images/igatpuri-Villa 20-bed.jpg";
import VillaHall from "../../public/images/igatpuri-Villa 20-hall.jpg";
import VillaSwim from "../../public/images/igatpuri-Villa 20-swim.jpg";

import gardenView1 from "../../public/images/karjat-hillside-outisde.jpg";
import HillSideBed from "../../public/images/karjat-hillside-bed.jpg";
import HillSideHall from "../../public/images/karjat-hillside-hall.jpg";
import HillSideview from "../../public/images/karjat-hillside-view.jpg";

import gardenView2 from "../../public/images/Karjat-Retreat-outside.jpg";
import Retreatgarden from "../../public/images/Karjat-Retreat-garden.jpg";
import Retreatview from "../../public/images/Karjat-Retreat-swim.jpg";
import Retreathall from "../../public/images/Karjat-Retreat-hall.jpg";

import gardenView3 from "../../public/images/lonavla-varunda-outside.jpg";
import varundaBed from "../../public/images/lonavla-varunda-bed.jpg";
import varundaHall from "../../public/images/lonavla-varunda-hall.jpg";
import varundaSwim from "../../public/images/lonavla-varunda-swim.jpg";

import sunset1 from "../../public/images/lonavla-Amey-outside.jpg";
import Ameybed from "../../public/images/lonavla-Amey-bed.jpg";
import Ameyhall from "../../public/images/lonavla-Amey-hall.jpg";
import Ameybed2 from "../../public/images/lonavla-Amey-bed2.jpg";


import sunset2 from "../../public/images/lonavla-Gold-outside.jpg";
import Goldbed from "../../public/images/lonavla-Gold-outside.jpg";
import Goldhall from "../../public/images/lonavla-Gold-outside.jpg";
import Goldbed2 from "../../public/images/lonavla-Gold-outside.jpg";

import malharOutside from "../../public/images/lonavla-malhar-outside.jpg";
import malharbed from "../../public/images/lonavla-malhar-bed.jpg";
import malharhall from "../../public/images/lonavla-malhar-hall.jpg";
import malharview from "../../public/images/lonavla-malhar-view.jpg";

import FDOutside from "../../public/images/lonavla-FD-outside.jpg";
import FDbed from "../../public/images/lonavla-FD-bed.jpg";
import FDhall from "../../public/images/lonavla-FD-hall.jpg";
import FDswim from "../../public/images/lonavla-FD-swim.jpg";

// import RoomImageSlider from "./services/RoomImageSlider";
// import img from "../../public/images/thumbnail.png"

import { FiWifi, FiX } from "react-icons/fi";
import {
  MdPool,
  MdFreeBreakfast,
  MdDinnerDining,
  MdNaturePeople,
  MdEco,
  MdLocationOn,
} from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaParking,
  FaConciergeBell,
  FaHandsHelping,
  FaTag,
} from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [sliderIndex, setSliderIndex] = useState(0);

const handlePrev = () => {
  if (!selectedRoom?.images) return;
  setSliderIndex((prev) =>
    prev === 0 ? selectedRoom.images.length - 1 : prev - 1
  );
};

const handleNext = () => {
  if (!selectedRoom?.images) return;
  setSliderIndex((prev) =>
    prev === selectedRoom.images.length - 1 ? 0 : prev + 1
  );
};
// ...existing code...

// When opening modal, reset sliderIndex:
const openModal = (room) => {
  setSelectedRoom(room);
  setSliderIndex(0); // Reset slider to first image
  setIsModalOpen(true);
  document.body.style.overflow = "hidden";
};

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const facilities = [
    {
      name: "Free Wi-Fi",
      icon: <FiWifi size={30} className="text-primary mb-2" />,
    },
    {
      name: "Pool",
      icon: <MdPool size={30} className="text-primary mb-2" />,
    },
    // {
    //   name: "Breakfast",
    //   icon: <MdFreeBreakfast size={30} className="text-primary mb-2" />,
    // },
    // {
    //   name: "Dinner",
    //   icon: <MdDinnerDining size={30} className="text-primary mb-2" />,
    // },
    {
      name: "24/7 Service",
      icon: <FaConciergeBell size={30} className="text-primary mb-2" />,
    },
    {
      name: "Car Parking",
      icon: <FaParking size={30} className="text-primary mb-2" />,
    },
    {
      name: "Nature View",
      icon: <MdNaturePeople size={30} className="text-primary mb-2" />,
    },
  ];

  const roomType = [
    {
      name: "Nek Villa",
      img: cozyCabin1,
       images: [nekBed, nekSwim, nekSwim2],
      type: "Igatpuri",
      // bed: "Compact King Bed with Forest View Balcony",
      // availab,ility: 2,
      price: "18,000",
      description:
        "A luxurious escape nestled in the forest, featuring a balcony with breathtaking views.",
    },
    {
      name: "Dolce Villa",
      img: cozyCabin2,
       images: [DolceHall, DolceBed, Dolceswim],
      type: "Igatpuri",
      // bed: "Queen Bed with Indoor Fireplace",
      // availability: 2,
      price: "26,000",
      description:
        "Enjoy peaceful moments by the fire in this cabin ideal for romantic getaways.",
    },
    {
      name: "Raaj Villa",
      img: cozyCabin3,
       images: [Raajbed, RaajHall, RaajBed2],
      type: "Igatpuri",
      // bed: "King Bed with Skylight Roof",
      // availability: 3,
      price: "15,000",
      description:
        "Fall asleep under the stars with skylight views from the comfort of your king bed.",
    },
    {
      name: "Villa 20",
      img: cozyCabin4,
      images: [VillaBed, VillaHall, VillaSwim],
      type: "Igatpuri",
      // bed: "Luxury Queen Bed with Garden Patio",
      // availability: 5,
      price: "15,000",
      description:
        "Step into elegance with a private patio perfect for relaxation and morning coffee.",
    },
    {
      name: "Club NeemBada Villa",
      img: clubNeembadaOutside,
       images: [clubNeembadahall, clubNeembadaswim, clubNeembadadfun],
      type: "Karjat",
      // bed: "King Bed with Skylight Roof",
      // availability: 3,
      price: "15,000",
      description:
        "Fall asleep under the stars with skylight views from the comfort of your king bed.",
    },
    {
      name: "Dosti Villa",
      img: DostiOutside,
       images: [Dostibed, Dostiswim, Dostifun],
      type: "Karjat",
      // bed: "King Bed with Skylight Roof",
      // availability: 3,
      price: "14,000",
      description:
        "Fall asleep under the stars with skylight views from the comfort of your king bed.",
    },
    {
      name: "Hill Side Villa",
      img: gardenView1,
      images: [HillSideBed, HillSideHall, HillSideview],
      type: "Karjat",
      // bed: "Spacious King Bed with Private Garden Access",
      // availability: 3,
      price: "9,000",
      description:
        "Wake up to lush green scenery and unwind in your own private garden area.",
    },
    {
      name: "Retreat Villa",
      img: gardenView2,
      images: [Retreatgarden, Retreatview, Retreathall],
      type: "Karjat",
      // bed: "Deluxe Double Bed with Nature View",
      // availability: 4,
      price: "15,000",
      description:
        "Surround yourself with nature in this serene garden-view room built for comfort.",
    },
    {
      name: "Vrunda Villa",
      img: gardenView3,
      images: [varundaBed, varundaHall, varundaSwim],
      type: "Lonavala",
      // bed: "Panoramic Queen Bed Facing Greenery",
      // availability: 3,
      price: "15,000",
      description:
        "Immerse in panoramic garden views with modern decor and a peaceful atmosphere.",
    },
    {
      name: "Kalyani Villa",
      img: skyline1,
      images: [kalyaniBed, kalyaniHall, kalyaniSwim],
      type: "Lonavala",
      // bed: "King Bed with Rooftop City View",
      // availability: 2,
      price: "14,000",
      description:
        "An upscale suite with dazzling rooftop views of the city skyline by day and night.",
    },
    {
      name: "Tranquil Villa",
      img: skyline2,
      images: [TranquilBed, TranquilGarden, TranquilSwim],
      type: "Lonavala",
      // bed: "Queen Bed with Private Terrace",
      // availability: 2,
      price: "9,000",
      description:
        "Unwind on your private terrace while taking in the serene skyline ambiance.",
    },
    {
      name: "Sky Villa",
      img: skyline3,
      images: [SkyBed, SkyOutsideSecond, SkySwim],
      type: "Lonavala",
      // bed: "Skyview Double Bed with Modern Decor",
      // availability: 3,
      price: "9,000",
      description:
        "Stylish and spacious, offering wide skyline views and contemporary elegance.",
    },
    {
      name: "Amey Villa",
      img: sunset1,
      images: [Ameybed, Ameyhall, Ameybed2],
      type: "Lonavala",
      // bed: "Double Bed with Sunset-Facing Balcony",
      // availability: 2,
      price: "16,000",
      description:
        "Perfect for sunset lovers, this room features an open balcony with golden hour views.",
    },
    {
      name: "Gold Villa",
      img: sunset2,
      images: [Goldbed, Goldhall, Goldbed2],
      type: "Lonavala",
      // bed: "Premium King Bed with Sea View",
      // availability: 2,
      price: "18,500 ",
      description:
        "Indulge in panoramic sea views and soothing sunsets from your luxurious suite.",
    },
    {
      name: "Malhar Villa",
      img: malharOutside,
      images: [malharbed, malharhall, malharview],
      type: "Lonavala",
      // bed: "Premium King Bed with Sea View",
      // availability: 2,
      price: "12,000 ",
      description:
        "Indulge in panoramic sea views and soothing sunsets from your luxurious suite.",
    },
    {
      name: "FD Villa",
      img: FDOutside,
      images: [FDbed, FDhall, FDswim],
      type: "Lonavala",
      // bed: "Premium King Bed with Sea View",
      // availability: 2,
      price: "12,000 ",
      description:
        "Indulge in panoramic sea views and soothing sunsets from your luxurious suite.",
    },
  ];

  const filteredRooms =
    activeTab === "all"
      ? roomType
      : roomType.filter((room) => room.type === activeTab);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Igatpuri Villa", value: "Igatpuri" },
    { label: "Karjat Villa", value: "Karjat" },
    { label: "Lonavala Villa", value: "Lonavala" },
    // { label: "Garden View", value: "garden" },
    // { label: "Cozy Cabin", value: "cozy" },
  ];

  const features = [
    {
      title: "Eco-friendly stay",
      bg: "bg-primary/20",
      icon: <MdEco size={28} />,
    },
    {
      title: "Personalized services",
      bg: "bg-primary/30",
      icon: <FaHandsHelping size={28} />,
    },
    {
      title: "Best price guarantee",
      bg: "bg-primary/40",
      icon: <FaTag size={28} />,
    },
    {
      title: "Prime location",
      bg: "bg-primary/50",
      icon: <MdLocationOn size={28} />,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] sm:h-[70vh] min-h-[400px]">
        <Image
          src={thumbnail}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Text  Overlay in the center of the image */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center flex-col gap-5">
          {/* Big heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4"
          >
            Discover comfort and relaxation Villa's
          </motion.h1>

          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 mt-12 w-full max-w-xl p-3" >
            <input type="text" placeholder="Search for a room"
              className="w-full p-2 rounded-full bg-white/50 text-black outline-none hover:bg-white/70 focus:bg-white 
              focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 text-sm md:text-base" />

            <button className="bg-primary text-white px-5 py-2 rounded-full cursor-pointer hover:bg-primary/70 hover:scale-107 hover:shadow-xl transition-all duration-300">
              Explore
            </button>

          </motion.div> */}

          {/* Small heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-sm sm:text-base mt-8 text-center px-2"
          >
            Book your stay with us and enjoy a comfortable and relaxing
            experience.
          </motion.h2>
        </div>
      </div>

      {/* Facilities Section */}
<div className="p-6 bg-gray-400">
  {/* mapped facilities */}
  <div className="w-full flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
      {facilities.map((facility, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer"
        >
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            {facility.icon}
          </motion.div>
          <p className="text-sm font-medium text-gray-800">
            {facility.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>


{/* Room Type Section */}
<div className="p-3 bg-gray-100">
  <div className="m-5">
    <div className="my-6">
      <h1 className="text-4xl font-bold text-primary">
        <strong>Discover</strong> Villa's
      </h1>
    </div>

    {/* Tabs */}
    <div className="flex gap-3 mb-8 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`px-4 py-2 rounded-full font-medium ${
            activeTab === tab.value
              ? "bg-primary text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-primary/20"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Rooms */}
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredRooms.map((room, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          className="relative group bg-secondary/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          onClick={() => openModal(room)}
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={room.img}
              alt={room.name}
              fill
              className="object-cover transition-all duration-500 group-hover:blur-sm"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-4 text-center">
              <p className="text-sm mb-2">{room.name}</p>
              <p className="text-lg">{room.price}</p>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{room.name}</h2>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Room Details Modal */}
  <AnimatePresence>
    {isModalOpen && selectedRoom && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors"
          >
            <FiX size={24} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Gallery */}
            <div className="relative h-64 lg:h-full">
                    <div className="relative h-64 lg:h-full flex items-center justify-center">
  {selectedRoom.images && selectedRoom.images.length > 0 && (
    <>
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-400 rounded-full p-2 z-10 hover:bg-gray-700 cursor-pointer"
      >
        {"<"}
      </button>
      <Image
        src={selectedRoom.images[sliderIndex]}
        alt={selectedRoom.name}
        fill
        className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
      />
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400 rounded-full p-2 z-10 hover:bg-gray-700 cursor-pointer"
      >
        {">"}
      </button>
    </>
  )}
</div>
                  </div>

            {/* Room Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedRoom.name}
              </h2>
              <p className="text-primary text-xl font-semibold ">
                {selectedRoom.price} / 24 Hour
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {selectedRoom.bed}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{selectedRoom.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-600 text-lg mb-3">Facilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {facilities.slice(0, 6).map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="text-primary">{facility.icon}</div>
                      <span className="text-gray-700">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/booking">
                  <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium cursor-pointer">
                    Book Now
                  </button>
                </a>
                <a href="/contact">
                  <button className="flex-1 border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary/10 transition-colors font-medium cursor-pointer">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</div>


      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
        className="mx-auto py-12 bg-gray-400"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl font-bold mb-8 text-center text-primary"
        >
          Why Choose Villa's?
        </motion.h2>

        <div className="flex flex-col gap-3 max-w-4xl m-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 1, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="m-4 lg:w-full bg-primary"
              whileHover={{ scaleX: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className={`${feature.bg} p-6 shadow-md flex items-center gap-4 `}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
