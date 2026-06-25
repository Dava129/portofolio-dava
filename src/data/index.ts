export const skills = {
  languages: [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "Dart", icon: "🎯" },
    { name: "PHP", icon: "🐘" },
  ],
  tools: [
    { name: "Flutter", icon: "💙" },
    { name: "GetX", icon: "⚡" },
    { name: "OpenCV", icon: "👁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "GitHub", icon: "🐙" },
    { name: "Figma", icon: "🎨" },
  ],
};

export const projects = [
  {
    id: "01",
    title: "Traffic Escape 3D",
    description:
      "Game 3D car sederhana dengan 2 level, dan di setiap level mempunyai rintangan yang berbeda.",
    stack: ["Game engine (Unity)"],
    features: [
      "Mekanik Tap-to-Move",
      "Deteksi Tabrakan & Pola Puzzle",
      "Level Manager & Progress Saving",
    ],
    links: [
      {
        label: "View Project",
        href: "https://github.com/Dava129/https-github.com-dava-Traffic-Escape-3D",
        variant: "primary" as const,
      },
      {
        label: "GitHub",
        href: "https://github.com/Dava129/https-github.com-dava-Traffic-Escape-3D",
        variant: "outline" as const,
      },
    ],
    featured: false,
  },
  {
    id: "02",
    title: "Driver Monitoring",
    description:
      "Aplikasi pendeteksi kantuk dan monitoring driver expedisi berbasis ai.",
    stack: ["Flutter", "GetX", "Flask", "SQLite", "Computer Vision"],
    features: [
      "Autentikasi Pengguna & Manajemen Profil",
      "Pemrosesan Data & Computer Vision",
      "Dashboard Interaktif & Riwayat",
      "Smart Recommendation",
    ],
    links: [
      { label: "View Project", href: "https://github.com/adytri565/dava_ady_capstone", variant: "primary" as const },
      { label: "GitHub", href: "https://github.com/adytri565/dava_ady_capstone", variant: "outline" as const },
    ],
    featured: true,
  },
  {
    id: "03",
    title: "Diet Apps",
    description:
      "Aplikasi manajemen booking meja billiard dan pelanggan dengan fitur pengelolaan data, database integration, dan keamanan sistem.",
    stack: ["FLutter", "GetX", "Rest API"],
    features: [
      "Kalkulator & Rekomendasi Diet Personalisasi",
      "Arsitektur Reaktif dengan GetX(detek postur tubuh menggunakan obx)",
      "Log Harian Konsumsi Makanan & Progres",
      "Rekomendasi Pola Hidup",
    ],
    links: [
      { label: "View Project", href: "https://github.com/MuqtasidRoziq/dietapps-mobile", variant: "primary" as const },
      { label: "GitHub", href: "https://github.com/MuqtasidRoziq/dietapps-mobile", variant: "outline" as const },
    ],
    featured: false,
  },
  {
    id: "04",
    title: "Aplikasi Penjualan Alat Musik",
    description:
      "Aplikasi marketplace dan management stock yang berfokus pada alat musik .",
    stack: ["Java", "NetBeans", "Java Swing"],
    features: [
      "Manajemen Katalog Alat Musik",
      "Input Transaksi & Kalkulasi Otomatis",
      "Penyimpanan Riwayat Penjualan (CRUD)",
    ],
    links: [
      {
        label: "View Design",
        href: "https://github.com/Dava129/ApkPenjualanAlatMusik",
        variant: "primary" as const,
      },
      {
        label: "GitHub",
        href: "https://github.com/Dava129/ApkPenjualanAlatMusik",
        variant: "outline" as const,
      },
    ],
    featured: false,
  },
];

export const contact = [
  { label: "Email", href: "mailto:davaadi056@email.com", icon: "email" },
  { label: "GitHub", href: "https://github.com/Dava129", icon: "github" },
  { label: "WhatsApp", href: "https://wa.me/6285226347144", icon: "whatsapp" },
];
