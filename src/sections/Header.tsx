"use client";
import { useState, useEffect, useCallback } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  // 处理滚动和导航状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "project", "about", "contact"];

      // 找到当前可见的区块
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 平滑滚动处理
  const handleNavClick = useCallback(
    (sectionId: string, e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    },
    []
  );

  return (
    <div className="fixed flex justify-center items-center top-3 pt-3 z-10 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={(e) => handleNavClick("home", e)}
          className={`nav-item ${
            activeSection === "home" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#project"
          onClick={(e) => handleNavClick("project", e)}
          className={`nav-item ${
            activeSection === "project" ? "bg-white text-gray-900" : ""
          }`}
        >
          Project
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavClick("about", e)}
          className={`nav-item ${
            activeSection === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick("contact", e)}
          className={`nav-item ${
            activeSection === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
