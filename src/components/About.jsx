import React from 'react';
import { 
  Zap, 
  Code2, 
  Sparkles, 
  Cpu, 
  Award, 
  BookOpen, 
  Globe2, 
  Coffee,
  Check
} from 'lucide-react';
import { philosophyData } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Zap: Zap,
    Code2: Code2,
    Sparkles: Sparkles,
    Cpu: Cpu,
  };

  const quickFacts = [
    { label: 'Học vấn', value: 'Thủ khoa KH&KT Máy tính - ĐH Bách Khoa TP.HCM', icon: Award },
    { label: 'Ngôn ngữ', value: 'Tiếng Việt (Bản xứ), Tiếng Anh (C1 Advanced)', icon: Globe2 },
    { label: 'Phương châm', value: 'Nói ít, làm chuẩn, ship sản phẩm vượt kỳ vọng', icon: BookOpen },
    { label: 'Sở thích', value: 'Mã nguồn mở, Cờ vua, Chạy bộ bán Marathon, Cà phê pha thủ công', icon: Coffee },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/60">
            Giới thiệu & Triết lý
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Người đứng sau những dòng lệnh và hệ thống
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Tôi kết hợp tư duy logic của một kỹ sư hệ thống với sự tinh tế của một nhà thiết kế sản phẩm số để tạo nên những trải nghiệm phần mềm khác biệt.
          </p>
        </div>

        {/* Two Column Layout: Story & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Narrative Story */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Hành trình đam mê công nghệ</span>
            </h3>
            
            <p>
              Bắt đầu hành trình từ những năm tháng theo học chuyên ngành Khoa học Máy tính tại <strong>Đại học Bách Khoa TP.HCM</strong>, tôi luôn bị cuốn hút bởi cách một đoạn mã nhỏ có thể tác động trực tiếp và giải quyết bài toán của hàng triệu con người.
            </p>

            <p>
              Trải qua hơn 8 năm làm việc trong môi trường công nghệ cao—từ các startup kỳ lân đến các tập đoàn công nghệ đa quốc gia—tôi đã đảm nhận vai trò từ Software Engineer, Tech Lead đến Solution Architect. Tôi không chỉ xây dựng các giao diện web mượt mà bằng <strong>React và TypeScript</strong>, mà còn trực tiếp thiết kế hạ tầng backend phân tán, hệ thống message queue và tối ưu hóa cơ sở dữ liệu chịu tải hàng chục nghìn truy vấn đồng thời.
            </p>

            <p>
              Hiện tại, tâm điểm nghiên cứu và ứng dụng của tôi là sự giao thoa giữa <strong>Generative AI (LLMs, Multi-Agent Systems)</strong> và các sản phẩm Web thế hệ mới. Tôi tin rằng AI không thay thế lập trình viên, mà sẽ trao siêu năng lực cho những ai biết kết hợp kiến trúc hệ thống chuẩn mực với trí tuệ nhân tạo.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Tư duy kiến trúc mở rộng (Scalable)</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Tối ưu UX & Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Bảo mật dữ liệu nhiều lớp</span>
              </div>
            </div>
          </div>

          {/* Right Quick Facts & Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-6 shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3">
                Thông tin cốt lõi
              </h4>
              <div className="space-y-4">
                {quickFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          {fact.label}
                        </div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg space-y-3">
              <div className="text-blue-200 text-xs font-mono uppercase tracking-widest">
                // Châm ngôn làm việc
              </div>
              <blockquote className="text-base font-medium italic">
                "Một sản phẩm phần mềm vĩ đại không phải là khi không còn gì để thêm vào, mà là khi không còn chi tiết thừa nào để bớt đi."
              </blockquote>
              <div className="text-xs text-blue-100 font-semibold pt-1">
                — Alex Minh Khang
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars / Engineering Philosophy */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              4 Nguyên tắc kỹ thuật bất di bất dịch
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Những tiêu chuẩn chất lượng tôi luôn áp dụng trong từng dòng mã nguồn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyData.map((item, index) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 p-6 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
