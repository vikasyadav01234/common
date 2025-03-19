import React from 'react';

function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our application! We are dedicated to providing the best service to our community.
          Our mission is to connect people through events and activities that foster engagement and collaboration.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team is passionate about making a positive impact and we invite you to join us in our journey.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Community Engagement</li>
          <li>Inclusivity</li>
          <li>Innovation</li>
          <li>Collaboration</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Get Involved</h2>
        <p className="text-lg text-gray-700">
          We encourage you to participate in our events and activities. Together, we can make a difference!
        </p>
      </div>
    </div>
  );
}


export default AboutPage;
