import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'fullstack-dev',
    budget: '2k-5k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
      if (onShowToast) {
        onShowToast('Cảm ơn bạn! Tin nhắn đã được gửi thành công. Đăng Khoa sẽ phản hồi trong vòng 24 giờ làm việc.');
      }
      setFormData({
        name: '',
        email: '',
        service: 'fullstack-dev',
        budget: '2k-5k',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/60">
            Khởi động dự án
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hãy cùng nhau tạo nên điều phi thường
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Bạn có một ý tưởng sản phẩm mới, cần tối ưu hóa hệ thống hiện tại hoặc muốn tư vấn giải pháp AI? Tôi luôn sẵn sàng lắng nghe!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Perks */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Kênh liên hệ trực tiếp
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-700 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">Email</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200/80 dark:border-slate-700">
                  <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">Điện thoại / Zalo</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200/80 dark:border-slate-700">
                  <div className="p-2.5 rounded-xl bg-sky-500 text-white shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">Telegram</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.telegram}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200/80 dark:border-slate-700">
                  <div className="p-2.5 rounded-xl bg-purple-600 text-white shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">Trụ sở hoạt động</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/60 flex items-start gap-3">
                <Clock size={20} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-800 dark:text-emerald-300">
                  <strong className="block font-semibold">Cam kết phản hồi nhanh:</strong>
                  Tôi cam kết phản hồi tất cả thư và yêu cầu hợp tác kỹ thuật trong vòng <strong>dưới 24 giờ</strong>.
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-8 sm:p-10 shadow-xl">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Địa chỉ Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service needed */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Mục đích liên hệ / Hợp tác
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                    >
                      <option value="thuy-san-sinh-thai">Tư vấn Kỹ thuật Nuôi tôm - Rừng & Quản lý nước</option>
                      <option value="vi-sinh-probiotics">Hướng dẫn tự ủ Chế phẩm Vi sinh Bản địa</option>
                      <option value="iot-aquasense">Thử nghiệm & Triển khai Trạm phao Cảm biến IoT</option>
                      <option value="co-hoi-viec-lam">Cơ hội Thực tập / Tuyển dụng Kỹ thuật viên</option>
                      <option value="other">Giao lưu & Hợp tác Nông nghiệp khác</option>
                    </select>
                  </div>

                  {/* Budget bracket */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Quy mô diện tích / Đơn vị
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                    >
                      <option value="ho-gia-dinh">Hộ gia đình (&lt; 2 hecta)</option>
                      <option value="trang-trai-vua">Trang trại vừa (2 - 10 hecta)</option>
                      <option value="hop-tac-xa">Hợp tác xã / Doanh nghiệp (&gt; 10 hecta)</option>
                      <option value="vien-truong">Viện nghiên cứu / Trường đại học / Khác</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Nội dung yêu cầu / Bài toán của bạn *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Mô tả ngắn gọn về sản phẩm, mục tiêu hoặc vấn đề kỹ thuật bạn đang cần giải quyết..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Gửi yêu cầu hợp tác</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-slate-600 dark:text-slate-300">
                  Thông tin của bạn được bảo mật tuyệt đối theo tiêu chuẩn NDA.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
