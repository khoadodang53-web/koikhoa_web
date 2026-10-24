import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  BrainCircuit, 
  CloudCog, 
  CheckCircle,
  Sparkles,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData.categories[0].id);

  const categoryIcons = {
    frontend: Layout,
    backend: Server,
    ai: BrainCircuit,
    devops: CloudCog,
  };

  const currentCategory = skillsData.categories.find((c) => c.id === activeTab) || skillsData.categories[0];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border border-purple-200/60 dark:border-purple-900/60">
            Năng lực chuyên môn
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Vũ khí công nghệ & Hệ sinh thái
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Tôi liên tục cập nhật các công nghệ tiên tiến nhất nhằm đem lại tốc độ phát triển tối ưu và sản phẩm chất lượng cao nhất.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {skillsData.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                <Icon size={18} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Details & Skills Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-10 shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-700/80 gap-3">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {currentCategory.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {currentCategory.description}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold self-start sm:self-auto">
              <Sparkles size={14} />
              <span>Chuyên môn cốt lõi</span>
            </div>
          </div>

          {/* Skill Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {currentCategory.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                        Expert
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Complementary Toolkit Chips */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-700/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
              Quy trình & Công cụ thường dùng trong mảng này:
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Unit/Integration Testing (Vitest, Jest)', 'CI/CD Automation', 'Figma to Code', 'Git Flow & Trunk-Based', 'Zero-Downtime Deployment', 'Performance Profiling'].map((tool) => (
                <div
                  key={tool}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle size={12} className="text-emerald-500" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
