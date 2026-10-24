import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  Users, 
  Zap, 
  Terminal,
  MapPin,
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    alert('Đang tải bản PDF Hồ sơ năng lực của Đỗ Đăng Khoa (Sinh viên Nuôi trồng Thủy sản CTC - Cà Mau)!');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/15 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/15 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call to Action */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.statusMessage}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Xin chào! Tôi là{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {personalInfo.name}
                </span>
                <span className="inline-block animate-bounce ml-2">👋</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {personalInfo.role}
              </p>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Quick Meta Location & Time */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60">
                <MapPin size={15} className="text-rose-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60">
                <Clock size={15} className="text-blue-500" />
                <span>Giờ địa phương: <strong className="font-mono text-slate-700 dark:text-slate-200">{time || '09:00:00'}</strong> (GMT+7)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Khám phá dự án</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Download size={18} className="text-blue-600 dark:text-blue-400" />
                <span>Tải CV / Hồ sơ</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                <Send size={18} />
                <span>Liên hệ nhanh</span>
              </a>
            </div>

            {/* Social Network Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <span className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300 font-semibold">Kết nối:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#terminal"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 text-emerald-400 hover:bg-slate-800 transition-colors"
              >
                <Terminal size={14} />
                <span>open ~/terminal</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Profile Card & Visual Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-lg opacity-40 dark:opacity-60 animate-pulse-slow"></div>

              {/* Main Card Body */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
                      alt={personalInfo.fullName}
                      className="w-20 h-20 rounded-2xl object-cover ring-2 ring-blue-500/40 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {personalInfo.fullName}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      Sinh viên Nuôi trồng Thủy sản
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      CĐ Kinh tế - Kỹ thuật Cần Thơ (CTC) • Quê Cà Mau
                    </p>
                  </div>
                </div>

                {/* Tech Pills Floating Tag Bar */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Tôm sú Cà Mau', 'Tôm thẻ thâm canh', 'Vi sinh Probiotics', 'IoT Cảm biến', 'Hệ thống RAS', 'Quản lý nước ao'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-50/70 to-indigo-50/40 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/40">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                      <Briefcase size={16} />
                      <span className="text-xs font-semibold">Điểm rèn luyện/GPA</span>
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white">3.86/4.0</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Xếp loại Xuất sắc</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-50/70 to-pink-50/40 dark:from-purple-950/30 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900/40">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
                      <CheckCircle2 size={16} />
                      <span className="text-xs font-semibold">Đề tài & Mô hình</span>
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white">8+</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Nghiên cứu &amp; Thử nghiệm</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-50/70 to-teal-50/40 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-100 dark:border-emerald-900/40">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                      <Users size={16} />
                      <span className="text-xs font-semibold">Hộ nuôi hỗ trợ</span>
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white">45+ Hộ</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Tại Năm Căn &amp; Đầm Dơi</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-50/70 to-orange-50/40 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-100 dark:border-amber-900/40">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-1">
                      <Zap size={16} />
                      <span className="text-xs font-semibold">Giờ thực địa ao</span>
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white">1,200+</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Kinh nghiệm thực tiễn</div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1">
                    <Sparkles size={14} className="text-purple-500" />
                    <span>Cam kết chất lượng 100%</span>
                  </span>
                  <a href="#about" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Xem hồ sơ chi tiết →
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
