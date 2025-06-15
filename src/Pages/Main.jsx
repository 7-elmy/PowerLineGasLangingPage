import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import FutureVision from "./Future/FutureVision";
import Network from "./Network/Network";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Ser_vices from "./Ser_vices/Ser_vices";
import FAQCards from "./commonQ/commonQ.jsx";
import SplashScreen from "./SplashScreen/SplashScreen.jsx";
export default function Main() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // إخفاء الـ Splash Screen بعد ثانيتين
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2000ms = 2 ثانية

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <>
          <Navbar />
          <Home />
          <Ser_vices />
          <FutureVision />
          <Network />
          <FAQCards />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}