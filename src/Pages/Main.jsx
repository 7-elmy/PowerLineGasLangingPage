import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import FutureVision from "./Future/FutureVision";
import Network from "./Network/Network";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Ser_vices from "./Ser_vices/Ser_vices";


export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
<Ser_vices/>
        <FutureVision />
      <Network />
      <ContactUs />
      <Footer />
    </div>
  );
}
