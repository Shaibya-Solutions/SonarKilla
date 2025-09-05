"use client";

import { Button } from "@/components/ui/button";
import TourCard from "@/components/TourCard";
import { toursData } from "@/data/data";
import {
  Menu,
  Crown,
  Calendar,
  Users,
  Phone,
  Mail,
  MapIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RajasthanTourismPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='absolute top-0 left-0 right-0 z-50 bg-black/10'>
        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>
            <div className='relative flex flex-col items-center space-x-3 border-2 justify-center'>
              <div className='w-48 h-auto absolute top-[-40px]'>
                <Image
                  src='/figma-added/logo.png'
                  alt='Logo'
                  width={48}
                  height={48}
                  className='w-48 object-contain'
                />
              </div>
              <div className='font-["Cinzel"] text-white absolute top-10 -right-18 flex flex-col justify-center items-center w-40'>
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
              <Button className='bg-white hover:bg-orange-600 text-black border-0 rounded-full px-6'>
                BOOK NOW
              </Button>
            </nav>

            <Button
              variant='ghost'
              size='sm'
              className='md:hidden text-white hover:bg-white/20'
            >
              <Menu className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Curved Design */}
      <div
        style={{
          backgroundImage: "url('figma-added/checker-bg-1.jpg')",
        }}
        className='bg-cover'
      >
        <section
          className='relative h-screen overflow-hidden'
          style={{
            /* bottom edge curves upward in the middle */
            clipPath: "ellipse(85% 100% at 50% 0%)",
          }}
        >
          <div className=''>
            <Image
              src='/figma-added/herosection-bg.jpg'
              alt='Rajasthan Desert Sunset'
              fill
              className='object-cover w-full h-full'
            />
            {/* Dark overlay for better text contrast */}
            <div className='absolute inset-0 bg-black/20'></div>
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
                  className='absolute top-0 left-0 text-5xl lg:text-7xl font-["Raleway"] mb-6 leading-tight font-extrabold text-black opacity-40'
                  style={{
                    transform: "translate(4px, 4px)", // shadow offset
                    filter: "blur(2px)", // soften edges
                  }}
                  aria-hidden='true' // hide from screen readers
                >
                  TRAVEL LIKE ROYALS,
                  <br />
                  <span className='text-6xl'>LIVE THE LEGACY</span>
                </h1>

                {/* gradient text */}
                <h1 className='relative text-5xl lg:text-7xl font-["Raleway"] mb-6 leading-tight font-extrabold bg-gradient-to-r from-[#f7e1dc] via-[#f7f0ee] to-[#f9cca9] bg-clip-text text-transparent'>
                  TRAVEL LIKE ROYALS,
                  <br />
                  <span className='text-6xl'>LIVE THE LEGACY</span>
                </h1>
              </div>

              <p className='text-xl mb-8  text-white opacity-90 max-w-lg drop-shadow-md'>
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
        className='py-20 bg-gray-50'
        style={{
          backgroundImage: "url('figma-added/checker-bg-1.jpg')",
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
        className='pb-16 bg-white'
        style={{
          backgroundImage: "url('figma-added/checker-bg-1.jpg')",
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
        className='py-20'
        style={{
          backgroundImage: "url('figma-added/checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='container mx-auto max-w-7xl'>
          <div
            className='relative border-2 rounded-3xl overflow-hidden min-h-[450px] shadow-2xl flex items-center justify-around'
            style={{
              backgroundImage: "url('figma-added/man-on-camel.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              src='/figma-added/rajasthan-tourism.png'
              alt='Rajasthan Desert Story'
              width={500}
              height={450}
              className='object-cover'
            />
            <div
              className='relative z-10 p-4 text-start text-white'
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
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex items-center justify-center mb-8'>
              <div className='w-16 h-1 bg-orange-500 mr-4'></div>
              <blockquote className='text-2xl lg:text-3xl font-light text-gray-700 italic'>
                "Jaipur is literally dressed with all the
                <br />
                rich culture and captivating history"
              </blockquote>
              <div className='w-16 h-1 bg-orange-500 ml-4'></div>
            </div>
            <p className='text-gray-600 font-medium'>- TANISHKA</p>

            <div className='mt-12'>
              <Image
                src='/amber-fort-jaipur-rajasthan-architecture-tourists.jpg'
                alt='Jaipur Architecture'
                width={400}
                height={300}
                className='mx-auto rounded-lg shadow-lg'
              />
            </div>

            {/* Pagination dots */}
            <div className='flex justify-center mt-8 space-x-2'>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 2 ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section id='gallery' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <Image
              src='/rajasthani-palace-courtyard-architecture.jpg'
              alt='Palace Architecture'
              width={200}
              height={200}
              className='rounded-lg shadow-md'
            />
            <div className='bg-gray-200 rounded-lg'></div>
            <div className='bg-gray-200 rounded-lg'></div>
            <Image
              src='/rajasthani-elephant-decorated-for-festival.jpg'
              alt='Decorated Elephant'
              width={200}
              height={200}
              className='rounded-lg shadow-md'
            />

            <Image
              src='/placeholder.svg?height=200&width=200'
              alt='Golden Fort'
              width={200}
              height={200}
              className='rounded-lg shadow-md'
            />
            <Image
              src='/placeholder.svg?height=200&width=200'
              alt='Village Life'
              width={200}
              height={200}
              className='rounded-lg shadow-md'
            />

            <div className='bg-orange-500 rounded-lg flex items-center justify-center'>
              <div className='text-center text-white'>
                <div className='text-sm mb-2'>WE ARE</div>
                <div className='text-2xl font-bold'>"Iconic"</div>
              </div>
            </div>

            <Image
              src='/placeholder.svg?height=200&width=200'
              alt='Desert Camel'
              width={200}
              height={200}
              className='rounded-lg shadow-md'
            />
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer
        style={{
          backgroundImage: "url('figma-added/checker-bg-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className='max-w-7xl mx-auto rounded-4xl flex flex-col mb-10'
          style={{
            backgroundImage: "url('figma-added/footer-pic.jpg')",
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
              <div className='text-7xl mb-4'>
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
                value={""}
                placeholder='Your full name'
                required
                className='border border-gray-300 p-2 rounded-md'
              />
              <label className='mt-2'>Email Address*</label>
              <input
                type='email'
                value={""}
                placeholder='Your email address'
                required
                className='border border-gray-300 p-2 rounded-md'
              />
              <label className='mt-2'>Phone Number*</label>
              <input
                type='tel'
                value={""}
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
          <div className='bg-black/70 rounded-2xl text-white p-6 m-6 flex flex-col md:flex-row justify-between items-center'>
            <span className='text-sm'>
              © {new Date().getFullYear()} Sonarkilla. All rights reserved.
            </span>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 mt-4 md:mt-0'>
              <div className='flex items-center'>
                <Phone className='inline-block mr-2' />
                <span className='mr-4'>002- 01008431112</span>
              </div>
              <div className='flex items-center'>
                <Mail className='inline-block mr-2' />
                <span className='mr-4'>
                  sonarkillatoursandtravels@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
