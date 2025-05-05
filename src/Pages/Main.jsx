import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import FutureVision from "./Future/FutureVision";
import Network from "./Network/Network";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <FutureVision />
      <Network />
      <ContactUs />
      <Footer />
    </div>
  );
}
