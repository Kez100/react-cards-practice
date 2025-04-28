import ProfileCard from './components/ProfileCard';
import React from 'react';


function App() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-600">
                My Profile Cards
            </h1>

            <div className="flex flex-wrap justify-center gap-6">
                <ProfileCard
                    name="Larry"
                    bio="Loves coding and long car rides."
                    image="/assets/pug-puppy.webp"
                />
                <ProfileCard
                    name="Max"
                    bio="A feroucious beast"
                    image="/assets/rotweiler-puppy.jpg"
                />
                <ProfileCard
                    name="Paul"
                    bio="a true pioner for the coding world."
                    image="/assets/labrodor-puppy.webp"
                />
            </div>
        </div>
    );
}

export default App;