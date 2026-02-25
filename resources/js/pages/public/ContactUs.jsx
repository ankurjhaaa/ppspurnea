import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';

export default function ContactUs() {
    return (
        <PublicLayout>
            <Head title="Contact Us - PPS Purnea" />

            {/* Hero Section */}
            <div className="relative py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Get in <span className="text-orange-500">Touch</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Have questions? We're here to help. Reach out to us via any of the channels below.
                    </p>
                </div>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {[
                                { icon: MapPin, title: "Visit Us", content: "Ram Bagh, Purnea, Bihar - 854301, India", color: "orange" },
                                { icon: Phone, title: "Call Us", content: "+91 98765 43210 / +91 06454 223344", color: "blue" },
                                { icon: Mail, title: "Email Us", content: "info@ppspurnea.com / admissions@ppspurnea.com", color: "green" },
                                { icon: Clock, title: "Office Hours", content: "Mon - Sat: 08:00 AM - 04:00 PM", color: "purple" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                                    <div className={`w-11 h-11 bg-${item.color}-100 text-${item.color}-600 rounded-xl flex items-center justify-center shrink-0`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Social Links */}
                            <div className="pt-6">
                                <h4 className="font-bold text-slate-800 mb-4 px-2">Follow Our Updates</h4>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-orange-600 transition-all hover:-translate-y-1 shadow-lg">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">Send us a <span className="text-orange-600">Message</span></h2>
                                </div>

                                <form className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-slate-500 appearance-none">
                                            <option>General Enquiry</option>
                                            <option>Admission Related</option>
                                            <option>Academics Related</option>
                                            <option>Career Opportunities</option>
                                            <option>Feedback</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                                        <textarea rows="5" placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"></textarea>
                                    </div>
                                    <div className="md:col-span-2 pt-4">
                                        <button className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-600/30 hover:bg-orange-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg uppercase tracking-wider">
                                            <Send className="w-6 h-6" />
                                            Send Message Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Placeholder */}
            <section className="h-[500px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[2px]">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl text-center max-w-sm border border-slate-100 animate-fade-in-up mx-4">
                        <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Find Us on Google Maps</h3>
                        <p className="text-slate-500 text-sm mb-6">Experience our campus in person. We are located in the heart of Purnea.</p>
                        <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
