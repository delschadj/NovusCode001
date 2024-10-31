import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import ReactPlayer from 'react-player';

const carouselData = [
  {
    description: "Upload your codebase either as a zip file or a GitHub repository.",
    image: "howItWorks1.png",
    type: "image",
  },
  {
    description: "After that we analyze your codebase. The analysis will only take up to 5 minutes.",
    video: "net.mp4",
    type: "continuous-video",
  },
  {
    description: "Done! We automatically generate documentation for your codebase. You can also ask questions and get specific answers via our chatbot. Finally, our Code Explorer allows you to view code files and ask questions about it in an online IDE.",
    video: "explore.mp4",
    type: "video",
  },
];

const headings = ["1. Upload", "2. Analyze", "3. Explore"];

const HowItWorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [fadeOutOverlay, setFadeOutOverlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    resetVideoState();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    resetVideoState();
  };

  const handleHeadingClick = (index) => {
    setCurrentIndex(index);
    resetVideoState();
  };

  const resetVideoState = () => {
    setIsPaused(false);
    setShowControls(false);
    setFadeOutOverlay(false);
    setProgress(0);
  };

  const handleVideoClick = () => {
    if (carouselData[currentIndex].type === "video") {
      setIsPaused((prev) => !prev);
      setShowControls(true);
      
      if (!isPaused) {
        setFadeOutOverlay(false);
      } else {
        setTimeout(() => {
          setFadeOutOverlay(true);
        }, 100);
        
        setTimeout(() => {
          setShowControls(false);
        }, 400);
      }
    }
  };

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setProgress(seekTime);
    playerRef.current.seekTo(seekTime);
    setIsPaused(true);
    setShowControls(true);
    setFadeOutOverlay(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const renderMedia = () => {
    const currentItem = carouselData[currentIndex];
    if (currentItem.type === "image") {
      return (
        <img
          src={currentItem.image}
          className="w-full h-auto rounded-lg object-contain"
          style={{ maxHeight: '500px' }}
          alt="carousel-slide"
        />
      );
    } else if (currentItem.type === "continuous-video") {
      return (
        <ReactPlayer
          url={currentItem.video}
          className="w-full h-auto rounded-lg object-contain"
          style={{ maxHeight: '500px' }}
          playing={true}
          loop
          muted
          width="100%"
          height="auto"
        />
      );
    } else {
      return (
        <div onClick={handleVideoClick} className="relative">
          <ReactPlayer
            ref={playerRef}
            url={currentItem.video}
            className="w-full h-auto rounded-lg object-contain"
            style={{ maxHeight: '500px' }}
            playing={!isPaused}
            loop
            muted
            width="100%"
            height="auto"
            onProgress={handleProgress}
            onDuration={handleDuration}
          />
          {showControls && (
            <>
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${fadeOutOverlay ? 'opacity-0' : 'opacity-50'}`} />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${fadeOutOverlay ? 'opacity-0' : 'opacity-100'}`}>
                {isPaused ? <Pause size={64} color="white" /> : <Play size={64} color="white" />}
              </div>
              <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 transition-opacity duration-300 ${fadeOutOverlay ? 'opacity-0' : 'opacity-100'}`}>
                <input
                  type="range"
                  min={0}
                  max={0.999999}
                  step="any"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[16px] [&::-webkit-slider-thumb]:w-[16px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
                <div className="flex justify-between text-white text-sm mt-1">
                  <span>{formatTime(progress * duration)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </>
          )}
        </div>
      );
    }
  };

  return (
    <section className="max-w mx-auto py-8 bg-[#FAF7F2]">
      <div className="flex items-center justify-between mb-4">
        {headings.map((heading, index) => (
          <h2
            key={index}
            onClick={() => handleHeadingClick(index)}
            className={`text-3xl font-bold cursor-pointer ${currentIndex === index ? 'text-black' : 'text-gray-400'}`}
          >
            {heading}
          </h2>
        ))}
      </div>

      <div className="h-1 bg-gray-200 mb-8 relative">
        <div
          className="h-full bg-black absolute left-0 transition-all duration-300 ease-in-out"
          style={{
            width: `${100 / headings.length}%`,
            transform: `translateX(${currentIndex * 100}%)`,
          }}
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-start relative">
        <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-8 md:mb-0">
          {renderMedia()}
        </div>
        <div className="w-full md:w-1/3 pl-0 md:pl-8 flex flex-col">
          <p className="text-lg mb-8">{carouselData[currentIndex].description}</p>
        </div>
        <div className="absolute bottom-0 right-0 md:right-8 flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;