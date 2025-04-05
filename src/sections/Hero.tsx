import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowdDown from "@/assets/icons/arrow-down.svg";
export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex">
            <div className="bg-green-500 siz-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Availabe for new projects</div>
          </div>
        </div>
        <h1>Building Exceptional User Experiences</h1>
        <p>
          I specialize in transforming desings into functional,high-performing
          web applicaitons. Let us discuss your next project.
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowdDown />
          </button>
          <button>
            <span>👋🏻</span>
            <span>Let us Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
