import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Brain, Cloud, Code2, BarChart, Database, Terminal } from "lucide-react";

export const DATA = {
  name: "Afgan Galih",
  initials: "AG",
  url: "https://github.com/afgangalih",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/Malang,+East+Java",
  description:
    "Software Engineer & AI Enthusiast. I love building things and solving problems through technology.",
  summary:
    "I am a **passionate Software Engineer and AI Enthusiast** currently pursuing my degree in **Business Information Systems at Politeknik Negeri Malang**. With a unique background in **Design and Visual Communication**, I specialize in bridging the gap between **aesthetics and functionality**. I have extensive experience in building high-performance **web and mobile applications**, ranging from **expert systems** to **dynamic personal branding platforms**. My technical toolkit includes modern frameworks like **React, Next.js, and Laravel**, alongside a deep foundation in **Python** for data science and AI development.",
  avatarUrl: "/assets/afgan1.png",
  skills: [
    "React",
    "Next.js",
    "Laravel",
    "Flutter",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "TypeScript",
    "SQL",
    "Framer Motion",
    "VSCode",
    "Bootstrap",
    "Github",
    "Figma",
    "Power BI",
    "PHP",
    "Supabase",
    "Zustand",
    "Firebase",
    "Django",
    "Dart",
    "PostgreSQL",
    "MySQL",
    "Docker",
  ],
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: NotebookIcon, label: "Projects" },
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
      description:
        "Engineered a centralized web platform featuring 51 utility tools, seamlessly integrating advanced capabilities such as AI-powered background removal, OCR text extraction, and CAD to PDF rendering.",
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
      description:
        "Developed and maintained the backend infrastructure for a mobile-based internship supervision application. Implemented a structured batch verification system and real-time monitoring features using Firebase, enabling seamless communication between students, lecturers, and administrators.",
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
      description:
        "Conducted requirements analysis and designed the system architecture for a web-based alumni tracer study application. Defined data flow diagrams, created functional specifications for automated survey distribution, and collaborated with the development team to ensure the system aligned with institutional reporting standards.",
    },
  ],
  education: [
    {
      school: "Politeknik Negeri Malang",
      href: "https://polinema.ac.id",
      degree: "Applied Bachelor of Business Information Systems",
      logoUrl: "/assets/polinema.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "SMK Plus Khoiriyah Hasyim",
      href: "https://sites.google.com/view/smktebuireng",
      degree: "Design and Visual Communication",
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
      role: "Backend Developer",
      description:
        "Aplikasi mobile untuk memudahkan proses bimbingan magang mahasiswa dengan sistem verifikasi batch otomatis dan pemantauan real-time.",
      details: "Digitized and streamlined academic internship workflows by replacing manual documentation with a structured mobile ecosystem, enabling seamless real-time monitoring and communication between students, lecturers, and administrators.",
      features: [
        "Automated Batch Verification System",
        "Real-time Monitoring & Notifications",
        "Structured Digital Documentation",
        "MVVM Architecture & Rigorous Testing",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "MVVM"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/AlKhrisW/E-Bimbingan",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://ebimbingan-demo.com",
          icon: <Icons.globe className="size-3" />,
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
      role: "Fullstack Developer",
      description:
        "Platform asesmen kesehatan jantung klinis dengan backend Laravel dan frontend React, menampilkan dashboard kesehatan interaktif.",
      details: "Engineered a high-fidelity, modular clinical platform for heart health assessment, featuring a secure multi-step validated input system to process complex vital health parameters and interactive health dashboards.",
      features: [
        "Multi-step Validated Input System",
        "Interactive Recharts Visualizations",
        "Real-time Health Data Tracking",
        "Luxury-minimalist Design Architecture",
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
      role: "Fullstack Developer",
      description:
        "Platform bio-link dinamis untuk mengelola profil personal dengan sistem preview instan dan antarmuka drag-and-drop.",
      details: "Architected a high-performance personal branding platform that empowers users to build and manage highly customizable profile pages with a real-time, instantaneous preview system and drag-and-drop interfaces.",
      features: [
        "Drag-and-drop Content Reordering",
        "Real-time Template Previews",
        "Global State Management with Zustand",
        "Fluid UI Transitions with Framer Motion",
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
      role: "Fullstack Developer",
      description:
        "Direktori kafe lokal dengan fitur pencarian berbasis mood dan klasifikasi area menggunakan Next.js dan Supabase.",
      details: "Engineered a location-based directory platform that optimizes the discovery of local establishments through a robust data management system and intelligent filtering logic based on atmospheric moods.",
      features: [
        "Mood-based Intelligent Filtering",
        "Multi-tier Authentication",
        "Administrative Control Center",
        "Responsive Layouts & Radix UI",
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
      role: "Fullstack Developer",
      description:
        "Sistem pakar diagnosis medis menggunakan Forward dan Backward Chaining dengan tingkat akurasi tinggi.",
      details: "Architected a sophisticated diagnostic engine using advanced rule-based reasoning to simulate clinical decision-making, delivering traceable rule explanations and confidence-based assessments via RESTful API.",
      features: [
        "Forward & Backward Chaining Algorithms",
        "Interpretable Inference Engine",
        "Confidence Factor Scoring",
        "RESTful API Integration",
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
      role: "Frontend Developer",
      description:
        "Platform edukasi interaktif untuk mempelajari Sistem Pakar dan DSS dengan visualisasi engine inferensi.",
      details: "Conceptualized and built an immersive educational interface designed to demystify complex computational architectures through step-by-step inference engine visualizations and dynamic comparisons.",
      features: [
        "Inference Engine Visualizations",
        "State-driven Comparative Tables",
        "Interactive Learning Modules",
        "Seamless UI Animations",
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
      role: "Backend Developer",
      description:
        "Aplikasi Website untuk melacak lulusan dan karir mereka pasca wisuda dengan dashboard visualisasi data.",
      details: "Membangun backend yang andal untuk aplikasi tracer study yang memungkinkan pengumpulan data alumni secara efisien melalui manajemen database alumni dan pembuatan laporan dinamis.",
      features: [
        "Kirim Survei Otomatis via Email",
        "Data Visualization Dashboard",
        "Visual Brand Identity Alignment",
      ],
      technologies: ["Figma", "Laravel", "MySQL", "Bootstrap", "ChartJS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/stewistzz/PBL_TracerStudy05",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/proyek/proyek2.webp",
      images: ["/assets/proyek/proyek2.webp"],
      video: "",
    },
    {
      title: "Parfume Performance Analytics",
      href: "https://drive.google.com/drive/folders/1lqUZXGFHXPYqNBVdnPk6fDFweaAPDXKy?usp=sharing",
      dates: "2025",
      active: true,
      category: "Data Analyst",
      role: "Data Analyst",
      description:
        "Analisis data penjualan parfum untuk mengidentifikasi tren pasar menggunakan Power BI dan SQL.",
      details: "Proyek analisis data yang bertujuan untuk mengoptimalkan strategi penjualan parfum melalui pemahaman mendalam tentang tren pasar dan perilaku konsumen menggunakan Power BI.",
      features: [
        "Data Cleaning & Transformation",
        "Trend Analysis & Insights",
        "Interactive Dashboards",
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
      role: "Data Analyst",
      description:
        "Pengembangan model prediksi berbasis data untuk mendukung pengambilan keputusan.",
      details: "Proyek ini berfokus pada penerapan analisis data untuk membangun model prediktif melalui tahapan data preprocessing hingga evaluasi performa model.",
      features: [
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Model Evaluation & Interpretation",
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
      role: "AI Developer",
      description:
        "Sistem pakar pendeteksi penyakit jantung menggunakan Python dengan tingkat akurasi 88%.",
      details: "Mengembangkan sistem deteksi penyakit jantung berbasis aturan yang menganalisis indikator klinis dengan tingkat akurasi 88% pada dataset Kaggle.",
      features: [
        "Rule-based Reasoning",
        "Clinical Indicator Analysis",
        "Data Visualization with Seaborn",
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
      role: "Data Scientist",
      description:
        "Analisis sentimen komentar YouTube menggunakan 6 algoritma Machine Learning.",
      details: "Mengumpulkan dan mengolah lebih dari 5.000 komentar YouTube untuk membandingkan performa algoritma klasifikasi dalam mendeteksi sentimen publik.",
      features: [
        "NLP Crawling & Preprocessing",
        "Benchmark 6 ML Algorithms",
        "Sentiment Visualization",
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
      role: "Fullstack Developer",
      description:
        "Platform web terpusat dengan 51 alat utilitas termasuk AI Background Removal dan OCR.",
      details: "Engineered a centralized web platform featuring 51 utility tools, seamlessly integrating advanced capabilities such as AI-powered background removal, OCR text extraction, and CAD to PDF rendering. Designed a responsive, custom-styled frontend paired with a highly secure Python backend that processes user files directly in memory (BytesIO).",
      features: [
        "AI-powered Background Removal",
        "OCR Text Extraction",
        "CAD to PDF Rendering",
        "In-memory File Processing",
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
  ],
  hackathons: [
    {
      title: "AI Engineer for Milenial",
      dates: "2025",
      location: "Digital Talent Scholarship",
      description:
        "Pelatihan Micro Skill tentang penerapan kecerdasan buatan untuk meningkatkan produktivitas dan pemahaman teknologi AI.",
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
      description: "Dasar-dasar komputasi awan dan layanan cloud populer.",
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
      description:
        "Mengenal dasar-dasar JavaScript sebagai fondasi utama dalam pengembangan web modern.",
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
      description:
        "Membangun model prediksi berbasis data untuk menghasilkan insight dan mendukung pengambilan keputusan.",
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
      description:
        "Menyelesaikan program sertifikasi Python Fundamental for Data Science yang membahas dasar pemrograman Python untuk analisis data.",
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
      description:
        "Menyelesaikan program pengenalan Data Science menggunakan Python, mencakup konsep dasar pemrograman, struktur bahasa Python, serta penerapan awal analisis data.",
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
} ;
