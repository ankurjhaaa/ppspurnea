import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { ClipboardCheck, FileText, Calendar, Phone, Mail, ArrowRight, Download, CheckCircle2, GraduationCap } from 'lucide-react';

export default function Admissions() {
    return (
        <PublicLayout>
            <Head title="Admissions - Purnea Public School" />

            {/* 1. HERO SECTION: Clean & Welcoming */}
            <section className="bg-white pt-10 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8 mb-16">
                        <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] rounded-full">
                            Enrollment 2024-25
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95]">
                            Start Your <br />
                            <span className="text-orange-600">PPS Journey</span>
                        </h1>
                        <p className="text-slate-400 text-sm md:text-xl font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-80">
                            Join a community dedicated to excellence, character, and global citizenship. Admissions now open.
                        </p>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                        <img
                            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
                            alt="Admission Process"
                            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 2. ADMISSION PROCESS: Step Cards */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
                        <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Path to Enrollment</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">Our Admission Process</h2>
                        <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "ENQUIRY", desc: "Submit an online enquiry or visit our Ram Bagh campus." },
                            { step: "02", title: "COUNSELING", desc: "Connect with our educators to understand the PPS model." },
                            { step: "03", title: "ASSESSMENT", desc: "A brief interaction to assess readiness and grade level." },
                            { step: "04", title: "ENROLLMENT", desc: "Complete documentation and finalize the admission." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black mb-8 text-sm group-hover:bg-orange-600 transition-colors">
                                    {item.step}
                                </div>
                                <h3 className="text-xs font-black mb-4 text-slate-950 uppercase tracking-[0.2em]">{item.title}</h3>
                                <p className="text-slate-400 font-bold text-[10px] leading-relaxed uppercase tracking-widest opacity-80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. REQUIREMENTS & FORM: Clean Two-Column */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        {/* lhs: documents */}
                        <div className="lg:w-1/2 space-y-12">
                            <div className="space-y-4">
                                <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] block">Checklist</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none">Mandatory <br /> <span className="text-orange-600">Documents</span></h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "BIRTH CERTIFICATE",
                                    "TRANSFER CERTIFICATE",
                                    "PREVIOUS REPORT CARD",
                                    "RECENT PHOTOGRAPHS",
                                    "AADHAR CARD COPIES",
                                    "RESIDENCE PROOF"
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-950">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                                        <span className="font-black text-[10px] uppercase tracking-widest">{doc}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <button className="flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200">
                                    <Download className="w-5 h-5" />
                                    Download Prospectus
                                </button>
                            </div>
                        </div>

                        {/* rhs: form */}
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-slate-50 p-8 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-100/50">
                                <h3 className="text-2xl font-black text-slate-950 mb-10 uppercase tracking-tighter text-center">Inquiry Form</h3>
                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="CHILD NAME" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500 text-[10px] font-black placeholder-slate-400 uppercase tracking-widest" />
                                        <input type="text" placeholder="PARENT NAME" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500 text-[10px] font-black placeholder-slate-400 uppercase tracking-widest" />
                                    </div>
                                    <select className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500 text-[10px] font-black text-slate-400 appearance-none cursor-pointer uppercase tracking-widest">
                                        <option>SELECT GRADE</option>
                                        <option>PLAYGROUP</option>
                                        <option>PRIMARY</option>
                                        <option>MIDDLE</option>
                                        <option>HIGH SCHOOL</option>
                                    </select>
                                    <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500 text-[10px] font-black placeholder-slate-400 uppercase tracking-widest" />
                                    <button className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-orange-100 hover:bg-slate-950 transition-all text-xs uppercase tracking-[0.4em] mt-4">
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA: Super Clean White */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <GraduationCap className="w-16 h-16 text-orange-600 mx-auto" />
                        <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                            Shape Their <br /> <span className="text-orange-600">Future Today</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-10">
                            <Link href="/contact-us" className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-200">
                                Contact Admissions
                            </Link>
                            <button className="bg-white text-slate-950 border border-slate-200 px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-slate-50 transition-all">
                                Office Locations
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
