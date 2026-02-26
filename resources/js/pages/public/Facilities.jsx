import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { BookOpen, Microscope, Activity, Bus, ShieldCheck, Music, Layout, Terminal, Coffee, Heart } from 'lucide-react';

export default function Facilities() {
    return (
        <PublicLayout>
            <Head title="Facilities - PPS Purnea" />

            {/* Hero Section - Compact */}
            <div className="relative py-12 md:py-14 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=2070&auto=format&fit=crop"
                        alt="Infrastructure"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-[10px] mb-2 block">Our Campus</span>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">World-Class <span className="text-orange-500">Infrastructure</span></h1>
                    <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto font-bold leading-relaxed">
                        Creating the perfect environment for learning, discovery, and personal growth.
                    </p>
                </div>
            </div>

            {/* Smart Learning - Compact Side-by-Side */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" alt="Smart Classroom" className="rounded-md shadow-lg border border-slate-100" />
                            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-md shadow-xl hidden lg:block border border-white/20">
                                <Terminal className="w-8 h-8 mb-1" />
                                <p className="font-black text-xs uppercase tracking-tight">Smart Tech</p>
                                <p className="text-[10px] text-blue-100 uppercase tracking-widest opacity-80">Full Campus</p>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Modern Classrooms</span>
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Digital-First Spaces</h2>
                            </div>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                Our classrooms are equipped with interactive smart boards, high-speed internet, and ergonomic furniture, ensuring students stay engaged and comfortable.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-md border border-slate-100">
                                    <div className="w-8 h-8 bg-white text-blue-600 rounded-md flex items-center justify-center shrink-0 border border-slate-200">
                                        <Layout className="w-4 h-4" />
                                    </div>
                                    <span className="font-black text-slate-800 text-[10px] uppercase tracking-wide">Smart Boards</span>
                                </div>
                                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-md border border-slate-100">
                                    <div className="w-8 h-8 bg-white text-blue-600 rounded-md flex items-center justify-center shrink-0 border border-slate-200">
                                        <Terminal className="w-4 h-4" />
                                    </div>
                                    <span className="font-black text-slate-800 text-[10px] uppercase tracking-wide">Wi-Fi Campus</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Facilities Grid - Professional Density */}
            <section className="py-10 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 max-w-xl mx-auto space-y-2">
                        <span className="text-blue-600 font-black tracking-widest uppercase text-[10px] block">Highlights</span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Campus Facilities</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Microscope, title: "Modern Science Labs", desc: "State-of-the-art physics, chemistry, and biology labs for practical mastery.", bg: "bg-blue-600" },
                            { icon: BookOpen, title: "Digital Library", desc: "A vast collection of over 20,000 books, journals, and digital resources.", bg: "bg-orange-600" },
                            { icon: Activity, title: "Sports Complex", desc: "Basketball courts, cricket nets, and indoor sports facilities.", bg: "bg-green-700" },
                            { icon: Music, title: "Arts Studio", desc: "Dedicated space for training in music, dance, and theater.", bg: "bg-purple-700" },
                            { icon: Bus, title: "Secure Transport", desc: "GPS-Enabled transport covering all corners of Purnea safely.", bg: "bg-red-600" },
                            { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV surveillance with 200+ cameras and trained personnel.", bg: "bg-slate-900" }
                        ].map((fac, idx) => (
                            <div key={idx} className="bg-white rounded-md overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                <div className={`${fac.bg} h-32 flex items-center justify-center relative overflow-hidden`}>
                                    <fac.icon className="w-16 h-16 text-white opacity-10 absolute rotate-12 -right-2 -bottom-2 group-hover:scale-110 transition-transform" />
                                    <fac.icon className="w-10 h-10 text-white relative z-10" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-base font-black text-slate-900 mb-1.5 uppercase tracking-tight">{fac.title}</h3>
                                    <p className="text-slate-500 text-[11px] font-bold leading-relaxed italic">"{fac.desc}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety & Wellness - Compact Overlay Style */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-900 rounded-md p-6 md:p-10 text-white flex flex-col md:flex-row items-center gap-10 overflow-hidden relative border border-white/5">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl -mr-24 -mt-24"></div>

                        <div className="md:w-1/2 space-y-5 relative z-10">
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 rounded-md text-orange-500 text-[9px] font-black uppercase tracking-widest border border-white/10">
                                <Heart className="w-3 h-3" /> Safety First
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Student <span className="text-orange-500">Wellness</span></h2>
                            <p className="text-slate-400 text-xs font-bold leading-relaxed">
                                We prioritize healthy living with an in-house medical clinic, nutritious cafeteria options, and a 100% RO-water purification system.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    <span className="font-black text-[10px] text-slate-200 uppercase tracking-wide">Full-time Nursing Staff</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    <span className="font-black text-[10px] text-slate-200 uppercase tracking-wide">Hygienic Vegetarian Canteen</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-3 w-full relative z-10">
                            <div className="bg-white/5 p-6 rounded-md text-center border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-10 h-10 bg-orange-600/20 text-orange-500 rounded-md flex items-center justify-center mx-auto mb-3 border border-orange-500/20">
                                    <Coffee className="w-5 h-5" />
                                </div>
                                <h4 className="font-black text-xs uppercase tracking-tight">Cafeteria</h4>
                                <p className="text-[9px] text-slate-500 font-bold mt-1 uppercase">Nutritious</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-md text-center border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-10 h-10 bg-red-600/20 text-red-500 rounded-md flex items-center justify-center mx-auto mb-3 border border-red-500/20">
                                    <Heart className="w-5 h-5" />
                                </div>
                                <h4 className="font-black text-xs uppercase tracking-tight">Infirmary</h4>
                                <p className="text-[9px] text-slate-500 font-bold mt-1 uppercase">Medical Care</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

const CheckCircle2 = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
)
