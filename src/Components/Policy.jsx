import React, { useState } from "react";
import { Link } from "react-router-dom";

const Policy = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Information We Collect</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Personal information (name, email, phone number)</li>
              <li>• Academic details (institution, course, year)</li>
              <li>• Location preferences and search history</li>
              <li>• Payment information (processed securely)</li>
              <li>• Communication records with property owners</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">How We Use Your Information</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• To connect you with suitable rental properties</li>
              <li>• To verify your student status and eligibility</li>
              <li>• To process payments and transactions</li>
              <li>• To provide customer support and assistance</li>
              <li>• To improve our services and user experience</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Data Protection</h3>
            <p className="text-gray-600 mb-3">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• SSL encryption for all data transmission</li>
              <li>• Secure servers with regular security audits</li>
              <li>• Limited access to personal data by authorized personnel only</li>
              <li>• Regular backup and disaster recovery procedures</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Your Rights</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Access and review your personal information</li>
              <li>• Request correction of inaccurate data</li>
              <li>• Request deletion of your account and data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• File complaints about data handling</li>
            </ul>
          </div>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Acceptance of Terms</h3>
            <p className="text-gray-600">
              By using Kamraa.In, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our platform.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">User Eligibility</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Must be a current or prospective student</li>
              <li>• Must be at least 18 years old</li>
              <li>• Must provide accurate and complete information</li>
              <li>• Must comply with all applicable laws and regulations</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Platform Usage</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Use the platform for legitimate rental purposes only</li>
              <li>• Do not engage in fraudulent or deceptive practices</li>
              <li>• Respect other users' privacy and rights</li>
              <li>• Do not attempt to circumvent security measures</li>
              <li>• Report any suspicious or inappropriate behavior</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Limitation of Liability</h3>
            <p className="text-gray-600">
              Kamraa.In acts as an intermediary platform. We are not responsible for:
            </p>
            <ul className="text-gray-600 space-y-2 mt-3">
              <li>• Property conditions or disputes between tenants and landlords</li>
              <li>• Financial losses due to rental agreements</li>
              <li>• Personal injury or property damage</li>
              <li>• Third-party services or external websites</li>
            </ul>
          </div>
        </div>
      )
    },
    refund: {
      title: "Refund Policy",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Service Fees</h3>
            <p className="text-gray-600 mb-3">
              Our platform charges a one-time service fee for successful property bookings:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• 5% of the first month's rent (maximum ₹2,000)</li>
              <li>• Processing fee: ₹500 (non-refundable)</li>
              <li>• Verification fee: ₹300 (non-refundable)</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Refund Eligibility</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Full refund if property is unavailable after booking</li>
              <li>• 80% refund if cancellation within 24 hours of booking</li>
              <li>• 50% refund if cancellation within 48 hours of booking</li>
              <li>• No refund after 48 hours or if tenant moves in</li>
              <li>• Processing and verification fees are non-refundable</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Refund Process</h3>
            <ol className="text-gray-600 space-y-2">
              <li>1. Submit refund request through our support portal</li>
              <li>2. Provide booking details and reason for refund</li>
              <li>3. Our team will review within 2-3 business days</li>
              <li>4. Approved refunds processed within 5-7 business days</li>
              <li>5. Refund credited to original payment method</li>
            </ol>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Dispute Resolution</h3>
            <p className="text-gray-600">
              For disputes regarding refunds or service quality, please contact our 
              customer support team. We aim to resolve all issues amicably and fairly.
            </p>
          </div>
        </div>
      )
    },
    safety: {
      title: "Safety Guidelines",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Property Verification</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• All properties undergo thorough verification</li>
              <li>• Safety inspections conducted regularly</li>
              <li>• Fire safety compliance verified</li>
              <li>• Electrical and plumbing systems checked</li>
              <li>• Security measures evaluated</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Personal Safety Tips</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Always meet property owners in public places initially</li>
              <li>• Verify property ownership documents</li>
              <li>• Read rental agreements carefully before signing</li>
              <li>• Keep copies of all documents and payments</li>
              <li>• Report any suspicious activity immediately</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Emergency Contacts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-black mb-2">Kamraa.In Support</h4>
                <p className="text-gray-600">24/7 Helpline: 1800-KAMRAA</p>
                <p className="text-gray-600">Email: support@kamraa.in</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Emergency Services</h4>
                <p className="text-gray-600">Police: 100</p>
                <p className="text-gray-600">Ambulance: 108</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-black mb-3">Community Guidelines</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Respect your neighbors and property rules</li>
              <li>• Maintain cleanliness and hygiene</li>
              <li>• Follow noise regulations and quiet hours</li>
              <li>• Report maintenance issues promptly</li>
              <li>• Be considerate of shared spaces</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div id="policy" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">
            Our <span className="text-orange-500">Policies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in transparency and trust. Here are our comprehensive policies 
            designed to protect your rights and ensure a safe, reliable experience.
          </p>
        </div>

        {/* Policy Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(policies).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                {policies[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            {policies[activeTab].title}
          </h2>
          {policies[activeTab].content}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Questions About Our Policies?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help clarify any policy-related questions.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/support" className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
                Contact Support
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
