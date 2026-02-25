import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { Award, BookOpen, Users, Star, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function AboutUs() {
    return (
        <PublicLayout>
            <Head title="About Us - PPS Purnea" />

            {/* Hero Section */}
            <div className="relative py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1523050853063-913ec3673c2e?q=80&w=2070&auto=format&fit=crop"
                        alt="School Building"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">About <span className="text-orange-500">PPS Purnea</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        A legacy of excellence in education, nurturing young minds since 1998.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="py-16 bg-white text-slate-800">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 border-l-4 border-orange-500 pl-4">Our Mission</h2>
                                <p className="text-lg text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4">
                                    "To provide a stimulating learning environment that encourages every student to reach their full potential and become responsible global citizens."
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4">Our Vision</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We envision a future where our students lead with integrity, innovate with passion, and contribute meaningfully to society through their academic and personal excellence.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                                alt="Classroom"
                                className="rounded-2xl shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shadow-lg animate-bounce-slow">
                                <Award className="w-12 h-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-16 text-slate-900">Our Core <span className="text-orange-600">Values</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards in everything we do.", color: "orange" },
                            { icon: BookOpen, title: "Excellence", desc: "We strive for brilliance in academics, sports, and character.", color: "blue" },
                            { icon: Users, title: "Inclusion", desc: "We celebrate diversity and foster a sense of belonging for all.", color: "green" }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-16 h-16 mx-auto mb-6 bg-${value.color}-100 text-${value.color}-600 rounded-xl flex items-center justify-center`}>
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-800">{value.title}</h3>
                                <p className="text-slate-500 font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-center text-slate-900">Our <span className="text-orange-600">Leadership</span></h2>
                    <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Guided by visionaries with a passion for educational transformation.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { name: "Dr. Ramesh Singh", role: "Principal", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
                            { name: "Mrs. Anjali Sharma", role: "Vice Principal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
                            { name: "Mr. Deepak Jha", role: "Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" }
                        ].map((leader, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="relative mb-6 overflow-hidden rounded-xl h-80">
                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-linear-to-t from-orange-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                        <div className="flex gap-4">
                                            {/* Social placeholders */}
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                                                <Star className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{leader.name}</h3>
                                <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mt-1">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="bg-slate-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl text-white font-bold mb-8">Want to learn more about our journey?</h2>
                    <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors shadow-xl shadow-orange-900/40 flex items-center gap-2 mx-auto">
                        Download Alumni Success Stories
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </PublicLayout>
    );
}
