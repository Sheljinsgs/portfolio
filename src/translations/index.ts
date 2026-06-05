export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      badge: "AVAILABLE FOR HIRE",
      hi: "Hi, I'm",
      role_prefix: "I am a",
      roles: ["AI Engineer", "Full Stack Developer", "Flutter Developer", "Fintech Specialist"],
      bio: "I build high-performance, user-centric web applications with modern tech stacks. Passionate about clean code, scalable architecture, and delightful user experiences.",
      view_work: "View My Work",
      download_resume: "Download Resume",
    },
    about: {
      heading: "ABOUT ME",
      subheading: ["Driven by ", "Passion", ", ", "Defined by ", "Precision."],
      bio1: "I'm a full-stack developer based in Bengaluru, India. I specialize in building robust web applications that bridge the gap between complex logic and elegant UI.",
      bio2: "My philosophy is simple: write clean, maintainable code that solves real-world problems. When I'm not coding, you'll find me exploring open-source projects, contributing to developer communities, or hunting for the perfect espresso.",
      nationality: "Indian Nationality",
      passport: "Valid Passport",
      gcc: "Open for GCC Countries",
      stats: {
        experience: "Experience",
        projects: "Projects Done",
        tech: "Full Stack",
        flutter: "Flutter Dev",
        ai: "AI Engineer",
        github: "Architecture",
      }
    },
    skills: {
      heading: "MY TECH STACK",
      subheading: ["Technologies I Use to ", "Bring ", "Ideas", " to Life."],
      categories: {
        frontend: "Frontend Development",
        backend: "Backend & API",
        database: "Database Management",
        mobile: "Mobile App Dev",
        tools: "Tools & DevOps",
        ai: "AI & Machine Learning"
      }
    },
    projects: {
      heading: "PORTFOLIO",
      subheading: ["Featured ", "Projects"],
      categories: {
        all: "All",
        frontend: "Frontend",
        fullstack: "Full Stack",
        mobile: "Mobile App",
        backend: "Backend & GIS"
      },
      list: [
        {
          id: 1,
          title: "School Management System",
          category: "fullstack",
          description: "Architected a multi-tenant SaaS platform supporting 4 distinct user roles (Admin, Teacher, Student, Parent) with 100% tenant-level data isolation. Developed 20+ RESTful APIs covering attendance, grading, scheduling, and notifications, reducing manual administrative tasks by 60%.",
          tech: ["Node.js", "Express.js", "Angular", "MongoDB", "MySQL", "JWT", "RBAC", "Multi-Tenancy"],
          demo: "#",
          repo: "#"
        },
        {
          id: 2,
          title: "Classy Group Construction",
          category: "frontend",
          description: "Designed and delivered a fully responsive corporate website in Angular with mobile-first principles, achieving 100% cross-device compatibility. Configured Nginx reverse proxy with SSL termination and response caching, reducing page load time by 35%.",
          tech: ["Angular", "Node.js", "Express.js", "REST API", "Nginx", "SSL"],
          demo: "https://classy-group.in/",
          repo: "#"
        }
      ]
    },
    resume: {
      experience: "Experience (2+ Years)",
      education: "Education",
      download_cv: "Download CV (PDF)",
      deep_dive: ["Looking for a ", "Deep Dive?"],
      cta_text: "Download my full professional resume to see my complete experience, certifications, and academic background.",
      exp_list: [
        {
          role: "Junior Member of Technical Staff",
          company: "Ezee.ai, Bengaluru",
          period: "April 2025 - Present (1 yr 2 mos)",
          desc: "Spearheading development of enterprise-grade Loan Origination System (LOS) applications. Designed scalable micro-services backend in Node.js/Express, increasing transaction throughput by 42% and reducing API response latency by 30%. Engineered highly responsive dynamic form generation engines and dashboard components using Next.js/React and TailwindCSS."
        },
        {
          role: "Member of Technical Staff Intern",
          company: "Ezee.ai, Bengaluru",
          period: "March 2024 - March 2025 (1 yr)",
          desc: "Architected and optimized high-frequency fintech data pipelines using Next.js Server Actions and Prisma ORM. Reduced query latency by 35% by implementing Redis caching layers and optimizing PostgreSQL database indexes. Spearheaded integration of secure e-KYC and third-party credit check webhooks."
        }
      ],
      edu: {
        title: "B.Tech in Computer Science and Engineering",
        school: "Dr. N.G.P. Institute of Technology, Coimbatore",
        desc: "2020 - 2024 | CGPA: 8.0/10. Rigorous coursework in Data Structures & Algorithms, Database Management Systems, Computer Networks, and Software Engineering. Active technical lead in university hackathons."
      },
      certifications: {
        title: "Certifications & Achievements",
        list: []
      }
    },
    contact: {
      heading: "LET'S TALK",
      subheading: ["Let's ", "Connect", " & Collaborate."],
      cta_text: "I'm currently seeking new opportunities and projects. If you have a question or just want to say hi, I'll try my best to get back to you!",
      location: "Location",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        sending: "Sending...",
        sent: "Message Sent Successfully!",
        error: "Error Sending Message.",
        send: "Send Message"
      }
    },
    footer: {
      rights: "All Rights Reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      skills: "المهارات",
      projects: "المشاريع",
      resume: "السيرة الذاتية",
      contact: "اتصل بي",
    },
    hero: {
      badge: "متاح للعمل",
      hi: "أهلاً، أنا",
      role_prefix: "أنا",
      roles: ["مهندس ذكاء اصطناعي", "مطور تطبيقات متكامل", "مطور فلاتر", "متخصص في التكنولوجيا المالية"],
      bio: "أقوم ببناء تطبيقات ويب عالية الأداء تركز على المستخدم باستخدام أحدث التقنيات. شغوف بالكود النظيف، والبنية التحتية القابلة للتوسع، وتجارب المستخدم الرائعة.",
      view_work: "عرض أعمالي",
      download_resume: "تحميل السيرة الذاتية",
    },
    about: {
      heading: "عني",
      subheading: ["مدفوع بـ ", "الشغف", "، ", "ومحدّد بـ ", "الدقة."],
      bio1: "أنا مطور تطبيقات متكامل مقيم في بنغالورو، الهند. متخصص في بناء تطبيقات ويب قوية تجمع بين المنطق المعقد وواجهات الاستخدام الأنيقة.",
      bio2: "فلسفتي بسيطة: كتابة كود نظيف وسهل الصيانة لحل مشكلات العالم الحقيقي. عندما لا أكون مبرمجاً، ستجدني استكشف المشاريع مفتوحة المصدر، أو أساهم في مجتمعات المطورين.",
      nationality: "الجنسية الهندية",
      passport: "جواز سفر صالح",
      gcc: "متاح للعمل في دول مجلس التعاون الخليجي",
      stats: {
        experience: "الخبرة",
        projects: "المشاريع المنجزة",
        tech: "تطبيقات متكاملة",
        flutter: "مطور فلاتر",
        ai: "مهندس ذكاء اصطناعي",
        github: "هندسة البرمجيات",
      }
    },
    skills: {
      heading: "مجموعة تقنياتي",
      subheading: ["التقنيات التي أستخدمها لـ ", "تحويل ", "الأفكار", " إلى واقع."],
      categories: {
        frontend: "تطوير الواجهات الأمامية",
        backend: "الخلفية والواجهات البرمجية",
        database: "إدارة قواعد البيانات",
        mobile: "تطوير تطبيقات الجوال",
        tools: "الأدوات والعمليات",
        ai: "الذكاء الاصطناعي وتعلم الآلة"
      }
    },
    projects: {
      heading: "معرض الأعمال",
      subheading: ["مشاريع ", "مختارة"],
      categories: {
        all: "الكل",
        frontend: "واجهات أمامية",
        fullstack: "مطور متكامل",
        mobile: "تطبيق جوال",
        backend: "خلفية ونظم معلومات جغرافية"
      },
      list: [
        {
          id: 1,
          title: "نظام إدارة المدرسة",
          category: "fullstack",
          description: "منصة SaaS متعددة المستأجرين تدعم 4 بوابات مستخدمين (مسؤول، معلم، طالب، ولي أمر) مع عزل كامل للبيانات. تطوير أكثر من 20 واجهة برمجية وتكامل قواعد بيانات MongoDB و MySQL مع تحسين الاستعلامات لتقليل زمن الاستجابة.",
          tech: ["Node.js", "Express.js", "Angular", "MongoDB", "MySQL", "JWT", "RBAC", "Multi-Tenancy"],
          demo: "#",
          repo: "#"
        },
        {
          id: 2,
          title: "موقع شركة مقاولات",
          category: "frontend",
          description: "تصميم وتطوير موقع إلكتروني متكامل ومتجاوب للشركات باستخدام Angular بتصميم يركز على الأجهزة المحمولة. إعداد خادم Nginx كوكيل عكسي مع تشفير SSL والتحميل المحسن للموارد.",
          tech: ["Angular", "Node.js", "Express.js", "REST API", "Nginx", "SSL"],
          demo: "https://classy-group.in/",
          repo: "#"
        }
      ]
    },
    resume: {
      experience: "الخبرة المهنية (2+ سنوات)",
      education: "التعليم",
      download_cv: "تحميل السيرة الذاتية (PDF)",
      deep_dive: ["هل تريد ", "نظرة أعمق؟"],
      cta_text: "قم بتحميل سيرتي الذاتية المهنية الكاملة لرؤية خبرتي، وشهاداتي، وخلفيتي الأكاديمية.",
      exp_list: [
        {
          role: "جونيور عضو في الطاقم التقني",
          company: "Ezee.ai، بنغالورو",
          period: "أبريل 2025 - الحاضر (سنة وشهران)",
          desc: "قيادة تطوير أنظمة إنشاء القروض (LOS) للمؤسسات المالية. تصميم وتطوير خدمات خلفية قابلة للتوسع باستخدام Node.js/Express مما رفع إنتاجية المعاملات بنسبة ٤٢٪ وخفض زمن استجابة واجهة البرمجيات بنسبة ٣٠٪، مع تطوير محركات نماذج مرنة باستخدام Next.js."
        },
        {
          role: "عضو متدرب في الطاقم التقني",
          company: "Ezee.ai، بنغالورو",
          period: "مارس 2024 - مارس 2025 (سنة واحدة)",
          desc: "هندسة وتحسين خطوط نقل البيانات للتكنولوجيا المالية باستخدام Next.js Server Actions و Prisma ORM. خفض زمن استعلام قاعدة البيانات بنسبة ٣٥٪ عبر إدراج طبقات تخزين مؤقت Redis وتحسين فهارس PostgreSQL، والمساهمة في ربط خدمات e-KYC."
        }
      ],
      edu: {
        title: "بكالوريوس هندسة وعلوم الحاسوب",
        school: "معهد الدكتور N.G.P للتكنولوجيا، كويمباتور",
        desc: "2020 - 2024 | معدل تراكمي 8.0. لا يوجد تاريخ من الرسوب. التركيز على مبادئ هندسة البرمجيات وهياكل البيانات والشبكات."
      },
      certifications: {
        title: "الشهادات والإنجازات",
        list: []
      }
    },
    contact: {
      heading: "لنتحدث",
      subheading: ["لنقم بـ ", "التواصل", " والتعاون."],
      cta_text: "أنا أبحث حالياً عن فرص ومشاريع جديدة. إذا كان لديك أي استفسار أو تريد فقط التحية، سأبذل قصارى جهدي للرد عليك!",
      location: "الموقع",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        sending: "جاري الإرسال...",
        sent: "تم إرسال الرسالة بنجاح!",
        error: "خطأ في إرسال الرسالة.",
        send: "إرسال الرسالة"
      }
    },
    footer: {
      rights: "جميع الحقوق محفوظة."
    }
  }
};
