import React from 'react';
import '../App.css';
import 'tailwindcss/tailwind.css';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-pink-500 to-orange-400 p-5 pt-8 text-white text-center shadow-lg">
            <h1 className="text-4xl m-0 animate-bounce">
                Happy Birthday, Sayang!
            </h1>
            <p className="mt-2 text-lg">
                Wishing you all the best on your special day!
            </p>
            <div className="mt-4">
                <button className="bg-white text-pink-500 font-bold py-2 px-4 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition duration-300">
                    Celebrate Now
                </button>
            </div>
        </header>
    );
};

export default Header;
