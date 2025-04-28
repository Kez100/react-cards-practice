import React from 'react';
import ProfileButton from './ProfileButton';

function ProfileCard({ name, bio, image }) {
    const handleClick = () => {
        alert(`You clicked on ${name}'s profile!`);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            <div className="relative w-64 h-64">
                <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover border-8 border-blue-500 bg-black rounded-xl hover:border-green-500 transition-colors duration-300"
                />
            </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-2xl mb-2 text-blue-600 hover:text-green-500 transition-colors duration-300">{name}</h2>
                <p className="text-gray-700 text-lg italic font-medium leading-relaxed">{bio}</p>
                <div className="flex justify-center">
                    <ProfileButton 
                        onClick={handleClick}
                        text="Let's Play! 🐾"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;