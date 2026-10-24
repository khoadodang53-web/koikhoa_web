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
    { label: 'Học vấn', value: 'Sinh viên Nuôi trồng Thủy sản - CĐ Kinh tế - Kỹ thuật Cần Thơ', icon: Award },
    { label: 'Quê quán', value: 'Huyện Đầm Dơi, Tỉnh Cà Mau (Vùng nuôi tôm trọng điểm)', icon: Globe2 },
    { label: 'Phương châm', value: 'Bám sát vuông tôm, vững vàng kỹ thuật, ứng dụng số hóa', icon: BookOpen },
    { label: 'Sở thích', value: 'Lội vuông bắt tôm, nghiên cứu vi sinh, lập trình IoT & thưởng thức đờn ca tài tử', icon: Coffee },
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
            Chàng sinh viên Cà Mau và khát vọng Thủy sản Xanh
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Tôi kết hợp kinh nghiệm thực tế tại vuông tôm quê hương Đất Mũi với kiến thức đào tạo bài bản tại Cần Thơ và công nghệ số hóa.
          </p>
        </div>

        {/* Two Column Layout: Story & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Narrative Story */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Hành trình từ vuông tôm Đất Mũi đến giảng đường Cần Thơ</span>
            </h3>
            
            <p>
              Sinh ra và lớn lên giữa những vuông tôm và cánh rừng ngập mặn tại huyện <strong>Đầm Dơi, Cà Mau</strong>, tôi thấu hiểu sâu sắc những giọt mồ hôi và nỗi lo lắng của bà con nông dân mỗi khi thời tiết giao mùa hay dịch bệnh ao nuôi bất ngờ bùng phát.
            </p>

            <p>
              Chọn theo học ngành <strong>Nuôi trồng Thủy sản tại Trường Cao đẳng Kinh tế - Kỹ thuật Cần Thơ (CTC)</strong>, tôi luôn nỗ lực gắn liền bài giảng trên lớp với thực tế đồng ruộng. Tại đây, tôi được đào tạo chuyên sâu về quản lý chất lượng nước ao nuôi, kỹ thuật ương dưỡng giống, dinh dưỡng thủy sản và chẩn đoán bệnh học bằng các thiết bị phòng thí nghiệm hiện đại.
            </p>

            <p>
              Không chỉ dừng lại ở các kỹ thuật nuôi truyền thống, tôi đặc biệt đam mê ứng dụng <strong>công nghệ cảm biến IoT và chuyển đổi số</strong> vào việc quản lý vuông tôm. Với tôi, người kỹ thuật viên thủy sản hiện đại không chỉ cần vững tay nghề kiểm tra bùn đáy, mà còn cần biết tận dụng công nghệ số để giúp bà con giảm chi phí, kiểm soát rủi ro và phát triển bền vững.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Vững kỹ thuật nước &amp; vi sinh</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Ứng dụng IoT &amp; Sổ tay số</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Tâm huyết với nông nghiệp miền Tây</span>
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
                "Con tôm khỏe mạnh không chỉ nhờ thức ăn ngon, mà nhờ làn nước trong lành và sự tận tâm bám vuông của người nuôi mỗi ngày."
              </blockquote>
              <div className="text-xs text-blue-100 font-semibold pt-1">
                — Đỗ Đăng Khoa
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
