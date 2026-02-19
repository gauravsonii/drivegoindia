"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import VehicleList from "./components/VehicleList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Sample Data
const cars = [
  {
    id: 1,
    name: "Scorpio S11",
    type: "SUV",
    image: "/images/scorpios11.png",
    details: "Rugged and powerful SUV, perfect for tough terrains and group travel.",
    price: "₹271/Hour",
    contact: "+917999663197"
  },
  {
    id: 2,
    name: "Scorpio N",
    type: "SUV",
    image: "/images/scorpion.png",
    details: "The modern beast with advanced features and superior comfort.",
    price: "₹340/Hour",
    contact: "+917999663197"
  },
  {
    id: 3,
    name: "Mahindra Thar",
    type: "Off-Roader",
    image: "/images/thar.png",
    details: "Ultimate off-roading experience with iconic design and raw power.",
    price: "₹229/Hour",
    contact: "+917999663197"
  },
  {
    id: 4,
    name: "Toyota Glanza",
    type: "Hatchback",
    image: "/images/glanzatoyota.png",
    details: "Premium hatchback with excellent fuel efficiency and smooth drive.",
    price: "₹145/Hour",
    contact: "+917999663197"
  },
  {
    id: 5,
    name: "Hyundai Aura",
    type: "Sedan",
    image: "/images/aurahayundai.png",
    details: "Elegant sedan with modern features, ideal for city and family trips.",
    price: "₹155/Hour",
    contact: "+917999663197"
  },
  {
    id: 6,
    name: "Maruti Swift",
    type: "Hatchback",
    image: "/images/shiftmaruti.png",
    details: "A popular choice for its agile handling and reliable performance.",
    price: "₹105/Hour",
    contact: "+917999663197"
  },
  {
    id: 7,
    name: "Nexa Fronx",
    type: "SUV/Crossover",
    image: "/images/fronxnexa.png",
    details: "Stylish and modern crossover with great ground clearance and tech.",
    price: "₹145/Hour",
    contact: "+917999663197"
  },
  {
    id: 8,
    name: "Tata Nexon",
    type: "SUV",
    image: "/images/naxontata.png",
    details: "India's safest SUV with a bold design and powerful performance.",
    price: "₹150/Hour",
    contact: "+917999663197"
  },
  {
    id: 9,
    name: "Maruti Ertiga",
    type: "MUV",
    image: "/images/ertigamaruti.png",
    details: "Space for everyone. Perfect MUV for large families and long journeys.",
    price: "₹187/Hour",
    contact: "+917999663197"
  },
  {
    id: 10,
    name: "Toyota Fortuner",
    type: "Luxury SUV",
    image: "/images/foutunertoyota.png",
    details: "The king of SUVs. Unmatched presence, power, and premium luxury.",
    price: "₹355/Hour",
    contact: "+917999663197"
  }
];

const bikes = [
  {
    id: 11,
    name: "Sports Bike",
    type: "Performance",
    image: "/images/sportsbike.png",
    details: "High-performance sports bike for the ultimate adrenaline rush.",
    price: "₹1000/Day",
    contact: "+917999663197"
  },
  {
    id: 12,
    name: "Royal Enfield Bullet",
    type: "Cruiser",
    image: "/images/bullet.png",
    details: "The standard of legend. Iconic design and a powerful thumping engine.",
    price: "₹1000/Day",
    contact: "+917999663197"
  }
];

const scooters = [
  {
    id: 13,
    name: "Honda Activa 125",
    type: "Scooter",
    image: "/images/honda125.png",
    details: "Reliable and efficient scooter for smooth city commuting.",
    price: "₹300/Day",
    contact: "+917999663197"
  },
  {
    id: 14,
    name: "TVS Jupiter",
    type: "Scooter",
    image: "/images/tvsjupiter.png",
    details: "User-friendly and comfortable scooter with great fuel economy.",
    price: "₹300/Day",
    contact: "+917999663197"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div id="cars">
        <VehicleList id="cars-list" title="Cars" vehicles={cars} />
      </div>
      <div id="bikes">
        <VehicleList id="bikes-list" title="Bikes" vehicles={bikes} />
      </div>
      <div id="scooters">
        <VehicleList id="scooters-list" title="Activas" vehicles={scooters} />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
