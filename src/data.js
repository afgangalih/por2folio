import HeroImage from "/assets/cat.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laravel.png";
import Tools10 from "/assets/tools/flutter.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/sql.png";
import Tools13 from "/assets/tools/powerbi.png";
import Tools14 from "/assets/tools/python.png";
import Tools15 from "/assets/tools/php.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "VSCode",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: " CSS Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Flutter",
    ket: "Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Sql",
    ket: "Language",
    dad: "1100",
  },

  {
    id: 13,
    gambar: Tools13,
    nama: "Power BI",
    ket: "Data Visualization",
    dad: "1200",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Python",
    ket: "Language",
    dad: "1300",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "PHP",
    ket: "Language",
    dad: "1400",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";  
import Proyek6 from "/assets/proyek/proyek6.webp";  
import Proyek7 from "/assets/proyek/proyek7.webp";  
import Proyek8 from "/assets/proyek/proyek8.webp";  
import Proyek9 from "/assets/proyek/proyek9.webp";  

import Pdf1 from "/assets/proyek/1.png";
import Pdf2 from "/assets/proyek/2.png";
import Pdf3 from "/assets/proyek/3.png";

import Sbp1 from "/assets/proyek/sbp1.png";
import Sbp2 from "/assets/proyek/sbp2.png";

import Vena1 from "/assets/proyek/vena1.png";
import Vena2 from "/assets/proyek/vena2.png";
import Vena3 from "/assets/proyek/vena3.png";

import Medi1 from "/assets/proyek/medi1.png";
import Medi2 from "/assets/proyek/medi2.png";

import HeartDisease1 from "/assets/proyek/heartdisease1.png";

import Macafi1 from "/assets/proyek/macafi1.png";
import Macafi2 from "/assets/proyek/macafi2.png";
import Macafi3 from "/assets/proyek/macafi3.png";

import Linkvibe1 from "/assets/proyek/linkvibe1.png";
import Linkvibe2 from "/assets/proyek/linkvibe2.png";
import Linkvibe3 from "/assets/proyek/linkvibe3.png";
import Linkvibe4 from "/assets/proyek/linkvibe4.png";

import Trans71 from "/assets/proyek/trans71.png";

export const listProyek = [
  {
    id: 1,
    category: "Mobile App",
    gambar: Proyek1,
    nama: "Ebimbingan Mobile",
    role: "Backend Developer",
    desk: "Aplikasi mobile untuk memudahkan proses bimbingan magang mahasiswa",
    details:
      "Digitized and streamlined academic internship workflows by replacing manual documentation with a structured mobile ecosystem, enabling seamless real-time monitoring and communication between students, lecturers, and administrators.",
    features: [
      "Automated Batch Verification System",
      "Real-time Monitoring & Notifications",
      "Structured Digital Documentation",
      "MVVM Architecture & Rigorous Testing",
    ],
    tools: ["Flutter", "Dart", "Firebase", "Provider", "MVVM"],
    github: "https://github.com/AlKhrisW/E-Bimbingan",
    demo: "https://ebimbingan-demo.com",
    dad: "200",
  },
  {
    id: 2,
    category: "Web Development",
    gambar: Proyek5,
    images: [Proyek5, Vena1, Vena2, Vena3],
    nama: "Vena.ai",
    role: "Fullstack Developer",
    desk: "Platform asesmen kesehatan jantung klinis dengan backend Laravel dan frontend React.",
    details:
      "Engineered a high-fidelity, modular clinical platform for heart health assessment, featuring a secure multi-step validated input system to process complex vital health parameters and interactive health dashboards.",
    features: [
      "Multi-step Validated Input System",
      "Interactive Recharts Visualizations",
      "Real-time Health Data Tracking",
      "Luxury-minimalist Design Architecture",
    ],
    tools: ["Laravel 11", "React.js", "Inertia.js", "Tailwind CSS", "Recharts"],
    github: "",
    demo: "",
    dad: "250",
  },
  {
    id: 3,
    category: "Web Development",
    gambar: Proyek6,
    images: [Proyek6, Linkvibe1, Linkvibe2, Linkvibe3, Linkvibe4],
    nama: "LinkVibe",
    role: "Fullstack Developer",
    desk: "Platform bio-link dinamis untuk mengelola dan membagikan profil personal yang kustomisasi.",
    details:
      "Architected a high-performance personal branding platform that empowers users to build and manage highly customizable profile pages with a real-time, instantaneous preview system and drag-and-drop interfaces.",
    features: [
      "Drag-and-drop Content Reordering",
      "Real-time Template Previews",
      "Global State Management with Zustand",
      "Fluid UI Transitions with Framer Motion",
    ],
    tools: ["Next.js", "Supabase", "Zustand", "Framer Motion", "@dnd-kit"],
    github: "",
    demo: "",
    dad: "300",
  },
  {
    id: 4,
    category: "Web Development",
    gambar: Proyek7,
    images: [Proyek7, Macafi1, Macafi2, Macafi3],
    nama: "Malang Cafe Finder",
    role: "Fullstack Developer",
    desk: "Direktori kafe lokal dengan fitur pencarian berbasis mood dan klasifikasi area.",
    details:
      "Engineered a location-based directory platform that optimizes the discovery of local establishments through a robust data management system and intelligent filtering logic based on atmospheric moods.",
    features: [
      "Mood-based Intelligent Filtering",
      "Multi-tier Authentication",
      "Administrative Control Center",
      "Responsive Layouts & Radix UI",
    ],
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    github: "",
    demo: "",
    dad: "350",
  },
  {
    id: 5,
    category: "Web Development",
    gambar: Proyek8,
    images: [Proyek8, Medi1, Medi2],
    nama: "MediDiagnose Expert System",
    role: "Fullstack Developer",
    desk: "Sistem pakar diagnosis medis menggunakan Forward dan Backward Chaining.",
    details:
      "Architected a sophisticated diagnostic engine using advanced rule-based reasoning to simulate clinical decision-making, delivering traceable rule explanations and confidence-based assessments via RESTful API.",
    features: [
      "Forward & Backward Chaining Algorithms",
      "Interpretable Inference Engine",
      "Confidence Factor Scoring",
      "RESTful API Integration",
    ],
    tools: ["Python", "Django", "Django REST Framework", "SQLite"],
    github: "",
    demo: "",
    dad: "400",
  },
  {
    id: 6,
    category: "Web Development",
    gambar: Proyek9,
    images: [Proyek9, Sbp1, Sbp2],
    nama: "KBS Educational Platform",
    role: "Frontend Developer",
    desk: "Platform edukasi interaktif untuk mempelajari Sistem Pakar dan DSS.",
    details:
      "Conceptualized and built an immersive educational interface designed to demystify complex computational architectures through step-by-step inference engine visualizations and dynamic comparisons.",
    features: [
      "Inference Engine Visualizations",
      "State-driven Comparative Tables",
      "Interactive Learning Modules",
      "Seamless UI Animations",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/afgangalih/blog-kbs",
    dad: "450",
  },
  {
    id: 7,
    category: "Web Development",
    gambar: Proyek2,
    nama: "Tracer Study",
    role: "Backend Developer",
    desk: "Aplikasi Website untuk melacak lulusan dan karir mereka pasca wisuda.",
    details:
      "Membangun backend yang andal untuk aplikasi tracer study yang memungkinkan pengumpulan data alumni secara efisien melalui manajemen database alumni dan pembuatan laporan dinamis.",
    features: [
      "Kirim Survei Otomatis via Email",
      "Data Visualization Dashboard",
      "Visual Brand Identity Alignment",
    ],
    tools: ["Figma", "Laravel", "MySQL", "Bootstrap", "ChartJS"],
    github: "https://github.com/stewistzz/PBL_TracerStudy05",
    dad: "500",
  },
  {
    id: 8,
    category: "Data Analyst",
    gambar: Proyek3,
    nama: "Parfume Performance Analytics",
    role: "Data Analyst",
    desk: "Analisis data penjualan parfum untuk mengidentifikasi tren pasar.",
    details:
      "Proyek analisis data yang bertujuan untuk mengoptimalkan strategi penjualan parfum melalui pemahaman mendalam tentang tren pasar dan perilaku konsumen menggunakan Power BI.",
    features: [
      "Data Cleaning & Transformation",
      "Trend Analysis & Insights",
      "Interactive Dashboards",
    ],
    tools: ["Power BI", "SQL"],
    demo: "https://drive.google.com/drive/folders/1lqUZXGFHXPYqNBVdnPk6fDFweaAPDXKy?usp=sharing",
    dad: "600",
  },
  {
    id: 9,
    category: "Data Analyst",
    gambar: Proyek4,
    nama: "Prediction Model Project",
    role: "Data Analyst",
    desk: "Pengembangan model prediksi berbasis data untuk mendukung pengambilan keputusan.",
    details:
      "Proyek ini berfokus pada penerapan analisis data untuk membangun model prediktif melalui tahapan data preprocessing hingga evaluasi performa model.",
    features: [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Model Evaluation & Interpretation",
    ],
    tools: ["Python", "Google Colab"],
    demo: "https://drive.google.com/drive/folders/1TX3EFXW1jObxr-0TjSMb0XM7Dx2AnlVc?usp=sharing",
    dad: "700",
  },
  {
    id: 10,
    category: "Machine Learning",
    gambar: HeartDisease1,
    images: [HeartDisease1],
    nama: "Heart Disease Expert System",
    role: "AI Developer / Python Developer",
    desk: "Sistem pakar pendeteksi penyakit jantung menggunakan Python.",
    details:
      "Mengembangkan sistem deteksi penyakit jantung berbasis aturan yang menganalisis indikator klinis dengan tingkat akurasi 88% pada dataset Kaggle.",
    features: [
      "Rule-based Reasoning",
      "Clinical Indicator Analysis",
      "Data Visualization with Seaborn",
    ],
    tools: ["Python", "Matplotlib", "Seaborn", "Google Colab"],
    demo: "https://colab.research.google.com/drive/11Z-O08cZKhhVdfMy4FR7h-KoF9taOTQ-?usp=sharing",
    dad: "800",
  },
  {
    id: 11,
    category: "Data Analyst",
    gambar: Trans71,
    images: [Trans71],
    nama: "Sentiment Analysis: Trans 7 Boycott",
    role: "Data Scientist / NLP Researcher",
    desk: "Analisis sentimen komentar YouTube menggunakan 6 algoritma Machine Learning.",
    details:
      "Mengumpulkan dan mengolah lebih dari 5.000 komentar YouTube untuk membandingkan performa algoritma klasifikasi dalam mendeteksi sentimen publik.",
    features: [
      "NLP Crawling & Preprocessing",
      "Benchmark 6 ML Algorithms",
      "Sentiment Visualization",
    ],
    tools: ["Python", "Scikit-Learn", "TensorFlow", "Google Colab"],
    demo: "https://colab.research.google.com/drive/18R1wZgY7zszLX32NJTi10KgFWIjCDKFd?usp=sharing",
    dad: "900",
  },
  {
    id: 12,
    category: "Web Development",
    gambar: Pdf1,
    images: [Pdf1, Pdf2, Pdf3],
    nama: "p(df)alugada-tools: Comprehensive Everyday Utilities App",
    role: "Fullstack Developer",
    desk: "Centralized web platform featuring 51 utility tools with advanced AI capabilities.",
    details:
      "Engineered a centralized web platform featuring 51 utility tools, seamlessly integrating advanced capabilities such as AI-powered background removal, OCR text extraction, and CAD to PDF rendering. Designed a responsive, custom-styled frontend paired with a highly secure Python backend that processes user files directly in memory (BytesIO).",
    features: [
      "AI-powered Background Removal",
      "OCR Text Extraction",
      "CAD to PDF Rendering",
      "In-memory File Processing",
    ],
    tools: [
      "Python",
      "Flask",
      "Vanilla JS",
      "CSS3",
      "PyMuPDF",
      "Pillow",
      "PyTesseract (OCR)",
      "Rembg (ONNX Runtime)",
      "PyZbar",
      "ezdxf",
    ],
    github: "https://github.com/afgangalih/PalugaDaF-tools",
    demo: "",
    dad: "1000",
  },
];




// Sertifikat.js
export const listSertifikat = [
  {
    id: 1,
    nama: "AI Engineer for Milenial",
    organisasi: "Digital Talent Scholarship",
    logo: "ri-award-line", //
    tahun: "2025",
    deskripsi:
      "Pelatihan Micro Skill tentang penerapan kecerdasan buatan untuk meningkatkan produktivitas dan pemahaman teknologi AI.",
    details:
      "Pelatihan ini membahas dasar prompt engineering, pemanfaatan AI untuk meningkatkan produktivitas kerja, serta strategi menghindari kesalahan umum dalam penggunaan AI. Diselenggarakan oleh Pusat Pengembangan Literasi Digital dalam program Digital Talent Scholarship 2025.",
    tools: ["Prompt Engineering", "Productivity Tools", "AI Workflow"],
    kredensi:
      "https://drive.google.com/file/d/1fzp3gLRR5SbWtcQ0gTI4q070zbxTyQPf/view?usp=sharing",
  },
  {
    id: 2,
    nama: "Introduce to Cloud Computing",
    organisasi: "Digitalent Scolarship",
    logo: "ri-award-line",
    tahun: "2025",
    deskripsi: "Dasar-dasar komputasi awan dan layanan cloud populer.",
    details:
      "Memahami konsep dasar cloud computing, model layanan (IaaS, PaaS, SaaS), serta pengenalan layanan dari AWS, Azure, dan Google Cloud Platform.",
    tools: ["Google Cloud", "Cloud Concepts"],
    kredensi:
      "https://drive.google.com/file/d/1-B-FFaKJKcfIxyZm-F-F2WQesfExTHAS/view?usp=sharing",
  },

  // {
  //   id: 3,
  //   nama: "Data Analysis Fundamental",
  //   organisasi: "MySkill",
  //   logo: "ri-award-line",
  //   tahun: "2025",
  //   deskripsi:
  //     "Memahami dasar analisis data untuk mengolah, membaca, dan menarik insight dari data secara efektif.",
  //   details:
  //     "Pelatihan ini mencakup pengenalan data analysis, pemahaman data, proses pengolahan data, serta latihan mandiri untuk meningkatkan kemampuan analisis. Diselenggarakan oleh MySkill sebagai bagian dari program E-Learning.",
  //   tools: ["Data Analysis", "Data Interpretation", "Analytical Thinking"],
  //   kredensi:
  //     "https://drive.google.com/file/d/1ff7pPWL67IeUAxF5E4QhjktsQxuI8P2N/view?usp=sharing",
  // },
  {
    id: 4,
    nama: "Introduction to JavaScript",
    organisasi: "MySkill",
    logo: "ri-award-line",
    tahun: "2025",
    deskripsi:
      "Mengenal dasar-dasar JavaScript sebagai fondasi utama dalam pengembangan web modern.",
    details:
      "Pelatihan ini mencakup pengenalan JavaScript, dasar sintaks, logika pemrograman, serta praktik mandiri untuk membangun pemahaman awal dalam pengembangan frontend. Diselenggarakan oleh MySkill melalui program E-Learning.",
    tools: ["JavaScript", "Basic Programming", "Frontend Development"],
    kredensi:
      "https://drive.google.com/file/d/1CT-1XcXVDaF_EhP-DWcFMDc-MXLXDbkP/view?usp=sharing",
  },
  {
    id: 5,
    nama: "Project: Prediction Model",
    organisasi: "MySkill",
    logo: "ri-award-line",
    tahun: "2025",
    deskripsi:
      "Membangun model prediksi berbasis data untuk menghasilkan insight dan mendukung pengambilan keputusan.",
    details:
      "Project ini berfokus pada penerapan analisis data untuk membangun model prediktif, mulai dari pengolahan data, pemilihan fitur, hingga evaluasi hasil model dalam studi kasus (FinanKu).",
    tools: [
      "Data Analysis",
      "Predictive Modeling",
      "Data Processing",
      "Analytical Thinking",
    ],
    kredensi:
      "https://drive.google.com/file/d/1dA3AvbiYzVHi5FIuLFaCR7k5k3Bne_TL/view?usp=drive_link",
  },

  {
    id: 6,
    nama: "Python Fundamental for Data Science",
    organisasi: "DQLab",
    logo: "ri-award-line",
    tahun: "2025",
    deskripsi:
      "Menyelesaikan program sertifikasi Python Fundamental for Data Science yang membahas dasar pemrograman Python untuk analisis data.",
    details:
      "Sertifikasi ini mencakup pengolahan data, analisis data dasar, serta visualisasi data menggunakan Python dalam studi kasus sederhana.",
    tools: ["Python", "Pandas", "Data Analysis", "Data Visualization"],
    kredensi:
      "https://drive.google.com/file/d/1Mti98BUCqEoMCvsbTt6ipptaK1G_tJpv/view?usp=drive_link",
  },

  {
    id: 7,
    nama: "Introduction to Data Science with Python",
    organisasi: "DQLab",
    logo: "ri-award-line",
    tahun: "2025",
    deskripsi:
      "Menyelesaikan program pengenalan Data Science menggunakan Python, mencakup konsep dasar pemrograman, struktur bahasa Python, serta penerapan awal analisis data.",
    details:
      "Program ini membahas dasar Python seperti variabel, tipe data, struktur bahasa, penggunaan library, serta penerapan Python dalam konteks data science melalui latihan dan kuis interaktif.",
    tools: [
      "Python",
      "Data Science Fundamentals",
      "Data Analysis",
      "Python Libraries",
    ],
    kredensi:
      "https://drive.google.com/file/d/1xQbdVx1mmwInlmYspI3N3NWJ4RbeRMpw/view?usp=drive_link",
  },
];
