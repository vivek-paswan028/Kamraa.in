import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">
            About <span className="text-orange-500">Kamraa.In</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to making student housing accessible, affordable, and hassle-free. 
            Our platform connects students with quality rental accommodations across India.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-orange-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize student housing by providing a seamless platform where students can find 
              affordable, safe, and comfortable accommodations near their educational institutions.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted platform for student housing in India, making quality 
              accommodation accessible to every student regardless of their background.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            Why Choose <span className="text-orange-500">Kamraa.In</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                We ensure competitive pricing and transparent costs with no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Verified Properties</h3>
              <p className="text-gray-600">
                All properties are thoroughly verified for safety and quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support to help you with any queries or issues.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-orange-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Our Impact in Numbers
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Verified Properties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're a passionate team of professionals dedicated to making student housing better. 
            Our diverse backgrounds in technology, real estate, and education help us understand 
            the unique needs of students.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-orange-100">
                <img src="/images/vivek.PNG" alt="Vivek Paswan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Vivek Paswan</h3>
              <p className="text-orange-500 mb-3 text-lg">Founder & CEO</p>
              <p className="text-gray-600">
                Engineering student with 3+ years of experience in Software Development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-orange-100">
                <img src="/images/ankit.jpg" alt="Ankit Yadav" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Ankit Yadav</h3>
              <p className="text-orange-500 mb-3 text-lg">Head of Operations</p>
              <p className="text-gray-600">
                Expert in property management and business with 5+ years experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-orange-100">
                <img src="/images/deepak.jpg" alt="Deepak Yadav" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Deepak Yadav</h3>
              <p className="text-orange-500 mb-3 text-lg">CTO</p>
              <p className="text-gray-600">
                Tech enthusiast focused on building scalable solutions for student housing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
