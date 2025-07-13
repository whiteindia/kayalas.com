import { LogoCarousel } from "@/components/ui/logo-carousel";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="flex flex-col justify-between relative min-h-[calc(100vh-64px)]">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
            {/* Subtitle */}
            <div className="mb-6">
              <span className="inline-block text-college-gold font-medium text-sm tracking-wider uppercase border border-college-gold/20 px-4 py-2 rounded-full">
                Education & Excellence
              </span>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-white tracking-tight capitalize mb-6">
                Welcome to Excellence
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>University
              </h1>
            </div>

            {/* Description */}
            <div className="mb-12 max-w-3xl mx-auto px-4">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-gray-300 text-center">
                Excellence University is a premier institution dedicated to
                fostering academic growth, innovation, and value creation across
                diverse disciplines. Based in India, we leverage our deep
                educational expertise and extensive network to partner with
                students and drive exceptional academic results.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-college-gold text-black font-medium text-base px-8 py-4 rounded-lg hover:bg-college-gold-dark transition-colors duration-300 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="flex-shrink-0 pb-8">
          <div className="w-full">
            <div className="text-center mb-8">
              <h3 className="text-lg text-gray-400 font-medium">
                Our Academic Partners & Industry Collaborations
              </h3>
            </div>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
