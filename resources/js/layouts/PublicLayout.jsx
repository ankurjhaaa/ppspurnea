import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, GraduationCap, Facebook, Twitter, Instagram, Linkedin, Search, ChevronRight } from 'lucide-react';

export default function PublicLayout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Sportyze style is white navbar always, not transparent
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Top Bar - Contact Info (Optional but good for schools) */}
            <div className="bg-slate-900 text-white py-2 text-xs hidden md:block">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +91 98765 43210</span>
                        <span className="flex items-center gap-2"><Mail className="w-3 h-3" /> admissions@ppspurnea.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-orange-400 transition-colors"><Facebook className="w-3 h-3" /></a>
                        <a href="#" className="hover:text-orange-400 transition-colors"><Twitter className="w-3 h-3" /></a>
                        <a href="#" className="hover:text-orange-400 transition-colors"><Instagram className="w-3 h-3" /></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Sportyze Style (White, Shadow, Centered Links) */}
            <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
                <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-full bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition-colors">
                            <GraduationCap className="w-8 h-8 text-orange-600" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold leading-none text-slate-800 tracking-tight group-hover:text-orange-600 transition-colors">
                                PPS <span className="text-orange-600">Purnea</span>
                            </span>
                            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                                Excellence in Education
                            </span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-slate-600">
                            {[
                                { name: 'Home', active: true },
                                { name: 'About Us', active: false },
                                { name: 'Academics', active: false },
                                { name: 'Admissions', active: false },
                                { name: 'Facilities', active: false },
                                { name: 'Gallery', active: false },
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href="#"
                                    className={`py-2 border-b-2 transition-all duration-300 ${link.active
                                        ? 'text-orange-600 border-orange-500'
                                        : 'border-transparent hover:text-orange-600 hover:border-orange-200'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Search / Action */}
                        <button className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm">
                            <Search className="w-5 h-5" />
                        </button>

                        <button className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-orange-200 hover:bg-slate-800 hover:shadow-slate-200 transition-all transform hover:-translate-y-0.5">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-600 hover:text-orange-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="flex flex-col p-6 gap-4">
                        {['Home', 'About Us', 'Academics', 'Admissions', 'Facilities', 'Gallery'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-slate-600 font-bold hover:text-orange-600 hover:bg-orange-50 p-3 rounded-lg transition-colors flex items-center justify-between"
                            >
                                {item}
                                <ChevronRight className="w-4 h-4 opacity-50" />
                            </a>
                        ))}
                        <button className="bg-orange-600 text-white w-full py-3 rounded-lg font-bold shadow-md">
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-0 min-h-screen">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-white pt-20 pb-10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        {/* School Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <GraduationCap className="w-8 h-8 text-orange-500" />
                                <span className="text-2xl font-bold">PPS Purnea</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Nurturing young minds to become global citizens. A legacy of excellence in education since 1998.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-orange-500 pl-3">Quick Links</h4>
                            <ul className="space-y-4">
                                {['About Us', 'Admissions', 'Academics', 'Campus Life', 'Results', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-orange-500 pl-3">Contact Us</h4>
                            <ul className="space-y-6 text-slate-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                    <span>Ram Bagh, Purnea,<br />Bihar - 854301, India</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                                    <span>info@ppspurnea.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-orange-500 pl-3">Newsletter</h4>
                            <p className="text-slate-400 mb-6">Subscribe to our newsletter for latest updates and news.</p>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-white/10 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                                <button className="absolute right-1 top-1 bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition-colors">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} PPS Purnea. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
                    </div>
                </div>
            </footer >
        </div >
    );
}