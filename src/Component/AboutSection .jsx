import React from 'react'
import Marquee from 'react-fast-marquee'

const AboutSection  = () => {
  return (
    <div>
  <div className="bg-white mt-10">
    <header className="bg-green-500 text-white text-center py-12 w-11/12 mx-auto rounded-md mt-10">
      <h1 className="text-4xl font-bold mt-16">About Us</h1>
    </header>

    <section className="text-center py-12 px-4">
      <h2 className="text-2xl font-bold">Mission And Values</h2>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Our mission is to provide top-notch AI models with a focus on reliability, efficiency, and user support.
      </p>
      <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
        <div className="transition transform hover:scale-110">
          <h3 className="text-xl font-bold">150+</h3>
          <p className="text-gray-700">AI Models</p>
        </div>
        <div className="transition transform hover:scale-110">
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-gray-700">Years of AI Development</p>
        </div>
      </div>
    </section>

    <section className="bg-green-500 text-white py-12 px-4 w-11/12 mx-auto rounded-md">
      <h2 className="text-2xl font-bold text-center">Our Vision</h2>
      <p className="mt-4 text-center max-w-2xl mx-auto">
        AI solutions for everyone. We aim to empower individuals and businesses with easy access to cutting-edge AI models.
      </p>
    </section>

    <section className="text-center py-12 px-4">
      <h2 className="text-2xl font-bold">Our AI Model Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
          <h3 className="text-xl font-bold">Image Generation</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
          <h3 className="text-xl font-bold">Text Analysis</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
          <h3 className="text-xl font-bold">Voice & Audio AI</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
          <h3 className="text-xl font-bold">Automation & Chatbots</h3>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl font-bold text-center">Cutting-Edge AI Technology</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
        <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold">Pre-trained Models</h3>
          <p className="text-gray-700 mt-2">Ready-to-use AI models for faster integration into your projects.</p>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold">Customizable Models</h3>
          <p className="text-gray-700 mt-2">Easily adapt models to suit your unique needs.</p>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold">High-Performance AI</h3>
          <p className="text-gray-700 mt-2">Optimized for speed and accuracy to give you the best results.</p>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold">Secure Deployment</h3>
          <p className="text-gray-700 mt-2">Ensure your AI applications run safely and efficiently.</p>
        </div>
      </div>
    </section>

    <section className="text-center w-11/12 mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold">Why Choose Our AI Models</h2>
   <div className="w-full bg-gray-50 py-4">
      <Marquee gradient={false} speed={50}>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors mx-2 inline-block">
          <h3 className="text-xl font-bold">Image Generation</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors mx-2 inline-block">
          <h3 className="text-xl font-bold">Text Analysis</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors mx-2 inline-block">
          <h3 className="text-xl font-bold">Voice & Audio AI</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors mx-2 inline-block">
          <h3 className="text-xl font-bold">Automation & Chatbots</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors mx-2 inline-block">
          <h3 className="text-xl font-bold">Predictive Analytics</h3>
        </div>
      </Marquee>
    </div>
    </section>

    <section className="bg-green-500 text-white text-center py-12 px-4">
      <h2 className="text-2xl font-bold">User Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
        <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
          <p>"These AI models saved me weeks of development time. Highly recommended!"</p>
          <h3 className="mt-4 font-bold">- Developer A</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
          <p>"Reliable and easy to integrate into our products. Excellent support team."</p>
          <h3 className="mt-4 font-bold">- Startup B</h3>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
          <p>"The AI performance is outstanding. Models are flexible and high-quality."</p>
          <h3 className="mt-4 font-bold">- Company C</h3>
        </div>
      </div>
    </section>

    <section className="text-center py-12 px-4 w-full">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-8">
        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
          <h3 className="text-xl font-bold">How do I purchase an AI model?</h3>
          <p className="mt-2 text-gray-700">You can buy AI models directly from our website with a secure checkout process.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
          <h3 className="text-xl font-bold">Can I customize the models?</h3>
          <p className="mt-2 text-gray-700">Yes! Many of our models are fully customizable to fit your requirements.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
          <h3 className="text-xl font-bold">Do you provide support?</h3>
          <p className="mt-2 text-gray-700">Absolutely! Our team is available to assist with setup, integration, and troubleshooting.</p>
        </div>
      </div>
    </section>


  </div>
</div>

  )
}

export default AboutSection 