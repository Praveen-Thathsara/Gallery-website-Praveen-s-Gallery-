import React, { useState } from "react";
import videos from "./VideoData"; // Import your video data

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video); // Set clicked video for playback
  };

  return (
    <div className="video-gallery">
      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-block"
            onClick={() => handleVideoClick(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="thumbnail"
            />
          </div>
        ))}
      </div>

      {/* Modal for playing video */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-container">
            <video controls autoPlay>
              <source src={selectedVideo.url} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
