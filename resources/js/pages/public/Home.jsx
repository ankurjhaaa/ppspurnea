import React, { useState } from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Phone, Mail, ArrowRight, Star, Heart,
    BookOpen, Music, Users, Smile, Sun, Award,
    Zap, Activity, Layout, ShieldCheck, Calendar, Clock,
    UserCheck, ChevronUp, ChevronDown, CheckCircle, Trophy, Quote, FlaskConical, Monitor, Bus, Play, GraduationCap, Send
} from 'lucide-react';

export default function Home() {
    return (
        <PublicLayout>
            <Head title="Home - Purnea Public School" />

            {/* 1. HERO SECTION: Image Background & Wave */}
            <section className="relative min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden bg-slate-900">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000"
                        className="w-full h-full object-cover opacity-40 lg:opacity-50"
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/40 to-slate-950/60"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-10 pb-20 lg:pt-0 lg:pb-0">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Text Content: High Contrast White */}
                        <div className="lg:w-6/12 text-center lg:text-left space-y-6 lg:space-y-8">
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-2xl">
                                India's 1st <span className="text-orange-500">Foundation</span> <br className="hidden lg:block" />
                                Focused Academy <br className="hidden lg:block" />
                                in Purnea
                            </h1>
                            <p className="text-slate-100 text-sm md:text-xl font-bold max-w-xl mx-auto lg:mx-0 leading-relaxed uppercase tracking-wider opacity-90 drop-shadow-md">
                                Combining an International Curriculum with physical excellence to give your child a head-start in life.
                            </p>
                            
                        </div>

                        {/* Inquiry Form Card: Clean White Focus */}
                        <div className="lg:w-5/12 w-full max-w-md mx-auto">
                            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl shadow-black/40 border-4 border-white/10 relative overflow-hidden">
                                <form className="space-y-4">
                                    <div className="space-y-1"> 
                                        <input type="text" placeholder="Parent / Guardian Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-orange-500 text-xs font-bold placeholder-slate-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <input type="tel" placeholder="Phone No" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-orange-500 text-xs font-bold placeholder-slate-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <input type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-orange-500 text-xs font-bold placeholder-slate-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <input type="text" placeholder="Child Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-orange-500 text-xs font-bold placeholder-slate-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <input type="text" placeholder="Age of Child" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-orange-500 text-xs font-bold placeholder-slate-400" />
                                    </div>

                                    <button className="w-full bg-indigo-700 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-slate-900 transition-all text-xs uppercase tracking-[0.3em] mt-4 flex items-center justify-center gap-3">
                                        Submit Enquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SVG Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] lg:h-[80px] fill-slate-50">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2.29,1200,52.47V0Z" opacity=".25"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,52.93,23.11,106.65,47.58,164.81,41.29,58.16-6.3,113.56-42,170.2-51.27,24.31-4,47.78-2.61,71,2.58V0Z"></path>
                    </svg>
                </div>
            </section>

            {/* 2. ADVANTAGE SECTION: High Spacing */}
            <section className="py-24 lg:py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16 text-center">
                    <div className="max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">The PPS Difference</span>
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-950 uppercase tracking-tighter">
                            Why Parents Trust Us
                        </h2>
                        <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Activity, title: "EXCELLENCE MODEL", desc: "Our curriculum balances academic rigor with physical fitness sessions daily." },
                            { icon: BookOpen, title: "GLOBAL CURRICULUM", desc: "NEP 2020 aligned teaching methods focused on future-ready skills." },
                            { icon: ShieldCheck, title: "SAFE & SECURE", desc: "100% CCTV coverage and verified staff ensures child safety at all times." },
                            { icon: Trophy, title: "FOUNDATION LEADERS", desc: "Specializing in early education to build strong mental foundations." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 group">
                                <div className="w-16 h-16 mx-auto mb-8 bg-slate-50 text-slate-950 rounded-2xl flex items-center justify-center transition-all group-hover:bg-slate-950 group-hover:text-white shadow-sm border border-slate-200/50">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xs font-black mb-4 text-slate-950 uppercase tracking-[0.2em]">{item.title}</h3>
                                <p className="text-slate-400 font-bold text-[10px] leading-relaxed uppercase tracking-widest opacity-80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. OUR PROGRAMS */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                        <div className="space-y-4 text-center md:text-left mx-auto md:mx-0">
                            <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Age-Appropriate Learning</span>
                            <h2 className="text-4xl lg:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-none">Our Programs</h2>
                        </div>
                        <Link href="/academics" className="text-slate-950 font-black text-[11px] uppercase tracking-[0.3em] border-b-2 border-orange-600 pb-2 hover:text-orange-600 transition-all flex items-center gap-4 mx-auto md:mx-0">
                            Syllabus Overview <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "PLAYGROUP", age: "1.5+ YEARS", img: "https://motherspet.com/blogs/wp-content/webp-express/webp-images/uploads/2024/08/development-early-learning-870x490.jpg.webp" },
                            { title: "PRE-NURSERY", age: "2+ YEARS", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400" },
                            { title: "NURSERY", age: "3+ YEARS", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400" },
                            { title: "KG / SENIOR", age: "4+ YEARS", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400" }
                        ].map((prog, i) => (
                            <div key={i} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col h-full hover:bg-white transition-colors duration-500">
                                <div className="h-64 overflow-hidden relative border-b border-slate-100">
                                    <img src={prog.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={prog.title} />
                                    <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-8 pb-12 flex flex-col items-center text-center flex-grow">
                                    <h3 className="text-slate-950 font-black text-xl mb-2 uppercase tracking-tighter">{prog.title}</h3>
                                    <span className="text-[10px] font-black text-orange-600 tracking-[0.2em] mb-6">{prog.age}</span>
                                    <p className="text-slate-400 text-[10px] font-bold leading-relaxed uppercase tracking-widest opacity-80 mb-8">
                                        Nurturing creativity and foundational social skills.
                                    </p>
                                    <button className="mt-auto text-slate-950 font-black text-[9px] uppercase tracking-[0.3em] bg-white border border-slate-200 px-8 py-4 rounded-xl hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VIDEO SHORTS: 2 Columns on Mobile */}
            <section className="py-24 lg:py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-20">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block mb-4">Life at PPS</span>
                        <h2 className="text-4xl lg:text-7xl font-black text-slate-950 uppercase tracking-tighter">Campus <span className="text-orange-600">Reels</span></h2>
                        <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {[
                            { title: "Science Highlights", thumb: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=400" },
                            { title: "Annual Sports Meet", thumb: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=400" },
                            { title: "Morning Assembly", thumb: "https://images.unsplash.com/photo-1577891913216-3d9691043f11?q=80&w=400" },
                            { title: "Tech Lab Session", thumb: "https://images.unsplash.com/photo-1519389950473-47bac0a9a804?q=80&w=400" }
                        ].map((vid, i) => (
                            <div key={i} className="group relative aspect-[9/16] rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-2 lg:border-4 border-white cursor-pointer">
                                <img src={vid.thumb} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt={vid.title} />
                                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                                    <div className="w-10 h-10 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500 scale-90 group-hover:scale-100">
                                        <Play className="w-4 h-4 lg:w-6 lg:h-6 text-white fill-current" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8">
                                    <h4 className="text-white font-black text-[9px] lg:text-xs uppercase tracking-widest leading-tight">{vid.title}</h4>
                                    <p className="text-orange-500 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] mt-1 lg:mt-2">#ppsShorts</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SAFETY SECTION: Clean Dark Contrast */}
            <section className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12 order-2 lg:order-1">
                            <div className="space-y-4 text-center lg:text-left">
                                <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-[10px] block">Safe Environment</span>
                                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none">Your Child's Safety <br className="hidden lg:block" /> Is Our Priority</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                {[
                                    { icon: ShieldCheck, title: "CERTIFIED CARE", desc: "ISO 9001 Approved educational systems." },
                                    { icon: Monitor, title: "24/7 CCTV", desc: "Full campus surveillance with alerts." },
                                    { icon: UserCheck, title: "VERIFIED STAFF", desc: "Regular background checks for all staff." },
                                    { icon: Bus, title: "SAFE TRANSPORT", desc: "GPS tracking on all school buses." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 shadow-sm">
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <h4 className="font-black text-xs uppercase tracking-widest">{item.title}</h4>
                                        <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative rounded-[3.5rem] overflow-hidden shadow-3xl border-4 border-white/10">
                                <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600" className="w-full h-[400px] lg:h-[600px] object-cover" alt="Safety" />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent opacity-40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS: Horizontal Scroll on Mobile */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-8xl font-black text-slate-950 uppercase tracking-tighter mb-6">Parent Stories</h2>
                        <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 pb-10 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="min-w-[85%] md:min-w-[45%] lg:min-w-0 snap-center bg-slate-50 p-12 lg:p-16 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
                                <Quote className="w-12 h-12 text-orange-600 mb-8 opacity-20" />
                                <p className="text-slate-900 font-bold text-sm lg:text-base uppercase tracking-wider leading-relaxed mb-10">
                                    "The school has remarkably improved my child's confidence and social skills. The foundation building approach is exactly what we were looking for in Purnea."
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-lg">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Parent" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h5 className="font-black text-sm text-slate-950 uppercase tracking-widest">Akash Sharma</h5>
                                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mt-1">Class {i + 2} Parent</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA: Super Clean White */}
            <section className="py-32 lg:py-48 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="w-20 h-20 rounded-2xl bg-orange-600 flex items-center justify-center text-white mx-auto shadow-2xl shadow-orange-100">
                            <GraduationCap className="w-10 h-10" />
                        </div>
                        <h2 className="text-5xl lg:text-9xl font-black text-slate-950 uppercase tracking-tighter leading-none hover:text-orange-600 transition-colors">
                            Enroll <br /> Today
                        </h2>
                        <p className="text-slate-400 text-xs lg:text-base font-black uppercase tracking-[0.4em] max-w-lg mx-auto leading-relaxed">
                            Give your child the foundation they deserve. Join the Purnea Public School family.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
                            <button className="bg-slate-950 text-white px-12 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.4em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200 border-2 border-slate-950">
                                Start Application
                            </button>
                            <Link href="/contact-us" className="bg-white text-slate-950 border border-slate-200 px-12 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all">
                                Visit Campus
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
