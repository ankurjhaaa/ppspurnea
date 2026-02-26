import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, GraduationCap, Facebook, Twitter, Instagram, Linkedin, Search, ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function PublicLayout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Top Bar - Contact Info (Optional but good for schools) */}
            <div className="bg-slate-900 text-white py-1.5 text-[10px] hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 opacity-90"><Phone className="w-2.5 h-2.5" /> +91 98765 43210</span>
                        <span className="flex items-center gap-1.5 opacity-90"><Mail className="w-2.5 h-2.5" /> admissions@ppspurnea.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#" className="hover:text-orange-400 transition-colors"><Facebook className="w-2.5 h-2.5" /></a>
                        <a href="#" className="hover:text-orange-400 transition-colors"><Twitter className="w-2.5 h-2.5" /></a>
                        <a href="#" className="hover:text-orange-400 transition-colors"><Instagram className="w-2.5 h-2.5" /></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Compact Style */}
            <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100 w-full">
                <div className="container mx-auto px-4 h-14 md:h-16 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-1.5 rounded-md bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition-colors">
                            <GraduationCap className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black leading-none text-slate-800 tracking-tight group-hover:text-orange-600 transition-colors">
                                Purnea <span className="text-orange-600">Public</span> School
                            </span>
                            <span className="text-[8px] font-bold tracking-widest uppercase text-slate-400">
                                Excellence in Education
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-slate-600">
                            {[
                                { name: 'Home', href: '/', active: true },
                                { name: 'About Us', href: '/about-us', active: false },
                                { name: 'Academics', href: '/academics', active: false },
                                { name: 'Admissions', href: '/admissions', active: false },
                                { name: 'Facilities', href: '/facilities', active: false },
                                { name: 'Gallery', href: '/gallery', active: false },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`py-1 border-b-[3px] transition-all duration-300 ${link.active
                                        ? 'text-orange-600 border-orange-600'
                                        : 'border-transparent hover:text-orange-600 hover:border-orange-100'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Search / Action */}
                        <div className="flex items-center gap-3 ml-2">
                            <button className="w-8 h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all">
                                <Search className="w-4 h-4" />
                            </button>

                            <Link href="/contact-us" className="bg-orange-600 text-white px-5 py-2 rounded-md font-black text-[11px] uppercase tracking-wider shadow-md shadow-orange-200 hover:bg-slate-900 hover:shadow-none transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-600 hover:text-orange-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="flex flex-col p-4 gap-2">
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
                                className="text-slate-600 font-bold hover:text-orange-600 hover:bg-orange-50 p-2.5 rounded-md transition-colors flex items-center justify-between text-sm"
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 opacity-30" />
                            </Link>
                        ))}
                        <Link
                            href="/contact-us"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-orange-600 text-white w-full py-3 mt-2 rounded-md font-black text-center text-sm uppercase tracking-wide"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="min-h-screen">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white pt-12 pb-6 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-10">
                        {/* School Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <GraduationCap className="w-6 h-6 text-orange-500" />
                                <span className="text-xl font-black tracking-tight">Purnea Public School</span>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                                Nurturing young minds to become global citizens. A legacy of excellence in education since 1998.
                            </p>
                            <div className="flex gap-3 pt-2">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all border border-white/5">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sm font-black mb-5 text-white uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                                Quick Links
                            </h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    { name: 'About Us', href: '/about-us' },
                                    { name: 'Admissions', href: '/admissions' },
                                    { name: 'Academics', href: '/academics' },
                                    { name: 'Facilities', href: '/facilities' },
                                    { name: 'Gallery', href: '/gallery' },
                                    { name: 'Contact Us', href: '/contact-us' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 text-[11px] font-bold">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-sm font-black mb-5 text-white uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                                Contact
                            </h4>
                            <ul className="space-y-4 text-slate-400 text-[11px] font-bold">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                                    <span>Ram Bagh, Purnea, Bihar - 854301</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                                    <span>info@ppspurnea.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-sm font-black mb-5 text-white uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                                Newsletter
                            </h4>
                            <p className="text-slate-400 text-[10px] mb-4 opacity-80 uppercase font-bold tracking-tight">Stay updated with our latest news.</p>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/5 border border-white/10 rounded-md py-2.5 px-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-orange-600 transition-colors"
                                />
                                <button className="absolute right-1 top-1 bg-orange-600 text-white p-1.5 rounded-md hover:bg-orange-700 transition-colors">
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                        <p>© {new Date().getFullYear()} Purnea Public School. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}