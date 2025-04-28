"use client";
import { useState, useEffect, useCallback } from "react";

// 添加 MetaMask 类型声明
declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (request: {
        method: string;
        params?: Array<any>;
      }) => Promise<any>;
      selectedAddress: string | null;
    };
  }
}

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
      if (!element) return;

      const elementRect = element.getBoundingClientRect();
      const scrollDistance = Math.abs(elementRect.top);

      // 根据滚动距离计算持续时间（最小500ms，最大1500ms）
      const duration = Math.max(500, Math.min(1500, scrollDistance * 1.5));

      const startPosition = window.pageYOffset;
      const targetPosition = startPosition + elementRect.top;
      const startTime = performance.now();

      // 自定义缓动函数 - easeInOutCubic
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      // 动画函数
      const animation = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeInOutCubic(progress);
        const currentPosition =
          startPosition + (targetPosition - startPosition) * easedProgress;

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          setActiveSection(sectionId);
        }
      };

      requestAnimationFrame(animation);
    },
    []
  );

  // 捐赠处理,调用MetaMask,通过虚拟币进行捐赠
  const handleDonation = async () => {
    try {
      // 检查是否安装了 MetaMask
      if (typeof window.ethereum === "undefined") {
        alert("请先安装 MetaMask 钱包");
        window.open("https://metamask.io/download/", "_blank");
        return;
      }

      // 请求用户连接钱包
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        alert("请先连接 MetaMask 钱包");
        return;
      }

      // 发起转账请求
      const transactionParameters = {
        to: "0x61A28E0d0155CB0cE9A48b9B57c6B42F7EFe3283", //我的钱包地址
        from: accounts[0],
        value: "0x2386F26FC10000", // 0.01 ETH in hex
        // gas: "0x5208", // 可选
      };

      // 发送交易
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      alert("感谢您的支持！交易已发送\n交易哈希: " + txHash);
    } catch (error: any) {
      console.error("转账失败:", error);
      alert(error.message || "转账失败，请重试");
    }
  };

  return (
    <>
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

      {/* Buy me a coffe */}
      <button
        onClick={handleDonation}
        className="fixed bottom-20 right-6 inline-flex items-center gap-2 px-2 border-white/15 rounded-xl 
          hover:bg-gray-800 active:bg-gray-700 z-50
          hover:scale-105 active:scale-95 transition-all duration-200
          hover:rotate-1 active:-rotate-1
          group"
      >
        <span className="font-mono text-lg transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200">
          ☕️
        </span>
        <span className="text-sm hidden md:inline lg:hidden group-hover:text-yellow-400 transition-colors duration-200">
          bmc
        </span>
        <span className="text-sm hidden lg:inline group-hover:text-yellow-400 transition-colors duration-200">
          Buy me a coffee
        </span>
      </button>
    </>
  );
};
