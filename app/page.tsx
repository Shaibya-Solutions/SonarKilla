"use client";

import { Button } from "@/components/ui/button";
import TourCard from "@/components/TourCard";
import { toursData, TestimonialData, photoGallery } from "@/data/data";
import { Menu, Phone, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function RajasthanTourismPage() {
  const [index, setIndex] = useState(0); // testimonial index
  const [heroImageIndex, setHeroImageIndex] = useState(0); // hero background slider index
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBookNowModel, setShowBookNowModel] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav") && !target.closest("button")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Change the testimonial every 5 seconds
    const testimonialInterval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  // Hero background images (ensure these files exist in /public)
  const heroImages = useRef([
    "/herosection-bg.jpg",
    "/rajasthan-desert-sunset-landscape.jpg",
    "/udaipur-city-palace-lake-view-rajasthan.jpg",
    "/camel-safari-thar-desert-rajasthan-sunset.jpg",
  ]).current;

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, [heroImages.length]);

  // refs for sections
  const heroRef = useRef<HTMLElement | null>(null);
  const tourRef = useRef<HTMLElement | null>(null);
  const filmRef = useRef<HTMLElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);
  const testimonialRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = [
      heroRef.current,
      tourRef.current,
      filmRef.current,
      storyRef.current,
      testimonialRef.current,
      galleryRef.current,
      footerRef.current,
    ].filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // trigger once
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='absolute top-0 left-0 right-0 z-50 bg-black/10'>
        <div className='container max-w-8xl mx-auto px-4 sm:px-6 lg:px-20'>
          <div className='flex h-20 items-center justify-between'>
            <div className='mt-14 relative flex flex-col items-center justify-center'>
              <div className=''>
                <Image
                  src='logo.png'
                  alt='Logo'
                  width={48}
                  height={48}
                  className='w-24 sm:w-32'
                />
              </div>
              <div className='font-["Cinzel"] text-white flex flex-col justify-center items-center'>
                <div className='text-lg font-semibold'>Sonar Killa</div>
                <div className='text-xs opacity-90'>TOURS AND TRAVELS</div>
              </div>
            </div>
            <div></div>
            <nav className='hidden md:flex items-center space-x-8 '>
              <Link
                href='#services'
                className='text-white hover:text-yellow-300 transition-colors text-sm font-medium'
              >
                SERVICES
              </Link>
              <Link
                href='#story'
                className='text-white hover:text-yellow-300 transition-colors text-sm font-medium'
              >
                OUR STORY
              </Link>
              <Link
                href='#contact'
                className='text-white hover:text-yellow-300 transition-colors text-sm font-medium'
              >
                CONTACT US
              </Link>
              <Link
                href='#gallery'
                className='text-white hover:text-yellow-300 transition-colors text-sm font-medium'
              >
                GALLERY
              </Link>
              <Button
                onClick={() => setShowBookNowModel(true)}
                className='bg-white hover:bg-orange-600 text-black border-0 rounded-full px-6'
              >
                BOOK NOW
              </Button>
            </nav>
            {/* Mobile Menu Button */}
            {dropdownOpen && (
              <div className='absolute top-20 right-4 bg-white rounded-lg shadow-lg py-2 w-32 flex flex-col'>
                <Link
                  href='#services'
                  className='px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                  onClick={() => setDropdownOpen(false)}
                >
                  SERVICES
                </Link>
                <Link
                  href='#story'
                  className='px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                  onClick={() => setDropdownOpen(false)}
                >
                  OUR STORY
                </Link>
                <Link
                  href='#contact'
                  className='px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                  onClick={() => setDropdownOpen(false)}
                >
                  CONTACT US
                </Link>
                <Link
                  href='#gallery'
                  className='px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                  onClick={() => setDropdownOpen(false)}
                >
                  GALLERY
                </Link>
                <Button className='m-2 bg-orange-400 hover:bg-orange-600 text-white rounded-lg opacity-85 px-6'>
                  BOOK NOW
                </Button>
              </div>
            )}
            <Button
              variant='ghost'
              size='sm'
              className='md:hidden text-white hover:bg-white/20'
              onClick={toggleDropdown}
            >
              <Menu className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Curved Design */}
      <div
        style={{
          backgroundImage: "url('checker-bg-1.jpg')",
        }}
        className='bg-cover'
      >
        <section
          ref={heroRef as React.RefObject<HTMLElement>}
          className='hero-section relative h-screen overflow-hidden reveal-section'
        >
          {/* Background slider */}
          <div className='absolute inset-0'>
            {heroImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt='Rajasthan travel highlight'
                fill
                priority={i === 0}
                className={`object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
                  i === heroImageIndex ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== heroImageIndex}
              />
            ))}
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/20 pointer-events-none' />
          </div>

          {/* Curved bottom
        <div
          className='absolute bottom-0 left-0 right-0 h-32 bg-white'
          style={{
            clipPath: "ellipse(200% 100% at 50% 100%)",
          }}
        ></div> */}

          <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 h-full flex items-center'>
            <div>
              <div className='relative inline-block mt-16'>
                {/* shadow layer */}
                <h1
                  className='absolute top-0 left-0 text-4xl sm:text-5xl lg:text-7xl font-["Raleway"] mb-6 leading-tight font-extrabold text-black opacity-40'
                  style={{
                    transform: "translate(4px, 4px)", // shadow offset
                    filter: "blur(2px)", // soften edges
                  }}
                  aria-hidden='true' // hide from screen readers
                >
                  TRAVEL LIKE ROYALS,
                  <br />
                  <span className='text-3xl sm:text-4xl lg:text-6xl'>
                    LIVE THE LEGACY
                  </span>
                </h1>

                {/* gradient text */}
                <h1 className='relative text-4xl sm:text-5xl lg:text-7xl font-["Raleway"] mb-6 leading-tight font-extrabold bg-gradient-to-r from-[#f7e1dc] via-[#f7f0ee] to-[#f9cca9] bg-clip-text text-transparent'>
                  TRAVEL LIKE ROYALS,
                  <br />
                  <span className='text-3xl sm:text-4xl lg:text-6xl'>
                    LIVE THE LEGACY
                  </span>
                </h1>
              </div>

              <p className='text-lg sm:text-xl mb-8  text-white opacity-90 max-w-lg drop-shadow-md'>
                Explore ancient forts and hidden gems of Rajasthan with our
                curated experiences designed for comfort and luxury.
              </p>
              {/* <Button className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full shadow-lg'>
              Explore Packages
            </Button> */}
            </div>
          </div>

          {/* Silhouettes */}
          {/* <div className='absolute bottom-20 right-10 opacity-80'>
          <Image
            src='/silhouettes-of-rajasthani-musicians-with-tradition.jpg'
            alt='Musicians Silhouette'
            width={300}
            height={200}
            className='object-contain drop-shadow-xl'
          />
        </div> */}
        </section>
      </div>
      {/* Featured Tour Packages */}
      <section
        ref={tourRef as React.RefObject<HTMLElement>}
        className='py-20 bg-gray-50 reveal-section'
        style={{
          backgroundImage: "url('checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-normal font-["Open Sans"] text-gray-800 mb-4'>
              Featured Tour Packages
            </h2>
          </div>

          <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Classic Rajasthan Tour */}
            {toursData.map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Film Strip Gallery */}
      <section
        ref={filmRef as React.RefObject<HTMLElement>}
        className='pb-16 bg-white reveal-section'
        style={{
          backgroundImage: "url('checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='container mx-auto'>
          <div className='infinite-scroll-wrapper min-h-[700px]'>
            <div className='infinite-scroll-content bg-black p-4 w-max rounded-lg transform -rotate-3 shadow-2xl'>
              {/* Duplicate the whole image set */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className='flex gap-4'>
                  <Image
                    src='/rajasthan-desert-sunset-landscape.jpg'
                    alt='Desert Sunset'
                    width={450}
                    height={1000}
                    className='flex-shrink-0 rounded-2xl object-cover'
                  />
                  <Image
                    src='/hawa-mahal-jaipur-pink-palace-architecture.jpg'
                    alt='Hawa Mahal'
                    width={450}
                    height={1000}
                    className='flex-shrink-0 rounded-2xl object-cover'
                  />
                  <Image
                    src='/udaipur-city-palace-lake-view-rajasthan.jpg'
                    alt='Udaipur Palace'
                    width={450}
                    height={1000}
                    className='flex-shrink-0 rounded-2xl object-cover'
                  />
                  <Image
                    src='/camel-safari-thar-desert-rajasthan-sunset.jpg'
                    alt='Camel Safari'
                    width={450}
                    height={1000}
                    className='flex-shrink-0 rounded-2xl object-cover'
                  />
                  <Image
                    src='/rajasthani-folk-dancers-traditional-costume-perfor.jpg'
                    alt='Folk Dancers'
                    width={450}
                    height={1000}
                    className='flex-shrink-0 rounded-2xl object-cover'
                  />
                  <Image
                    src='/rajasthani-palace-courtyard-architecture.jpg'
                    alt='Palace Courtyard'
                    width={450}
                    height={1000}
                    className='flex-shrink-0 rounded-2xl object-cover'
                  />
                  <Image
                    src='/rajasthani-elephant-decorated-for-festival.jpg'
                    alt='Decorated Elephant'
                    width={450}
                    height={1000}
                    className='flex-shrink-0 rounded-2xl object-cover mr-4'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section
        id='story'
        ref={storyRef as React.RefObject<HTMLElement>}
        className='py-20 reveal-section'
        style={{
          backgroundImage: "url('checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='container mx-auto max-w-7xl'>
          <div
            className='relative border-2 rounded-3xl overflow-hidden min-h-[450px] shadow-2xl flex flex-col md:flex-row pb-20 md:pb-0 items-center'
            style={{
              backgroundImage: "url('man-on-camel.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              src='rajasthan-tourism.png'
              alt='Rajasthan Desert Story'
              width={450}
              height={450}
              className='object-cover'
            />
            <div
              className='relative z-10 p-4 flex flex-col gap-4 text-start text-white'
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              <h2 className='text-5xl font-bold mb-4'>
                <span className='text-orange-200'>20 YEARS</span> OF STORY
                TELLING
              </h2>
              <p className='text-4xl font-semibold opacity-90'>
                BACKED BY{" "}
                <span className='text-orange-200'>RAJASTHAN TOURISM</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        ref={testimonialRef as React.RefObject<HTMLElement>}
        className='relative py-20 bg-white reveal-section'
        style={{
          backgroundImage: "url('checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='max-w-7xl mx-auto text-center'>
          {TestimonialData.map((testimonial, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center justify-between lg:px-8 lg:py-12 xl:py-24 xl:px-16 rounded-2xl border-2 bg-gray-200 ${
                index === i ? "active" : "hidden"
              }`}
            >
              {/* <div className='w-16 h-1 bg-orange-500 mr-4'></div> */}
              <div className='py-10 px-5 flex flex-col items-center justify-center gap-4'>
                <blockquote className='max-w-2xl text-2xl lg:text-3xl font-light text-gray-700 italic'>
                  "{testimonial.feedback}"
                </blockquote>
                {/* <div className='w-16 h-1 bg-orange-500 ml-4'></div> */}

                <p className='text-gray-600 font-medium'>
                  - {testimonial.name}
                </p>
              </div>
              <div className=''>
                <Image
                  src={testimonial.image}
                  alt='Jaipur Architecture'
                  width={600}
                  height={300}
                  className='w-[350px] sm:w-[500px] h-[300px] sm:h-[400px] rounded-xl shadow-lg'
                />
              </div>
            </div>
          ))}
        </div>
        <div className='hidden sm:absolute left-2 lg:left-10 right-2 lg:right-10 inset-0 sm:flex items-center justify-between'>
          <div
            className=''
            onClick={() =>
              setIndex(index === 0 ? TestimonialData.length - 1 : index - 1)
            }
          >
            <ArrowLeft className='h-20 w-20 text-orange-400 opacity-40' />
          </div>
          <div
            className=''
            onClick={() =>
              setIndex(index === TestimonialData.length - 1 ? 0 : index + 1)
            }
          >
            <ArrowLeft className='h-20 w-20 text-orange-400 opacity-40 rotate-180' />
          </div>
        </div>
        <div className='absolute sm:bottom-30 w-full'>
          <div className='flex justify-center mt-8 space-x-2'>
            {TestimonialData.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === i ? "bg-orange-500" : "bg-gray-400"
                }`}
                onClick={() => setIndex(i)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section
        id='gallery'
        ref={galleryRef as React.RefObject<HTMLElement>}
        className='py-20 bg-gray-50 reveal-section'
        style={{
          backgroundImage: "url('checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
          {photoGallery.map((photo, index) => (
            <div key={index} className='p-2'>
              <Image
                src={photo}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
                className='w-full h-56 object-cover rounded-sm hover:scale-105 transition-transform'
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer section */}
      <footer
        ref={footerRef as React.RefObject<HTMLElement>}
        style={{
          backgroundImage: "url('checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className='py-10 reveal-section'
      >
        <div
          className='max-w-7xl mx-auto rounded-4xl flex flex-col'
          style={{
            backgroundImage: "url('footer-pic.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className='flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start px-6 py-10 rounded-t-3xl'
            id='contact'
          >
            <div
              className='text-white'
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              <div className='text-4xl sm:text-5xl md:text-7xl mb-4'>
                Plan Your Dream Holiday <br /> Get in Touch with Us
              </div>
              <p className='text-lg mt-8'>
                Looking to explore new destinations your way? <br />
                Fill out the form below and our travel experts will craft a
                personalized itinerary just for you.
              </p>
            </div>
            <form className='bg-white text-black p-6 rounded-xl shadow-lg flex flex-col gap-2 w-full max-w-sm'>
              <label>Full Name*</label>
              <input
                type='text'
                placeholder='Your full name'
                required
                className='border border-gray-300 p-2 rounded-md'
              />
              <label className='mt-2'>Email Address*</label>
              <input
                type='email'
                placeholder='Your email address'
                required
                className='border border-gray-300 p-2 rounded-md'
              />
              <label className='mt-2'>Phone Number*</label>
              <input
                type='tel'
                placeholder='Your phone number'
                required
                className='border border-gray-300 p-2 rounded-md'
              />
              <label className='mt-2'>Message</label>
              <textarea
                rows={2}
                placeholder='Your message'
                className='border border-gray-300 p-2 rounded-md'
              ></textarea>
              <Button className='mt-2 bg-black text-white rounded-lg opacity-85 px-6'>
                Submit
              </Button>
            </form>
          </div>
          <div className='bg-black/70 rounded-2xl text-white m-2 p-6 sm:m-6 flex flex-col md:flex-row justify-between items-center'>
            <span className='text-sm'>
              © {new Date().getFullYear()} Sonarkilla. All rights reserved.
            </span>
            <div className='flex flex-col md:flex-row items-start justify-between gap-4 mt-4 md:mt-0'>
              <div className='flex items-center text-sm lg:text-lg'>
                <Phone className='inline-block mr-2' />
                <span className='mr-2'>+91</span>
                <span className='md:mr-4'>9610541122, 8319350163</span>
              </div>
              <div className='flex items-center text-sm lg:text-lg'>
                <Mail className='inline-block mr-2' />
                <span className='md:mr-4 flex flex-wrap items-center'>
                  <span>sonarkillatours</span>
                  <span>andtravels@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
