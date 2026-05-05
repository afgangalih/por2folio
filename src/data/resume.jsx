import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Brain, Cloud, Code2, BarChart, Database, Terminal } from "lucide-react";

export const DATA = {
  name: "Afgan Galih",
  initials: "AG",
  url: "https://github.com/afgangalih",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/Malang,+East+Java",
  description: {
    en: "Software Engineer & AI Enthusiast. I bridge the gap between aesthetics and high-performance technology.",
    id: "Software Engineer & AI Enthusiast. Saya menjembatani estetika dan teknologi berperforma tinggi.",
  },
  summary: {
    en: "I am a **passionate Software Engineer and AI Enthusiast** currently pursuing my degree in **Business Information Systems at Politeknik Negeri Malang**. With a unique background in **Design and Visual Communication**, I specialize in bridging the gap between **aesthetics and functionality**. I have extensive experience in building high-performance **web and mobile applications**, ranging from **expert systems** to **dynamic personal branding platforms**. My technical toolkit includes modern frameworks like **React, Next.js, and Laravel**, alongside a deep foundation in **Python** for data science and AI development.",
    id: "Saya adalah **Software Engineer dan AI Enthusiast** yang sedang menempuh pendidikan **Sistem Informasi Bisnis di Politeknik Negeri Malang**. Dengan latar belakang unik di bidang **Desain Komunikasi Visual**, saya ahli dalam menghubungkan **estetika dan fungsionalitas**. Saya memiliki pengalaman luas dalam membangun **aplikasi web dan mobile** berperforma tinggi, mulai dari **sistem pakar** hingga **platform personal branding dinamis**. Toolkit teknis saya mencakup framework modern seperti **React, Next.js, dan Laravel**, serta fondasi kuat di **Python** untuk data science dan pengembangan AI.",
  },
  avatarUrl: "/assets/afgan1.png",
  skills: [
    "React", "Next.js", "Laravel", "Flutter", "Node.js", "Python", "Tailwind CSS", 
    "TypeScript", "SQL", "Framer Motion", "VSCode", "Bootstrap", "Github", 
    "Figma", "Power BI", "PHP", "Supabase", "Zustand", "Firebase", "Django", 
    "Dart", "PostgreSQL", "MySQL", "Docker", "FastAPI", "NumPy",
  ],
  navbar: [
    { href: "#hero", icon: HomeIcon, label: { en: "Home", id: "Beranda" } },
    { href: "#projects", icon: NotebookIcon, label: { en: "Projects", id: "Proyek" } },
  ],
  contact: {
    email: "afganalmadinah2@gmail.com",
    tel: "085749577424",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/afgangalih",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/afgan-almadinah-16247b339/",
        icon: Icons.linkedin,
        navbar: true,
      },
      whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/6285749577424",
        icon: Icons.whatsapp,
        navbar: false,
      },
      instagram: {
        name: "Instagram",
        url: "https://instagram.com/afgnglh",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:afganalmadinah2@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance Web",
      href: "#",
      badges: ["Freelance"],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/assets/proyek/1.png",
      start: "2025",
      end: null,
      description: {
        en: "Engineered a centralized web platform featuring 51 utility tools, integrating AI background removal, OCR text extraction, and CAD rendering.",
        id: "Membangun platform web terpusat dengan 51 alat utilitas, mengintegrasikan AI background removal, ekstraksi teks OCR, dan rendering CAD.",
      },
    },
    {
      company: "E-Bimbingan Mobile",
      href: "https://github.com/AlKhrisW/E-Bimbingan",
      badges: ["Mobile"],
      location: "Malang, Indonesia",
      title: "Backend Developer",
      logoUrl: "/assets/proyek/proyek1.webp",
      start: "2025",
      end: "2025",
      description: {
        en: "Developed backend infrastructure for internship supervision. Implemented structured batch verification and real-time monitoring using Firebase.",
        id: "Mengembangkan infrastruktur backend untuk pengawasan magang. Mengimplementasikan verifikasi batch terstruktur dan pemantauan real-time menggunakan Firebase.",
      },
    },
    {
      company: "Tracer Study Web",
      href: "https://github.com/stewistzz/PBL_TracerStudy05",
      badges: ["Web"],
      location: "Malang, Indonesia",
      title: "System Analyst",
      logoUrl: "/assets/proyek/proyek2.webp",
      start: "2025",
      end: "2025",
      description: {
        en: "Conducted requirements analysis and designed system architecture for alumni tracing. Defined data flows and functional specifications for automated surveys.",
        id: "Melakukan analisis kebutuhan dan merancang arsitektur sistem untuk pelacakan alumni. Menentukan alur data dan spesifikasi fungsional untuk survei otomatis.",
      },
    },
  ],
  education: [
    {
      school: "Politeknik Negeri Malang",
      href: "https://polinema.ac.id",
      degree: {
        en: "Applied Bachelor of Business Information Systems",
        id: "Sarjana Terapan Sistem Informasi Bisnis",
      },
      logoUrl: "/assets/polinema.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "SMK Plus Khoiriyah Hasyim",
      href: "https://sites.google.com/view/smktebuireng",
      degree: {
        en: "Design and Visual Communication",
        id: "Desain Komunikasi Visual",
      },
      logoUrl: "/assets/smk.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Ebimbingan Mobile",
      href: "https://github.com/AlKhrisW/E-Bimbingan",
      dates: "2025",
      active: true,
      category: "Mobile App",
      role: { en: "Backend Developer", id: "Pengembang Backend" },
      description: {
        en: "Mobile application for academic internship management with automated verification and real-time monitoring.",
        id: "Aplikasi mobile untuk manajemen magang akademik dengan verifikasi otomatis dan pemantauan real-time.",
      },
      details: {
        en: "Digitized internship workflows by replacing manual documentation with a structured mobile ecosystem, enabling seamless communication between students and lecturers.",
        id: "Digitalisasi alur kerja magang dengan mengganti dokumentasi manual menjadi ekosistem mobile terstruktur, memungkinkan komunikasi lancar antara mahasiswa dan dosen.",
      },
      features: [
        { en: "Automated Batch Verification", id: "Verifikasi Batch Otomatis" },
        { en: "Real-time Notifications", id: "Notifikasi Real-time" },
        { en: "Structured Digital Documentation", id: "Dokumentasi Digital Terstruktur" },
        { en: "MVVM Architecture", id: "Arsitektur MVVM" },
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "MVVM"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/AlKhrisW/E-Bimbingan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek1.webp",
      images: ["/assets/proyek/proyek1.webp"],
      video: "",
    },
    {
      title: "Vena.ai",
      href: "#",
      dates: "2026",  
      active: true,
      category: "Web Development",
      role: { en: "Fullstack Developer", id: "Pengembang Fullstack" },
      description: {
        en: "Clinical heart health assessment platform with interactive dashboards and multi-step validation.",
        id: "Platform asesmen kesehatan jantung klinis dengan dashboard interaktif dan validasi multi-tahap.",
      },
      details: {
        en: "Engineered a high-fidelity clinical platform for heart health assessment, featuring secure input processing and data visualizations with Recharts.",
        id: "Membangun platform klinis untuk asesmen kesehatan jantung, menampilkan pemrosesan input aman dan visualisasi data dengan Recharts.",
      },
      features: [
        { en: "Multi-step Validated Input", id: "Input Tervalidasi Multi-tahap" },
        { en: "Interactive Visualizations", id: "Visualisasi Interaktif" },
        { en: "Real-time Tracking", id: "Pelacakan Real-time" },
        { en: "Minimalist UI Architecture", id: "Arsitektur UI Minimalis" },
      ],
      technologies: ["Laravel 11", "React.js", "Inertia.js", "Tailwind CSS", "Recharts"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/afgangalih/venaIN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek5.webp",
      images: ["/assets/proyek/proyek5.webp", "/assets/proyek/vena1.png", "/assets/proyek/vena2.png", "/assets/proyek/vena3.png"],
      video: "",
    },
    {
      title: "LinkVibe",
      href: "#",
      dates: "2026",
      active: true,
      category: "Web Development",
      role: { en: "Fullstack Developer", id: "Pengembang Fullstack" },
      description: {
        en: "Dynamic bio-link platform with instant preview and drag-and-drop customization.",
        id: "Platform bio-link dinamis dengan preview instan dan kustomisasi drag-and-drop.",
      },
      details: {
        en: "Architected a personal branding platform that empowers users to build customizable profile pages with a real-time preview system.",
        id: "Merancang platform personal branding yang memungkinkan pengguna membangun halaman profil dengan sistem preview real-time.",
      },
      features: [
        { en: "Drag-and-drop Customization", id: "Kustomisasi Drag-and-drop" },
        { en: "Real-time Previews", id: "Preview Real-time" },
        { en: "Global State (Zustand)", id: "State Global (Zustand)" },
        { en: "Fluid Motion UI", id: "UI Motion yang Halus" },
      ],
      technologies: ["Next.js", "Supabase", "Zustand", "Framer Motion", "@dnd-kit"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/afgangalih/linkvibe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek6.webp",
      images: ["/assets/proyek/proyek6.webp", "/assets/proyek/linkvibe1.png", "/assets/proyek/linkvibe2.png", "/assets/proyek/linkvibe3.png", "/assets/proyek/linkvibe4.png"],
      video: "",
    },
    {
      title: "Malang Cafe Finder",
      href: "#",
      dates: "2026",
      active: true,
      category: "Web Development",
      role: { en: "Fullstack Developer", id: "Pengembang Fullstack" },
      description: {
        en: "Local cafe directory with mood-based searching and intelligent filtering.",
        id: "Direktori kafe lokal dengan pencarian berbasis mood dan pemfilteran cerdas.",
      },
      details: {
        en: "Optimizes the discovery of local establishments through a robust data management system and mood-based logic.",
        id: "Mengoptimalkan penemuan kafe lokal melalui sistem manajemen data yang kuat dan logika berbasis mood.",
      },
      features: [
        { en: "Mood-based Filtering", id: "Pemfilteran Berbasis Mood" },
        { en: "Multi-tier Auth", id: "Autentikasi Multi-level" },
        { en: "Admin Control Center", id: "Pusat Kontrol Admin" },
        { en: "Responsive Design", id: "Desain Responsif" },
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/afgangalih/macafi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek7.webp",
      images: ["/assets/proyek/proyek7.webp", "/assets/proyek/macafi1.png", "/assets/proyek/macafi2.png", "/assets/proyek/macafi3.png"],
      video: "",
    },
    {
      title: "MediDiagnose Expert System",
      href: "#",
      dates: "2026",
      active: true,
      category: "Web Development",
      role: { en: "Fullstack Developer", id: "Pengembang Fullstack" },
      description: {
        en: "Medical diagnostic engine using Forward and Backward Chaining with traceable rule explanations.",
        id: "Mesin diagnosis medis menggunakan Forward dan Backward Chaining dengan penjelasan aturan yang transparan.",
      },
      details: {
        en: "Architected a diagnostic engine that simulates clinical decision-making, delivering traceable rule assessments via RESTful API.",
        id: "Merancang mesin diagnosis yang mensimulasikan pengambilan keputusan klinis, memberikan asesmen yang transparan melalui RESTful API.",
      },
      features: [
        { en: "Inference Engine (F&B Chaining)", id: "Inference Engine (F&B Chaining)" },
        { en: "Traceable Explanations", id: "Penjelasan yang Transparan" },
        { en: "Confidence Scoring", id: "Skor Keyakinan" },
        { en: "RESTful API", id: "RESTful API" },
      ],
      technologies: ["Python", "Django", "Django REST Framework", "SQLite"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/afgangalih/medidiagnose",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek8.webp",
      images: ["/assets/proyek/proyek8.webp", "/assets/proyek/medi1.png", "/assets/proyek/medi2.png"],
      video: "",
    },
    {
      title: "KBS Educational Platform",
      href: "#",
      dates: "2026",
      active: true,
      category: "Web Development",
      role: { en: "Frontend Developer", id: "Pengembang Frontend" },
      description: {
        en: "Interactive educational platform for Expert Systems and DSS with inference engine visualizations.",
        id: "Platform edukasi interaktif untuk Sistem Pakar dan DSS dengan visualisasi engine inferensi.",
      },
      details: {
        en: "Immersive interface designed to demystify complex computational architectures through step-by-step visualizations.",
        id: "Antarmuka imersif yang dirancang untuk mempermudah pemahaman arsitektur komputasi kompleks melalui visualisasi langkah demi langkah.",
      },
      features: [
        { en: "Inference Visualizations", id: "Visualisasi Inferensi" },
        { en: "Comparative Modules", id: "Modul Komparatif" },
        { en: "Dynamic Animations", id: "Animasi Dinamis" },
        { en: "Seamless Navigation", id: "Navigasi Lancar" },
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/afgangalih/blog-kbs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek9.webp",
      images: ["/assets/proyek/proyek9.webp", "/assets/proyek/sbp1.png", "/assets/proyek/sbp2.png"],
      video: "",
    },
    {
      title: "Tracer Study",
      href: "https://github.com/stewistzz/PBL_TracerStudy05",
      dates: "2025",
      active: true,
      category: "Web Development",
      role: { en: "Backend Developer", id: "Pengembang Backend" },
      description: {
        en: "Web application for alumni career tracking with data visualization dashboards.",
        id: "Aplikasi web untuk pelacakan karir alumni dengan dashboard visualisasi data.",
      },
      details: {
        en: "Engineered a robust backend for alumni data collection and dynamic report generation.",
        id: "Membangun backend yang kuat untuk pengumpulan data alumni dan pembuatan laporan dinamis.",
      },
      features: [
        { en: "Automated Email Surveys", id: "Survei Email Otomatis" },
        { en: "Visualization Dashboard", id: "Dashboard Visualisasi" },
        { en: "Brand Identity Alignment", id: "Penyelarasan Identitas Brand" },
      ],
      technologies: ["Figma", "Laravel", "MySQL", "Bootstrap", "ChartJS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/stewistzz/PBL_TracerStudy05",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/tc1.png",
      images: [
        "/assets/proyek/tc1.png",
        "/assets/proyek/tc2.png",
        "/assets/proyek/tc3.png",
        "/assets/proyek/tc4.png",
      ],
      video: "",
    },
    {
      title: "Parfume Performance Analytics",
      href: "https://drive.google.com/drive/folders/1lqUZXGFHXPYqNBVdnPk6fDFweaAPDXKy?usp=sharing",
      dates: "2025",
      active: true,
      category: "Data Analyst",
      role: { en: "Data Analyst", id: "Analis Data" },
      description: {
        en: "Sales trend analysis for the perfume industry using Power BI and SQL.",
        id: "Analisis tren penjualan untuk industri parfum menggunakan Power BI dan SQL.",
      },
      details: {
        en: "Optimized sales strategies through deep market insights and consumer behavior analysis.",
        id: "Optimasi strategi penjualan melalui wawasan pasar mendalam dan analisis perilaku konsumen.",
      },
      features: [
        { en: "Data Transformation", id: "Transformasi Data" },
        { en: "Trend Insights", id: "Wawasan Tren" },
        { en: "Interactive Dashboards", id: "Dashboard Interaktif" },
      ],
      technologies: ["Power BI", "SQL"],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/drive/folders/1lqUZXGFHXPYqNBVdnPk6fDFweaAPDXKy?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek3.webp",
      images: ["/assets/proyek/proyek3.webp"],
      video: "",
    },
    {
      title: "Prediction Model Project",
      href: "https://drive.google.com/drive/folders/1TX3EFXW1jObxr-0TjSMb0XM7Dx2AnlVc?usp=sharing",
      dates: "2025",
      active: true,
      category: "Data Analyst",
      role: { en: "Data Analyst", id: "Analis Data" },
      description: {
        en: "Predictive model development for data-driven decision support systems.",
        id: "Pengembangan model prediktif untuk sistem pendukung keputusan berbasis data.",
      },
      details: {
        en: "Focused on data preprocessing and performance evaluation to build reliable prediction models.",
        id: "Fokus pada pra-pemrosesan data dan evaluasi performa untuk membangun model prediksi yang andal.",
      },
      features: [
        { en: "Data Preprocessing", id: "Pra-pemrosesan Data" },
        { en: "Exploratory Data Analysis", id: "Analisis Data Eksploratif (EDA)" },
        { en: "Model Interpretation", id: "Interpretasi Model" },
      ],
      technologies: ["Python", "Google Colab"],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/drive/folders/1TX3EFXW1jObxr-0TjSMb0XM7Dx2AnlVc?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek4.webp",
      images: ["/assets/proyek/proyek4.webp"],
      video: "",
    },
    {
      title: "Heart Disease Expert System",
      href: "https://colab.research.google.com/drive/11Z-O08cZKhhVdfMy4FR7h-KoF9taOTQ-?usp=sharing",
      dates: "2025",
      active: true,
      category: "Machine Learning",
      role: { en: "AI Developer", id: "Pengembang AI" },
      description: {
        en: "Rule-based system for heart disease detection with 88% accuracy on clinical datasets.",
        id: "Sistem berbasis aturan untuk deteksi penyakit jantung dengan akurasi 88% pada dataset klinis.",
      },
      details: {
        en: "Analyzes clinical indicators to assist in early detection, visualized through Seaborn.",
        id: "Menganalisis indikator klinis untuk membantu deteksi dini, divisualisasikan melalui Seaborn.",
      },
      features: [
        { en: "Rule-based Reasoning", id: "Penalaran Berbasis Aturan" },
        { en: "Indicator Analysis", id: "Analisis Indikator" },
        { en: "Advanced Visualization", id: "Visualisasi Tingkat Lanjut" },
      ],
      technologies: ["Python", "Matplotlib", "Seaborn", "Google Colab"],
      links: [
        {
          type: "Demo",
          href: "https://colab.research.google.com/drive/11Z-O08cZKhhVdfMy4FR7h-KoF9taOTQ-?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/proyek/heartdisease1.png",
      images: ["/assets/proyek/heartdisease1.png"],
      video: "",
    },
    {
      title: "Sentiment Analysis: Trans 7 Boycott",
      href: "https://colab.research.google.com/drive/18R1wZgY7zszLX32NJTi10KgFWIjCDKFd?usp=sharing",
      dates: "2025",
      active: true,
      category: "Data Analyst",
      role: { en: "Data Scientist", id: "Ilmuwan Data" },
      description: {
        en: "NLP-driven sentiment analysis of public discourse using benchmarked Machine Learning algorithms.",
        id: "Analisis sentimen berbasis NLP pada wacana publik menggunakan algoritma Machine Learning.",
      },
      details: {
        en: "Processed over 5,000 social data points to compare classification performance in public sentiment detection.",
        id: "Memproses lebih dari 5.000 titik data sosial untuk membandingkan performa klasifikasi dalam deteksi sentimen publik.",
      },
      features: [
        { en: "NLP Preprocessing", id: "Pra-pemrosesan NLP" },
        { en: "Algorithm Benchmarking", id: "Benchmarking Algoritma" },
        { en: "Public Discourse Viz", id: "Visualisasi Wacana Publik" },
      ],
      technologies: ["Python", "Scikit-Learn", "TensorFlow", "Google Colab"],
      links: [
        {
          type: "Demo",
          href: "https://colab.research.google.com/drive/18R1wZgY7zszLX32NJTi10KgFWIjCDKFd?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/proyek/trans71.png",
      images: ["/assets/proyek/trans71.png"],
      video: "",
    },
    {
      title: "p(df)alugada-tools",
      href: "https://github.com/afgangalih",
      dates: "2026",
      active: true,
      category: "Web Development",
      role: { en: "Fullstack Developer", id: "Pengembang Fullstack" },
      description: {
        en: "Centralized web platform with 51 utility tools featuring AI background removal and OCR text extraction.",
        id: "Platform web terpusat dengan 51 alat utilitas yang menampilkan AI background removal dan ekstraksi teks OCR.",
      },
      details: {
        en: "Designed a responsive frontend paired with a secure Python backend that processes user files directly in memory.",
        id: "Merancang frontend responsif yang dipasangkan dengan backend Python aman yang memproses file langsung di memori.",
      },
      features: [
        { en: "AI Background Removal", id: "AI Background Removal" },
        { en: "OCR Extraction", id: "Ekstraksi OCR" },
        { en: "CAD Rendering", id: "Rendering CAD" },
        { en: "Secure In-memory Processing", id: "Pemrosesan Memori Aman" },
      ],
      technologies: ["Python", "Flask", "Vanilla JS", "PyMuPDF", "Pillow", "Rembg"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/afgangalih",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/1.png",
      images: ["/assets/proyek/1.png", "/assets/proyek/2.png", "/assets/proyek/3.png"],
      video: "",
    },
    {
      title: "oemah.mu",
      href: "https://github.com/afgangalih/oemah.mu",
      dates: "2026",
      active: true,
      category: "Decision Support System",
      role: { en: "Fullstack Developer", id: "Pengembang Fullstack" },
      description: {
        en: "A professional Decision Support System (DSS) platform designed for objective property selection using advanced mathematical modeling.",
        id: "Platform Sistem Pendukung Keputusan (SPK) profesional yang dirancang untuk pemilihan properti secara objektif menggunakan pemodelan matematika tingkat lanjut.",
      },
      details: {
        en: "Engineered a high-performance SaaS application utilizing the EDAS (Evaluation Based on Distance from Average Solution) method. Integrated a Next.js frontend with a FastAPI backend to process complex matrix computations for ranking property alternatives based on 8 dynamic criteria.",
        id: "Membangun aplikasi SaaS berperforma tinggi menggunakan metode EDAS (Evaluation Based on Distance from Average Solution). Mengintegrasikan frontend Next.js dengan backend FastAPI untuk memproses perhitungan matriks kompleks dalam pemeringkatan alternatif properti berdasarkan 8 kriteria dinamis.",
      },
      features: [
        { en: "Multi-Criteria Decision Analysis", id: "Analisis Keputusan Multi-Kriteria" },
        { en: "Interactive Dynamic Weighting", id: "Pembobotan Dinamis Interaktif" },
        { en: "Analytical Data Visualization", id: "Visualisasi Data Analitis" },
      ],
      technologies: ["Next.js", "FastAPI", "Python", "NumPy", "Tailwind CSS", "Recharts"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/afgangalih/oemah.mu",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/oemahmo1.png",
      images: [
        "/assets/proyek/oemahmo1.png",
        "/assets/proyek/oemahmo2.png",
        "/assets/proyek/oemahmo3.png",
      ],
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Engineer for Milenial",
      dates: "2025",
      location: "Digital Talent Scholarship",
      description: {
        en: "Micro Skill training on AI implementation for productivity and technological literacy.",
        id: "Pelatihan Micro Skill tentang penerapan AI untuk produktivitas dan literasi teknologi.",
      },
      icon: <Brain className="size-8 text-blue-500" />,
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1fzp3gLRR5SbWtcQ0gTI4q070zbxTyQPf/view?usp=sharing",
        },
      ],
    },
    {
      title: "Introduce to Cloud Computing",
      dates: "2025",
      location: "Digitalent Scolarship",
      description: {
        en: "Fundamental concepts of cloud computing and popular cloud service models.",
        id: "Konsep dasar komputasi awan dan model layanan cloud populer.",
      },
      icon: <Cloud className="size-8 text-sky-500" />,
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1-B-FFaKJKcfIxyZm-F-F2WQesfExTHAS/view?usp=sharing",
        },
      ],
    },
    {
      title: "Introduction to JavaScript",
      dates: "2025",
      location: "MySkill",
      description: {
        en: "Core JavaScript fundamentals as the primary foundation for modern web development.",
        id: "Dasar-dasar inti JavaScript sebagai fondasi utama pengembangan web modern.",
      },
      icon: <Code2 className="size-8 text-yellow-500" />,
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1CT-1XcXVDaF_EhP-DWcFMDc-MXLXDbkP/view?usp=sharing",
        },
      ],
    },
    {
      title: "Project: Prediction Model",
      dates: "2025",
      location: "MySkill",
      description: {
        en: "Building data-driven predictive models to generate insights for decision support.",
        id: "Membangun model prediktif berbasis data untuk menghasilkan wawasan bagi pendukung keputusan.",
      },
      icon: <BarChart className="size-8 text-green-500" />,
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1dA3AvbiYzVHi5FIuLFaCR7k5k3Bne_TL/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Python Fundamental for Data Science",
      dates: "2025",
      location: "DQLab",
      description: {
        en: "Certification in Python fundamentals specifically tailored for data analysis workflows.",
        id: "Sertifikasi dasar-dasar Python yang dirancang khusus untuk alur kerja analisis data.",
      },
      icon: <Terminal className="size-8 text-indigo-500" />,
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1Mti98BUCqEoMCvsbTt6ipptaK1G_tJpv/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Introduction to Data Science with Python",
      dates: "2025",
      location: "DQLab",
      description: {
        en: "Exploration of data structures and initial application of data analysis techniques.",
        id: "Eksplorasi struktur data dan penerapan awal teknik analisis data.",
      },
      icon: <Database className="size-8 text-purple-500" />,
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1xQbdVx1mmwInlmYspI3N3NWJ4RbeRMpw/view?usp=drive_link",
        },
      ],
    },
  ],
};
