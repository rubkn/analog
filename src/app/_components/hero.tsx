"use client";

/* import { useEffect, useState } from "react";
import paragraphs from "~/app/utils/paragraphs"; */

export function Hero() {
  /* const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Effect to update the index every second
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      // Wait for the transition to complete
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        setIsVisible(true);
      }, 500); // Adjust delay time if necessary
    }, 1000);
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [paragraphs.length]);

  const ending = "Join a community that dares to see the world differently.";
  const currentParagraph = `${paragraphs[currentIndex]}. ${ending}`; */

  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          gllry
        </h1>
        <p className="mb-8 text-balance text-lg font-normal text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Rebel against the ordinary. Share your striking photos and join a
          community that dares to see the world differently.
          {/* <span
            className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {paragraphs[currentIndex]}
          </span>
          <span> {ending}</span> */}
        </p>
      </div>
    </header>
  );
}
