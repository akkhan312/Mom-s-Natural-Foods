// src/components/HeroSlider.jsx
import { useEffect, useState } from "react";
import img1 from "../assets/hero.jpg";
import img2 from "../assets/hero2.jpg";

const images = [img1, img2];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-green-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
