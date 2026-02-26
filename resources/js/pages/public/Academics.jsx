import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { BookOpen, GraduationCap, Microscope, Palette, Terminal, Calculator, ArrowRight, Zap, CheckCircle } from 'lucide-react';

export default function Academics() {
    return (
        <PublicLayout>
            <Head title="Academics - PPS Purnea" />

            {/* Hero Section - Compact */}
            <div className="relative py-12 md:py-14 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
                        alt="Students"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-blue-400 font-black tracking-widest uppercase text-[10px] mb-2 block">Our Curriculum</span>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Academic <span className="text-blue-400">Excellence</span></h1>
                    <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto font-bold leading-relaxed">
                        Empowering students with a rigorous, future-ready curriculum and holistic learning experiences.
                    </p>
                </div>
            </div>

            {/* Curriculum Overview - Dense */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
                        <span className="text-blue-600 font-black tracking-widest uppercase text-[10px] block">Our Approach</span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">A Balanced Framework</h2>
                        <p className="text-slate-500 text-xs font-bold leading-relaxed">
                            Integrating STEAM with social-emotional learning to prepare students for the complexities of the modern world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Microscope, title: "Science Lab", desc: "Hands-on experiments to foster scientific inquiry.", color: "blue" },
                            { icon: Terminal, title: "Tech & Coding", desc: "Digital literacy and problem-solving through code.", color: "purple" },
                            { icon: Palette, title: "Creative Arts", desc: "Expression through music, dance, and visual arts.", color: "pink" },
                            { icon: Calculator, title: "Logic & Math", desc: "Building strong analytical and reasoning skills.", color: "orange" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-5 rounded-md border border-slate-100 hover:bg-slate-100 transition-all group">
                                <div className={`w-10 h-10 bg-white text-slate-900 rounded-md flex items-center justify-center mb-4 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-black mb-1.5 text-slate-900 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 font-bold text-[11px] leading-relaxed italic">"{item.desc}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Levels - Professional & Sharp */}
            <section className="py-10 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Educational <span className="text-orange-500">Levels</span></h2>
                        <div className="w-16 h-1 bg-orange-600 mx-auto mt-2"></div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                level: "Primary School (Grade 1-5)",
                                focus: "Foundation building in Literacy, Numeracy, and Discovery.",
                                items: ["Thematic Learning", "Language Proficiency", "Physical Education", "Value Education"],
                                borderColor: "border-orange-500/30"
                            },
                            {
                                level: "Middle School (Grade 6-8)",
                                focus: "Deepening conceptual understanding and critical thinking.",
                                items: ["STEAM Integration", "Foreign Languages", "Skill-based Workshops", "Community Service"],
                                borderColor: "border-blue-500/30"
                            },
                            {
                                level: "High School (Grade 9-12)",
                                focus: "Specialization and preparation for global higher education.",
                                items: ["Career Counseling", "Competitive Exam Prep", "Advanced Labs", "Leadership Programs"],
                                borderColor: "border-green-500/30"
                            }
                        ].map((stage, idx) => (
                            <div key={idx} className={`bg-white/5 border-l-4 ${stage.borderColor} p-6 md:p-8 rounded-md flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center hover:bg-white/10 transition-all group`}>
                                <div className="md:w-1/3">
                                    <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight group-hover:text-orange-400 transition-colors">{stage.level}</h3>
                                    <p className="text-slate-400 text-xs font-bold leading-relaxed">{stage.focus}</p>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-2 gap-3 w-full">
                                    {stage.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-slate-300">
                                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                            <span className="font-black text-[10px] uppercase tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievement / Stats - Compact Layout */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <div className="space-y-2">
                                <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Our Results</span>
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">Consistently Delivering <span className="text-blue-600">Board Toppers</span></h2>
                            </div>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                Our students have consistently secured top positions in CBSE Board Examinations, with a 100% pass rate. We pride ourselves on creating an environment where success is a natural outcome.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-md border border-slate-100">
                                    <div className="w-10 h-10 bg-orange-600/10 text-orange-600 rounded-md flex items-center justify-center border border-orange-500/20">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900 text-lg leading-none">98.4%</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Highest (2023)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-md border border-slate-100">
                                    <div className="w-10 h-10 bg-blue-600/10 text-blue-600 rounded-md flex items-center justify-center border border-blue-500/20">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900 text-lg leading-none">100%</p>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Pass Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-3 h-full">
                            <div className="relative group overflow-hidden rounded-md border border-slate-100 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400&auto=format&fit=crop" className="h-60 w-full object-cover grayscale transition-all group-hover:grayscale-0" alt="Achievement" />
                            </div>
                            <div className="relative group overflow-hidden rounded-md border border-slate-100 shadow-sm mt-6">
                                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop" className="h-60 w-full object-cover grayscale transition-all group-hover:grayscale-0" alt="Achievement" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compact CTA - Professional Dark */}
            <div className="bg-slate-950 py-10 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <div className="container mx-auto px-4 text-center text-white relative z-10">
                    <h2 className="text-xl md:text-2xl font-black mb-6 uppercase tracking-tight">Ready for a World-Class Education?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <button className="bg-orange-600 text-white px-8 py-3.5 rounded-md font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg flex items-center gap-2 group">
                            Inquire Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
