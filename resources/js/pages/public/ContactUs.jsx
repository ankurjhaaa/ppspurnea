import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';

export default function ContactUs() {
    return (
        <PublicLayout>
            <Head title="Contact Us - PPS Purnea" />

            {/* Hero Section - Compact */}
            <div className="relative py-12 md:py-14 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-[10px] mb-2 block">Connect With Us</span>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Get in <span className="text-orange-500">Touch</span></h1>
                    <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto font-bold leading-relaxed">
                        Have questions? We're here to help. Reach out via any channel below.
                    </p>
                </div>
            </div>

            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Contact Info - Compact Column */}
                        <div className="lg:col-span-1 space-y-3">
                            {[
                                { icon: MapPin, title: "Visit Us", content: "Ram Bagh, Purnea, Bihar - 854301", color: "orange" },
                                { icon: Phone, title: "Call Us", content: "+91 98765 43210 / 06454-223344", color: "blue" },
                                { icon: Mail, title: "Email Us", content: "info@ppspurnea.com / admissions@ppspurnea.com", color: "green" },
                                { icon: Clock, title: "Work Hours", content: "Mon - Sat: 08:00 AM - 04:00 PM", color: "slate" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-md border border-slate-100 flex items-start gap-4 hover:bg-slate-100 transition-colors">
                                    <div className="w-10 h-10 bg-white text-slate-900 rounded-md flex items-center justify-center shrink-0 border border-slate-200">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-slate-900 text-xs uppercase tracking-tight mb-0.5">{item.title}</h3>
                                        <p className="text-slate-500 text-[11px] font-bold leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Social Links - Compact */}
                            <div className="pt-4 space-y-3">
                                <h4 className="font-black text-slate-900 text-[10px] uppercase tracking-widest px-1">Social Networks</h4>
                                <div className="flex gap-2">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 rounded-md bg-slate-900 text-white flex items-center justify-center hover:bg-orange-600 transition-all border border-slate-800">
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Professional Density */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-md shadow-xl border border-slate-100 p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                                    <div className="w-10 h-10 bg-orange-600/10 text-orange-600 rounded-md flex items-center justify-center border border-orange-500/20">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight leading-none">Send a <span className="text-orange-600">Message</span></h2>
                                </div>

                                <form className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold text-slate-500 appearance-none cursor-pointer">
                                            <option>General Enquiry</option>
                                            <option>Admission Related</option>
                                            <option>Academics Related</option>
                                            <option>Career Opportunities</option>
                                            <option>Feedback</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                        <textarea rows="4" placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold"></textarea>
                                    </div>
                                    <div className="md:col-span-2 pt-2">
                                        <button className="w-full bg-slate-950 text-white font-black py-4 rounded-md shadow-lg shadow-black/10 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                                            <Send className="w-4 h-4" />
                                            Send Message Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section - Industrial Style */}
            <section className="h-[400px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-1000">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-[1px]">
                    <div className="bg-white p-6 md:p-8 rounded-md shadow-2xl text-center max-w-sm border border-slate-100 mx-4 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-orange-600"></div>
                        <MapPin className="w-10 h-10 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Locate Our Campus</h3>
                        <p className="text-slate-500 text-[11px] font-bold mb-6 uppercase tracking-wide leading-relaxed opacity-80">Rambagh, Purnea. Visit us to experience our infrastructure first-hand.</p>
                        <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-950 text-white px-8 py-3 rounded-md font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg">
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
