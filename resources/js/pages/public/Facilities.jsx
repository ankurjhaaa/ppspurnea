import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { BookOpen, Microscope, Activity, Bus, ShieldCheck, Music, Layout, Terminal, Coffee, Heart, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';

export default function Facilities() {
    return (
        <PublicLayout>
            <Head title="Facilities - PPS Purnea" />

            {/* 1. HERO SECTION: Clean & Infrastructure Focus */}
            <section className="bg-white pt-10 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8 mb-16">
                        <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] rounded-full">
                            Our Campus
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95]">
                            World-Class <br />
                            <span className="text-orange-600">Infrastructure</span>
                        </h1>
                        <p className="text-slate-400 text-sm md:text-xl font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-80">
                            Creating the perfect environment for curated learning, digital discovery, and physical excellence.
                        </p>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=2070&auto=format&fit=crop"
                            alt="PPS Main Campus"
                            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 2. SMART SPACES: Clean Two-Column Layout */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-slate-950 translate-x-4 translate-y-4 rounded-3xl -z-10 bg-linear-to-br from-orange-600 to-orange-400 opacity-20"></div>
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" alt="Smart Classrooms" className="rounded-3xl shadow-2xl w-full h-[450px] object-cover" />
                        </div>
                        <div className="space-y-10 order-1 lg:order-2">
                            <div className="space-y-4">
                                <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Digital-First</span>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none">Smart <br /> Learning Spaces</h2>
                            </div>
                            <p className="text-slate-400 text-sm font-bold leading-relaxed uppercase tracking-widest opacity-80">
                                Our classrooms are tech-enabled hubs equipped with interactive boards, high-speed connectivity, and ergonomic design for maximum focus.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm border border-slate-100">
                                        <Layout className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-950">INTERACTIVE BOARDS</h4>
                                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">Touch-enabled learning tools in every grade.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm border border-slate-100">
                                        <Terminal className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-950">IOT CAMPUS</h4>
                                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">Secure, campus-wide wi-fi for research and labs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE FACILITIES: Clean Cards Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block mb-4">The PPS Edge</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none">Premium Campus <br /> Facilities</h2>
                        <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Microscope, title: "SCIENCE LABS", desc: "Physics, Chemistry, and Biology labs for practical mastery." },
                            { icon: BookOpen, title: "DIGITAL LIBRARY", desc: "Over 20,000+ resources and specialized digital journals." },
                            { icon: Activity, title: "SPORTS HUB", desc: "Basketball courts, cricket nets, and professional indoor arenas." },
                            { icon: Music, title: "ARTS STUDIO", desc: "Dedicated spaces for training in music, dance, and theater." },
                            { icon: Bus, title: "GPS TRANSPORT", desc: "Real-time tracking of our secure school bus fleet." },
                            { icon: ShieldCheck, title: "SURVEILLANCE", desc: "24/7 CCTV monitoring ensures safety in every corner." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-12 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-2xl flex items-center justify-center text-slate-950 border border-slate-100 shadow-sm group-hover:bg-slate-950 group-hover:text-white transition-all">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-sm font-black mb-4 text-slate-950 uppercase tracking-[0.3em]">{item.title}</h3>
                                <p className="text-slate-400 text-[10px] font-black leading-relaxed uppercase tracking-[0.2em] opacity-80 italic">
                                    "{item.desc}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WELLNESS & SAFETY: Clean Contrast */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-950 p-10 md:p-20 rounded-[3rem] text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative border border-white/10 shadow-3xl shadow-slate-200">
                        <div className="lg:w-1/2 space-y-10 relative z-10">
                            <div className="space-y-4">
                                <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-[10px] block">Student Care</span>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Wellness & <br /> Safety First</h2>
                            </div>
                            <p className="text-white/40 text-xs md:text-sm font-bold leading-relaxed uppercase tracking-widest">
                                Healthy growth requires a safe environment. We provide 24/7 medical assistance and hygienic campus living.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                                    <span className="font-black text-[10px] uppercase tracking-widest text-white/80">Full-time Nursing Staff</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                                    <span className="font-black text-[10px] uppercase tracking-widest text-white/80">Hygienic Vegetarian Canteen</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                                    <span className="font-black text-[10px] uppercase tracking-widest text-white/80">RO Drinking Water (Active UV)</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full relative z-10">
                            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center group hover:bg-orange-600 transition-all duration-500">
                                <Coffee className="w-10 h-10 mx-auto text-orange-500 mb-6 group-hover:text-white transition-colors" />
                                <h4 className="font-black text-xs uppercase tracking-widest mb-2">CAFETERIA</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-white transition-all">Pure & Fresh</p>
                            </div>
                            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center group hover:bg-orange-600 transition-all duration-500">
                                <Heart className="w-10 h-10 mx-auto text-orange-500 mb-6 group-hover:text-white transition-colors" />
                                <h4 className="font-black text-xs uppercase tracking-widest mb-2">INFIRMARY</h4>
                                <p className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-white transition-all">On-Call Care</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA: Clean Minimalist */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <GraduationCap className="w-16 h-16 text-orange-600 mx-auto" />
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                            Visit Our <br /> <span className="text-orange-600">Campus</span>
                        </h2>
                        <div className="pt-10 flex flex-col sm:flex-row justify-center gap-8">
                            <Link href="/admissions" className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200">
                                Book A Visit
                            </Link>
                            <Link href="/contact-us" className="bg-white text-slate-950 border border-slate-200 px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all">
                                Get Directions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
