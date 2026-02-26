import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { BookOpen, GraduationCap, Microscope, Palette, Terminal, Calculator, ArrowRight, Zap, CheckCircle } from 'lucide-react';

export default function Academics() {
    return (
        <PublicLayout>
            <Head title="Academics - Purnea Public School" />

            {/* 1. HERO SECTION: Clean & Scholastic */}
            <section className="bg-white pt-10 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8 mb-16">
                        <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] rounded-full">
                            Scholastic Rigor
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95]">
                            Academic <br />
                            <span className="text-orange-600">Excellence</span>
                        </h1>
                        <p className="text-slate-400 text-sm md:text-xl font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-80">
                            Empowering students with a future-ready curriculum designed for holistic growth and mental agility.
                        </p>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
                            alt="Learning Environment"
                            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 2. CURRICULUM OVERVIEW: Minimalist Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block mb-4">Our Pedagogy</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                            A Balanced <br /> Educational Framework
                        </h2>
                        <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Microscope, title: "SCIENCE & INQUIRY", desc: "Developing analytical thinking through hands-on experiments." },
                            { icon: Terminal, title: "TECH & CODING", desc: "Digital literacy and logical skills for the 21st century." },
                            { icon: Palette, title: "CREATIVE ARTS", desc: "Nurturing expression through music, art, and theatre." },
                            { icon: Calculator, title: "LOGIC & MATH", desc: "Building strong foundations in quantitative reasoning." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-16 h-16 mx-auto mb-8 bg-slate-50 text-slate-950 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500">
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

            {/* 3. ACADEMIC LEVELS: Clean White List Cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Learning Stages</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter">Educational Levels</h2>
                    </div>

                    <div className="grid gap-12">
                        {[
                            {
                                level: "PRIMARY (GRADE 1-5)",
                                focus: "Foundation building in Literacy, Numeracy, and Discovery.",
                                items: ["THEMATIC LEARNING", "LANGUAGE SKILLS", "PHYSICAL EDUCATION", "VALUE EDUCATION"],
                                image: "https://images.unsplash.com/photo-1577891913216-3d9691043f11?q=80&w=400"
                            },
                            {
                                level: "MIDDLE SCHOOL (GRADE 6-8)",
                                focus: "Deepening conceptual understanding and critical thinking.",
                                items: ["STEAM INTEGRATION", "FOREIGN LANGUAGES", "CODING LABS", "CHARACTER BLDG"],
                                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400"
                            }
                        ].map((stage, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-[3rem] p-8 md:p-14 border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
                                <div className="lg:w-2/5 shrink-0">
                                    <img src={stage.image} className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-2xl" alt={stage.level} />
                                </div>
                                <div className="lg:w-3/5 space-y-10">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter">{stage.level}</h3>
                                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest opacity-80">{stage.focus}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {stage.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 text-slate-950 border-b border-slate-200 pb-4">
                                                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                                                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                                                </div>
                                                <span className="font-black text-[10px] uppercase tracking-widest">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-3 text-orange-600 font-black text-[11px] uppercase tracking-[0.3em] group">
                                        View Curriculum <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. RESULTS & PERFORMANCE: Premium Minimalist */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Global Recognition</span>
                                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none transition-all hover:text-orange-600">
                                        Board <br /> Toppers
                                    </h2>
                                </div>
                                <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed uppercase tracking-widest opacity-80">
                                    Our students consistently achieve top ranks through disciplined learning and expert faculty guidance.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <p className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">98.4%</p>
                                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Highest Grade</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">100%</p>
                                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Pass Rate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-slate-950 translate-x-4 translate-y-4 rounded-3xl -z-10 bg-linear-to-br from-orange-600 to-orange-400 opacity-20"></div>
                                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600" className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" alt="Board Results" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA: Scholastic Focus */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="w-20 h-20 rounded-2xl bg-slate-950 flex items-center justify-center text-white mx-auto shadow-2xl shadow-slate-200">
                            <BookOpen className="w-10 h-10" />
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                            Future <br /> <span className="text-orange-600">Ready</span> Learning
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-10">
                            <Link href="/admissions" className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-950 transition-all shadow-2xl shadow-orange-100">
                                Start Enrollment
                            </Link>
                            <Link href="/about-us" className="bg-white text-slate-950 border border-slate-200 px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
