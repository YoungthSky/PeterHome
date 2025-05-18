'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 音乐播放器组件
 * - 支持自动播放（需要用户与页面交互）
 * - 提供播放/暂停控制
 * - 循环播放背景音乐
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hadTriggerPlay, setHadTriggerPlay] = useState(false);

  // 监听页面交互并尝试自动播放
  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current && !isPlaying && !hadTriggerPlay) {
        setHadTriggerPlay(true);

        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log('自动播放失败:', error);
          });
      }
    };

    // 添加多个交互事件监听
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    // window.addEventListener('scroll', handleInteraction);

    return () => {
      // 清理事件监听
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      // window.removeEventListener('scroll', handleInteraction);
    };
  }, [isPlaying, hadTriggerPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="hover:scale-110 active:scale-125 transition-transform"
        // className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors"
      >
        {isPlaying ? '🔊' : '🔈'}
      </button>
      <audio ref={audioRef} loop className="hidden">
        <source src="/audio/background-music.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}
