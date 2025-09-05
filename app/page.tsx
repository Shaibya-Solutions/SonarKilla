import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, Crown, Calendar, Users, Phone, Mail, MapIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RajasthanTourismPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Crown className="h-7 w-7 text-white" />
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">ROYAL RAJASTHAN</div>
                <div className="text-xs opacity-90">TOURS AND TRAVELS</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-white hover:text-yellow-300 transition-colors text-sm font-medium">
                SERVICES
              </Link>
              <Link href="#story" className="text-white hover:text-yellow-300 transition-colors text-sm font-medium">
                OUR STORY
              </Link>
              <Link href="#contact" className="text-white hover:text-yellow-300 transition-colors text-sm font-medium">
                CONTACT US
              </Link>
              <Link href="#gallery" className="text-white hover:text-yellow-300 transition-colors text-sm font-medium">
                GALLERY
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-full px-6">
                BOOK NOW
              </Button>
            </nav>

            <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-white/20">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Curved Design */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600">
          <Image
            src="/rajasthan-desert-sunset-landscape.jpg"
            alt="Rajasthan Desert Sunset"
            fill
            className="object-cover mix-blend-overlay opacity-60"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Curved bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "ellipse(100% 100% at 50% 100%)",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              TRAVEL LIKE ROYALS,
              <br />
              <span className="text-yellow-300 drop-shadow-lg">LIVE THE LEGACY</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-lg drop-shadow-md">
              Explore ancient forts and hidden gems of Rajasthan with our curated experiences designed for comfort and
              luxury.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full shadow-lg">
              Explore Packages
            </Button>
          </div>
        </div>

        {/* Silhouettes */}
        <div className="absolute bottom-20 right-10 opacity-80">
          <Image
            src="/silhouettes-of-rajasthani-musicians-with-tradition.jpg"
            alt="Musicians Silhouette"
            width={300}
            height={200}
            className="object-contain drop-shadow-xl"
          />
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Tour Packages</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classic Rajasthan Tour */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/hawa-mahal-jaipur-pink-palace-architecture.jpg"
                  alt="Hawa Mahal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Classic Rajasthan Tour</h3>
                <p className="text-gray-600 text-sm mb-4">Jaipur • Jodhpur • Udaipur • Jaisalmer</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>8 Days / 7 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4" />
                  <span>2-15 People</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">₹25,000</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Royal Rajasthan */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/udaipur-city-palace-lake-view-rajasthan.jpg"
                  alt="Royal Rajasthan"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Royal Rajasthan</h3>
                <p className="text-gray-600 text-sm mb-4">Luxury Palace Experience</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>10 Days / 9 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4" />
                  <span>2-8 People</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">₹45,000</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Desert Adventure */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/camel-safari-thar-desert-rajasthan-sunset.jpg"
                  alt="Desert Adventure"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Desert Adventure Expedition</h3>
                <p className="text-gray-600 text-sm mb-4">Jaisalmer • Thar Desert</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>5 Days / 4 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4" />
                  <span>4-20 People</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">₹18,000</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Heritage */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/rajasthani-folk-dancers-traditional-costume-perfor.jpg"
                  alt="Cultural Heritage"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Cultural Heritage</h3>
                <p className="text-gray-600 text-sm mb-4">Folk Music & Dance Tour</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>6 Days / 5 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4" />
                  <span>5-25 People</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">₹22,000</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Lakes & Hills */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder-wxuwf.png" alt="Lakes & Hills" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Lakes & Hills Rajasthan</h3>
                <p className="text-gray-600 text-sm mb-4">Mount Abu • Udaipur</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>7 Days / 6 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4" />
                  <span>2-12 People</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">₹28,000</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Wildlife Safari */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder-tf7sd.png" alt="Wildlife Safari" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Wildlife Safari</h3>
                <p className="text-gray-600 text-sm mb-4">Ranthambore • Sariska</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>4 Days / 3 Nights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4" />
                  <span>2-10 People</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">₹15,000</span>
                    <span className="text-gray-500 text-sm">/person</span>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Film Strip Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="bg-black p-4 rounded-lg transform -rotate-2 shadow-2xl overflow-hidden">
              <div
                className="flex gap-2 animate-scroll hover:pause-animation"
                style={{
                  width: "calc(192px * 16)", // 8 images * 2 for seamless loop
                  animation: "scroll 20s linear infinite",
                }}
              >
                {/* First set of 8 images */}
                <div className="flex-shrink-0 w-48 h-32 bg-gray-800 rounded"></div>
                <Image
                  src="/rajasthan-desert-sunset-landscape.jpg"
                  alt="Desert Sunset"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/hawa-mahal-jaipur-pink-palace-architecture.jpg"
                  alt="Hawa Mahal"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/udaipur-city-palace-lake-view-rajasthan.jpg"
                  alt="Udaipur Palace"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/camel-safari-thar-desert-rajasthan-sunset.jpg"
                  alt="Camel Safari"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/rajasthani-folk-dancers-traditional-costume-perfor.jpg"
                  alt="Folk Dancers"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/rajasthani-palace-courtyard-architecture.jpg"
                  alt="Palace Courtyard"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/rajasthani-elephant-decorated-for-festival.jpg"
                  alt="Decorated Elephant"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />

                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 w-48 h-32 bg-gray-800 rounded"></div>
                <Image
                  src="/rajasthan-desert-sunset-landscape.jpg"
                  alt="Desert Sunset"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/hawa-mahal-jaipur-pink-palace-architecture.jpg"
                  alt="Hawa Mahal"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/udaipur-city-palace-lake-view-rajasthan.jpg"
                  alt="Udaipur Palace"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/camel-safari-thar-desert-rajasthan-sunset.jpg"
                  alt="Camel Safari"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/rajasthani-folk-dancers-traditional-costume-perfor.jpg"
                  alt="Folk Dancers"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/rajasthani-palace-courtyard-architecture.jpg"
                  alt="Palace Courtyard"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
                <Image
                  src="/rajasthani-elephant-decorated-for-festival.jpg"
                  alt="Decorated Elephant"
                  width={192}
                  height={128}
                  className="flex-shrink-0 rounded object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-gradient-to-r from-orange-100 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-orange-400 to-yellow-500 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder-4jl8x.png"
              alt="Rajasthan Desert Story"
              fill
              className="object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 p-16 text-center text-white">
              <div className="flex items-center justify-center mb-6">
                <Crown className="h-12 w-12 text-yellow-200 mr-4" />
                <div>
                  <div className="text-sm opacity-90">RAJASTHAN</div>
                  <div className="text-lg font-bold">TOURISM</div>
                </div>
              </div>
              <h2 className="text-5xl font-bold mb-4">20 YEARS OF STORY TELLING</h2>
              <p className="text-xl opacity-90">BACKED BY RAJASTHAN TOURISM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-1 bg-orange-500 mr-4"></div>
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 italic">
                "Jaipur is literally dressed with all the
                <br />
                rich culture and captivating history"
              </blockquote>
              <div className="w-16 h-1 bg-orange-500 ml-4"></div>
            </div>
            <p className="text-gray-600 font-medium">- TANISHKA</p>

            <div className="mt-12">
              <Image
                src="/amber-fort-jaipur-rajasthan-architecture-tourists.jpg"
                alt="Jaipur Architecture"
                width={400}
                height={300}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? "bg-orange-500" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="/rajasthani-palace-courtyard-architecture.jpg"
              alt="Palace Architecture"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <div className="bg-gray-200 rounded-lg"></div>
            <div className="bg-gray-200 rounded-lg"></div>
            <Image
              src="/rajasthani-elephant-decorated-for-festival.jpg"
              alt="Decorated Elephant"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />

            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Golden Fort"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Village Life"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />

            <div className="bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-sm mb-2">WE ARE</div>
                <div className="text-2xl font-bold">"Iconic"</div>
              </div>
            </div>

            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Desert Camel"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Plan Your Dream Holiday</h2>
              <h3 className="text-2xl text-orange-500 mb-8">Get in Touch with US</h3>
              <p className="text-gray-600 mb-8">
                Looking to build your next adventure in Rajasthan? Our expert travel consultants are here to help you
                create unforgettable memories. Contact us today to start planning your royal journey.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span>info@royalrajasthantours.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapIcon className="h-5 w-5 text-orange-500" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Travel Planning"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />

              {/* Contact Form Overlay */}
              <div className="absolute top-4 right-4 bg-white p-6 rounded-lg shadow-xl max-w-sm">
                <h4 className="font-bold mb-4">Quick Inquiry</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email ID*"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No.*"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Select Destination</option>
                    <option>Jaipur</option>
                    <option>Udaipur</option>
                    <option>Jodhpur</option>
                    <option>Jaisalmer</option>
                  </select>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">ROYAL RAJASTHAN</div>
                  <div className="text-xs opacity-75">TOURS AND TRAVELS</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Experience the royal heritage of Rajasthan with our curated tour packages and luxury travel experiences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Jaipur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Udaipur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Jodhpur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Jaisalmer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +91 9876543210</p>
                <p>✉️ info@royalrajasthantours.com</p>
                <p>📍 Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Royal Rajasthan Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
