import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "general",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Please describe your issue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const tryEmailJS = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) return false;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      topic: formData.topic,
      subject: formData.subject,
      message: formData.message,
    };

    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    try {
      setLoading(true);
      // 1) Try EmailJS if configured
      const sentViaEmailJS = await tryEmailJS();
      if (sentViaEmailJS) {
        setSubmitted(true);
        return;
      }

      // 2) Fallback to our serverless endpoint
      const resp = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit support ticket");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">Contact <span className="text-orange-500">Support</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Having trouble or questions about Kamraa.In? Send us a message and our team will get back within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Ticket Submitted</h3>
                <p className="text-gray-600">Thanks for reaching out! Our team will email you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Enter your name" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="you@example.com" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                    <select name="topic" value={formData.topic} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border-gray-300 bg-white">
                      <option value="general">General</option>
                      <option value="billing">Billing</option>
                      <option value="technical">Technical</option>
                      <option value="safety">Safety & Verification</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`} placeholder="Brief subject" />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea name="message" rows={6} value={formData.message} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`} placeholder="Describe your issue or question in detail..." />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {serverError && (
                  <div className="text-red-600 text-sm">{serverError}</div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Response time: within 24 hours (Mon–Sat)</p>
                  <button type="submit" disabled={loading} className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? 'Submitting…' : 'Submit Ticket'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-4">Quick Contacts</h3>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">24/7 Helpline:</span> 1800-KAMRAA</p>
                <p><span className="font-semibold">Email:</span> support@kamraa.in</p>
                <p><span className="font-semibold">Emergency:</span> Police 100 • Ambulance 108</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-4">FAQs</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <p className="font-semibold">How long does verification take?</p>
                  <p className="text-sm text-gray-600">Property verification typically completes within 48–72 hours.</p>
                </li>
                <li>
                  <p className="font-semibold">Can I cancel a booking?</p>
                  <p className="text-sm text-gray-600">Yes, see our Refund Policy for time-based refund percentages.</p>
                </li>
                <li>
                  <p className="font-semibold">Do you support student discounts?</p>
                  <p className="text-sm text-gray-600">Eligible institutions may have promotions; contact us with your ID.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
