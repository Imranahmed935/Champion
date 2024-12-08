import React from 'react';
import pic0  from'../assets/03.jpeg'

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
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen sm:w-10/12 mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={pic0} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.description}</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
