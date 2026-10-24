export const personalInfo = {
  name: "Alex Minh Khang",
  fullName: "Nguyễn Hoàng Minh Khang",
  role: "Senior Fullstack Architect & AI Product Engineer",
  tagline: "Kiến tạo các sản phẩm kỹ thuật số đột phá, tối ưu hiệu năng và ứng dụng AI thực tiễn.",
  shortBio: "Hơn 8 năm kinh nghiệm chuyên sâu trong việc xây dựng hệ thống web chịu tải cao, kiến trúc vi dịch vụ (Microservices) và tích hợp các giải pháp Generative AI tiên tiến. Đam mê mã nguồn sạch, trải nghiệm người dùng tinh tế và hiệu năng tiệm cận tức thì.",
  location: "TP. Hồ Chí Minh & Singapore (Remote / Hybrid)",
  email: "alex.minhkhang.dev@gmail.com",
  phone: "+84 987 654 321",
  telegram: "@alex_minhkhang",
  github: "https://github.com/alexminhkhang",
  linkedin: "https://linkedin.com/in/alexminhkhang",
  twitter: "https://x.com/alexminhkhang",
  availableForHire: true,
  statusMessage: "Sẵn sàng nhận dự án mới & Tư vấn giải pháp",
  stats: [
    { label: "Năm kinh nghiệm", value: "8+", icon: "Briefcase" },
    { label: "Dự án hoàn thành", value: "54+", icon: "CheckCircle2" },
    { label: "Người dùng hoạt động", value: "1.8M+", icon: "Users" },
    { label: "Uptime hệ thống", value: "99.99%", icon: "Zap" },
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Giao diện hiện đại, tối ưu Core Web Vitals và thiết kế đáp ứng hoàn hảo",
      skills: [
        { name: "React 18 / 19", level: 98, highlight: true },
        { name: "TypeScript", level: 95, highlight: true },
        { name: "Next.js (App Router)", level: 92, highlight: true },
        { name: "Tailwind CSS / UI", level: 96, highlight: true },
        { name: "Redux Toolkit / Zustand", level: 90, highlight: false },
        { name: "HTML5 / Modern CSS / Animations", level: 95, highlight: false },
        { name: "Vite / Webpack / Turbopack", level: 88, highlight: false },
      ]
    },
    {
      id: "backend",
      title: "Backend & Distributed Systems",
      description: "Kiến trúc microservices, API RESTful/GraphQL tốc độ cao và bảo mật nhiều lớp",
      skills: [
        { name: "Node.js (Express, Fastify)", level: 94, highlight: true },
        { name: "Go (Golang)", level: 86, highlight: true },
        { name: "Python (FastAPI, Flask)", level: 88, highlight: true },
        { name: "PostgreSQL & Prisma / Drizzle", level: 90, highlight: false },
        { name: "Redis Caching & PubSub", level: 92, highlight: false },
        { name: "GraphQL & RESTful APIs", level: 90, highlight: false },
        { name: "MongoDB & Elasticsearch", level: 85, highlight: false },
      ]
    },
    {
      id: "ai",
      title: "AI & Modern Engineering",
      description: "Tích hợp mô hình ngôn ngữ lớn (LLM), Agentic Workflows và Vector Databases",
      skills: [
        { name: "LLM Orchestration (OpenAI, Anthropic, Gemini)", level: 92, highlight: true },
        { name: "LangChain & LlamaIndex", level: 88, highlight: true },
        { name: "Vector DBs (Pinecone, Qdrant, Chroma)", level: 86, highlight: false },
        { name: "RAG Pipeline Architecture", level: 90, highlight: true },
        { name: "Fine-tuning & Prompt Engineering", level: 87, highlight: false },
      ]
    },
    {
      id: "devops",
      title: "DevOps & Cloud Architecture",
      description: "Tự động hóa triển khai, giám sát thời gian thực và hạ tầng đám mây bất biến",
      skills: [
        { name: "Docker & Containerization", level: 92, highlight: true },
        { name: "Kubernetes (K8s)", level: 84, highlight: false },
        { name: "Amazon Web Services (AWS)", level: 89, highlight: true },
        { name: "CI/CD (GitHub Actions, GitLab CI)", level: 94, highlight: true },
        { name: "Terraform & IaC", level: 82, highlight: false },
        { name: "Nginx, Cloudflare, Edge Networks", level: 90, highlight: false },
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "nexus-cloud",
    title: "NexusCloud Engine",
    subtitle: "Nền tảng phân tích dữ liệu vi dịch vụ thời gian thực",
    category: "ai-cloud",
    categoryLabel: "AI & Cloud",
    featured: true,
    description: "Hệ thống tổng hợp và phân tích dữ liệu luồng quy mô lớn xử lý hơn 50.000 events/giây, cung cấp dashboard trực quan hóa độ trễ dưới 80ms.",
    fullDescription: "NexusCloud Engine là sản phẩm cốt lõi phục vụ các doanh nghiệp tài chính và logistics. Dự án áp dụng kiến trúc Event-Driven Microservices với Apache Kafka làm trục xương sống, backend bằng Golang và giao diện giám sát Real-time bằng React 19 và Canvas WebGL.",
    metrics: [
      { label: "Throughput", value: "50,000+ req/s" },
      { label: "P99 Latency", value: "< 75ms" },
      { label: "Doanh thu hỗ trợ", value: "$4.2M+" },
    ],
    tags: ["React 19", "Golang", "Kafka", "AWS EKS", "ClickHouse", "Tailwind CSS"],
    githubUrl: "https://github.com/alexminhkhang/nexus-cloud-engine",
    liveDemoUrl: "https://nexus-cloud-demo.alexminhkhang.dev",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Thiết kế kiến trúc Distributed Data Pipeline với Kafka và ClickHouse.",
      "Xây dựng Dashboard đồ thị Real-time bằng WebGL không giật lag ở 60 FPS.",
      "Tối ưu chi phí hạ tầng AWS giảm 35% mỗi tháng nhờ kỹ thuật Auto-scaling thông minh."
    ]
  },
  {
    id: "aura-ai",
    title: "AuraAI Copilot Studio",
    subtitle: "Nền tảng Agentic AI tự động hóa quy trình sáng tạo nội dung",
    category: "ai-cloud",
    categoryLabel: "AI & Cloud",
    featured: true,
    description: "SaaS ứng dụng Agentic Workflow cho phép doanh nghiệp tự động hoá quy trình phân tích thị trường, sáng tạo nội dung đa ngôn ngữ và tối ưu SEO.",
    fullDescription: "AuraAI Studio cho phép các nhóm tiếp thị và sản phẩm khởi tạo các trợ lý AI tự hành. Tích hợp mô hình ngôn ngữ lớn tiên tiến, hệ thống RAG đa tầng truy xuất dữ liệu doanh nghiệp chính xác và giao diện làm việc thời gian thực trực quan.",
    metrics: [
      { label: "Người dùng đăng ký", value: "120,000+" },
      { label: "Tokens xử lý/ngày", value: "450M+" },
      { label: "Đánh giá người dùng", value: "4.9 / 5.0" },
    ],
    tags: ["Next.js 14", "FastAPI", "OpenAI / Claude", "Pinecone", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com/alexminhkhang/aura-ai-copilot",
    liveDemoUrl: "https://aura-ai-studio.alexminhkhang.dev",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Xây dựng kiến trúc Multi-Agent phối hợp nhịp nhàng theo quy trình làm việc khép kín.",
      "Streaming Response siêu tốc với Server-Sent Events (SSE) tối ưu trải nghiệm đọc.",
      "Hệ thống thanh toán toàn cầu Stripe Subscription với Webhooks xử lý đồng thời an toàn."
    ]
  },
  {
    id: "finpulse-pay",
    title: "FinPulse Digital Vault",
    subtitle: "Siêu ứng dụng thanh toán & quản trị tài sản số phân tán",
    category: "fullstack",
    categoryLabel: "Fullstack Web",
    featured: true,
    description: "Cổng thanh toán đa tiền tệ và lưu ký tài sản số bảo mật cấp ngân hàng với xác thực sinh trắc học và mã hóa end-to-end.",
    fullDescription: "FinPulse hướng tới thị trường Fintech Đông Nam Á, cung cấp trải nghiệm chuyển tiền tức thì, theo dõi danh mục đầu tư tự động và quản lý hóa đơn doanh nghiệp vừa và nhỏ với độ bảo mật tuyệt đối.",
    metrics: [
      { label: "Tổng giá trị giao dịch", value: "$32M+" },
      { label: "Tỷ lệ gian lận", value: "0.001%" },
      { label: "Tốc độ khớp lệnh", value: "40ms" },
    ],
    tags: ["React", "Node.js", "Redis", "PostgreSQL", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/alexminhkhang/finpulse-vault",
    liveDemoUrl: "https://finpulse-demo.alexminhkhang.dev",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Triển khai cơ chế Zero-Knowledge Proof bảo vệ thông tin giao dịch người dùng.",
      "Hệ thống khóa phân tán (Distributed Locks) với Redis chống Double-Spending.",
      "Giao diện chuẩn Responsive và đạt chuẩn tiếp cận WCAG 2.1 AA quốc tế."
    ]
  },
  {
    id: "omniflow-ui",
    title: "OmniFlow Component Library",
    subtitle: "Bộ thư viện giao diện mã nguồn mở cho hệ sinh thái React",
    category: "opensource",
    categoryLabel: "Mã nguồn mở",
    featured: false,
    description: "Thư viện hơn 60+ components chuẩn accessibility, hỗ trợ Dark Mode không cần cấu hình và dung lượng bundle cực nhẹ (< 12KB gzip).",
    fullDescription: "OmniFlow ra đời nhằm giải quyết vấn đề các thư viện UI hiện tại quá nặng nề. Được xây dựng từ đầu trên nền tảng React và Tailwind CSS, tích hợp đầy đủ bàn phím navigation và ARIA tags.",
    metrics: [
      { label: "GitHub Stars", value: "8,400+" },
      { label: "NPM Downloads/tuần", value: "35,000+" },
      { label: "Contributors", value: "42 Devs" },
    ],
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Storybook", "NPM Package"],
    githubUrl: "https://github.com/alexminhkhang/omniflow-ui",
    liveDemoUrl: "https://omniflow-ui.alexminhkhang.dev",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Tree-shakable 100%, bundle size tối ưu chỉ import những gì cần dùng.",
      "Hỗ trợ sẵn 15+ chủ đề màu sắc hiện đại và dễ tùy biến với CSS Variables.",
      "Tài liệu Storybook tương tác trực quan với hơn 100 mẫu ví dụ code thực tế."
    ]
  },
  {
    id: "mediconnect-telehealth",
    title: "MediConnect TeleHealth",
    subtitle: "Nền tảng khám bệnh trực tuyến & hồ sơ y tế điện tử bảo mật",
    category: "fullstack",
    categoryLabel: "Fullstack Web",
    featured: false,
    description: "Hệ thống khám bệnh từ xa với cuộc gọi video mã hóa WebRTC, đặt lịch hẹn thông minh và đơn thuốc điện tử chuẩn Bộ Y Tế.",
    fullDescription: "MediConnect kết nối hơn 15 bệnh viện và phòng khám lớn với bệnh nhân. Ứng dụng tích hợp video call thời gian thực độ trễ thấp và hệ thống nhắc uống thuốc tự động.",
    metrics: [
      { label: "Lượt khám trực tuyến", value: "85,000+" },
      { label: "Bác sĩ tham gia", value: "320+" },
      { label: "Độ trễ Video", value: "< 120ms" },
    ],
    tags: ["React", "WebRTC", "Express", "Socket.io", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/alexminhkhang/mediconnect-telehealth",
    liveDemoUrl: "https://mediconnect.alexminhkhang.dev",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Tối ưu hóa băng thông WebRTC cho kết nối mạng 3G/4G chập chờn.",
      "Mã hóa AES-256 đối với toàn bộ dữ liệu bệnh án và kết quả xét nghiệm.",
      "Tích hợp nhắc lịch hẹn qua Zalo ZNS và SMS thông minh."
    ]
  },
  {
    id: "devpulse-cli",
    title: "DevPulse CLI & Developer Hub",
    subtitle: "Công cụ dòng lệnh tự động hóa quy trình chuẩn bị môi trường Dev",
    category: "opensource",
    categoryLabel: "Mã nguồn mở",
    featured: false,
    description: "Bộ công cụ CLI đa nền tảng giúp khởi tạo nhanh dự án Fullstack chuẩn Production chỉ trong 30 giây với Docker, CI/CD và Linting.",
    fullDescription: "Được tin dùng bởi hơn 10,000 lập trình viên, DevPulse CLI tự động hóa việc cấu hình database, environment variables, authentication boilerplate và test suite.",
    metrics: [
      { label: "Cài đặt toàn cầu", value: "28,000+" },
      { label: "Thời gian tiết kiệm/dev", value: "~4 giờ" },
      { label: "Đánh giá cộng đồng", value: "98% thích" },
    ],
    tags: ["Node.js", "Commander.js", "TypeScript", "Shell", "Docker"],
    githubUrl: "https://github.com/alexminhkhang/devpulse-cli",
    liveDemoUrl: "https://devpulse.alexminhkhang.dev",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Hỗ trợ 12 template framework phổ biến nhất hiện nay (React, Next, Vue, Nest, Go).",
      "Tự động sinh file Dockerfile và GitHub Actions workflow tối ưu dung lượng cache.",
      "Giao diện terminal sống động với thanh tiến trình và âm thanh thông báo."
    ]
  }
];

export const experienceData = [
  {
    period: "2023 - Hiện tại",
    role: "Lead Fullstack & AI Solutions Architect",
    company: "TechNova Global Innovation",
    location: "TP. Hồ Chí Minh & Singapore",
    description: "Chịu trách nhiệm kiến trúc toàn bộ hệ sinh thái sản phẩm SaaS đám mây, dẫn dắt đội ngũ kỹ sư 18 thành viên và định hướng tích hợp AI tự động hóa cho khách hàng doanh nghiệp quốc tế.",
    achievements: [
      "Thiết kế lại kiến trúc monolithic sang Microservices trên AWS EKS, nâng cao độ tin cậy hệ thống lên 99.99%.",
      "Tiên phong phát triển pipeline RAG phục vụ tra cứu tài liệu nội bộ, giảm 65% thời gian xử lý yêu cầu khách hàng.",
      "Thiết lập chuẩn mực Code Review, CI/CD Pipeline và Automated Testing giúp giảm 40% lỗi production."
    ]
  },
  {
    period: "2021 - 2023",
    role: "Senior Fullstack Engineer & Tech Lead",
    company: "FinEdge Digital Labs",
    location: "TP. Hồ Chí Minh",
    description: "Phụ trách phát triển các module lõi của nền tảng thanh toán Fintech và quản trị dòng tiền doanh nghiệp vừa và nhỏ.",
    achievements: [
      "Tái cấu trúc giao diện Frontend bằng React & Zustand, giảm First Contentful Paint từ 2.8s xuống 0.7s.",
      "Tối ưu các truy vấn cơ sở dữ liệu PostgreSQL phức tạp và tích hợp Redis Caching, tăng throughput 3.5 lần.",
      "Đóng vai trò mentor trực tiếp cho 6 kỹ sư cấp dưới thăng cấp lên Middle/Senior."
    ]
  },
  {
    period: "2018 - 2021",
    role: "Software Engineer",
    company: "V-Next Software & AI Solutions",
    location: "TP. Hồ Chí Minh",
    description: "Tham gia phát triển các dự án Outsourcing & Product cho thị trường Nhật Bản, Singapore và Bắc Mỹ.",
    achievements: [
      "Xây dựng hơn 12 dự án web application với React, Node.js và TypeScript đạt chuẩn chất lượng khắt khe.",
      "Đạt danh hiệu 'Kỹ sư xuất sắc nhất năm 2020' nhờ đóng góp giải pháp tối ưu hóa hiệu năng hệ thống thương mại điện tử.",
    ]
  },
  {
    period: "2014 - 2018",
    role: "Cử nhân Khoa học Máy tính (Thủ khoa tốt nghiệp)",
    company: "Đại học Bách Khoa TP.HCM (HCMUT)",
    location: "TP. Hồ Chí Minh",
    description: "Tốt nghiệp loại Xuất sắc chuyên ngành Kỹ thuật Phần mềm. Giải Nhất Hội nghị Nghiên cứu Khoa học Sinh viên cấp Trường năm 2017.",
    achievements: [
      "Điểm trung bình tích lũy GPA: 3.92 / 4.0",
      "Đạt học bổng toàn phần Vallet và Học bổng Khuyến khích Tài năng Khoa học Công nghệ.",
      "Chủ nhiệm Câu lạc bộ Lập trình Sáng tạo Sinh viên Khoa KH&KT Máy tính."
    ]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Trần Bảo Long",
    role: "CTO & Co-founder",
    company: "TechNova Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Alex là một trong số ít những kỹ sư có cả tư duy hệ thống vĩ mô lẫn khả năng trau chuốt từng pixel trên giao diện. Các giải pháp kiến trúc của Alex đã giúp công ty xử lý khối lượng dữ liệu khổng lồ mà chi phí hạ tầng vẫn được kiểm soát tối ưu."
  },
  {
    id: 2,
    name: "Elena Richardson",
    role: "VP of Product",
    company: "AuraAI Studio (Singapore)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "Làm việc với Alex là một trải nghiệm tuyệt vời. Tốc độ thực thi nhanh đến kinh ngạc, tinh thần trách nhiệm cao và khả năng biến những ý tưởng AI trừu tượng thành giao diện trực quan, thân thiện cho người dùng cuối."
  },
  {
    id: 3,
    name: "Nguyễn Vũ Hải Đăng",
    role: "Head of Engineering",
    company: "FinEdge Digital Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Khả năng tối ưu hiệu năng frontend và giải quyết nút thắt cổ chai backend của Alex thực sự đẳng cấp. Khi hệ thống gặp sự cố tải đỉnh điểm, Alex luôn là người bình tĩnh đưa ra phương án khắc phục nhanh nhất."
  }
];

export const philosophyData = [
  {
    title: "Hiệu năng tiệm cận tức thì",
    desc: "Mỗi mili-giây đều quý giá đối với trải nghiệm người dùng. Tối ưu bundle size, lazy load tài nguyên và cache thông minh là quy chuẩn mặc định.",
    icon: "Zap"
  },
  {
    title: "Mã nguồn sạch & Bền vững",
    desc: "Code viết ra để con người đọc và máy tính thực thi. Kiến trúc module rõ ràng, tự tài liệu hóa và bảo trì dễ dàng sau nhiều năm.",
    icon: "Code2"
  },
  {
    title: "Thiết kế lấy con người làm trung tâm",
    desc: "Công nghệ tiên tiến nhất cũng sẽ vô nghĩa nếu khó sử dụng. Giao diện phải trực quan, dễ tiếp cận và mang lại cảm xúc tích cực.",
    icon: "Sparkles"
  },
  {
    title: "Đón đầu làn sóng AI thực dụng",
    desc: "Không chạy theo trào lưu sáo rỗng; tập trung ứng dụng mô hình trí tuệ nhân tạo để giải quyết các bài toán kinh doanh cụ thể và tự động hóa công việc.",
    icon: "Cpu"
  }
];
