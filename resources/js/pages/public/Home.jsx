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

            {/* 1. HERO SECTION: Full Screen & Dark */}
            <div className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden pt-16 pb-16 lg:pt-0 lg:pb-0">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                        alt="School Playground"
                        className="w-full h-full object-cover opacity-30"
                    />
                    {/* Deep Blue/Dark Overlay for text contrast */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/90 to-blue-900/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* LEFT: Text Content */}
                        <div className="lg:w-1/2 text-white space-y-8 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                                <Star className="w-4 h-4 fill-current" /> Estd. 1998
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                                Igniting <span className="text-orange-500">Minds,</span> <br />
                                Shaping <span className="text-blue-400">Futures.</span>
                            </h1>
                            <p className="text-xl text-slate-300 font-medium max-w-lg leading-relaxed">
                                Experience a world-class education that balances academic excellence with character development at Purnea's premier institution.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/30 flex items-center gap-2 group">
                                    Explore Academics
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    Book a Visit
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: Compact Registration Form (Glass/Mast Look) */}
                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8 shadow-2xl w-full max-w-md relative overflow-hidden">
                                {/* Decorative glow */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-20"></div>

                                <h3 className="text-2xl font-bold text-white text-center mb-1 relative z-10">
                                    Admissions Open <span className="text-orange-400">2024-25</span>
                                </h3>
                                <p className="text-center text-slate-300 mb-6 text-sm relative z-10">Limited seats available. Enquire now!</p>

                                <form className="space-y-3 relative z-10">
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" placeholder="Child's Name" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-white placeholder-slate-500 text-sm" />
                                        <input type="text" placeholder="Parent's Name" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-white placeholder-slate-500 text-sm" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-slate-400 text-sm cursor-pointer appearance-none">
                                            <option>Grade applying for</option>
                                            <option>Pre-Nursery</option>
                                            <option>Nursery - KG</option>
                                            <option>Class 1 - 5</option>
                                            <option>Class 6 - 10</option>
                                            <option>Class 11 - 12</option>
                                        </select>
                                        <input type="tel" placeholder="Mobile Number" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-white placeholder-slate-500 text-sm" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email Address (Optional)" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-white placeholder-slate-500 text-sm" />
                                    </div>
                                    <button className="w-full bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-900/50 transition-all transform hover:-translate-y-0.5 mt-2 text-sm uppercase tracking-wide">
                                        Submit Inquiry
                                    </button>
                                </form>

                                <div className="mt-5 pt-4 border-t border-white/10 text-center text-xs text-slate-400">
                                    <p className="flex items-center justify-center gap-2">
                                        <Phone className="w-3 h-3 text-orange-400" /> +91 98765 43210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. STATS OVERLAP */}
            <div className="bg-white relative z-20">
                <div className="container mx-auto px-6 -mt-12 lg:-mt-16">
                    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-slate-100">
                        {[
                            { icon: Users, val: "2500+", label: "Students" },
                            { icon: UserCheck, val: "150+", label: "Teachers" },
                            { icon: Award, val: "50+", label: "Awards" },
                            { icon: Calendar, val: "25+", label: "Years" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2 group cursor-default">
                                <div className="w-12 h-12 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-800">{stat.val}</h3>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. ABOUT / DISCOVERY SECTION */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 relative group">
                            {/* Image Cluster */}
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-orange-500/20 rounded-3xl"></div>
                                <img
                                    src="https://motherspet.com/blogs/wp-content/webp-express/webp-images/uploads/2024/08/development-early-learning-870x490.jpg.webp"
                                    alt="Kids Learning"
                                    className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[450px] transform transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                                {/* Floating Badge */}
                                <div className="absolute bottom-8 -right-4 bg-white p-3 rounded-xl shadow-xl z-20 animate-bounce-slow hidden lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 text-sm">100% Safe</p>
                                            <p className="text-xs text-slate-500">Environment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Nurturing the <br /><span className="text-orange-600">Leaders of Tomorrow</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                At PPS Purnea, we believe that every child is unique. Our mission is to provide a nurturing environment that fosters curiosity, creativity, and character.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Beyond traditional academics, we focus on <strong>holistic development</strong>—integrating sports, arts, and technology into our daily curriculum.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mt-1">
                                        <Sun className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Bright Classrooms</h4>
                                        <p className="text-sm text-slate-500">Spacious & ventilated</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mt-1">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Active Sports</h4>
                                        <p className="text-sm text-slate-500">Daily physical activity</p>
                                    </div>
                                </div>
                            </div>

                            <button className="text-orange-600 font-bold text-lg flex items-center gap-2 group border-b-2 border-orange-600/20 pb-1 hover:border-orange-600 transition-all">
                                Read Our Story
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR SERVICES - Full Width Colorful Grid */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Programs</span>
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Comprehensive Education</h2>
                        <p className="text-slate-500">From early years to high school, we support every stage of your child's growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Preschool", desc: "A joyful start with play-based learning.", color: "bg-red-500", icon: Smile },
                            { title: "Primary School", desc: "Building strong foundations in core subjects.", color: "bg-orange-500", icon: BookOpen },
                            { title: "Middle School", desc: "Encouraging critical thinking and innovation.", color: "bg-yellow-500", icon: Zap },
                            { title: "High School", desc: "Preparing for higher education & careers.", color: "bg-green-600", icon: Award },
                            { title: "Sports Academy", desc: "Professional training in various disciplines.", color: "bg-blue-600", icon: Activity },
                            { title: "Arts & Culture", desc: "Expressing creativity through music & dance.", color: "bg-purple-600", icon: Music },
                        ].map((item, idx) => (
                            <div key={idx} className={`${item.color} rounded-xl p-8 text-white hover:-translate-y-2 transition-transform duration-300 shadow-xl overflow-hidden relative group`}>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-white/90 font-medium mb-6">{item.desc}</p>
                                    <a href="#" className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider hover:gap-4 transition-all">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                                {/* Background Icon */}
                                <item.icon className="absolute -bottom-6 -right-6 w-48 h-48 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CAMPUS FACILITIES (Icon Grid) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">World-Class Facilities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[
                            { icon: Layout, label: "Smart Labs" },
                            { icon: BookOpen, label: "Library" },
                            { icon: Activity, label: "Playground" },
                            { icon: Music, label: "Music Room" },
                            { icon: Calendar, label: "Auditorium" },
                            { icon: ShieldCheck, label: "24/7 Security" },
                        ].map((fac, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group hover:bg-slate-50 p-6 rounded-xl transition-colors">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-orange-500/30">
                                    <fac.icon className="w-7 h-7" />
                                </div>
                                <span className="font-bold text-slate-700">{fac.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. LIFE AT PPS (Gallery Grid) - NEW */}
            <section className="py-16 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Gallery</span>
                            <h2 className="text-4xl font-bold">Life at PPS</h2>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-orange-500 hover:text-white transition-colors">
                            View All Photos <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {/* Large items span 2 cols/rows */}
                        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
                            <img src="https://shishyaschool.in/wp-content/uploads/2023/12/sports-1-min-scaled.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <h4 className="font-bold text-xl">Annual Sports Day</h4>
                                <p className="text-slate-300 text-sm">Celebrating athleticism and spirit</p>
                            </div>
                        </div>

                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                            <img src="https://centrepointschools.com/blogs/wp-content/uploads/2024/09/Child-learning-styles.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                            <img src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2017/09/LearningPeriod_Header.png?resize=1200%2C675" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="py-16 bg-orange-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Common questions parents ask about our school.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "What is the student-teacher ratio at PPS?", a: "We maintain a healthy 20:1 student-teacher ratio to ensure every child gets personal attention and guidance." },
                            { q: "Do you provide transport facilities?", a: "Yes, we have a fleet of GPS-enabled buses covering all major routes in Purnea with trained attendants on board." },
                            { q: "What extracurricular activities do you offer?", a: "We offer a wide range of activities including Cricket, Football, Music, Dance, Robotics, Debate, and Art & Craft." },
                            { q: "Is the campus secure?", a: "The entire campus is under 24/7 CCTV surveillance, and we have security personnel stationed at all gates." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                                    {openFaq === idx ? (
                                        <ChevronUp className="w-5 h-5 text-orange-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                                <div className={`px-6 pb-6 text-slate-600 leading-relaxed transition-all duration-300 ${openFaq === idx ? 'block animate-fade-in' : 'hidden'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FOOTER CTA */}
            <div className="bg-orange-600 py-12">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Join the PPS Family?</h2>
                    <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                        Admissions open for the academic year 2024-25. Give your child the gift of quality education.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-slate-100 transition-colors">
                            Apply Online
                        </button>
                        <button className="bg-orange-700 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-800 transition-colors border border-orange-500">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>

        </PublicLayout>
    );
}
