import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { Award, BookOpen, Users, Star, ShieldCheck, Heart, ArrowRight, Target, Compass } from 'lucide-react';

export default function AboutUs() {
    return (
        <PublicLayout>
            <Head title="About Us - PPS Purnea" />

            {/* Hero Section - Compact */}
            <div className="relative py-12 md:py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1523050853063-913ec3673c2e?q=80&w=2070&auto=format&fit=crop"
                        alt="School Building"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-[10px] mb-2 block">Our Legacy</span>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">About <span className="text-orange-500">PPS Purnea</span></h1>
                    <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto font-bold leading-relaxed">
                        A legacy of excellence in education, nurturing young minds since 1998 with dedication and passion.
                    </p>
                </div>
            </div>

            {/* Mission & Vision - More Compact & Professional */}
            <section className="py-10 bg-white text-slate-800 border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                        <div className="md:w-1/2 space-y-6">
                            <div className="p-5 bg-slate-50 border border-slate-100 rounded-md relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 pt-full bg-orange-600 h-full"></div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Target className="w-5 h-5 text-orange-600" />
                                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Our Mission</h2>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    To provide a stimulating learning environment that encourages every student to reach their full potential and become responsible global citizens.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-50 border border-slate-100 rounded-md relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 pt-full bg-blue-600 h-full"></div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Compass className="w-5 h-5 text-blue-600" />
                                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Our Vision</h2>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    We envision a future where our students lead with integrity, innovate with passion, and contribute meaningfully to society through academic and personal excellence.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative w-full">
                            <div className="relative group">
                                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-orange-500/10 rounded-md"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                                    alt="Classroom"
                                    className="rounded-md shadow-xl relative z-10 w-full object-cover h-[300px] md:h-[350px]"
                                />
                                <div className="absolute -bottom-4 -right-2 bg-white p-3 rounded-md shadow-lg z-20 border border-slate-100 flex items-center gap-3">
                                    <div className="bg-orange-50 p-2 rounded-md text-orange-600 border border-orange-100">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900 text-[10px] uppercase tracking-wider leading-none mb-0.5">National Rank</p>
                                        <p className="text-[12px] text-orange-600 font-black uppercase">Top 50 Schools</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Compact Grid */}
            <section className="py-10 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 space-y-1">
                        <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Fundamental Beliefs</span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards in everything we do.", color: "orange" },
                            { icon: BookOpen, title: "Excellence", desc: "We strive for brilliance in academics, sports, and character.", color: "blue" },
                            { icon: Users, title: "Inclusion", desc: "We celebrate diversity and foster a sense of belonging for all.", color: "green" }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-md shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                <div className={`w-12 h-12 mb-4 bg-slate-50 text-slate-900 rounded-md flex items-center justify-center border border-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-colors`}>
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black mb-2 text-slate-900 uppercase tracking-tight">{value.title}</h3>
                                <p className="text-slate-500 text-xs font-bold leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership - Dense Grid */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 space-y-1">
                        <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Expert Guidance</span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Our Leadership</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Dr. Ramesh Singh", role: "Principal", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
                            { name: "Mrs. Anjali Sharma", role: "Vice Principal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
                            { name: "Mr. Deepak Jha", role: "Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" }
                        ].map((leader, idx) => (
                            <div key={idx} className="group">
                                <div className="relative mb-4 overflow-hidden rounded-md h-[280px] border border-slate-100 shadow-sm">
                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                                        <div className="w-full">
                                            <div className="flex gap-2 mb-2">
                                                <div className="w-7 h-7 bg-white/20 rounded-md flex items-center justify-center text-white backdrop-blur-sm border border-white/10 hover:bg-orange-600 transition-colors">
                                                    <Star className="w-3.5 h-3.5" />
                                                </div>
                                            </div>
                                            <h3 className="text-white font-black text-sm uppercase tracking-wider">{leader.name}</h3>
                                            <p className="text-orange-400 font-bold uppercase tracking-widest text-[9px]">{leader.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center md:text-left md:hidden group-hover:block transition-all">
                                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight leading-none">{leader.name}</h3>
                                    <p className="text-orange-600 font-black uppercase tracking-widest text-[9px] mt-1">{leader.role}</p>
                                </div>
                                <div className="hidden md:block">
                                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight leading-none">{leader.name}</h3>
                                    <p className="text-orange-600 font-black uppercase tracking-widest text-[9px] mt-1">{leader.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compact CTA */}
            <div className="bg-slate-950 py-12 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-xl md:text-2xl text-white font-black mb-6 uppercase tracking-tight italic">"Empowering leaders, one student at a time."</h2>
                    <button className="bg-orange-600 text-white px-8 py-3.5 rounded-md font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg flex items-center gap-2 mx-auto group">
                        View School Achievements
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </PublicLayout>
    );
}
