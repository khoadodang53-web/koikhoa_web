import React from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleLaunchDemo = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.5 }
    });
    window.open(project.liveDemoUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Đóng chi tiết dự án"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors cursor-pointer border border-white/20"
          >
            <X size={20} />
          </button>

          {/* Title on image banner */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white inline-block mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 sm:px-10 pb-8 space-y-8">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-center">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {m.label}
                </div>
                <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers size={18} className="text-blue-500" />
              <span>Tổng quan kiến trúc & Giải pháp</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-500" />
              <span>Điểm nhấn kỹ thuật & Kết quả đạt được</span>
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Công nghệ & Nền tảng sử dụng:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Đóng lại
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <GithubIcon size={16} />
              <span>Xem GitHub Repo</span>
            </a>
            <button
              onClick={handleLaunchDemo}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <ExternalLink size={16} />
              <span>Trải nghiệm Live Demo</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
