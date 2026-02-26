import React, { useState } from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import {
    Phone, Mail, ArrowRight, Star, Heart,
    BookOpen, Music, Users, Smile, Sun, Award,
    Zap, Activity, Layout, ShieldCheck, Calendar, Clock,
    UserCheck, ChevronUp, ChevronDown, CheckCircle, Trophy, Quote, FlaskConical, Monitor, Bus
} from 'lucide-react';

export default function Home() {
    // FAQ State
    const [openFaq, setOpenFaq] = useState(0);
    const toggleFaq = (index) => setOpenFaq(openFaq === index ? -1 : index);

    return (
        <PublicLayout>
            <Head title="Home" />

            {/* 1. HERO SECTION: Compact & Professional */}
            <div className="relative min-h-[60vh] md:min-h-[75vh] flex items-center bg-slate-900 overflow-hidden py-12 md:py-0">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                        alt="School Playground"
                        className="w-full h-full object-cover opacity-20"
                    />
                    {/* Deep Blue/Dark Overlay for text contrast */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/90 to-blue-950/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                        {/* LEFT: Text Content */}
                        <div className="lg:w-3/5 text-white space-y-6 animate-fade-in-up text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 text-orange-400 rounded-md border border-orange-500/20 text-[10px] font-black uppercase tracking-widest backdrop-blur-sm mx-auto lg:mx-0">
                                <Star className="w-3 h-3 fill-current" /> Estd. 1998
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                                Igniting <span className="text-orange-500">Minds,</span> <br />
                                Shaping <span className="text-blue-400">Futures.</span>
                            </h1>
                            <p className="text-base md:text-lg text-slate-300 font-bold max-w-xl leading-relaxed mx-auto lg:mx-0">
                                Experience a world-class education that balances academic excellence with character development at Purnea's premier institution.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                                <button className="bg-orange-600 text-white px-6 py-3.5 rounded-md font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg shadow-orange-950/20 flex items-center gap-2 group">
                                    Explore Academics
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-6 py-3.5 rounded-md font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Book a Visit
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: Compact Registration Form */}
                        <div className="lg:w-2/5 w-full flex justify-center lg:justify-end">
                            <div className="bg-white rounded-md p-6 lg:p-7 shadow-2xl w-full max-w-md relative overflow-hidden ring-1 ring-slate-200">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>

                                <h3 className="text-xl font-black text-slate-900 text-center mb-1 relative z-10 uppercase tracking-tight">
                                    Admissions <span className="text-orange-600">Open</span>
                                </h3>
                                <p className="text-center text-slate-500 mb-5 text-[10px] font-bold uppercase tracking-widest relative z-10">Limited seats for 2024-25</p>

                                <form className="space-y-2 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <input type="text" placeholder="Child's Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-orange-500 transition-all text-slate-900 placeholder-slate-400 text-xs font-bold" />
                                        <input type="text" placeholder="Parent's Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-orange-500 transition-all text-slate-900 placeholder-slate-400 text-xs font-bold" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-orange-500 transition-all text-slate-500 text-xs font-bold cursor-pointer appearance-none">
                                            <option>Grade applying for</option>
                                            <option>Pre-Nursery</option>
                                            <option>Nursery - KG</option>
                                            <option>Class 1 - 12</option>
                                        </select>
                                        <input type="tel" placeholder="Mobile Number" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-orange-500 transition-all text-slate-900 placeholder-slate-400 text-xs font-bold" />
                                    </div>
                                    <button className="w-full bg-slate-950 hover:bg-orange-600 text-white font-black py-3 rounded-md shadow-lg transition-all mt-2 text-xs uppercase tracking-widest">
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. STATS OVERLAP - More Compact */}
            <div className="bg-white relative z-20">
                <div className="container mx-auto px-4 -mt-8">
                    <div className="bg-white rounded-md shadow-lg p-5 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border border-slate-100">
                        {[
                            { icon: Users, val: "2500+", label: "Students" },
                            { icon: UserCheck, val: "150+", label: "Teachers" },
                            { icon: Award, val: "50+", label: "Awards" },
                            { icon: Calendar, val: "25+", label: "Years" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1.5 group cursor-default">
                                <div className="w-10 h-10 mx-auto bg-slate-50 text-orange-600 rounded-md border border-slate-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 leading-none pt-1">{stat.val}</h3>
                                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. ABOUT / DISCOVERY SECTION */}
            <section className="py-10 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="md:w-1/2 relative group w-full">
                            <div className="relative">
                                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-orange-500/10 rounded-md"></div>
                                <img
                                    src="https://motherspet.com/blogs/wp-content/webp-express/webp-images/uploads/2024/08/development-early-learning-870x490.jpg.webp"
                                    alt="Kids Learning"
                                    className="rounded-md shadow-xl relative z-10 w-full object-cover h-[350px] md:h-[400px]"
                                />
                                {/* Floating Badge - Sharper */}
                                <div className="absolute bottom-6 -right-3 bg-white p-3 rounded-md shadow-xl z-20 border border-slate-100 hidden lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-50 p-2 rounded-md text-green-600 border border-green-100">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 text-[11px] uppercase tracking-wider">100% Safe</p>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Environment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 space-y-4">
                            <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Who We Are</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                                Nurturing the <br /><span className="text-orange-600">Leaders of Tomorrow</span>
                            </h2>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                At PPS Purnea, we believe that every child is unique. Our mission is to provide a nurturing environment that fosters curiosity, creativity, and character.
                            </p>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium pb-2">
                                Beyond traditional academics, we focus on <strong className="text-slate-900">holistic development</strong>—integrating sports, arts, and technology into our daily curriculum.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center shrink-0 border border-blue-100">
                                        <Sun className="w-4 h-4" />
                                    </div>
                                    <span className="font-black text-slate-800 text-[11px] uppercase tracking-wide">Bright Labs</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-md flex items-center justify-center shrink-0 border border-purple-100">
                                        <Activity className="w-4 h-4" />
                                    </div>
                                    <span className="font-black text-slate-800 text-[11px] uppercase tracking-wide">Active Sports</span>
                                </div>
                            </div>

                            <button className="text-orange-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group border-b-2 border-orange-600/10 pb-1 hover:border-orange-600 transition-all">
                                Read Our Story
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR PROGRAMS - Compact Grid */}
            <section className="py-10 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 max-w-2xl mx-auto space-y-2">
                        <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Our Programs</span>
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Specialized Learning</h2>
                        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Supporting Every Stage of Growth</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { title: "Preschool", desc: "A joyful start with play-based learning.", color: "bg-slate-900", icon: Smile },
                            { title: "Primary School", desc: "Building strong foundations in core subjects.", color: "bg-orange-600", icon: BookOpen },
                            { title: "Middle School", desc: "Encouraging critical thinking and innovation.", color: "bg-slate-800", icon: Zap },
                            { title: "High School", desc: "Preparing for higher education & careers.", color: "bg-blue-600", icon: Award },
                            { title: "Sports Academy", desc: "Professional training in various disciplines.", color: "bg-orange-700", icon: Activity },
                            { title: "Arts & Culture", desc: "Expressing creativity through music & dance.", color: "bg-slate-900", icon: Music },
                        ].map((item, idx) => (
                            <div key={idx} className={`${item.color} rounded-md p-6 text-white hover:bg-opacity-95 transition-all shadow-md relative group overflow-hidden`}>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center mb-4 border border-white/5 backdrop-blur-sm">
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-black mb-1 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-white/70 text-[11px] font-bold leading-relaxed mb-6">{item.desc}</p>
                                    <a href="#" className="mt-auto inline-flex items-center gap-2 font-black uppercase text-[10px] tracking-widest border-b border-white/20 pb-0.5 w-max group-hover:border-white transition-all">
                                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                                <item.icon className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 rotate-12 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CAMPUS FACILITIES - Minimalist */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest">Campus Highlights</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                        {[
                            { icon: Layout, label: "Smart Labs" },
                            { icon: BookOpen, label: "Library" },
                            { icon: Activity, label: "Playground" },
                            { icon: Music, label: "Music Room" },
                            { icon: Calendar, label: "Auditorium" },
                            { icon: ShieldCheck, label: "24/7 Security" },
                        ].map((fac, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 border border-slate-50 p-4 rounded-md hover:bg-slate-50 hover:border-slate-100 transition-colors group">
                                <div className="w-10 h-10 bg-slate-50 text-slate-500 rounded-md flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all border border-slate-100">
                                    <fac.icon className="w-5 h-5" />
                                </div>
                                <span className="font-black text-slate-700 text-[10px] uppercase tracking-wider">{fac.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. LIFE AT PPS - Gallery Grid - Compact */}
            <section className="py-10 bg-slate-950 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-8">
                        <div className="space-y-1">
                            <span className="text-orange-500 font-black tracking-widest uppercase text-[10px] block">Gallery</span>
                            <h2 className="text-3xl font-black uppercase tracking-tight leading-none">Life at PPS</h2>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-orange-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest pb-1 border-b-2 border-orange-500/20">
                            View All <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[150px] md:auto-rows-[180px]">
                        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-md border border-white/5">
                            <img src="https://shishyaschool.in/wp-content/uploads/2023/12/sports-1-min-scaled.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <h4 className="font-black text-sm uppercase tracking-wider">Annual Sports Day</h4>
                                <p className="text-slate-400 text-[10px] font-bold">Celebrating Spirit</p>
                            </div>
                        </div>

                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-md border border-white/5">
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gallery" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-md border border-white/5">
                            <img src="https://centrepointschools.com/blogs/wp-content/uploads/2024/09/Child-learning-styles.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gallery" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-md border border-white/5">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gallery" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-md border border-white/5">
                            <img src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2017/09/LearningPeriod_Header.png?resize=1200%2C675" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gallery" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section - Minimal */}
            <section className="py-10 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10 space-y-1">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">Questions?</h2>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest opacity-70">Common Information for Parents</p>
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: "What is the student-teacher ratio?", a: "We maintain a 20:1 ratio for personal attention." },
                            { q: "Do you provide transport?", a: "Yes, GPS-enabled buses covering all major routes in Purnea." },
                            { q: "What extracurriculars are offered?", a: "Cricket, Football, Music, Robotics, and Arts." },
                            { q: "Is the campus secure?", a: "24/7 CCTV and professional guards at all gates." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-md border border-slate-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-black text-slate-800 text-xs md:text-sm uppercase tracking-tight">{faq.q}</span>
                                    {openFaq === idx ? (
                                        <ChevronUp className="w-4 h-4 text-orange-600" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-slate-300" />
                                    )}
                                </button>
                                <div className={`px-4 pb-4 text-slate-500 text-xs font-medium leading-relaxed transition-all duration-300 ${openFaq === idx ? 'block' : 'hidden'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FOOTER CTA */}
            <div className="bg-orange-600 py-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="container mx-auto px-4 text-center text-white relative z-10">
                    <h2 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">Join the PPS Family</h2>
                    <p className="text-orange-100 text-[11px] font-bold uppercase tracking-widest mb-6 max-w-lg mx-auto leading-relaxed">
                        Admissions open for 2024-25. Shape your child's future starting today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <button className="bg-white text-orange-600 px-6 py-3 rounded-md font-black text-xs uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-all">
                            Apply Online
                        </button>
                        <button className="bg-orange-700 text-white px-6 py-3 rounded-md font-black text-xs uppercase tracking-widest hover:bg-orange-800 transition-colors border border-orange-500/30">
                            Prospectus
                        </button>
                    </div>
                </div>
            </div>

        </PublicLayout>
    );
}
