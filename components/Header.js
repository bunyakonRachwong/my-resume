"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "services", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  // ฟังก์ชันเลื่อนนุ่ม ๆ
const handleScroll = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }
};


  // เช็คว่าตอนเลื่อนอยู่ตรง section ไหน
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 100; // กัน margin
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <ul className="fixed gap-8 p-4">
        <h1 className="text-2xl font-bold">&lt;/&gt; My Resume</h1>
      </ul>
      <ul className="flex justify-end gap-8 p-4">
        {sections.map((sec) => (
          <li key={sec}>
            <button
              onClick={() => handleScroll(sec)}
              className={`relative text-lg font-medium transition-colors ${
                active === sec ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
              {active === sec && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
