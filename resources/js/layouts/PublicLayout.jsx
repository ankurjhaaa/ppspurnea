import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, GraduationCap, Facebook, Twitter, Instagram, Linkedin, Search, ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function PublicLayout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
            {/* 1. TOP BAR: Compact & Clean */}
            <div className="bg-slate-50 border-b border-slate-100 py-2 hidden md:block">
                <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
                    <div className="flex items-center gap-8">
                        <span className="flex items-center gap-2 hover:text-slate-900 transition-colors cursor-default">
                            <Phone className="w-3 h-3 text-orange-600" /> +91 98765 43210
                        </span>
                        <span className="flex items-center gap-2 hover:text-slate-900 transition-colors cursor-default">
                            <Mail className="w-3 h-3 text-orange-600" /> info@ppspurnea.com
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-orange-600 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-orange-600 transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                        <a href="#" className="hover:text-orange-600 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
                    </div>
                </div>
            </div>

            {/* 2. MAIN NAVIGATION: Refined White */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 w-full transition-all">
                <div className="container mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-950 flex items-center justify-center text-white group-hover:bg-orange-600 transition-all shadow-xl shadow-slate-200">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black leading-none text-slate-950 tracking-tighter group-hover:text-orange-600 transition-colors">
                                PPS <span className="text-orange-600">PURNEA</span>
                            </span>
                            <span className="text-[8px] font-black tracking-[0.3em] uppercase text-slate-400 mt-1">
                                Academic Foundation
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about-us' },
                                { name: 'Academics', href: '/academics' },
                                { name: 'Admissions', href: '/admissions' },
                                { name: 'Facilities', href: '/facilities' },
                                { name: 'Gallery', href: '/gallery' },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-orange-600 transition-all relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-orange-600 transition-all">
                                <Search className="w-4 h-4" />
                            </button>
                            <Link href="/contact-us" className="bg-slate-950 text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-xl shadow-slate-200">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button
                        className="lg:hidden w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-950 border border-slate-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                <div className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 space-y-2">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'About Us', href: '/about-us' },
                            { name: 'Academics', href: '/academics' },
                            { name: 'Admissions', href: '/admissions' },
                            { name: 'Facilities', href: '/facilities' },
                            { name: 'Gallery', href: '/gallery' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-slate-500 font-black hover:text-orange-600 py-4 px-2 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] border-b border-slate-50"
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 text-slate-200" />
                            </Link>
                        ))}
                        <Link
                            href="/contact-us"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full bg-slate-950 text-white text-center py-5 mt-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-slate-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Page Content */}
            <main className="relative bg-white">
                {children}
            </main>

            {/* 3. REFINED WHITE FOOTER: No Images, No Clutter */}
            <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
                        {/* Brand Column */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-xl shadow-orange-100">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <span className="text-2xl font-black tracking-tighter text-slate-950 uppercase">PPS PURNEA</span>
                            </div>
                            <p className="text-slate-400 text-[10px] font-black leading-relaxed max-w-xs uppercase tracking-widest opacity-80">
                                Nurturing excellence and character building through a globally recognized foundational curriculum. Est. 1998.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all border border-slate-100 shadow-sm">
                                        <Icon className="w-4.5 h-4.5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="md:pl-10">
                            <h4 className="text-[11px] font-black mb-10 text-slate-950 uppercase tracking-[0.3em] flex items-center gap-3">
                                <span className="w-6 h-0.5 bg-orange-600"></span>
                                EXPLORE
                            </h4>
                            <ul className="space-y-5">
                                {[
                                    { name: 'About Us', href: '/about-us' },
                                    { name: 'Admissions', href: '/admissions' },
                                    { name: 'Academics', href: '/academics' },
                                    { name: 'Facilities', href: '/facilities' },
                                    { name: 'Our Gallery', href: '/gallery' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-slate-400 hover:text-orange-600 transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h4 className="text-[11px] font-black mb-10 text-slate-950 uppercase tracking-[0.3em] flex items-center gap-3">
                                <span className="w-6 h-0.5 bg-orange-600"></span>
                                VISIT US
                            </h4>
                            <ul className="space-y-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                <li className="flex items-start gap-4">
                                    <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                                    <span className="leading-relaxed">Ram Bagh, Purnea,<br />Bihar - 854301, India</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                                    <span>info@ppspurnea.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter/CTA */}
                        <div>
                            <h4 className="text-[11px] font-black mb-10 text-slate-950 uppercase tracking-[0.3em] flex items-center gap-3">
                                <span className="w-6 h-0.5 bg-orange-600"></span>
                                UPDATES
                            </h4>
                            <p className="text-slate-400 text-[10px] mb-8 font-black uppercase tracking-[0.2em] opacity-80 leading-relaxed">
                                Subscribe to stay updated on school news and admissions.
                            </p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="EMAIL@ADDRESS.COM"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4.5 px-5 text-[10px] font-black text-slate-950 placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-orange-600/20 transition-all uppercase tracking-widest shadow-inner sm:py-4.5 py-4"
                                />
                                <button className="absolute right-2 top-2 bg-slate-950 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-all shadow-xl">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright Area */}
                    <div className="border-t border-slate-50 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-[10px] uppercase font-black tracking-[0.2em]">
                        <p>© {new Date().getFullYear()} PURNEA PUBLIC SCHOOL. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-orange-600 transition-colors">PRIVACY POLICY</a>
                            <a href="#" className="hover:text-orange-600 transition-colors">TERMS OF USE</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}