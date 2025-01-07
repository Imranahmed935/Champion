import React from 'react';
import pic0 from '../assets/03.jpeg';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'The Rise of AI in Sports',
            description: 'Discover how artificial intelligence is revolutionizing the world of sports, from training to game strategies.',
        },
        {
            id: 2,
            title: 'Sustainable Sports Equipment',
            description: 'Learn about eco-friendly sports gear and how it is shaping the future of the industry.',
        },
        {
            id: 3,
            title: 'Top 10 Exercises for Athletes',
            description: 'Get insights into the best exercises to enhance your athletic performance and prevent injuries.',
        },
        {
            id: 4,
            title: 'Top 10 Exercises for Athletes',
            description: 'Get insights into the best exercises to enhance your athletic performance and prevent injuries.',
        },
    ];

    return (
        <div className="p-6 min-h-screen sm:w-9/12 mx-auto">
            <h1 className="text-2xl font-semibold mb-8 text-gray-600">Our Latest Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white border border-gray-200"
                    >
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={pic0}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-5">
                            <h2 className="text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors duration-200 mb-2">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-600 mb-4">
                                {post.description.length > 100
                                    ? `${post.description.slice(0, 100)}...`
                                    : post.description}
                            </p>
                            <button className="text-sm font-medium text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
