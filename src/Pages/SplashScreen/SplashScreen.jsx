import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png"; // المسار بناءً على طلبك

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // إظهار الـ Splash Screen لمدة ثانيتين ثم إخفاؤها
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2000ms = 2 ثانية

    return () => clearTimeout(timer); // تنظيف المؤقت
  }, []);

  if (!isVisible) return null; // إرجاع null لإخفاء الكومبوننت تمامًا

  return (
    <div
      className="fixed inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
      style={{ backgroundColor: "#fdf7eb" }}
    >
      <div
        className="transform transition-all duration-1000 ease-in-out opacity-100 scale-100"
      >
        <img
          src={logo}
          alt="Power Line Gas Logo"
          className="w-[150px] sm:w-[200px] md:w-[250px] object-contain"
        />
      </div>
    </div>
  );
}