import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { Award, BookOpen, Users, Star, ShieldCheck, Heart, ArrowRight, Target, Compass, GraduationCap } from 'lucide-react';

export default function AboutUs() {
    return (
        <PublicLayout>
            <Head title="About Us - Purnea Public School" />

            {/* 1. HERO SECTION: Clean & Professional */}
            <section className="bg-white pt-10 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8 mb-16">
                        <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] rounded-full">
                            Since 1998
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95]">
                            A Legacy of <br />
                            <span className="text-orange-600">Nurturing</span> Minds
                        </h1>
                        <p className="text-slate-400 text-sm md:text-xl font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-80">
                            Dedicated to providing a transformative educational experience that prepares students for global challenges.
                        </p>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1523050853063-913ec3673c2e?q=80&w=2070&auto=format&fit=crop"
                            alt="PPS Campus Legacy"
                            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 2. MISSION & VISION: High Contrast White Cards */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="space-y-10">
                            <div className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-100">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Our Mission</h2>
                                </div>
                                <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed uppercase tracking-[0.15em] opacity-80">
                                    To empower every student to reach their full potential through a balanced approach to academic rigour, physical fitness, and moral character building.
                                </p>
                            </div>

                            <div className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-lg shadow-slate-200">
                                        <Compass className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Our Vision</h2>
                                </div>
                                <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed uppercase tracking-[0.15em] opacity-80">
                                    To be a global benchmark in foundational education, producing leaders who are physically strong, mentally agile, and morally upright.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                                    alt="Classroom Environment"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-orange-600 p-10 rounded-3xl shadow-2xl border-4 border-white hidden md:block">
                                <Award className="w-12 h-12 text-white mb-4" />
                                <p className="text-white font-black text-2xl uppercase tracking-tighter">Awarded <br /> Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES: Minimalist Icon Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block mb-4">Foundation DNA</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter">Core Values</h2>
                        <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Heart, title: "INTEGRITY", desc: "Honesty and ethical behavior in every interaction." },
                            { icon: BookOpen, title: "EXCELLENCE", desc: "Striving for the highest quality in every endeavor." },
                            { icon: Users, title: "INCLUSION", desc: "A community where everyone belongs and flourishes." }
                        ].map((item, i) => (
                            <div key={i} className="text-center space-y-8 p-12 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center text-slate-950 border border-slate-100 shadow-sm group-hover:bg-slate-950 group-hover:text-white transition-all">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-sm font-black text-slate-950 uppercase tracking-[0.3em]">{item.title}</h3>
                                <p className="text-slate-400 text-[10px] font-black leading-relaxed uppercase tracking-[0.2em] opacity-80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. LEADERSHIP: Premium White Team Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block mb-4">Our Mentors</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter">Principal's Desk</h2>
                    </div>

                    <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 max-w-5xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/5 shrink-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-orange-600 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"
                                        className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                                        alt="Principal"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-3/5 space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">Dr. Rajesh Kumar</h3>
                                    <p className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">Principal - PPS Purnea</p>
                                </div>
                                <p className="text-slate-400 text-sm font-bold leading-relaxed uppercase tracking-widest opacity-80 italic">
                                    "Education is not just about learning facts, but about training the mind to think. At PPS, we focus on the holistic development of every child, ensuring they are prepared for the real world."
                                </p>
                                <div className="pt-8 flex flex-wrap gap-4">
                                    <div className="px-6 py-3 bg-slate-50 rounded-xl border border-slate-100 text-[9px] font-black uppercase tracking-widest text-slate-400">25+ Years Experience</div>
                                    <div className="px-6 py-3 bg-slate-50 rounded-xl border border-slate-100 text-[9px] font-black uppercase tracking-widest text-slate-400">PhD in Education</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CALL TO ACTION: Super Clean */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <GraduationCap className="w-16 h-16 text-orange-600 mx-auto" />
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                            Shape Their <br /> <span className="text-orange-600">Future Today</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-10">
                            <Link href="/admissions" className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200">
                                Apply For Admission
                            </Link>
                            <Link href="/contact-us" className="bg-white text-slate-950 border border-slate-200 px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
