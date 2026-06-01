/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fathiyyah Ermita Sari",
  title: "Hi all, I'm Fathiyyah",
  subTitle: emoji(
    "Mahasiswa D4 Teknologi Rekayasa Perangkat Lunak Politeknik Negeri Padang yang memiliki minat pada Backend Development, Information Systems, dan Web Application Development. Berpengalaman mengembangkan aplikasi berbasis web menggunakan Laravel, Next.js, NestJS, dan MySQL serta memahami proses pengembangan sistem, REST API, dan pengelolaan database."
  ),
  resumeLink: "https://drive.google.com/file/d/15rGPKpEos8GpehLAM3qjAZ-YPNtsm8Nx/view?usp=sharing", // CV placeholder download link
  displayGreeting: true, // Set false to hide this section, defaults to true
  avatar: require("./assets/images/fathiyyah.jpg"),
  showAvatar: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fathiyyah28",
  linkedin: "https://www.linkedin.com/in/fathiyyah-ermita-sari-a143a81b6",
  gmail: "fathiyyahermitasari28@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "MAHASISWA TRPL YANG BERFOKUS PADA BACKEND, INFORMATION SYSTEMS, DAN WEB APPLICATION DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Mengembangkan aplikasi web menggunakan Laravel, Next.js, dan NestJS."
    ),
    emoji(
      "⚡ Mendesain database relasional menggunakan MySQL."
    ),
    emoji(
      "⚡ Membangun REST API dan integrasi frontend-backend."
    ),
    emoji(
      "⚡ Memahami Software Development Lifecycle (SDLC), analisis kebutuhan, dan implementasi sistem."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politeknik Negeri Padang",
      logo: require("./assets/images/pnpLogo.png"),
      subHeader: "D4 Teknologi Rekayasa Perangkat Lunak",
      duration: "2023 - Sekarang (Ekspektasi Lulus 2027)",
      desc: "Fokus pada perancangan, analisis kebutuhan, hingga implementasi perangkat lunak.",
      descBullets: [
        "Terlibat dalam proyek akademik berbasis web (Laravel, Next.js, NestJS) dan mobile.",
        "Mempelajari pengembangan backend terstruktur, REST API, dan basis data.",
        "Relevant Coursework: Basis Data, Pemrograman Web, Rekayasa Perangkat Lunak, Analisis & Perancangan Sistem, Machine Learning."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Database & SQL",
      progressPercentage: "85%"
    },
    {
      Stack: "Web Application Development",
      progressPercentage: "85%"
    },
    {
      Stack: "System Analysis & Design",
      progressPercentage: "80%"
    },
    {
      Stack: "REST API Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Koordinator Infokom & Anggota Programming",
      company: "Cybertech PNP",
      companylogo: require("./assets/images/cybertech.jpg"),
      date: "2023 – Januari 2026",
      desc: "Mengelola dokumentasi, informasi digital organisasi, serta berkolaborasi dengan tim programming dalam pengembangan sistem dan penyelenggaraan event teknologi.",
      descBullets: [
        "Mengelola dokumentasi dan informasi digital organisasi.",
        "Berpartisipasi aktif dalam penyelenggaraan berbagai event teknologi.",
        "Berkolaborasi dengan tim programming dalam kegiatan pengembangan perangkat lunak."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PENGALAMAN PROYEK PENGEMBANGAN PERANGKAT LUNAK",
  projects: [
    {
      image: require("./assets/images/earsip.png"),
      projectName: "Sistem E-Arsip P3M",
      role: "Programmer / Fullstack Developer",
      techStack: ["Laravel", "MySQL", "Git", "Bootstrap"],
      projectDesc: "Sistem arsip digital berbasis web dengan Role-Based Access Control (RBAC) untuk mengelola dokumen dan proposal P3M secara aman.",
      overview: "Sistem E-Arsip P3M dirancang untuk mempermudah pengelolaan surat masuk, surat keluar, proposal, dan laporan secara digital. Dengan sistem terpusat ini, organisasi dapat melacak dokumen, membatasi hak akses sesuai wewenang (RBAC), dan meningkatkan efisiensi administrasi secara signifikan.",
      myRoleDetail: "Melakukan analisis kebutuhan, merancang skema database relasional, membangun REST API & logika backend Laravel, menerapkan Role-Based Access Control (RBAC) yang aman, serta menyusun dashboard analitik statistik dokumen.",
      keyFeatures: [
        "Role-Based Access Control (RBAC) yang aman",
        "Dashboard Statistik Proposal & Laporan",
        "Manajemen Surat Masuk & Surat Keluar",
        "Pengarsipan Dokumen Terpusat",
        "Fitur Pencarian & Filter Cepat"
      ],
      architectureDiagram: "Client (Browser) ──> Web Server (Laravel) ──> Database (MySQL)",
      screenshots: [
        require("./assets/images/earsip.png"),
        require("./assets/images/earsip.png")
      ],
      github: "https://github.com/fathiyyah28",
      videoLink: "https://drive.google.com/file/d/1lh2QtYdNq6NgW1CRXf1qqUN3PSkzrZno/view?usp=sharing",
      databaseDesign: {
        erd: [
          { table: "users", columns: ["id (PK, int)", "name", "email", "role_id (FK)"] },
          { table: "documents", columns: ["id (PK, int)", "title", "file_path", "category", "user_id (FK)"] },
          { table: "roles", columns: ["id (PK, int)", "name", "permissions"] }
        ],
        details: [
          "Relasi Tabel: Relasi satu-ke-banyak (One-to-Many) antara Roles ke Users, serta Users ke Documents.",
          "Primary Key (PK): Integer Auto-increment digunakan pada semua tabel untuk performa optimal.",
          "Foreign Key (FK): role_id di tabel Users mereferensikan tabel Roles untuk konfigurasi RBAC."
        ]
      },
      apiDocumentation: [
        { method: "GET", path: "/documents", desc: "Mengambil semua daftar dokumen arsip yang diunggah" },
        { method: "POST", path: "/documents/store", desc: "Mengunggah dokumen arsip baru beserta kategorinya" },
        { method: "DELETE", path: "/documents/:id", desc: "Menghapus dokumen arsip tertentu berdasarkan ID" }
      ]
    },
    {
      image: require("./assets/images/inventori.png"),
      projectName: "Sistem Inventori (Elfan's Parfum)",
      role: "Backend & API Developer",
      techStack: ["NestJS", "Next.js", "MySQL", "Prisma", "TailwindCSS"],
      projectDesc: "Aplikasi inventori multibranch untuk mengelola produk, transaksi penjualan, distribusi stok antar cabang, dan laporan analitik.",
      overview: "Sistem manajemen stok dan inventori parfum berskala enterprise yang dirancang khusus untuk Elfan's Parfum. Sistem ini mempermudah pemilik bisnis memantau stok global, melacak penjualan real-time di setiap cabang, dan mengatur distribusi barang antar cabang secara instan.",
      myRoleDetail: "Membangun REST API performa tinggi menggunakan NestJS, merancang skema relasi database MySQL dengan Prisma ORM, mengimplementasikan endpoint distribusi stok, dan mengintegrasikan API ke frontend Next.js.",
      keyFeatures: [
        "Real-time Stock Tracking di semua cabang",
        "Distribusi Stok Antar Cabang Terintegrasi",
        "Sales & Transactions Reporting Lengkap",
        "Multi-role Management (Owner & Employee)",
        "Elegant Dark Mode Admin Panel"
      ],
      architectureDiagram: "Next.js Frontend ──> NestJS REST API ──> Prisma ORM ──> MySQL Database",
      screenshots: [
        require("./assets/images/inventori.png"),
        require("./assets/images/inventori.png")
      ],
      github: "https://github.com/fathiyyah28",
      videoLink: "https://drive.google.com/file/d/1lh2QtYdNq6NgW1CRXf1qqUN3PSkzrZno/view?usp=sharing",
      databaseDesign: {
        erd: [
          { table: "users", columns: ["id (PK, UUID)", "name", "email", "role"] },
          { table: "products", columns: ["id (PK, UUID)", "name", "sku", "price", "stock_global"] },
          { table: "transactions", columns: ["id (PK, UUID)", "user_id (FK)", "branch_id (FK)", "total_amount"] }
        ],
        details: [
          "Relasi Tabel: Relasi satu-ke-banyak (One-to-Many) antara Cabang dan Stok Produk, serta Transaksi dan Item Transaksi.",
          "Primary Key (PK): UUID v4 digunakan pada tabel Users, Products, dan Transactions untuk keunikan data global.",
          "Foreign Key (FK): user_id dan branch_id digunakan di tabel Transactions untuk referensi data relasional."
        ]
      },
      apiDocumentation: [
        { method: "GET", path: "/api/products", desc: "Mengambil daftar semua produk beserta stok global" },
        { method: "POST", path: "/api/products", desc: "Menambahkan produk baru ke database" },
        { method: "PUT", path: "/api/products/:id", desc: "Memperbarui informasi produk dan stok berdasarkan ID" },
        { method: "DELETE", path: "/api/products/:id", desc: "Menghapus produk dari database berdasarkan ID" }
      ]
    },
    {
      image: require("./assets/images/klasifikasi.png"),
      projectName: "Klasifikasi Judul Tugas Akhir",
      role: "Machine Learning Developer",
      techStack: ["Python", "Flask", "Scikit-Learn", "Random Forest", "NLTK"],
      projectDesc: "Sistem klasifikasi otomatis berbasis Machine Learning untuk mengelompokkan kategori judul Tugas Akhir mahasiswa menggunakan algoritma Random Forest.",
      overview: "Aplikasi berbasis web untuk mengklasifikasikan judul tugas akhir secara otomatis ke dalam bidang fokus studi yang sesuai. Memanfaatkan pemrosesan bahasa alami (NLP) untuk membersihkan teks judul dan menggunakan model Random Forest yang dilatih untuk memberikan akurasi klasifikasi tinggi.",
      myRoleDetail: "Melakukan pengolahan data (cleansing, stopword removal, stemming), ekstraksi fitur menggunakan TF-IDF, melatih dan mengevaluasi model Random Forest dengan Scikit-Learn, serta mendeploy model menjadi web service berbasis Flask.",
      keyFeatures: [
        "Text Preprocessing & Cleansing Otomatis",
        "TF-IDF Feature Extraction",
        "Model Random Forest Classifier dengan Akurasi Tinggi",
        "Interactive Web Input Prediction",
        "Reporting Hasil Prediksi & Kategori"
      ],
      architectureDiagram: "Web UI (HTML/CSS) ──> Flask App (Python) ──> TF-IDF + Random Forest Model",
      screenshots: [
        require("./assets/images/klasifikasi.png"),
        require("./assets/images/klasifikasi.png")
      ],
      github: "https://github.com/fathiyyah28",
      videoLink: "https://drive.google.com/file/d/1lh2QtYdNq6NgW1CRXf1qqUN3PSkzrZno/view?usp=sharing",
      apiDocumentation: [
        { method: "POST", path: "/predict", desc: "Menerima input judul TA dan mengembalikan hasil prediksi kategori" },
        { method: "GET", path: "/metrics", desc: "Mengambil akurasi model, precision, recall, dan confusion matrix" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "fathiyyahermitasari28@gmail.com",
  showResume: true,
  resumeLink: "https://drive.google.com/file/d/15rGPKpEos8GpehLAM3qjAZ-YPNtsm8Nx/view?usp=sharing" // Placeholder download link for CV
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
