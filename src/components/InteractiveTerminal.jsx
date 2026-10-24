import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Chào mừng bạn đến với Đỗ Đăng Khoa CLI (AquaTech v2.4.0)!' },
    { type: 'system', text: 'Gõ "help" hoặc click vào các lệnh gợi ý bên dưới để khám phá hồ sơ năng lực thủy sản.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    switch (raw) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Các lệnh khả dụng:
  • about       : Xem lý lịch tóm tắt
  • skills      : Xem hệ thống kỹ năng cốt lõi
  • projects    : Danh sách các dự án tiêu biểu
  • contact     : Thông tin liên lạc trực tiếp
  • coffee      : Mời một tách cà phê lập trình viên
  • sudo hire   : Hợp tác với Alex (🎉 easter egg)
  • clear       : Xóa màn hình terminal`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Họ tên: ${personalInfo.fullName}
Chuyên ngành: Sinh viên Nuôi trồng Thủy sản - CĐ Kinh tế - Kỹ thuật Cần Thơ (CTC)
Quê quán: Huyện Đầm Dơi, Tỉnh Cà Mau
Mục tiêu: Đưa khoa học kỹ thuật và chuyển đổi số về vuông tôm miền Tây
Bio: "${personalInfo.shortBio}"`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Kỹ thuật Thủy sản : Tôm sú sinh thái Năm Căn, Tôm thẻ thâm canh, Cá lăng nha
Môi trường Nước   : Kiểm soát pH, Độ mặn, DO, Kiềm, Ủ vi sinh bản địa Probiotics
Công nghệ & Số hóa: Trạm phao IoT ESP32, Sổ tay ao nuôi Web App, Zalo Bot cảnh báo
Chứng nhận        : VietGAP Thủy sản, Kỹ thuật xét nghiệm mẫu nước & bệnh học PCR`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projectsData.map(p => `• [${p.categoryLabel}] ${p.title} -> ${p.subtitle}`).join('\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email    : ${personalInfo.email}
Telegram : ${personalInfo.telegram}
GitHub   : ${personalInfo.github}
LinkedIn : ${personalInfo.linkedin}`
        });
        break;

      case 'coffee':
        newHistory.push({
          type: 'output',
          text: `      ( (
       ) )
    .______.
    |   ☕ |]  Một ly Cà phê Robusta Đắk Lắk hảo hạng cho bạn!
    \\______/   "Code without coffee is just sleep deprivation."`
        });
        break;

      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 }
        });
        newHistory.push({
          type: 'highlight',
          text: `🚀 TUYỆT VỜI! Bạn vừa kích hoạt lệnh tuyển dụng!
Hãy gửi tin nhắn qua form bên dưới hoặc gửi email tới: ${personalInfo.email}
Rất hân hạnh được đồng hành và kiến tạo dự án đột phá cùng bạn!`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Lệnh "${cmdStr}" không nhận diện được. Gõ "help" để xem danh sách lệnh.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-900/60">
            Interactive Playground
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Developer CLI Terminal
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Dành cho các tech lead và developer thích khám phá thông tin qua dòng lệnh quen thuộc.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
          
          {/* Terminal Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs text-slate-400 ml-2 font-sans font-medium">dangkhoa@thuy-san-cantho:~ (zsh)</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <TerminalIcon size={14} className="text-emerald-400" />
              <span>bash 5.2</span>
            </div>
          </div>

          {/* Quick command suggestion pills */}
          <div className="px-4 py-2.5 bg-slate-900/50 border-b border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-sans">Gợi ý nhanh:</span>
            {['help', 'about', 'skills', 'projects', 'contact', 'coffee', 'sudo hire', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono transition-colors cursor-pointer border border-slate-700"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Output Body */}
          <div className="p-5 sm:p-6 space-y-3 min-h-[300px] max-h-[420px] overflow-y-auto">
            {history.map((line, idx) => (
              <div key={idx} className="leading-relaxed">
                {line.type === 'input' && (
                  <span className="text-blue-400 font-semibold">{line.text}</span>
                )}
                {line.type === 'system' && (
                  <span className="text-slate-400">{line.text}</span>
                )}
                {line.type === 'output' && (
                  <pre className="text-slate-200 whitespace-pre-wrap font-mono mt-1">{line.text}</pre>
                )}
                {line.type === 'highlight' && (
                  <pre className="text-amber-300 font-semibold whitespace-pre-wrap font-mono mt-1">{line.text}</pre>
                )}
                {line.type === 'error' && (
                  <span className="text-rose-400 font-semibold">{line.text}</span>
                )}
              </div>
            ))}

            {/* Input Prompt */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold">dangkhoa@aquatech:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Gõ lệnh và bấm Enter..."
                className="flex-1 bg-transparent text-white focus:outline-none font-mono caret-emerald-400 text-sm"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="p-1 text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Chạy lệnh"
              >
                <CornerDownLeft size={16} />
              </button>
            </div>
            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
}
