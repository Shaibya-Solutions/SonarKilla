export interface Tour {
  title: string;
  description: string;
  longDescription?: string;
  duration: string;
  image: string;
}

export const toursData: Tour[] = [
  {
    title: "Classic Rajasthan Tour",
    description: "Jaipur, Jodhpur & Jaisalmer",
    longDescription:
      "Explore Jaipur's forts, Jodhpur's blue city charm, and the golden deserts of Jaisalmer",
    duration: "8 Days / 7 Nights",
    image: "/hawa-mahal-jaipur-pink-palace-architecture.jpg",
  },
  {
    title: "Royal Rajasthan",
    description: "Luxury Palace Experience",
    longDescription:
      "Pushkar Lake, Udaipur Lake Pichola, Mount Abu Dilwara Temples.",
    duration: "10 Days / 9 Nights",
    image: "/udaipur-city-palace-lake-view-rajasthan.jpg",
  },
  {
    title: "Desert Adventure Expedition",
    description: "Jaisalmer • Thar Desert",
    longDescription:
      "Witness the charm of the Thar Desert with forts, palaces & camel rides.",
    duration: "5 Days / 4 Nights",
    image: "/camel-safari-thar-desert-rajasthan-sunset.jpg",
  },
  {
    title: "Wildlife & Heritage",
    description: "Jaipur, Ranthambore & Bundi",
    longDescription:
      "A unique tour combining heritage forts with thrilling tiger safaris.",
    duration: "7 Days / 6 Nights",
    image: "/rajasthani-folk-dancers-traditional-costume-perfor.jpg",
  },
  {
    title: "Lakes & Forts Rajasthan",
    description: "Udaipur, Chittorgarh & Kumbhalgarh",
    longDescription:
      "Explore the majestic forts of Chittorgarh and Kumbhalgarh, along with the beautiful lakes of Udaipur.",
    duration: "6 Days / 5 Nights",
    image: "/placeholder-wxuwf.png",
  },
  {
    title: "Short Getaway",
    description: "Jaipur, Ajmer & Pushkar",
    longDescription:
      "A quick tour covering Jaipur's highlights and the spiritual towns of Ajmer and Pushkar.",
    duration: "4 Days / 3 Nights",
    image: "/placeholder-tf7sd.png",
  },
];
