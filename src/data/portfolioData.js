export const personalInfo = {
  name: "Đỗ Đăng Khoa",
  fullName: "Đỗ Đăng Khoa",
  role: "Kỹ sư Tương lai ngành Nuôi trồng Thủy sản • Smart Aquaculture Enthusiast",
  tagline: "Ứng dụng khoa học kỹ thuật và chuyển đổi số vào ngành Nuôi trồng Thủy sản Đồng bằng sông Cửu Long.",
  shortBio: "Sinh viên ngành Nuôi trồng Thủy sản tại Trường Cao đẳng Kinh tế - Kỹ thuật Cần Thơ, quê hương Đất Mũi Cà Mau. Đam mê nghiên cứu các mô hình nuôi tôm - rừng sinh thái, công nghệ tuần hoàn nước RAS và ứng dụng cảm biến IoT, phần mềm số hóa để giúp bà con nông dân miền Tây nuôi tôm cá an toàn, đạt năng suất cao và bền vững với môi trường.",
  location: "Cần Thơ & Cà Mau, Việt Nam",
  email: "dangkhoa.aquaculture@gmail.com",
  phone: "+84 945 123 789",
  telegram: "@dangkhoa_aqua",
  github: "https://github.com/dangkhoa-aqua",
  linkedin: "https://linkedin.com/in/dandang-khoa-aquaculture",
  twitter: "https://facebook.com/dandang.khoa.aqua",
  availableForHire: true,
  statusMessage: "Sẵn sàng nhận cơ hội thực tập, hợp tác dự án & nghiên cứu thủy sản",
  stats: [
    { label: "Điểm rèn luyện / GPA", value: "3.86/4.0", icon: "Award" },
    { label: "Đề tài & Mô hình thử nghiệm", value: "8+", icon: "CheckCircle2" },
    { label: "Giờ thực địa ao nuôi", value: "1,200+", icon: "Clock" },
    { label: "Hộ nuôi tôm hỗ trợ kỹ thuật", value: "45+", icon: "Users" },
  ]
};

export const skillsData = {
  categories: [
    {
      id: "aquaculture-techniques",
      title: "Kỹ thuật Nuôi trồng Thủy sản",
      description: "Quy trình chăm sóc, ương dưỡng giống và quản lý vụ nuôi thực tế tại ĐBSCL",
      skills: [
        { name: "Kỹ thuật nuôi tôm sú sinh thái (Tôm - Rừng Cà Mau)", level: 96, highlight: true },
        { name: "Nuôi tôm thẻ chân trắng siêu thâm canh (2, 3 giai đoạn)", level: 90, highlight: true },
        { name: "Kỹ thuật nuôi cá tra, cá lăng nha, cá thắt lát", level: 88, highlight: false },
        { name: "Ương dưỡng ấu trùng & Tuyển chọn tôm cá giống chất lượng", level: 92, highlight: true },
        { name: "Hệ thống nuôi tuần hoàn khép kín (RAS Mini)", level: 85, highlight: false },
        { name: "Thiết kế & Bố trí hệ thống ao lắng, ao sẵn sàng, ao nuôi", level: 90, highlight: false },
      ]
    },
    {
      id: "water-environment",
      title: "Quản lý Môi trường Nước & Dinh dưỡng",
      description: "Đo đạc, phân tích chỉ tiêu hóa lý và quản lý hệ sinh thái ao đầm",
      skills: [
        { name: "Kiểm soát chỉ tiêu nước (pH, Độ mặn, DO, Kiềm, Khí độc NH3/NO2)", level: 95, highlight: true },
        { name: "Phân lập và ủ chế phẩm vi sinh bản địa (Probiotics EM, PSB)", level: 92, highlight: true },
        { name: "Xử lý đáy ao, diệt khuẩn sinh học & gây màu nước tự nhiên", level: 90, highlight: false },
        { name: "Cân đối khẩu phần thức ăn, quản lý hệ số chuyển đổi FCR", level: 93, highlight: true },
        { name: "Bổ sung khoáng chất, vitamin và thảo dược tăng đề kháng", level: 88, highlight: false },
      ]
    },
    {
      id: "pathology-biosecurity",
      title: "Bệnh học & An toàn Sinh học",
      description: "Chẩn đoán sớm mầm bệnh, phòng ngừa dịch hại và an toàn vệ sinh thực phẩm",
      skills: [
        { name: "Chẩn đoán bệnh thường gặp trên tôm (Đốm trắng, Gan tụy, EHP, Phân trắng)", level: 92, highlight: true },
        { name: "Kỹ thuật soi kính hiển vi ký sinh trùng & nấm trên cá", level: 88, highlight: false },
        { name: "Quy trình an toàn sinh học trang trại chuẩn VietGAP / ASC", level: 90, highlight: true },
        { name: "Lấy mẫu xét nghiệm PCR phát hiện sớm virus thủy sản", level: 85, highlight: false },
      ]
    },
    {
      id: "tech-aquaculture",
      title: "Chuyển đổi số & Công nghệ Thủy sản (IoT)",
      description: "Ứng dụng công nghệ thông tin và cảm biến vào quản lý ao nuôi hiện đại",
      skills: [
        { name: "Hệ thống cảm biến IoT đo độ mặn, nhiệt độ & pH tự động", level: 88, highlight: true },
        { name: "Số hóa nhật ký ao nuôi & Quản lý chi phí bằng Web App", level: 90, highlight: true },
        { name: "ReactJS & Tailwind CSS cơ bản xây dựng công cụ tính toán thủy sản", level: 82, highlight: false },
        { name: "Ứng dụng Zalo Bot / Telegram cảnh báo biến động môi trường ao", level: 86, highlight: false },
        { name: "Phân tích dữ liệu tăng trưởng tôm cá bằng Excel & Google Sheets", level: 94, highlight: true },
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "aquasense-iot",
    title: "AquaSense IoT Cà Mau",
    subtitle: "Hệ thống trạm phao cảm biến quan trắc chất lượng nước ao tôm tự động",
    category: "ai-cloud",
    categoryLabel: "IoT & Chuyển đổi số",
    featured: true,
    description: "Trạm phao cảm biến nổi tự động đo nhiệt độ, độ mặn, pH và oxy hòa tan (DO) theo thời gian thực, gửi cảnh báo qua Zalo khi thông số vượt ngưỡng nguy hiểm.",
    fullDescription: "Đề tài xuất phát từ trăn trở trước tình trạng bà con nuôi tôm tại Năm Căn và Đầm Dơi (Cà Mau) phải đo nước thủ công bằng test kit tốn thời gian và khó phản ứng kịp khi trời mưa đột ngột. AquaSense sử dụng vi điều khiển ESP32 chống nước kết hợp bảng điều khiển web ReactJS thân thiện, giúp người nuôi theo dõi ao từ xa 24/7.",
    metrics: [
      { label: "Ao tôm thử nghiệm", value: "6 ao thực tế" },
      { label: "Thời gian cảnh báo", value: "< 15 giây" },
      { label: "Giảm rủi ro sốc nước", value: "~70%" },
    ],
    tags: ["IoT Cảm biến", "ESP32", "ReactJS", "Zalo Alert API", "Firebase", "Thủy sản 4.0"],
    githubUrl: "https://github.com/dangkhoa-aqua/aquasense-iot-camau",
    liveDemoUrl: "https://aquasense-camau.demo.vn",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Thiết kế hộp phao chống chịu độ mặn cao và bức xạ nhiệt vùng ven biển Cà Mau.",
      "Giao diện trực quan trên điện thoại, hiển thị biểu đồ diễn biến pH và độ mặn theo giờ.",
      "Đạt Giải Nhì Cuộc thi Ý tưởng Khởi nghiệp Sáng tạo Sinh viên Trường CĐ Kinh tế - Kỹ thuật Cần Thơ 2024."
    ]
  },
  {
    id: "tom-rung-nam-can",
    title: "Mô hình Tôm - Rừng Sinh Thái Năm Căn",
    subtitle: "Đề tài thực nghiệm nuôi tôm sú tự nhiên dưới tán rừng ngập mặn Cà Mau",
    category: "fullstack",
    categoryLabel: "Kỹ thuật Nuôi thực tế",
    featured: true,
    description: "Nghiên cứu tỷ lệ che phủ rừng đước thích hợp và bổ sung sinh vật phù du tự nhiên giúp tôm sú đạt kích cỡ thương phẩm 20 con/kg mà không dùng kháng sinh.",
    fullDescription: "Mô hình kết hợp giữa kiến thức chuyên ngành tại trường Cao đẳng Kinh tế - Kỹ thuật Cần Thơ và kinh nghiệm thực tiễn truyền thống của gia đình tại Cà Mau. Dự án giúp bà con nâng cao giá trị con tôm sú đạt tiêu chuẩn sinh thái xuất khẩu sang châu Âu (chứng nhận hữu cơ Naturland/ASC).",
    metrics: [
      { label: "Kích cỡ tôm thu hoạch", value: "18 - 22 con/kg" },
      { label: "Chi phí thức ăn công nghiệp", value: "0 VNĐ (thức ăn tự nhiên)" },
      { label: "Lợi nhuận bình quân", value: "+38% so với truyền thống" },
    ],
    tags: ["Tôm sú Cà Mau", "Rừng ngập mặn", "Thủy sản sinh thái", "VietGAP", "Quản lý nước thủy triều"],
    githubUrl: "https://github.com/dangkhoa-aqua/tom-rung-sinh-thai-namcan",
    liveDemoUrl: "https://tomrung-camau.demo.vn",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Xác định tỷ lệ tán che rừng lý tưởng ở mức 40-50% diện tích mặt nước.",
      "Ứng dụng chu kỳ con nước rằm và ba mươi để lấy ấu trùng phù du tự nhiên dồi dào.",
      "Được Hợp tác xã Thủy sản Sinh thái địa phương áp dụng thử nghiệm trên 15 hecta."
    ]
  },
  {
    id: "aqualogbook-web",
    title: "AquaLogbook Pro (Sổ tay Ao nuôi Số)",
    subtitle: "Ứng dụng web ghi chép nhật ký ao nuôi và dự toán chi phí vụ nuôi",
    category: "opensource",
    categoryLabel: "Phần mềm Ứng dụng",
    featured: true,
    description: "Web app đơn giản, trực quan giúp bà con ghi chép lượng thức ăn hàng ngày, lượng khoáng tạt, tính hệ số FCR và dự báo ngày thu hoạch chuẩn xác.",
    fullDescription: "Xây dựng bằng ReactJS và Tailwind CSS với nút bấm to, chữ rõ ràng phù hợp cho các chú bác nông dân sử dụng ngay trên điện thoại thông minh tại bờ ao. Tự động cảnh báo nếu lượng thức ăn tăng đột biến bất thường so với tốc độ tăng trưởng của tôm cá.",
    metrics: [
      { label: "Hộ nuôi ứng dụng", value: "45+ hộ" },
      { label: "Giảm hao hụt thức ăn", value: "~15%" },
      { label: "Tiết kiệm chi phí/vụ", value: "12 - 18 triệu VNĐ" },
    ],
    tags: ["React 19", "Tailwind CSS", "Local Storage", "Giao diện Nông dân", "PWA"],
    githubUrl: "https://github.com/dangkhoa-aqua/aqualogbook-pro",
    liveDemoUrl: "https://aqualogbook.demo.vn",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Hoạt động tốt ngay cả khi mất sóng Internet tại vùng sâu vùng xa nhờ công nghệ PWA Offline.",
      "Tự động tính tỷ lệ tăng trọng hàng tuần (ADG) và chi phí thức ăn trên mỗi kg tôm thương phẩm.",
      "Chia sẻ mã nguồn mở miễn phí cho các bạn sinh viên ngành Thủy sản cùng học tập."
    ]
  },
  {
    id: "visinh-probiotics",
    title: "Chế phẩm Vi sinh Bản địa BioShield",
    subtitle: "Nghiên cứu nhân sinh khối vi khuẩn có lợi ức chế Vibrio parahaemolyticus",
    category: "fullstack",
    categoryLabel: "Kỹ thuật Nuôi thực tế",
    featured: false,
    description: "Quy trình ủ yếm khí và hiếu khí từ mật rỉ đường và chủng vi sinh bản địa phân lập tại đất bùn rừng Cà Mau, giảm 85% mật độ khuẩn hại gây bệnh hoại tử gan tụy.",
    fullDescription: "Đề tài thực hiện tại Phòng Thí nghiệm Dinh dưỡng & Bệnh Thủy sản thuộc Trường Cao đẳng Kinh tế - Kỹ thuật Cần Thơ dưới sự hướng dẫn của các giảng viên bộ môn.",
    metrics: [
      { label: "Tỷ lệ ức chế Vibrio", value: "> 85%" },
      { label: "Chi phí tự ủ vi sinh", value: "~1,500 đ/lít" },
      { label: "Độ ổn định màu nước", value: "Kéo dài 25-30 ngày" },
    ],
    tags: ["Vi sinh Probiotics", "Mật rỉ đường", "Bacillus subtilis", "Quản lý dịch bệnh", "Cần Thơ"],
    githubUrl: "https://github.com/dangkhoa-aqua/bioshield-probiotics-ctc",
    liveDemoUrl: "https://bioshield.demo.vn",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Chi phí rẻ hơn 5 lần so với vi sinh thương mại nhập khẩu trên thị trường.",
      "Giúp tạo nguồn thức ăn tự nhiên Biofloc giàu protein cho tôm cá con.",
      "Báo cáo chuyên đề xuất sắc đạt điểm A+ tại Khoa Thủy sản CTC."
    ]
  },
  {
    id: "ras-mini-ctc",
    title: "Mô hình Nuôi tuần hoàn RAS Mini",
    subtitle: "Hệ thống lọc cơ học & lọc sinh học khép kín cho cá lăng nha & cá thắt lát",
    category: "opensource",
    categoryLabel: "Nghiên cứu Kỹ thuật",
    featured: false,
    description: "Mô hình thử nghiệm tuần hoàn nước tiết kiệm 95% lượng nước xả thải, kiểm soát 100% dịch bệnh bên ngoài xâm nhập.",
    fullDescription: "Mô hình được lắp ráp tại Trại thực nghiệm Thủy sản Trường CĐ Kinh tế - Kỹ thuật Cần Thơ, ứng dụng hạt lọc Moving Bed Biofilm Reactor (MBBR) và đèn diệt khuẩn UV.",
    metrics: [
      { label: "Tiết kiệm nước", value: "95%" },
      { label: "Tỷ lệ sống của cá", value: "94.5%" },
      { label: "Tái sử dụng nước", value: "100%" },
    ],
    tags: ["RAS Tuần hoàn", "Cá lăng nha", "Hạt lọc MBBR", "Trại thực nghiệm CTC", "Công nghệ xanh"],
    githubUrl: "https://github.com/dangkhoa-aqua/ras-mini-ctc",
    liveDemoUrl: "https://ras-mini.demo.vn",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Thiết kế module nhỏ gọn, chi phí đầu tư ban đầu thấp phù hợp nghiên cứu.",
      "Nồng độ khí độc NH3 và NO2 luôn duy trì ở ngưỡng an toàn tuyệt đối (< 0.05 mg/L).",
      "Mô hình phục vụ tham quan học tập cho các khóa sinh viên đàn em tại trường."
    ]
  },
  {
    id: "sotay-benh-thuysan",
    title: "Sổ tay Bệnh học Thủy sản ĐBSCL",
    subtitle: "Cẩm nang tra cứu trực tuyến nhận diện triệu chứng bệnh tôm cá miền Tây",
    category: "opensource",
    categoryLabel: "Phần mềm Ứng dụng",
    featured: false,
    description: "Bộ tài liệu số hóa hình ảnh thực tế về các bệnh gan tụy, đốm trắng, đỏ thân, lở loét và phác đồ xử lý an toàn bằng thảo dược và vi sinh.",
    fullDescription: "Được tổng hợp từ tài liệu học tập của các thầy cô Khoa Thủy sản và quá trình đi thực tế tại các vùng nuôi Cà Mau, Bạc Liêu, Sóc Trăng, Bến Tre và Cần Thơ.",
    metrics: [
      { label: "Bệnh học được phân loại", value: "28 loại bệnh" },
      { label: "Lượt sinh viên & nông dân tra cứu", value: "8,500+" },
      { label: "Đánh giá hữu ích", value: "100%" },
    ],
    tags: ["Bệnh học tôm cá", "Tra cứu online", "Cẩm nang thủy sản", "ĐBSCL", "Kiến thức mở"],
    githubUrl: "https://github.com/dangkhoa-aqua/so-tay-benh-thuy-san",
    liveDemoUrl: "https://benhthuysan.demo.vn",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Hình ảnh chụp kính hiển vi thực tế giúp phân biệt rõ bệnh vi khuẩn và bệnh ký sinh trùng.",
      "Hướng dẫn phác đồ điều trị không dùng kháng sinh cấm, bảo vệ sức khỏe người tiêu dùng.",
      "Tích hợp công cụ tìm kiếm nhanh triệu chứng trên điện thoại di động."
    ]
  }
];

export const experienceData = [
  {
    period: "2023 - Hiện tại",
    role: "Sinh viên & Trưởng nhóm CLB Nghiên cứu Khoa học Thủy sản trẻ",
    company: "Trường Cao đẳng Kinh tế - Kỹ thuật Cần Thơ (CTC)",
    location: "TP. Cần Thơ",
    description: "Theo học chuyên ngành Nuôi trồng Thủy sản. Đại diện sinh viên tham gia các đề tài nghiên cứu cấp khoa và trường; tổ chức các buổi hội thảo chia sẻ kỹ thuật quản lý môi trường ao nuôi nước lợ.",
    achievements: [
      "Điểm trung bình tích lũy GPA: 3.86 / 4.0 (Đạt học bổng Khuyến khích học tập Xuất sắc toàn phần các kỳ).",
      "Đạt Giải Nhì Cuộc thi Sinh viên Khởi nghiệp Đổi mới Sáng tạo CTC năm 2024 với dự án Trạm phao IoT AquaSense.",
      "Chủ nhiệm Câu lạc bộ Thủy sản trẻ, kết nối hơn 120 sinh viên các khóa giao lưu học hỏi."
    ]
  },
  {
    period: "06/2024 - 09/2024",
    role: "Thực tập sinh Kỹ thuật Thủy sản Nước lợ",
    company: "Trại Nuôi tôm Giống & Thương phẩm Công nghệ cao (Cà Mau)",
    location: "Năm Căn & Đầm Dơi, Cà Mau",
    description: "Tham gia trực tiếp ca kíp vận hành hệ thống ao nuôi tôm thẻ chân trắng siêu thâm canh và ao tôm sú sinh thái rừng ngập mặn.",
    achievements: [
      "Trực tiếp theo dõi chất lượng nước, đo đạc chỉ tiêu DO, pH, kiềm 4 lần/ngày cho 12 ao nuôi công nghiệp.",
      "Hỗ trợ kỹ thuật viên trưởng ủ thành công 3,000 lít vi sinh bản địa EM tạt định kỳ, tiết kiệm 20 triệu chi phí thuốc men.",
      "Được Ban giám đốc trang trại đánh giá là thực tập sinh có tinh thần kỷ luật và tay nghề thực tiễn xuất sắc."
    ]
  },
  {
    period: "2022 - 2023",
    role: "Cộng tác viên Thí nghiệm & Phân tích Nước",
    company: "Phòng Thí nghiệm Thủy sản & Môi trường Nước CTC",
    location: "TP. Cần Thơ",
    description: "Hỗ trợ giảng viên hướng dẫn các buổi thực hành nuôi cấy tảo, phân lập vi sinh và kiểm tra mẫu nước cho bà con nông dân khu vực Cần Thơ và Hậu Giang.",
    achievements: [
      "Phân tích hơn 200 mẫu nước ao nuôi tôm, cá tra gửi về từ các hợp tác xã miền Tây.",
      "Thành thạo kỹ năng soi kính hiển vi, chuẩn độ mẫu nước và kỹ thuật cấy gieo vi khuẩn trên đĩa thạch TCBS.",
    ]
  },
  {
    period: "2020 - 2023",
    role: "Học sinh chuyên ban Tự nhiên (Giải HSG Sinh học)",
    company: "Trường THPT Đầm Dơi",
    location: "Huyện Đầm Dơi, Tỉnh Cà Mau",
    description: "Sinh ra và lớn lên trong gia đình gắn liền với vuông tôm, rừng đước Cà Mau; nuôi dưỡng ước mơ trở thành kỹ sư thủy sản hiện đại hóa quê hương.",
    achievements: [
      "Giải Khuyến khích Học sinh Giỏi môn Sinh học cấp Tỉnh Cà Mau năm 2022.",
      "Bí thư Chi đoàn năng nổ, tích cực tham gia các chiến dịch Thanh niên tình nguyện Mùa hè xanh bảo vệ môi trường biển.",
    ]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "ThS. Nguyễn Văn Hùng",
    role: "Trưởng Bộ môn Kỹ thuật Nuôi trồng Thủy sản",
    company: "Trường CĐ Kinh tế - Kỹ thuật Cần Thơ (CTC)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Đỗ Đăng Khoa là một sinh viên đặc biệt xuất sắc của khoa. Khoa không chỉ vững vàng lý thuyết sinh học và kỹ thuật quản lý nước ao mà còn có tư duy rất nhạy bén về công nghệ số. Dự án trạm phao cảm biến và sổ tay số của em đã chứng minh sinh viên trường nghề hoàn toàn có thể làm chủ công nghệ cao."
  },
  {
    id: 2,
    name: "Chú Trần Văn Mười",
    role: "Chủ Hợp tác xã Tôm - Rừng Sinh thái",
    company: "Huyện Năm Căn, Tỉnh Cà Mau",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Khoa tuy là sinh viên trẻ nhưng xuống vuông tôm nói chuyện rất rành rọt, hiểu được cái khó của bà con xứ Đất Mũi. Nhờ Khoa chỉ cách đo độ mặn và ủ vi sinh bản địa giá rẻ mà vuông tôm của tui vụ rồi tôm lớn đều, vỏ bóng đẹp, bán được giá cao cho công ty xuất khẩu."
  },
  {
    id: 3,
    name: "KS. Lê Hoàng Nam",
    role: "Trưởng trạm Khuyến nông - Khuyến ngư",
    company: "Khu vực Duyên hải ĐBSCL",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Sự nhiệt huyết và tinh thần cầu tiến của Khoa là tấm gương cho thế hệ kỹ thuật viên thủy sản trẻ miền Tây. Ngành thủy sản Đồng bằng sông Cửu Long rất cần những người trẻ tâm huyết, gắn bó với đất đai sông nước quê hương như Đỗ Đăng Khoa."
  }
];

export const philosophyData = [
  {
    title: "Thực tiễn bám sát bờ ao",
    desc: "Mọi kiến thức sách vở đều phải được kiểm chứng qua làn nước, bùn đáy và sức ăn của con tôm con cá. Lắng nghe hơi thở của ao nuôi mỗi ngày.",
    icon: "Zap"
  },
  {
    title: "Bảo tồn sinh thái Cà Mau",
    desc: "Phát triển thủy sản không đánh đổi môi trường. Ưu tiên mô hình tôm - rừng sinh thái, bảo vệ tán rừng ngập mặn quê hương Đất Mũi.",
    icon: "Sparkles"
  },
  {
    title: "Số hóa nông nghiệp miền Tây",
    desc: "Đưa cảm biến IoT và ứng dụng web vào từng bờ vuông giúp bà con nông dân quản lý ao nuôi khoa học, giảm rủi ro thời tiết và dịch bệnh.",
    icon: "Code2"
  },
  {
    title: "Nói không với kháng sinh cấm",
    desc: "Kiên định phát triển nguồn thủy sản sạch, an toàn sinh học bằng chế phẩm vi sinh hữu cơ bản địa, nâng tầm thương hiệu thủy sản Việt Nam.",
    icon: "Cpu"
  }
];
