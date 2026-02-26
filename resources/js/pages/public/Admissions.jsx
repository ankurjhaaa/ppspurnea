import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { ClipboardCheck, FileText, Calendar, Phone, Mail, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export default function Admissions() {
    return (
        <PublicLayout>
            <Head title="Admissions - PPS Purnea" />

            {/* Hero Section - Compact */}
            <div className="relative py-12 md:py-14 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
                        alt="Admission"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-orange-500 font-black tracking-widest uppercase text-[10px] mb-2 block">Enroll Your Child</span>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Join the <span className="text-orange-500">PPS Family</span></h1>
                    <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto font-bold leading-relaxed">
                        Admissions now open for Academic Year 2024-25. Shape your child's future with us.
                    </p>
                </div>
            </div>

            {/* Admission Process - Step Grid */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
                        <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Step-by-Step Guide</span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Admission Process</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { step: "01", title: "Enquiry", desc: "Fill out the online inquiry form or visit the campus.", icon: Mail },
                            { step: "02", title: "Counseling", desc: "Meet our counselors to understand the curriculum.", icon: Phone },
                            { step: "03", title: "Assessment", desc: "A minor assessment to check the child's readiness.", icon: ClipboardCheck },
                            { step: "04", title: "Document", desc: "Finalize admission with documents and fees.", icon: FileText }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-md border border-slate-100 relative z-10 hover:bg-white hover:shadow-md transition-all group">
                                <div className="w-10 h-10 bg-orange-600 text-white rounded-md flex items-center justify-center font-black mb-4 shadow-md shadow-orange-600/20 text-sm">
                                    {item.step}
                                </div>
                                <h3 className="text-base font-black mb-2 text-slate-900 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 font-bold text-[11px] leading-relaxed italic">"{item.desc}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements & Form - Compact Grid */}
            <section className="py-10 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        <div className="lg:w-1/2 space-y-6">
                            <div className="space-y-2">
                                <span className="text-orange-600 font-black tracking-widest uppercase text-[10px] block">Checklist</span>
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">Required <span className="text-orange-600">Documents</span></h2>
                            </div>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                Please ensure you have all the original documents and photocopies ready for the admission process.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Birth Certificate",
                                    "Transfer Certificate (TC)",
                                    "Previous Year Report Card",
                                    "Passport Photographs",
                                    "Aadhar Card (Child & Parent)",
                                    "Proof of Address"
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-700 font-black text-[10px] uppercase tracking-wide bg-white p-2.5 rounded-md border border-slate-100 shadow-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center gap-2 bg-slate-950 text-white px-6 py-3 rounded-md font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-black/10 group">
                                <Download className="w-4 h-4" />
                                Download Prospectus (PDF)
                            </button>
                        </div>

                        <div className="lg:w-1/2 w-full bg-white p-6 md:p-8 rounded-md shadow-xl border border-slate-100 relative">
                            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight text-center border-b border-slate-50 pb-4">Admission Enquiry Form</h3>
                            <form className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <input type="text" placeholder="Child's Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold" />
                                    <input type="text" placeholder="Parent's Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold" />
                                </div>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-slate-500 text-xs font-bold appearance-none cursor-pointer">
                                    <option>Select Grade Applying For</option>
                                    <option>Pre-Nursery</option>
                                    <option>Nursery - KG</option>
                                    <option>Class 1 - 12</option>
                                </select>
                                <input type="tel" placeholder="Mobile Number" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold" />
                                <textarea placeholder="Questions/Requirements" rows="3" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-xs font-bold"></textarea>
                                <button className="w-full bg-orange-600 text-white font-black py-4 rounded-md shadow-lg shadow-orange-600/20 hover:bg-slate-950 transition-all text-xs uppercase tracking-widest mt-2">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assistance Section - Compact */}
            <div className="py-10 bg-slate-950 text-white border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center border border-white/10 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-300">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Office Hours</p>
                                <p className="font-black text-sm uppercase">Mon - Sat: 08:00 AM - 04:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/5 rounded-md flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Admission Desk</p>
                                <p className="font-black text-sm uppercase">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
