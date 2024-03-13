import React, { useRef, useEffect } from 'react';
import srcvideo from './silicon2.mp4';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {

      try {
        
        if (videoRef.current) {
          videoRef.current.load();
          const playPromise = videoRef.current.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Automatic playback started!
                // Show playing UI.
                console.log('Video is playing');
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
                console.error('Autoplay was prevented', error);
              });
          }
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }

  }, []); 

  const handleVideoEnd = () => {
    window.location.replace('https://smartcitylivinglab.iiit.ac.in/wisun_dashboard/');
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        controls
        width="100%"
        height="auto"
        autoPlay
        muted={false} // Start with muted to comply with most browsers' autoplay policies
      >
        <source src={srcvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
