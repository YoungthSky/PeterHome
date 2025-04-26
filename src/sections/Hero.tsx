"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowdDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import { useCallback } from "react";

export const HeroSection = () => {
  // 添加平滑滚动处理函数
  const handleScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      id="home"
      className="py-[78px] md:py-48 lg:py-[202px] relative z-0 overflow-clip"
    >
      {/* 淡出遮罩 */}
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* 磨砂背景：todo */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {/* 环状背景 ：CycleBackground  */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* 星星环绕：animation star */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={10}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        {/* memoji */}
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
            priority
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg ">
            <div className="bg-green-500 size-2.5 rounded-full my-auto mr-2 relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-base font-medium">
              Availabe for new projects
            </div>
          </div>
        </div>
        {/* 主题 */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming desings into functional,high-performing
            web applicaitons. Let us discuss your next project.
          </p>
        </div>
        {/* 联系我 */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10">
          <button
            onClick={() => handleScrollToSection("project")}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-gray-800 active:bg-gray-700"
          >
            <span>Explore My Work</span>
            <ArrowdDown className="size-4" />
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-sky-100 active:bg-sky-50"
          >
            <span>👋🏻</span>
            <span className="font-semibold">Let us Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
