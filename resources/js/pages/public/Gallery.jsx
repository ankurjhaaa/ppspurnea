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

            {/* Hero Section */}
            <div className="relative py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                        alt="Gallery Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Our <span className="text-orange-500">Memories</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Capturing the moments of joy, discovery, and achievement at PPS Purnea.
                    </p>
                </div>
            </div>

            {/* Filtering & Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${filter === cat.id
                                    ? 'bg-orange-600 border-orange-600 text-white shadow-lg'
                                    : 'bg-white border-slate-100 text-slate-600 hover:border-orange-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredImages.map((img) => (
                            <div key={img.id} className="group relative rounded-xl overflow-hidden aspect-square shadow-lg">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <h4 className="text-white font-bold text-lg mb-1">{img.title}</h4>
                                    <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">{img.category}</span>
                                    <div className="mt-4 flex gap-2">
                                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                                            <Maximize2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-16">Video <span className="text-blue-600">Spotlight</span></h2>
                    <div className="max-w-4xl mx-auto relative group">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                            <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Video Placeholder" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <button className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 group-active:scale-95">
                                    <Play className="w-10 h-10 fill-current ml-1" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-slate-800">25 Years of Excellence: A Journey Documentary</h3>
                            <p className="text-slate-500 mt-2">Take a deep dive into the history and values that define PPS Purnea.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="bg-orange-600 py-12">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Have photos from your time at PPS?</h2>
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-colors flex items-center gap-2 mx-auto">
                        <Camera className="w-5 h-5" />
                        Share Your Alumni Photos
                    </button>
                </div>
            </div>
        </PublicLayout>
    );
}
