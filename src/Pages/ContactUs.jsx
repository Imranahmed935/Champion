import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import cart from '../../src/assets/cart/cart.jpg'

const ContactUs = () => {
    return (
        <section className="bg-[#e3e6e6]">
            <div className="lg:w-9/12 mx-auto px-4 pb-10">
                <h2 className="text-2xl font-semibold py-4">Contact Us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-white p-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Info</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            <strong>Phone:</strong> (123) 456-7890
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            <strong>Email:</strong> support@Champion.com
                        </p>
                        <div className="flex space-x-4 text-2xl">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                               <FaFacebook/>
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                               <FaTwitter/>
                            </a>
                            <a href="#" className="text-blue-600 hover:text-red-800">
                               <FaLinkedin/>
                            </a>
                            <a href="#" className="text-red-600 hover:text-red-800">
                               <FaInstagram/>
                            </a>
                        </div>
                        <div>
                            <img className='mt-6 rounded lg:w-3/4' src={cart} alt="" />
                        </div>
                    </div>

                    <div className="bg-white p-8">
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-800 mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-800 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="mt-8">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Type your message here..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
