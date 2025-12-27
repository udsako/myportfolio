"use client";

import { Phone, Mail, MessageCircle } from 'lucide-react';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white px-6 md:px-16 py-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact Me</h1>
      <div className="text-zinc-300 text-lg max-w-md space-y-3">
        <p><Phone className="inline mr-2 h-5 w-5 text-indigo-400" /> +234 9165397315</p>
        <p><MessageCircle className="inline mr-2 h-5 w-5 text-green-400" /> +234 9081439022</p>
        <p><Mail className="inline mr-2 h-5 w-5 text-red-400" /> udsako@gmail.com</p>
      </div>
    </div>
  );
}
