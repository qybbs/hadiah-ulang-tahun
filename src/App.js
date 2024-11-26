import React, { useEffect, useRef } from 'react';
import './App.css';
import LightboxGallery from './components/LightboxGallery';
import Header from './components/Header';
import ReactAudioPlayer from 'react-audio-player';
import Music from './music/music.mp3';

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current.audioEl.current;
    const playAudio = () => {
      audio.play().catch(error => {
        console.error('Auto-play was prevented:', error);
      });
    };

    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleUserInteraction);
    };

    if (audio) {
      document.addEventListener('click', handleUserInteraction);
    }

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div className='bg-gradient-to-t from-pink-500 to-white'>
      <Header />
      <LightboxGallery />
      <ReactAudioPlayer
        ref={audioRef}
        src={Music}
        controls
        loop
        style={{ display: 'none', margin: '20px auto' }}
      />
    </div>
  );
};

export default App;
