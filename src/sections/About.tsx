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
// import CPlusIcon from "@/assets/icons/CPlus.svg";
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
import { Gallery } from "@/components/Gallery";

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
  // {
  //   title: "C++",
  //   iconType: CPlusIcon,
  // },
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
            <Card className="h-[320px] p-0 relative overflow-hidden group md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <Gallery items={books} autoPlayInterval={3000} />
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

          <Card id="gallery" className="h-[380px] p-0 relative overflow-hidden">
            <Gallery items={galleryItems} autoPlayInterval={3000} />
          </Card>
        </div>
      </div>
    </div>
  );
};
