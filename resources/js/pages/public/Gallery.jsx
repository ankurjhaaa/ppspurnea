import React, { useState } from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { Camera, Play, Image as ImageIcon, Filter, Maximize2, X } from 'lucide-react';

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

            {/* Hero Section - Compact */}
            <div className="relative py-12 md:py-14 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                        alt="Gallery Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-[10px] mb-2 block">Our Visual Journey</span>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Our <span className="text-orange-500">Memories</span></h1>
                    <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto font-bold leading-relaxed">
                        Capturing the moments of joy, discovery, and achievement at PPS Purnea.
                    </p>
                </div>
            </div>

            {/* Filtering & Grid - Professional Density */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    {/* Filters - Compact Boxed Style */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-5 py-2 rounded-md font-black text-[10px] uppercase tracking-widest transition-all duration-300 border ${filter === cat.id
                                    ? 'bg-orange-600 border-orange-600 text-white shadow-md'
                                    : 'bg-white border-slate-200 text-slate-500 hover:border-orange-500 hover:text-orange-600'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid - Compact Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {filteredImages.map((img) => (
                            <div key={img.id} className="group relative rounded-md overflow-hidden aspect-square shadow-sm border border-slate-100">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <h4 className="text-white font-black text-xs mb-1 uppercase tracking-tight">{img.title}</h4>
                                    <div className="flex justify-between items-center">
                                        <span className="text-orange-500 text-[9px] font-black uppercase tracking-widest">{img.category}</span>
                                        <button className="w-8 h-8 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-600 transition-colors border border-white/10">
                                            <Maximize2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section - Industrial Modern */}
            <section className="py-10 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-10 space-y-2">
                        <span className="text-blue-600 font-black tracking-widest uppercase text-[10px] block">Video Feature</span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Project Spotlight</h2>
                    </div>

                    <div className="max-w-3xl mx-auto relative group">
                        <div className="aspect-video rounded-md overflow-hidden shadow-xl relative border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt="Video Placeholder" />
                            <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                                <button className="w-16 h-16 bg-orange-600 text-white rounded-md flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 border border-orange-500">
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 text-left border-l-4 border-orange-600 pl-4">
                            <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">PPS Purnea: A 25-Year Journey</h3>
                            <p className="text-slate-500 text-xs font-bold mt-1 uppercase tracking-wide opacity-80">Documentary • Education • Excellence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compact CTA - Professional Dark */}
            <div className="bg-slate-950 py-10 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <div className="container mx-auto px-4 text-center text-white relative z-10">
                    <h2 className="text-xl md:text-2xl font-black mb-6 uppercase tracking-tight">Be Part of Our History</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <button className="bg-orange-600 text-white px-8 py-3.5 rounded-md font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg flex items-center gap-2 group">
                            <Camera className="w-4 h-4" />
                            Share Alumni Photos
                        </button>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
