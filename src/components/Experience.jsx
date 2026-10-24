import React from 'react';
import { Briefcase, GraduationCap, MapPin, CheckCircle, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-900/60">
            Lộ trình sự nghiệp
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kinh nghiệm làm việc & Dấu mốc
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Hành trình không ngừng tôi rèn bản lĩnh kỹ thuật qua các vị trí then chốt tại các doanh nghiệp đổi mới sáng tạo.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical connecting line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 hidden sm:block"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEducation = item.role.includes('Cử nhân');
              const Icon = isEducation ? GraduationCap : Briefcase;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Center Icon */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 text-blue-600 dark:text-blue-400 items-center justify-center shadow-lg z-10">
                    <Icon size={16} />
                  </div>

                  {/* Left / Right Card Container */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow space-y-4">
                      
                      {/* Period Pill & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin size={13} className="text-rose-500" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                          {item.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Achievements Bullet list */}
                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
                          Thành tựu tiêu biểu:
                        </span>
                        {item.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
