import { useState } from "react";
import Image from "next/image";

export default function ImgSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-64 lg:h-full">
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded"
      >
        &#8592;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded"
      >
        &#8594;
      </button>
    </div>
  );
}
