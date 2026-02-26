import React, { useState } from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { Camera, Play, Image as ImageIcon, Filter, Maximize2, X, ArrowRight } from 'lucide-react';

export default function Gallery() {
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', name: 'All Photos' },
        { id: 'events', name: 'Events' },
        { id: 'campus', name: 'Campus' },
        { id: 'sports', name: 'Sports' },
        { id: 'academics', name: 'Academics' }
    ];

    const images = [
        { id: 1, category: 'events', src: 'https://shishyaschool.in/wp-content/uploads/2023/12/sports-1-min-scaled.jpg', title: 'Annual Sports Day 2023' },
        { id: 2, category: 'academics', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop', title: 'Science Lab Session' },
        { id: 3, category: 'campus', src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=600&auto=format&fit=crop', title: 'Main Campus Building' },
        { id: 4, category: 'sports', src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=600&auto=format&fit=crop', title: 'Basketball Finals' },
        { id: 5, category: 'events', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', title: 'Cultural Fest' },
        { id: 6, category: 'academics', src: 'https://centrepointschools.com/blogs/wp-content/uploads/2024/09/Child-learning-styles.jpg', title: 'Collaborative Learning' },
        { id: 7, category: 'campus', src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop', title: 'School Library' },
        { id: 8, category: 'sports', src: 'https://images.unsplash.com/photo-1519389950473-47bac0a9a804?q=80&w=600&auto=format&fit=crop', title: 'Football Training' },
    ];

    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

    return (
        <PublicLayout>
            <Head title="Gallery - PPS Purnea" />

            {/* 1. HERO SECTION: Clean & Visual */}
            <section className="bg-white pt-10 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8 mb-16">
                        <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] rounded-full">
                            Our Visual Journey
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95]">
                            School <br />
                            <span className="text-orange-600">Memories</span>
                        </h1>
                        <p className="text-slate-400 text-sm md:text-xl font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-80">
                            Capturing the moments of joy, discovery, and achievement at Purnea Public School.
                        </p>
                    </div>

                    {/* Filter Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border ${filter === cat.id
                                    ? 'bg-slate-950 border-slate-950 text-white shadow-xl shadow-slate-200'
                                    : 'bg-white border-slate-100 text-slate-400 hover:border-orange-500 hover:text-orange-600'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredImages.map((img) => (
                            <div key={img.id} className="group relative rounded-3xl overflow-hidden aspect-square shadow-2xl shadow-slate-200 border-4 border-white">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-left">
                                    <h4 className="text-white font-black text-xs mb-2 uppercase tracking-widest leading-tight">{img.title}</h4>
                                    <span className="text-orange-500 text-[9px] font-black uppercase tracking-[0.3em]">{img.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. VIDEO HIGHLIGHT: Premium White */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Project Spotlight</span>
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                                        Campus <br /> <span className="text-orange-600">Documentary</span>
                                    </h2>
                                </div>
                                <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed uppercase tracking-widest opacity-80">
                                    Experience 25 years of excellence through our commemorative school documentary. From foundation to future.
                                </p>
                                <button className="flex items-center gap-4 text-slate-950 font-black text-[11px] uppercase tracking-[0.3em] bg-slate-50 px-8 py-4 rounded-2xl hover:bg-slate-950 hover:text-white transition-all shadow-sm">
                                    Watch Full Story <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="relative group">
                                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                                    <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=2070" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Video Cover" />
                                    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                                        <button className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
                                            <Play className="w-8 h-8 fill-current ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FINAL CTA: Gallery Focus */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="w-20 h-20 rounded-2xl bg-slate-950 flex items-center justify-center text-white mx-auto shadow-2xl shadow-slate-200">
                            <Camera className="w-10 h-10" />
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                            Our <br /> <span className="text-orange-600">History</span>
                        </h2>
                        <div className="pt-10 flex flex-col sm:flex-row justify-center gap-8">
                            <Link href="/about-us" className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200">
                                Learn Our Story
                            </Link>
                            <Link href="/admissions" className="bg-white text-slate-950 border border-slate-200 px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all">
                                Join The Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
