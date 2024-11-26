import React, { useEffect, useState } from 'react';
import 'react-image-lightbox/style.css'; // Import CSS
import Lightbox from 'react-image-lightbox';
import LazyLoad from 'react-lazyload';
import Photo1 from './images/1.JPG';
import Photo2 from './images/2.JPG';
import Photo3 from './images/3.JPG';
import Photo4 from './images/4.JPG';
import Photo5 from './images/5.jpg';
import Photo6 from './images/6.jpeg';
import Photo7 from './images/7.jpg';
import Photo8 from './images/8.jpg';
import Photo9 from './images/9.jpg';
import Photo10 from './images/10.jpg';
import Photo11 from './images/11.jpg';
import Photo12 from './images/12.jpg';
import Photo13 from './images/13.jpg';
import Photo14 from './images/14.jpg';
import Photo15 from './images/15.jpg';
import Photo16 from './images/16.jpg';
import Photo17 from './images/17.jpg';
import Photo18 from './images/18.jpg';
import Photo19 from './images/19.jpg';
import Photo20 from './images/20.jpg';
import Photo21 from './images/21.jpg';
import Photo22 from './images/22.jpg';
import Photo23 from './images/23.jpg';
import Photo24 from './images/24.jpg';
import Photo25 from './images/25.jpg';
import Photo26 from './images/26.jpg';
import Photo27 from './images/27.jpg';
import Photo28 from './images/28.jpg';
import Photo29 from './images/29.jpg';
import Photo30 from './images/30.jpg';
import Photo31 from './images/31.jpg';
import Photo32 from './images/32.jpg';
import Photo33 from './images/33.jpg';
import Photo34 from './images/34.jpg';
import Photo35 from './images/35.jpg';
import Photo36 from './images/36.jpg';
import Photo37 from './images/37.jpg';
import Photo38 from './images/38.jpg';
import Photo39 from './images/39.jpg';
import Photo40 from './images/40.jpg';
import Photo41 from './images/41.jpg';
import Photo43 from './images/43.jpg';
import Photo44 from './images/44.jpg';
import Photo45 from './images/45.jpg';
import Photo46 from './images/46.jpg';
import Photo47 from './images/47.jpg';
import Photo48 from './images/48.jpg';

const LightboxGallery = () => {
  const images = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
    Photo13,
    Photo14,
    Photo15,
    Photo16,
    Photo17,
    Photo18,
    Photo19,
    Photo20,
    Photo21,
    Photo22,
    Photo23,
    Photo24,
    Photo25,
    Photo26,
    Photo27,
    Photo28,
    Photo29,
    Photo30,
    Photo31,
    Photo32,
    Photo33,
    Photo34,
    Photo35,
    Photo36,
    Photo37,
    Photo38,
    Photo39,
    Photo40,
    Photo41,
    Photo43,
    Photo44,
    Photo45,
    Photo46,
    Photo47,
    Photo48
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to create floating emoticons
    const createFloatingEmoticons = () => {
      const emoticons = ['😀', '😂', '😍', '😎', '🥳', '🤩', '😇', '🤗'];
      const container = document.createElement('div');
      container.className = 'emoticon-container';
      document.body.appendChild(container);

      emoticons.forEach(emoticon => {
        const span = document.createElement('span');
        span.className = 'emoticon';
        span.textContent = emoticon;

        // Randomize position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        span.style.setProperty('--random-x', `${randomX}vw`);
        span.style.setProperty('--random-y', `${randomY}vh`);

        container.appendChild(span);
      });
    };

    createFloatingEmoticons();
  }, []);

return (
    <div className="container mx-auto p-4">
        <h2 className="text-3xl font-extrabold text-center mt-6 mb-12 text-pink-600">Kenangan Kita</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((image, index) => (
                <LazyLoad key={index} height={200} offset={100} once>
                    <img
                        src={image}
                        alt={`Kenangan ${index + 1}`}
                        className="mb-4 w-full h-auto object-cover cursor-pointer rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out"
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                        loading="lazy"
                    />
                </LazyLoad>
            ))}
        </div>
        <div className="text-center p-8 bg-white mt-8">
            <p className="text-3xl italic font-semibold text-black">
                "Jadi ayanggkuu yangg cantik dan lucu terus yaa sayaaanggg! 💖😊"
            </p>
        </div>
        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
            />
        )}
    </div>
);
};

export default LightboxGallery;
