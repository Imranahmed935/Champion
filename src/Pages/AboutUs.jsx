import React from 'react';
import pic3 from '../assets/20.jpg';
const AboutUs = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 lg:w-10/12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        At Champion's Choice, we’re passionate about delivering top-notch sports equipment 
                        and empowering athletes to achieve their goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src={pic3}
                            alt="About us"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h3>
                        <p className="text-gray-600 mb-6">
                            Founded with the goal of bridging the gap between quality and affordability, we provide a 
                            wide range of sports equipment tailored for professionals and beginners alike. Our team is 
                            dedicated to offering products that not only enhance performance but also inspire confidence 
                            in every athlete.
                        </p>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600 mb-6">
                            Our mission is simple: to foster a love for sports by making premium equipment accessible 
                            to everyone. Whether you’re chasing gold or just staying active, Champion's Choice is here 
                            to support your journey.
                        </p>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Top-quality products at competitive prices.</li>
                            <li>Customer-first approach with unparalleled support.</li>
                            <li>A commitment to innovation and sustainability.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
