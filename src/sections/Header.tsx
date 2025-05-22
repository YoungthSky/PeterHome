'use client';
import { MusicPlayer } from '@/components/MusicPlayer';
import { useState, useEffect, useCallback } from 'react';
import Web3 from 'web3';

export const Header = () => {
  const [activeSection, setActiveSection] = useState(() => {
    // 确保代码运行在浏览器环境
    return localStorage.getItem('activeSection') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);
  // 处理滚动和导航状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'project', 'about', 'contact'];

      // 找到当前可见的区块
      const current = sections.find(section => {
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
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 平滑滚动处理
  const handleNavClick = useCallback((sectionId: string, e: React.MouseEvent) => {
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
      const currentPosition = startPosition + (targetPosition - startPosition) * easedProgress;

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        setActiveSection(sectionId);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  // 捐赠处理,调用MetaMask,通过以太坊进行捐赠 调用ethereum.js库
  const handleDonation = async () => {
    try {
      // 检查是否安装了 MetaMask
      if (typeof window.ethereum === 'undefined') {
        alert('请先安装 MetaMask 钱包');
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      // 请求用户连接钱包
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (!accounts || accounts.length === 0) {
        alert('请先连接 MetaMask 钱包');
        return;
      }

      // 构建交易参数
      const transactionParameters = {
        to: '0x61A28E0d0155CB0cE9A48b9B57c6B42F7EFe3283', //我的钱包地址
        from: accounts[0],
        value: '0x2386F26FC10000', // 0.01 ETH in hex
        gas: '0x5208', // 可选
      };

      // 发送交易
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      alert('感谢您的支持！交易已发送\n交易哈希: ' + txHash);
    } catch (error: any) {
      console.error('转账失败:', error);
      alert(error.message || '转账失败，请重试');
    }
  };
  // 捐赠处理,使用web3.js库调用MetaMask,通过以太坊进行捐赠
  const handleDonationUseWeb3js = async () => {
    try {
      // 检查是否安装了 MetaMask
      if (typeof window.ethereum === 'undefined') {
        alert('请先安装 MetaMask 钱包');
        window.open('https://metamask.io/download/', '_blank');
        return;
      }
      //初始化 Web3.js
      const web3 = new Web3(window.ethereum);
      // 请求用户连接钱包
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      //判断是否连接成功
      if (!accounts || accounts.length === 0) {
        alert('请先连接 MetaMask 钱包');
        return;
      }
      //准备交易参数
      const amount = '0.01'; //ETH
      const weiAmount = web3.utils.toWei(amount, 'ether');
      //构建交易参数
      const transaction = {
        from: accounts[0],
        to: '0x61A28E0d0155CB0cE9A48b9B57c6B42F7EFe3283',
        value: weiAmount,
        gas: '21000',
      };
      try {
        //发送交易
        const txHash = await web3.eth.sendTransaction(transaction);
        alert(`感谢您的支持！\n交易已发送，交易哈希: ${txHash.transactionHash}`);
      } catch (error: any) {
        console.error('交易失败:', error);
        alert(error.message || '交易失败，请重试');
      }
    } catch (error: any) {
      console.error('钱包操作失败:', error);
      alert(error.message || '钱包操作失败，请重试');
    }
  };

  return (
    <>
      <MusicPlayer />
      <div className="fixed flex justify-center items-center top-3 pt-3 z-10 w-full">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a
            href="#home"
            onClick={e => handleNavClick('home', e)}
            className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900' : ''}`}
          >
            Home
          </a>
          <a
            href="#project"
            onClick={e => handleNavClick('project', e)}
            className={`nav-item ${activeSection === 'project' ? 'bg-white text-gray-900' : ''}`}
          >
            Project
          </a>
          <a
            href="#about"
            onClick={e => handleNavClick('about', e)}
            className={`nav-item ${activeSection === 'about' ? 'bg-white text-gray-900' : ''}`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={e => handleNavClick('contact', e)}
            className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900' : ''}`}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Buy me a coffe 如果你请我喝一杯咖啡，那么每隔一年我将为你储存一杯咖啡;100年后，我将请你喝100杯咖啡🤡。*/}
      <div className="fixed bottom-20 right-6 z-50 group">
        <button
          onClick={handleDonationUseWeb3js}
          className="inline-flex items-center gap-2 px-2 border-white/15 rounded-xl 
            hover:bg-gray-800 active:bg-gray-700
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
        <div className="absolute bottom-full mb-2 -left-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm max-w-[500px] whitespace-normal">
            Buy me one cup of coffee today, and I’ll save one for you every year. In 100 years,
            you’ll be drowning in 100 cups of coffee 🤡
          </div>
          <div className="border-t-8 border-x-8 border-transparent border-t-gray-900 w-0 h-0 absolute right-0 -translate-x-1/2"></div>
        </div>
      </div>
    </>
  );
};
