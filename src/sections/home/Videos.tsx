import React, { useState } from "react";

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
}

const NewsVideosCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null); // Track which video is playing

  const videos: VideoItem[] = [
    {
      id: "1",
      youtubeId: "YoXxevp1WRQ",
      title: "Modern House Design",
    },
    {
      id: "2",
      youtubeId: "YoXxevp1WRQ",
      title: "Luxury Home Tour",
    },
    {
      id: "3",
      youtubeId: "YoXxevp1WRQ",
      title: "Interior Design Tips",
    },
    {
      id: "4",
      youtubeId: "YoXxevp1WRQ",
      title: "Property Investment Guide",
    },
  ];

  const slidesToShow = 2;
  const totalSlides = Math.ceil(videos.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleVideos = () => {
    const start = currentSlide * slidesToShow;
    return videos.slice(start, start + slidesToShow);
  };

  return (
    <div className="bg-black/80 py-12">
      <div className="px-16">
        {/* Header with title and navigation buttons */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-[50px] font-bold">
            <span className="text-white">Latest</span>{" "}
            <span className="text-amber-400">News And Videos</span>
          </h2>

          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 transition"
              aria-label="Previous slide"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-black hover:bg-amber-500 transition"
              aria-label="Next slide"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] px-6 py-8">
          {getVisibleVideos().map((video) => (
            <div key={video.id} className="relative group">
              {playingVideo === video.id ? (
                // Embed YouTube video when clicked
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  allow="autoplay; encrypted-media"
                  className="rounded"
                />
              ) : (
                // Show thumbnail with play button
                <div
                  className="relative cursor-pointer"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-[500px] object-cover rounded grayscale group-hover:grayscale-0 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center text-white"
                      aria-label="Play video"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsVideosCarousel;
