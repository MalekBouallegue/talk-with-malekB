'use client';

import { useState } from 'react';

const ACCESS_KEY = "3b223a59-622c-4759-9063-5c4bc0534d36";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'how' | 'pricing'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative overflow-hidden font-sans">
      
      {/* ------------------------------------------------------------- */}
      {/* FLOATING ALPHABET BUBBLES BACKGROUND                          */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-60">
        {/* English Alphabet Bubbles */}
        <div className="absolute top-16 left-[5%] w-12 h-12 rounded-full bg-emerald-100/70 border border-emerald-300/50 text-emerald-800/50 font-extrabold text-xl flex items-center justify-center shadow-sm">
          A
        </div>
        <div className="absolute top-1/4 right-[8%] w-16 h-16 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/40 font-extrabold text-2xl flex items-center justify-center shadow-sm">
          B
        </div>
        <div className="absolute top-1/2 left-[3%] w-14 h-14 rounded-full bg-emerald-100/50 border border-emerald-300/30 text-emerald-800/40 font-extrabold text-2xl flex items-center justify-center shadow-sm">
          C
        </div>
        <div className="absolute bottom-1/3 right-[5%] w-12 h-12 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/50 font-extrabold text-xl flex items-center justify-center shadow-sm">
          D
        </div>
        <div className="absolute bottom-16 left-[10%] w-16 h-16 rounded-full bg-emerald-100/50 border border-emerald-300/30 text-emerald-800/30 font-extrabold text-3xl flex items-center justify-center shadow-sm">
          E
        </div>

        {/* Arabic Alphabet Bubbles */}
        <div className="absolute top-28 right-[18%] w-14 h-14 rounded-full bg-emerald-100/70 border border-emerald-300/50 text-emerald-800/60 font-bold text-2xl flex items-center justify-center shadow-sm">
          أ
        </div>
        <div className="absolute top-1/3 left-[12%] w-14 h-14 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/50 font-bold text-2xl flex items-center justify-center shadow-sm">
          ب
        </div>
        <div className="absolute top-2/3 right-[12%] w-16 h-16 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/40 font-bold text-3xl flex items-center justify-center shadow-sm">
          ت
        </div>
        <div className="absolute bottom-1/4 left-[6%] w-12 h-12 rounded-full bg-emerald-100/50 border border-emerald-300/30 text-emerald-800/40 font-bold text-xl flex items-center justify-center shadow-sm">
          ث
        </div>
        <div className="absolute bottom-24 right-[22%] w-14 h-14 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/50 font-bold text-2xl flex items-center justify-center shadow-sm">
          ض
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* HEADER / NAVIGATION                                           */}
      {/* ------------------------------------------------------------- */}
      <header className="relative z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo + Brand Name */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 focus:outline-none group"
          >
            <svg className="w-10 h-10 flex-shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" rx="32" fill="#059669" />
              <path d="M34 78V48C34 38.0589 42.0589 30 52 30C61.9411 30 70 38.0589 70 48V78" stroke="white" strokeWidth="9" strokeLinecap="round" />
              <path d="M50 78V48C50 38.0589 58.0589 30 68 30C77.9411 30 86 38.0589 86 48V78" stroke="#A7F3D0" strokeWidth="9" strokeLinecap="round" />
              <path d="M34 78L26 86V74H34Z" fill="white" />
            </svg>

            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Talk with <span className="text-emerald-600">Malek</span>
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60 text-sm font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'home' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'about' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab('how')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'how' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              How It Works
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'pricing' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Pricing & Schedule
            </button>
          </nav>

          {/* CTA Header Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition shadow-sm hover:shadow"
          >
            Book Free Call
          </button>

        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* MAIN CONTENT CONTAINER                                        */}
      {/* ------------------------------------------------------------- */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-16">
        
        {/* TAB 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-16 text-center max-w-5xl mx-auto">
            
            {/* Hero Header */}
            <div className="space-y-6 pt-4 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Speak English or Arabic with confidence.
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Relaxed 1-on-1 conversation sessions tailored to your pace—no group pressure, no grammar drills, and zero judgment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition transform active:scale-95 text-sm"
                >
                  Book Your Free 30-Min Call
                </button>
                <button 
                  onClick={() => setActiveTab('how')}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-700 font-semibold px-7 py-3 rounded-full border border-slate-300 transition text-sm"
                >
                  How It Works
                </button>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-2 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4 text-xl">
                  🎯
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Personalized Pace</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No rigid curricula. We talk about real-life topics you care about and focus entirely on your rhythm.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4 text-xl">
                  🗣️
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Real Conversation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ditch textbook drills. We focus on articulating your thoughts clearly and overcoming speaking anxiety.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4 text-xl">
                  🌍
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Bilingual Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Practice spoken English or Arabic with an educator who understands real dialogue and language nuances.
                </p>
              </div>
            </div>

            {/* Continuous Marquee Feedback Slider */}
            <div className="pt-10 space-y-6 overflow-hidden">
              <div className="text-center max-w-xl mx-auto px-4">
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-100/80 px-3 py-1 rounded-full">
                  Global Learner Feedback
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-3">
                  Testimonials
                </h2>
              </div>

              {/* Scrolling Loop Container */}
              <div className="relative w-full overflow-hidden py-4">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <div className="animate-marquee gap-6 px-4">
                  {[
                    { 
                      name: "Student Review", 
                      country: "International Learner", 
                      quote: "Malek is a mentor you feel comfortable with from the very first moment. She gives you time to think and reflect, and always seeks honest feedback on each session." 
                    },
                    { 
                      name: "Hannah B.", 
                      country: "Germany", 
                      quote: "Malek made learning spoken Arabic feel approachable right from day one. My grammar and sentence flow improved noticeably without feeling like a strict class." 
                    },
                    { 
                      name: "Sofia M.", 
                      country: "Spain", 
                      quote: "I always hesitated before speaking English, but Malek helped me get over that mental block. My speaking rhythm feels so much more natural now." 
                    },
                    { 
                      name: "Kenji T.", 
                      country: "Japan", 
                      quote: "Practicing Arabic dialogue with Malek helped me bridge the gap between textbook rules and actual daily conversation." 
                    },
                    { 
                      name: "Lucas S.", 
                      country: "Brazil", 
                      quote: "Working on my spoken English with Malek gave me the clarity I needed to express complex thoughts smoothly." 
                    },
                    { 
                      name: "Maya L.", 
                      country: "Canada", 
                      quote: "The sessions are engaging and completely focused on real interaction. My English fluency has leveled up fast." 
                    }
                  ].concat([
                    { 
                      name: "Student Review", 
                      country: "International Learner", 
                      quote: "Malek is a mentor you feel comfortable with from the very first moment. She gives you time to think and reflect, and always seeks honest feedback on each session." 
                    },
                    { 
                      name: "Hannah B.", 
                      country: "Germany", 
                      quote: "Malek made learning spoken Arabic feel approachable right from day one. My grammar and sentence flow improved noticeably without feeling like a strict class." 
                    },
                    { 
                      name: "Sofia M.", 
                      country: "Spain", 
                      quote: "I always hesitated before speaking English, but Malek helped me get over that mental block. My speaking rhythm feels so much more natural now." 
                    },
                    { 
                      name: "Kenji T.", 
                      country: "Japan", 
                      quote: "Practicing Arabic dialogue with Malek helped me bridge the gap between textbook rules and actual daily conversation." 
                    },
                    { 
                      name: "Lucas S.", 
                      country: "Brazil", 
                      quote: "Working on my spoken English with Malek gave me the clarity I needed to express complex thoughts smoothly." 
                    },
                    { 
                      name: "Maya L.", 
                      country: "Canada", 
                      quote: "The sessions are engaging and completely focused on real interaction. My English fluency has leveled up fast." 
                    }
                  ]).map((item, idx) => (
                    <div 
                      key={idx}
                      className="w-80 md:w-96 flex-shrink-0 bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm text-left flex flex-col justify-between"
                    >
                      <div>
                        <p className="text-slate-700 text-xs md:text-sm leading-relaxed italic">
                          "{item.quote}"
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                          {item.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                          <p className="text-xs text-slate-500 font-medium">{item.country}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ABOUT ME */}
        {activeTab === 'about' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Bio & Promise Box */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">About Me</h2>
                  <p className="text-emerald-700 font-semibold text-lg">Communication Tutor & Facilitator</p>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Hi, I'm Malek! I specialize in helping people build real speaking confidence in 1-on-1 environments.
                  </p>
                  <p>
                    Some learners spend years studying grammar in textbooks or taking language classes, yet still feel frozen when it comes to speaking out loud, especially in front of groups. My mission is to give you a supportive, comfortable space where you can practice expressing your thoughts without fear of being judged.
                  </p>
                  <p>
                    Whether you want to improve your conversational English, practice spoken Arabic, or simply get comfortable articulating your ideas. </p>
                  <p>I am here to listen, support, and guide you.</p>
                </div>

                {/* Promise Box */}
                <div className="bg-emerald-50/90 backdrop-blur border border-emerald-200 rounded-2xl p-6 space-y-3">
                  <h3 className="font-bold text-emerald-900 text-lg">My Promise To You:</h3>
                  <ul className="space-y-2 text-slate-700 text-sm md:text-base">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> 100% judgment-free environment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> Active listening during every session
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> Conversations centered on real-life topics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> Video/Audio call. Whichever makes you feel most comfortable
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Profile Picture Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-sm">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  
                  <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Malek - Communication Tutor" 
                      className="w-full h-[400px] object-cover rounded-2xl"
                    />
                    <div className="p-4 text-center">
                      <h4 className="font-bold text-emerald-900 text-lg">Malek B. </h4>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

{/* TAB 3: HOW IT WORKS */}
        {activeTab === 'how' && (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">How It Works</h2>
              <p className="text-slate-600">A simple, stress-free process to start speaking comfortably.</p>
            </div>

            {/* 3-Column Layout: Left Teaching Photo | Middle 4 Steps | Right Teaching Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Teaching Photo */}
              <div className="lg:col-span-3 order-2 lg:order-1 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 w-full max-w-sm lg:max-w-none h-72 lg:h-[440px]">
                  <img 
                    src="/teaching-left.jpg" 
                    alt="Malek teaching and facilitating a session" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Middle 4-Step List */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4 items-start">
                  <span className="bg-emerald-100 text-emerald-800 font-black text-base px-3 py-1 rounded-xl flex-shrink-0">01</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Book Your Free 30-Minute Intro Call</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">We start with a 100% free 30-minute conversation. No pressure, no credit card needed. This gives us a chance to meet and see if you feel comfortable talking with me.</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4 items-start">
                  <span className="bg-emerald-100 text-emerald-800 font-black text-base px-3 py-1 rounded-xl flex-shrink-0">02</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Choose Video or Audio Call</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">You decide how we connect! If camera pressure makes you nervous, we can start with a standard phone or audio call.</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4 items-start">
                  <span className="bg-emerald-100 text-emerald-800 font-black text-base px-3 py-1 rounded-xl flex-shrink-0">03</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Enjoy Real 1-on-1 Conversation</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">We talk about everyday topics, interest areas, or practice scenarios. No strict textbooks or boring grammar drills.</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4 items-start">
                  <span className="bg-emerald-100 text-emerald-800 font-black text-base px-3 py-1 rounded-xl flex-shrink-0">04</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Continue At Your Own Pace ($10 / call)</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">If you enjoy our first session, you can book regular 1-on-1 sessions for $10 per call whenever you want to practice.</p>
                  </div>
                </div>
              </div>

              {/* Right Teaching Photo */}
              <div className="lg:col-span-3 order-3 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 w-full max-w-sm lg:max-w-none h-72 lg:h-[440px]">
                  <img 
                    src="/teaching-right.jpg" 
                    alt="Malek engaging with learners during a workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

            <div className="text-center pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-full transition shadow-md"
              >
                Start With A Free 30-Min Call
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: PRICING & SCHEDULE */}
        {activeTab === 'pricing' && (
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Simple, Transparent Pricing</h2>
              <p className="text-slate-600">Start free, then continue whenever you need practice.</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Free Trial Card */}
              <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border-2 border-emerald-500 shadow-lg relative flex flex-col justify-between">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  First Step
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">First Conversation</h3>
                  <div className="text-4xl font-black text-emerald-600 my-4">FREE</div>
                  <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 py-1 px-3 rounded-full inline-block mb-4">
                    30 Minutes • Video or Phone
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Test the experience, see if you feel comfortable talking directly with me, and discuss your goals.
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition"
                >
                  Book Free Call
                </button>
              </div>

              {/* Paid Session Card */}
              <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">1-on-1 Practice Call</h3>
                  <div className="text-4xl font-black text-slate-900 my-4">$10 <span className="text-sm font-normal text-slate-500">/ session</span></div>
                  <p className="text-xs font-semibold text-slate-600 bg-slate-100 py-1 px-3 rounded-full inline-block mb-4">
                    30 Minutes • Personal Session
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dedicated individual session to practice speaking skills, build fluency, and express yourself freely.
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition"
                >
                  Book A Session
                </button>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="bg-white/90 backdrop-blur p-6 rounded-3xl border border-slate-200/80 shadow-sm text-left flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <h3 className="font-bold text-slate-900 text-base">General Weekly Availability</h3>
                </div>
                <p className="text-slate-600 text-sm">Flexible session times across different time zones.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-3 text-center md:text-right w-full md:w-auto">
                <span className="block font-bold text-emerald-900 text-sm">Monday – Saturday</span>
                <span className="block text-emerald-700 text-xs font-medium">2:00 PM – 9:00 PM (CET)</span>
              </div>
            </div>

            {/* What Happens After Booking */}
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-extrabold text-slate-900 text-center">What Happens After You Book?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm">1</div>
                  <h4 className="font-bold text-slate-900 text-base">Submit Request</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">Fill out the quick request form with your preferred date, time, and language preference.</p>
                </div>
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm">2</div>
                  <h4 className="font-bold text-slate-900 text-base">Email Confirmation</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">Malek will email you within 24 hours to confirm your slot and send your meeting link.</p>
                </div>
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm">3</div>
                  <h4 className="font-bold text-slate-900 text-base">Join the Call</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">Hop on Google Meet or a phone call for a relaxed, pressure-free 1-on-1 session!</p>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="space-y-6 text-left pt-4">
              <div className="text-center">
                <h3 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
                <p className="text-slate-600 text-sm mt-1">Everything you need to know before your first session.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">What platform do we use for the call?</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">We usually connect via Google Meet or Zoom. If video call anxiety makes you uncomfortable, standard phone calls or audio-only options are 100% fine!</p>
                </div>
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">Do I need to turn my camera on?</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">Not at all! Your comfort comes first. We can do audio-only calls whenever you prefer.</p>
                </div>
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">How does payment work for paid sessions?</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">Your first 30-minute intro call is 100% free. For follow-up $10 sessions, payment details are shared directly after your free call if you decide to continue.</p>
                </div>
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">What if I need to reschedule?</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">No problem at all! Just reply to your confirmation email at least 12 hours in advance, and we will pick a new time.</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* ------------------------------------------------------------- */}
      {/* BOOKING MODAL FORM                                           */}
      {/* ------------------------------------------------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center bg-slate-100"
            >
              ✕
            </button>

            {formStatus === 'success' ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
                <p className="text-slate-600 text-sm">
                  Thanks for reaching out! I've received your request and will reply to your email shortly to confirm our call date and time.
                </p>
                <button
                  onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
                  className="mt-4 bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-full hover:bg-emerald-700 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-slate-900">Book Your Session</h3>
                  <p className="text-slate-600 text-sm mt-1">Fill in your details to request your call slot with Malek.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      name="preferred_date" 
                      required 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Time Slot</label>
                    <select 
                      name="preferred_time"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                    >
                      <option value="Afternoon (2 PM - 5 PM CET)">Afternoon (2 PM - 5 PM CET)</option>
                      <option value="Evening (5 PM - 9 PM CET)">Evening (5 PM - 9 PM CET)</option>
                      <option value="Flexible / Any Time">Flexible / Any Time</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Language Goal</label>
                  <select 
                    name="language"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                  >
                    <option value="English Practice">English Speaking Practice</option>
                    <option value="Arabic Practice">Arabic Speaking Practice</option>
                    <option value="Both / General">Both / General Communication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Note / Goal (Optional)</label>
                  <textarea 
                    name="message" 
                    rows={2} 
                    placeholder="Tell me a bit about what you'd like to work on..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <p className="text-xs text-red-600 text-center font-medium">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow-md disabled:opacity-50 mt-2"
                >
                  {formStatus === 'submitting' ? 'Sending Request...' : 'Send Booking Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © 2026 Talk with Malek. All rights reserved. 1-on-1 communication practice.
      </footer>

    </div>
  );
}
