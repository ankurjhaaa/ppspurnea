import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { ClipboardCheck, FileText, Calendar, Phone, Mail, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export default function Admissions() {
    return (
        <PublicLayout>
            <Head title="Admissions - PPS Purnea" />

            {/* Hero Section */}
            <div className="relative py-16 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
                        alt="Admission"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Join the <span className="text-orange-500">PPS Family</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Admissions now open for Academic Year 2024-25. Secure your child's future today.
                    </p>
                </div>
            </div>

            {/* Admission Process */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Step-by-Step</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Admission <span className="text-blue-600">Process</span></h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>

                        {[
                            { step: "01", title: "Enquiry", desc: "Fill out the online inquiry form or visit the campus.", icon: Mail },
                            { step: "02", title: "Counseling", desc: "Meet our counselors to understand the curriculum.", icon: Phone },
                            { step: "03", title: "Assessment", desc: "A minor assessment to check the child's readiness.", icon: ClipboardCheck },
                            { step: "04", title: "Document", desc: "Finalize admission with documents and fees.", icon: FileText }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-slate-50 relative z-10 hover:border-orange-200 transition-colors group">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-black mb-6 shadow-lg shadow-orange-600/30">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements & Documents */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-slate-900">Required <span className="text-orange-600">Documents</span></h2>
                            <p className="text-slate-600 text-lg">Please ensure you have all the original documents and photocopies ready for the admission process.</p>

                            <ul className="space-y-4">
                                {[
                                    "Birth Certificate issued by Municipal Corporation.",
                                    "Transfer Certificate (TC) from previous school.",
                                    "Previous Year's Report Card (Grade 1 onwards).",
                                    "Passport size photographs (Child & Parents).",
                                    "Aadhar Card of Student & Parents.",
                                    "Proof of Address (Electricity Bill/Rent Agreement)."
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-bold text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg">
                                <Download className="w-5 h-5" />
                                Download Prospectus (PDF)
                            </button>
                        </div>
                        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Admission Inquiry Form</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Child's Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all" />
                                    <input type="text" placeholder="Parent's Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all" />
                                </div>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all text-slate-500">
                                    <option>Select Grade Applying For</option>
                                    <option>Pre-Nursery</option>
                                    <option>Nursery - KG</option>
                                    <option>Class 1 - 5</option>
                                    <option>Class 6 - 10</option>
                                    <option>Class 11 - 12</option>
                                </select>
                                <input type="tel" placeholder="Mobile Number" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all" />
                                <textarea placeholder="Any specific requirements/questions?" rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-all"></textarea>
                                <button className="w-full bg-orange-600 text-white font-black py-4 rounded-xl shadow-lg shadow-orange-600/30 hover:bg-orange-700 transition-all transform hover:-translate-y-1">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timings */}
            <div className="py-12 bg-slate-900 text-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Calendar className="w-8 h-8 text-orange-500" />
                        <div>
                            <p className="font-bold text-lg">Office Hours</p>
                            <p className="text-slate-400 text-sm">Mon - Sat: 08:00 AM - 04:00 PM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-8 h-8 text-blue-400" />
                        <div>
                            <p className="font-bold text-lg">Admission Desk</p>
                            <p className="text-slate-400 text-sm">+91 98765 43210 (Mr. Amit Gupta)</p>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
