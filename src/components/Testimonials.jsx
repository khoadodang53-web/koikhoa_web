import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200/60 dark:border-amber-900/60">
            Lời chứng thực & Nhận xét
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Đồng nghiệp & Lãnh đạo nói gì về tôi
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Sự tin cậy được xây dựng qua từng cam kết hoàn thành đúng hạn và sản phẩm vận hành ổn định thực tế.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    <Quote size={20} />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {item.role}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
