import { useEffect, useState } from "react";

interface Logo {
  name: string;
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    name: "IIT Delhi",
    src: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
    alt: "IIT Delhi",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
  },
  {
    name: "Meta",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    alt: "Meta",
  },
];

export function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / logos.length)}%)`,
          }}
        >
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-32 sm:w-40 lg:w-44 mr-4 sm:mr-6 last:mr-0"
            >
              <figure className="text-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="inline max-w-full h-8 sm:h-10 lg:h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
