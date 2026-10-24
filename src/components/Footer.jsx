import React from 'react';
import { ArrowUp, Mail, Heart, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-base shadow-md">
                DK
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-lg">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500 dark:text-slate-400">
              {personalInfo.tagline}
            </p>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              Sinh viên Nuôi trồng Thủy sản • CĐ Kinh tế - Kỹ thuật Cần Thơ • Quê Cà Mau
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Điều hướng nhanh
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Về tôi & Triết lý</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kỹ năng chuyên môn</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dự án tiêu biểu</a></li>
              <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Lộ trình sự nghiệp</a></li>
              <li><a href="#terminal" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Interactive CLI</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Liên hệ hợp tác</a></li>
            </ul>
          </div>

          {/* Tech & Ecosystem */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Kết nối & Mã nguồn
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#terminal"
                className="p-2.5 rounded-xl bg-slate-900 text-emerald-400 hover:bg-slate-800 transition-colors"
                aria-label="Terminal"
              >
                <Terminal size={18} />
              </a>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Trang web được thiết kế và xây dựng theo chuẩn Production với React 19, Tailwind CSS, Lucide Icons và Vite.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
            © {new Date().getFullYear()} Đỗ Đăng Khoa. Nuôi trồng Thủy sản CĐ Kinh tế - Kỹ thuật Cần Thơ.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
