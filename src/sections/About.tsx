"use client";
import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
// tool icons
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import JavaIcon from "@/assets/icons/java.svg";
import GoIcon from "@/assets/icons/go.svg";
import SolidityIcon from "@/assets/icons/solidity.svg";
import CPlusIcon from "@/assets/icons/CPlus.svg";
import CShapIcon from "@/assets/icons/CShap.svg";
import PSIcon from "@/assets/icons/PS.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import NextJsIcon from "@/assets/icons/nextJs.svg";

import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// life photos
import beering from "@/assets/images/life/beering.jpeg";
import cooking from "@/assets/images/life/cooking.jpeg";
import dinner from "@/assets/images/life/dinner.jpeg";
import gaming from "@/assets/images/life/gaming.jpeg";
import hallowmas from "@/assets/images/life/hallowmas.jpeg";
import hiking from "@/assets/images/life/hiking.jpeg";
import hiking2 from "@/assets/images/life/hiking2.jpeg";
import meeting from "@/assets/images/life/meeting.jpeg";
import partner from "@/assets/images/life/partner.jpeg";
import party from "@/assets/images/life/party.jpeg";
import teamCofe from "@/assets/images/life/teamCofe.jpeg";
import teamBuilding from "@/assets/images/life/teemBuilding.jpeg";
import working from "@/assets/images/life/working.jpeg";

// books
import cleanCode from "@/assets/images/book/cleanCode.jpeg";
import designPatterns from "@/assets/images/book/designPatterns.jpeg";
import theArtOfComputerProgramming from "@/assets/images/book/theArtOfCoumouterProgram.jpeg";
import thinkInJave from "@/assets/images/book/thinkInJava.jpeg";
import androidCrazyLectureNotes from "@/assets/images/book/androidCrazyLectureNotes.jpeg";

const toolboxIterms = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Go",
    iconType: GoIcon,
  },
  {
    title: "Solidity",
    iconType: SolidityIcon,
  },
  {
    title: "C++",
    iconType: CPlusIcon,
  },
  {
    title: "C#",
    iconType: CShapIcon,
  },
  {
    title: "PS",
    iconType: PSIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];
// life photos array
const galleryItems = [
  {
    id: 1,
    image: party,
    title: "party",
    description: "Happy beer party",
  },
  {
    id: 2,
    image: cooking,
    title: "cooking",
    description: "Make cakes with colleagues",
  },
  {
    id: 3,
    image: dinner,
    title: "dinner",
    description: "Have dinner with friends",
  },
  {
    id: 4,
    image: gaming,
    title: "gaming",
    description: "Play Mario Bros. with colleagues",
  },
  {
    id: 5,
    image: hallowmas,
    title: "hallowmas",
    description: "Happy Valley with Xavier for Halloween",
  },
  {
    id: 6,
    image: hiking,
    title: "mountaineering",
    description: "Climb Longquan Mountain with Olivia,Jeffrey Brenden and Ted",
  },
  {
    id: 7,
    image: hiking2,
    title: "hiking",
    description: "Go hiking with a lot of friends",
  },
  {
    id: 8,
    image: meeting,
    title: "meeting",
    description: "A software requirement analysis meeting",
  },
  {
    id: 9,
    image: partner,
    title: "partner",
    description:
      "Take a photo with my dear friend and powerful comrade Xavier, during a break from work",
  },
  {
    id: 10,
    image: beering,
    title: "beering",
    description: "Happy Beer group photo",
  },
  {
    id: 11,
    image: teamCofe,
    title: "teamCofe",
    description: "team building cofe with Xavier,Lukasz And Sam",
  },
  {
    id: 12,
    image: teamBuilding,
    title: "teamBuilding",
    description: "team building photo",
  },
  {
    id: 13,
    image: working,
    title: "working",
    description: "Work full of passion​",
  },
];

// books array
const books = [
  {
    id: 1,
    image: cleanCode,
    title: "Clean Code",
    description: "A Handbook of Agile Software Craftsmanship",
  },
  {
    id: 2,
    image: designPatterns,
    title: "Design Patterns",
    description: "Elements of Reusable Object-Oriented Software",
  },
  {
    id: 3,
    image: theArtOfComputerProgramming,
    title: "The Art of Computer Programming",
    description: "Fundamental Algorithms",
  },
  {
    id: 4,
    image: thinkInJave,
    title: "Think in Java",
    description:
      "A Comprehensive Introduction to the Java Programming Language",
  },
  {
    id: 5,
    image: androidCrazyLectureNotes,
    title: "Android Crazy Lecture Notes",
    description: "A Comprehensive Guide to Android Development",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const [currentGalleryIndex, setGalleryCurrentIndex] = useState(0);
  const [isGalleryPaused, setGalleryIsPaused] = useState(false); // 添加暂停状态
  const [currentBookIndex, setBookCurrentIndex] = useState(0);
  const [isBookPaused, setBookIsPaused] = useState(false); // 添加暂停状态

  // 添加自动切换功能
  useEffect(() => {
    if (isGalleryPaused) return; // 如果暂停则不执行自动切换

    const timer = setInterval(() => {
      setGalleryCurrentIndex((prev) => (prev + 1) % galleryItems.length);
      setBookCurrentIndex((prev) => (prev + 1) % books.length);
    }, 3000); // 每秒切换一次

    return () => clearInterval(timer); // 清理定时器
  }, [isGalleryPaused]);
  return (
    <div id="about" className="py-[125px] lg:py-28">
      <div className=" container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[380px] p-0 relative overflow-hidden group">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGalleryIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full"
                >
                  <Image
                    src={books[currentBookIndex].image}
                    alt={books[currentBookIndex].title}
                    className="h-full w-full object-cover"
                  />
                  {/* 标题遮罩 */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm text-white/90 font-medium">
                      {books[currentBookIndex].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 导航按钮 - 只在悬停时显示 */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() =>
                    setGalleryCurrentIndex(
                      (prev) => (prev - 1 + books.length) % books.length
                    )
                  }
                  className="p-2 rounded-full bg-black/20 backdrop-blur hover:bg-black/40 transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() =>
                    setGalleryCurrentIndex((prev) => (prev + 1) % books.length)
                  }
                  className="p-2 rounded-full bg-black/20 backdrop-blur hover:bg-black/40 transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </Card>
            <Card
              id="toolbox"
              className="h-[320px] md:col-span-3 lg:col-span-2"
            >
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
              digital experience."
                className=""
              />
              <div>
                <ToolBoxItems
                  items={toolboxIterms}
                  className=""
                  itermsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolBoxItems
                  items={toolboxIterms}
                  className="mt-6"
                  itermsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline afteroutline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smileMemoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
          <Card
            id="gallery"
            className="h-[380px] p-0 relative overflow-hidden"
            onMouseEnter={() => setGalleryIsPaused(true)}
            onMouseLeave={() => setGalleryIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGalleryIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <Image
                  src={galleryItems[currentGalleryIndex].image}
                  alt={galleryItems[currentGalleryIndex].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/80 to-transparent">
                  <h3 className="text-lg font-medium text-white">
                    {galleryItems[currentGalleryIndex].title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {galleryItems[currentGalleryIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 导航按钮 */}
            <button
              onClick={() =>
                setGalleryCurrentIndex(
                  (prev) =>
                    (prev - 1 + galleryItems.length) % galleryItems.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setGalleryCurrentIndex(
                  (prev) => (prev + 1) % galleryItems.length
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* 指示器 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentGalleryIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
