import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { BookOpen, GraduationCap, Microscope, Palette, Terminal, Calculator, ArrowRight, Zap, CheckCircle } from 'lucide-react';

export default function Academics() {
    return (
        <PublicLayout>
            <Head title="Academics - PPS Purnea" />

            {/* Hero Section */}
            <div className="relative py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
                        alt="Students"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Academic <span className="text-blue-400">Excellence</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Empowering students with a rigorous, future-ready curriculum and holistic learning experiences.
                    </p>
                </div>
            </div>

            {/* Curriculum Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Approach</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">A Balanced Learning <span className="text-orange-600">Framework</span></h2>
                        <p className="text-slate-600 text-lg leading-relaxed text-left md:text-center">
                            Our curriculum is designed to go beyond textbooks. We integrate STEAM (Science, Technology, Engineering, Arts, and Mathematics) with social-emotional learning to prepare students for the complexities of the modern world.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Microscope, title: "Science Lab", desc: "Hands-on experiments to foster scientific inquiry.", color: "blue" },
                            { icon: Terminal, title: "Tech & Coding", desc: "Digital literacy and problem-solving through code.", color: "purple" },
                            { icon: Palette, title: "Creative Arts", desc: "Expression through music, dance, and visual arts.", color: "pink" },
                            { icon: Calculator, title: "Logic & Math", desc: "Building strong analytical and reasoning skills.", color: "orange" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Levels */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center">Educational <span className="text-orange-500">Levels</span></h2>

                    <div className="space-y-12">
                        {[
                            {
                                level: "Primary School (Grade 1-5)",
                                focus: "Foundation building in Literacy, Numeracy, and Discovery.",
                                items: ["Thematic Learning", "Language Proficiency", "Physical Education", "Value Education"]
                            },
                            {
                                level: "Middle School (Grade 6-8)",
                                focus: "Deepening conceptual understanding and critical thinking.",
                                items: ["STEAM Integration", "Foreign Languages", "Skill-based Workshops", "Community Service"]
                            },
                            {
                                level: "High School (Grade 9-12)",
                                focus: "Specialization and preparation for global higher education.",
                                items: ["Career Counseling", "Competitive Exam Prep", "Advanced Labs", "Leadership Programs"]
                            }
                        ].map((stage, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-center hover:bg-white/10 transition-colors">
                                <div className="md:w-1/3">
                                    <h3 className="text-3xl font-bold text-orange-500 mb-2">{stage.level}</h3>
                                    <p className="text-slate-400 font-medium">{stage.focus}</p>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-2 gap-4">
                                    {stage.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-200">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="font-bold text-sm tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievement / Stats */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Results</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Consistently Delivering <span className="text-blue-600">Board Toppers</span></h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Our students have consistently secured top positions in the CBSE Board Examinations, with a 100% pass rate year after year. We pride ourselves on creating an environment where academic success is a natural outcome of curiosity and hard work.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-xl border border-orange-100">
                                    <Zap className="w-8 h-8 text-orange-600" />
                                    <div>
                                        <p className="font-black text-slate-800 text-2xl">98.4%</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase">Highest Score (2023)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <GraduationCap className="w-8 h-8 text-blue-600" />
                                    <div>
                                        <p className="font-black text-slate-800 text-2xl">100%</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase">Board Exam Pass Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400&auto=format&fit=crop" className="rounded-xl h-60 w-full object-cover shadow-lg" alt="Achievement" />
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop" className="rounded-xl h-60 w-full object-cover shadow-lg mt-8" alt="Achievement" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="bg-orange-600 py-16">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Curious about our teaching methodology?</h2>
                    <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-slate-100 transition-colors flex items-center gap-2 mx-auto">
                        Inquire About Curriculum
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </PublicLayout>
    );
}
