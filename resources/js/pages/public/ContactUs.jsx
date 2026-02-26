import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactUs() {
    return (
        <PublicLayout>
            <Head title="Contact Us - PPS Purnea" />

            {/* 1. HERO SECTION: Clean & Connected */}
            <section className="bg-white pt-10 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8 mb-16">
                        <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] rounded-full">
                            Connect With Us
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95]">
                            Get in <br />
                            <span className="text-orange-600">Touch</span>
                        </h1>
                        <p className="text-slate-400 text-sm md:text-xl font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-80">
                            Have questions about admissions or academics? Our team is here to provide all the information you need.
                        </p>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
                            alt="Contact Support"
                            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 2. CONTACT CHANNELS: Clean Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: MapPin, title: "VISIT US", content: "Ram Bagh, Purnea, Bihar - 854301" },
                            { icon: Phone, title: "CALL US", content: "+91 98765 43210 / 06454-223344" },
                            { icon: Mail, title: "EMAIL US", content: "info@ppspurnea.com" },
                            { icon: Clock, title: "OFFICE HOURS", content: "Mon - Sat: 08 AM - 04 PM" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 mb-8 bg-slate-50 text-slate-950 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-all">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-[10px] font-black mb-4 text-slate-950 uppercase tracking-[0.3em]">{item.title}</h3>
                                <p className="text-slate-400 font-bold text-[10px] leading-relaxed uppercase tracking-widest opacity-80">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CONTACT FORM: Premium White */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-50 p-8 md:p-20 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Inquiry Form</span>
                                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                                        Send a <br /> <span className="text-orange-600">Message</span>
                                    </h2>
                                </div>
                                <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed uppercase tracking-widest opacity-80">
                                    Fill out the form below and our administrative office will get back to you within 24 business hours.
                                </p>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-950 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-sm">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-50">
                                <form className="space-y-6">
                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input type="text" placeholder="YOUR NAME" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500 text-[10px] font-black placeholder-slate-300 uppercase tracking-widest" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input type="email" placeholder="YOUR EMAIL" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500 text-[10px] font-black placeholder-slate-300 uppercase tracking-widest" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                        <textarea rows="4" placeholder="HOW CAN WE HELP?" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500 text-[10px] font-black placeholder-slate-300 uppercase tracking-widest resize-none"></textarea>
                                    </div>
                                    <button className="w-full bg-orange-600 text-white font-black py-5 rounded-xl shadow-2xl shadow-orange-100 hover:bg-slate-950 transition-all text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-3">
                                        Submit Inquiry <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MAP SECTION: Clean Grey Overlay */}
            <section className="pt-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="relative rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border-8 border-white h-[500px]">
                        <div className="absolute inset-0 bg-slate-950/10"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115200!2d87.4!3d25.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQyJzAwLjAiTiA4N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-10 left-10 max-w-xs bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 transition-all hover:scale-105 pointer-events-none sm:pointer-events-auto">
                            <MapPin className="w-10 h-10 text-orange-600 mb-6" />
                            <h3 className="text-xl font-black text-slate-950 mb-2 uppercase tracking-tighter">Locate Campus</h3>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-relaxed opacity-80 mb-6">Explore our facilities in person. Ram Bagh, Purnea.</p>
                            <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] group">
                                Open in Maps <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-32 bg-slate-50 text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <MessageSquare className="w-16 h-16 text-orange-600 mx-auto" />
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                            Ready for <br /> <span className="text-orange-600">Mastery?</span>
                        </h2>
                        <div className="pt-10 flex flex-col sm:flex-row justify-center gap-8">
                            <Link href="/admissions" className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200">
                                Apply For Admission
                            </Link>
                            <Link href="/" className="bg-white text-slate-950 border border-slate-200 px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all">
                                Return Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
