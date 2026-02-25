import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { BookOpen, Microscope, Activity, Bus, ShieldCheck, Music, Layout, Terminal, Coffee, Heart } from 'lucide-react';

export default function Facilities() {
    return (
        <PublicLayout>
            <Head title="Facilities - PPS Purnea" />

            {/* Hero Section */}
            <div className="relative py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=2070&auto=format&fit=crop"
                        alt="Infrastructure"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">World-Class <span className="text-orange-500">Infrastructure</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Creating the perfect environment for learning, discovery, and personal growth.
                    </p>
                </div>
            </div>

            {/* Smart Learning */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" alt="Smart Classroom" className="rounded-2xl shadow-2xl" />
                            <div className="absolute -top-8 -left-8 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden lg:block">
                                <Terminal className="w-10 h-10 mb-2" />
                                <p className="font-bold">Smart Tech</p>
                                <p className="text-xs text-blue-100 uppercase tracking-widest">In Every Room</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Modern Classrooms</span>
                            <h2 className="text-4xl font-bold text-slate-900">Digital-First <span className="text-blue-600">Learning Spaces</span></h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our classrooms are equipped with interactive smart boards, high-speed internet, and ergonomic furniture, ensuring that students stay engaged and comfortable during their learning journey.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                                        <Layout className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Interactive Boards</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                        <Terminal className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-slate-800 text-sm">Wi-Fi Campus</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Facilities Grid */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Explore Our <span className="text-orange-600">Campus Highlights</span></h2>
                        <p className="text-slate-600">Everything a student needs to excel academically and nurture their talents.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Microscope, title: "Modern Science Labs", desc: "State-of-the-art physics, chemistry, and biology labs for practical mastery.", bg: "bg-blue-500" },
                            { icon: BookOpen, title: "Digital Library", desc: "A vast collection of over 20,000 books, journals, and digital resources.", bg: "bg-orange-500" },
                            { icon: Activity, title: "Sports Complex", desc: "Basketball courts, cricket nets, and indoor sports facilities.", bg: "bg-green-600" },
                            { icon: Music, title: "Performing Arts Studio", desc: "Dedicated space for training in music, dance, and theater.", bg: "bg-purple-600" },
                            { icon: Bus, title: "GPS-Enabled Transport", desc: "Safe and secure transport covering all corners of Purnea.", bg: "bg-red-500" },
                            { icon: ShieldCheck, title: "CCTV Surveillance", desc: "24/7 security with 200+ cameras and trained security personnel.", bg: "bg-slate-800" }
                        ].map((fac, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                                <div className={`${fac.bg} h-40 flex items-center justify-center relative overflow-hidden`}>
                                    <fac.icon className="w-20 h-20 text-white opacity-20 absolute rotate-12 -right-4 -bottom-4 group-hover:scale-125 transition-transform" />
                                    <fac.icon className="w-16 h-16 text-white relative z-10" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">{fac.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{fac.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety & Wellness */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-900 rounded-3xl p-6 md:p-12 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="md:w-1/2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-orange-400 text-xs font-bold uppercase tracking-widest border border-white/5">
                                <Heart className="w-3 h-3" /> Priority #1
                            </div>
                            <h2 className="text-4xl font-bold">Student <span className="text-orange-500">Wellness & Safety</span></h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                We prioritize healthy living with an in-house medical clinic, nutritious cafeteria options, and a 100% RO-water purification system throughout the campus.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-bold text-slate-100">Full-time Nursing Staff</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-bold text-slate-100">Hygienic Vegetarian Canteen</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10 hover:bg-white/10 transition-colors">
                                <Coffee className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                                <h4 className="font-bold text-lg">Cafeteria</h4>
                                <p className="text-xs text-slate-400 mt-2">Nutritious Meals</p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10 hover:bg-white/10 transition-colors">
                                <Heart className="w-10 h-10 text-red-500 mx-auto mb-4" />
                                <h4 className="font-bold text-lg">Infirmary</h4>
                                <p className="text-xs text-slate-400 mt-2">Medical Care</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
