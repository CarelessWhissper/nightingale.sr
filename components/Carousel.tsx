"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Autoplay
  useEffect(() => {
    if (!embla) return;
    let timer: any;

    const autoplay = () => {
      timer = setInterval(() => {
        if (embla) embla.scrollNext();
      }, 3000);
    };

    autoplay();
    return () => clearInterval(timer);
  }, [embla]);

  const slides = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

  return (
    <section className="py-20">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33%]"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200">
                <img
                  src={src}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
