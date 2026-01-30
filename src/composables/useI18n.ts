import { ref, computed } from 'vue'

export type Language = 'en' | 'fr' | 'ar'

const currentLanguage = ref<Language>('en')

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "👋 Hello, I'm",
      name: 'Adnane El Kanbougi',
      roles: ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'],
      description:
        'Moroccan developer with 1.5+ years of experience crafting beautiful and functional web applications. Licensed professional passionate about creating exceptional digital experiences.',
      getInTouch: 'Get In Touch',
      viewWork: 'View My Work',
      scroll: 'Scroll',
    },
    about: {
      label: 'Get to know me',
      title: 'About Me',
      lead: "I'm a passionate Full Stack Developer from Morocco with 1.5 years of professional experience. I specialize in creating modern, responsive web applications that combine beautiful design with powerful functionality.",
      paragraph1:
        "My journey in web development started with a curiosity about how things work behind the scenes. Today, I'm a licensed professional who takes pride in writing clean, maintainable code and creating seamless user experiences.",
      paragraph2:
        "I believe that great software is built at the intersection of technical excellence and user empathy. Whether it's a complex web application or a simple landing page, I approach every project with the same level of dedication and attention to detail.",
      highlights: {
        licensed: {
          title: 'Licensed Professional',
          text: 'Certified developer',
        },
        experience: {
          title: '1.5+ Years',
          text: 'Industry experience',
        },
        location: {
          title: 'Based in Morocco',
          text: 'Available remotely',
        },
      },
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        technologies: 'Technologies Mastered',
        satisfaction: 'Client Satisfaction',
      },
    },
    experience: {
      label: 'My Journey',
      title: 'Work Experience',
      achievements: 'Key Achievements:',
      experiences: [
        {
          company: 'Tech Company',
          role: 'Full Stack Developer',
          period: '2024 - Present',
          description:
            'Developing and maintaining web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality solutions.',
          achievements: [
            'Built responsive web applications serving 10K+ users',
            'Improved application performance by 40%',
            'Implemented CI/CD pipelines reducing deployment time',
          ],
        },
        {
          company: 'Digital Agency',
          role: 'Frontend Developer',
          period: '2023 - 2024',
          description:
            'Created beautiful and functional user interfaces for various client projects. Focused on responsive design and user experience.',
          achievements: [
            'Developed 15+ client websites',
            'Achieved 95+ performance scores on Lighthouse',
            'Mentored junior developers',
          ],
        },
      ],
    },
    education: {
      label: 'Academic Background',
      title: 'Education',
      subtitle: 'My academic journey and continuous learning path',
      highlights: 'Highlights:',
      items: [
        {
          degree: 'License Degree',
          field: 'Computer Science / Software Engineering',
          institution: 'University',
          location: 'Morocco',
          period: '2020 - 2023',
          description:
            "Completed bachelor's degree with focus on software development, algorithms, and modern web technologies.",
          achievements: [
            'Graduated with honors',
            'Completed multiple web development projects',
            'Participated in coding competitions',
            'Strong foundation in programming fundamentals',
          ],
        },
        {
          degree: 'Professional Certifications',
          field: 'Web Development & UI/UX',
          institution: 'Online Learning Platforms',
          location: 'Remote',
          period: '2023 - Present',
          description:
            'Continuous learning through various online certifications and courses to stay updated with latest technologies.',
          achievements: [
            'Vue.js Advanced Concepts',
            'TypeScript Fundamentals',
            'Modern UI/UX Design Principles',
            'Full Stack Development Best Practices',
          ],
        },
      ],
    },
    skills: {
      label: 'What I Do',
      title: 'Skills & Technologies',
      subtitle: 'Technologies and tools I use to bring ideas to life',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & Others',
      },
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured Projects',
      subtitle: 'Some of my recent work and side projects',
      items: [
        {
          title: 'E-Commerce Platform',
          description:
            'A modern e-commerce platform with real-time inventory management, payment integration, and user authentication.',
        },
        {
          title: 'Task Management App',
          description:
            'Collaborative task management application with real-time updates, team collaboration features, and analytics.',
        },
        {
          title: 'Restaurant Booking System',
          description:
            'Online reservation system for restaurants with menu display, table booking, and customer reviews.',
        },
        {
          title: 'Social Media Dashboard',
          description:
            'Analytics dashboard for social media management with data visualization and reporting features.',
        },
        {
          title: 'Weather Forecast App',
          description:
            'Beautiful weather application with detailed forecasts, maps, and personalized weather alerts.',
        },
        {
          title: 'Portfolio CMS',
          description:
            'Content management system for portfolio websites with drag-and-drop builder and SEO optimization.',
        },
      ],
    },
    certificates: {
      label: 'Achievements',
      title: 'Certificates & Credentials',
      subtitle: 'Professional certifications and completed courses',
      viewCredential: 'View Credential',
      items: [
        {
          name: 'Vue.js Complete Course',
          issuer: 'Udemy',
          date: 'Issued Dec 2024',
          description:
            'Comprehensive course covering Vue 3 Composition API, Pinia state management, and modern development practices.',
          credentialUrl: '#',
        },
        {
          name: 'Full Stack Web Development',
          issuer: 'Coursera',
          date: 'Issued Oct 2024',
          description:
            'Complete full-stack development bootcamp covering frontend, backend, databases, and deployment.',
          credentialUrl: '#',
        },
        {
          name: 'UI/UX Design Fundamentals',
          issuer: 'LinkedIn Learning',
          date: 'Issued Aug 2024',
          description:
            'Professional certification in user interface and user experience design principles and best practices.',
          credentialUrl: '#',
        },
        {
          name: 'MongoDB Developer',
          issuer: 'MongoDB University',
          date: 'Issued Jun 2024',
          description:
            'Advanced MongoDB certification covering database design, aggregation pipelines, and performance optimization.',
          credentialUrl: '#',
        },
      ],
    },
    contact: {
      label: 'Get In Touch',
      title: 'Contact Me',
      subtitle: "Have a project in mind? Let's work together to create something amazing",
      letsTalk: "Let's talk",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'How can I help you?',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: '✓ Message sent successfully!',
        error: '✗ Something went wrong. Please try again.',
      },
      footer: {
        copyright: '© 2026 Adnane El Kanbougi. All rights reserved.',
        builtWith: 'Built with ❤️ using Vue.js',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      education: 'Éducation',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: '👋 Bonjour, je suis',
      name: 'Adnane El Kanbougi',
      roles: ['Développeur Full Stack', 'Passionné UI/UX', 'Résolveur de Problèmes'],
      description:
        "Développeur marocain avec plus de 1,5 ans d'expérience dans la création d'applications web belles et fonctionnelles. Professionnel diplômé passionné par la création d'expériences numériques exceptionnelles.",
      getInTouch: 'Me Contacter',
      viewWork: 'Voir Mon Travail',
      scroll: 'Défiler',
    },
    about: {
      label: 'Apprenez à me connaître',
      title: 'À Propos de Moi',
      lead: "Je suis un développeur Full Stack passionné du Maroc avec 1,5 ans d'expérience professionnelle. Je me spécialise dans la création d'applications web modernes et responsives qui combinent design élégant et fonctionnalité puissante.",
      paragraph1:
        "Mon parcours dans le développement web a commencé par une curiosité sur le fonctionnement des choses en coulisses. Aujourd'hui, je suis un professionnel diplômé qui est fier d'écrire du code propre et maintenable et de créer des expériences utilisateur fluides.",
      paragraph2:
        "Je crois que les grands logiciels sont construits à l'intersection de l'excellence technique et de l'empathie utilisateur. Qu'il s'agisse d'une application web complexe ou d'une simple page de destination, j'aborde chaque projet avec le même niveau de dévouement et d'attention aux détails.",
      highlights: {
        licensed: {
          title: 'Professionnel Diplômé',
          text: 'Développeur certifié',
        },
        experience: {
          title: '1,5+ Ans',
          text: 'Expérience industrielle',
        },
        location: {
          title: 'Basé au Maroc',
          text: 'Disponible à distance',
        },
      },
      stats: {
        experience: "Années d'Expérience",
        projects: 'Projets Complétés',
        technologies: 'Technologies Maîtrisées',
        satisfaction: 'Satisfaction Client',
      },
    },
    experience: {
      label: 'Mon Parcours',
      title: 'Expérience Professionnelle',
      achievements: 'Réalisations Clés :',
      experiences: [
        {
          company: 'Entreprise Tech',
          role: 'Développeur Full Stack',
          period: '2024 - Présent',
          description:
            "Développement et maintenance d'applications web utilisant des technologies modernes. Collaboration avec des équipes interfonctionnelles pour fournir des solutions de haute qualité.",
          achievements: [
            "Création d'applications web responsives servant plus de 10K utilisateurs",
            "Amélioration des performances de l'application de 40%",
            'Mise en place de pipelines CI/CD réduisant le temps de déploiement',
          ],
        },
        {
          company: 'Agence Digitale',
          role: 'Développeur Frontend',
          period: '2023 - 2024',
          description:
            "Création d'interfaces utilisateur belles et fonctionnelles pour divers projets clients. Focus sur le design responsive et l'expérience utilisateur.",
          achievements: [
            'Développement de plus de 15 sites web clients',
            'Scores de performance de 95+ sur Lighthouse',
            'Mentorat de développeurs juniors',
          ],
        },
      ],
    },
    education: {
      label: 'Parcours Académique',
      title: 'Éducation',
      subtitle: "Mon parcours académique et d'apprentissage continu",
      highlights: 'Points Forts :',
      items: [
        {
          degree: 'Licence',
          field: 'Informatique / Génie Logiciel',
          institution: 'Université',
          location: 'Maroc',
          period: '2020 - 2023',
          description:
            'Diplôme de licence complété avec focus sur le développement logiciel, les algorithmes et les technologies web modernes.',
          achievements: [
            'Diplômé avec mention',
            'Réalisation de multiples projets de développement web',
            'Participation à des compétitions de programmation',
            'Base solide en fondamentaux de programmation',
          ],
        },
        {
          degree: 'Certifications Professionnelles',
          field: 'Développement Web & UI/UX',
          institution: "Plateformes d'Apprentissage en Ligne",
          location: 'À Distance',
          period: '2023 - Présent',
          description:
            'Apprentissage continu à travers diverses certifications et cours en ligne pour rester à jour avec les dernières technologies.',
          achievements: [
            'Concepts Avancés Vue.js',
            'Fondamentaux TypeScript',
            'Principes Modernes de Design UI/UX',
            'Meilleures Pratiques de Développement Full Stack',
          ],
        },
      ],
    },
    skills: {
      label: 'Ce Que Je Fais',
      title: 'Compétences & Technologies',
      subtitle: "Technologies et outils que j'utilise pour donner vie aux idées",
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Outils & Autres',
      },
    },
    projects: {
      label: 'Portfolio',
      title: 'Projets en Vedette',
      subtitle: 'Quelques-uns de mes travaux récents et projets personnels',
      items: [
        {
          title: 'Plateforme E-Commerce',
          description:
            'Une plateforme e-commerce moderne avec gestion des stocks en temps réel, intégration de paiement et authentification utilisateur.',
        },
        {
          title: 'Application de Gestion de Tâches',
          description:
            "Application collaborative de gestion de tâches avec mises à jour en temps réel, fonctionnalités de collaboration d'équipe et analyses.",
        },
        {
          title: 'Système de Réservation Restaurant',
          description:
            'Système de réservation en ligne pour restaurants avec affichage du menu, réservation de tables et avis clients.',
        },
        {
          title: 'Tableau de Bord Réseaux Sociaux',
          description:
            'Tableau de bord analytique pour la gestion des réseaux sociaux avec visualisation de données et fonctionnalités de reporting.',
        },
        {
          title: 'Application Météo',
          description:
            'Belle application météo avec prévisions détaillées, cartes et alertes météo personnalisées.',
        },
        {
          title: 'CMS Portfolio',
          description:
            'Système de gestion de contenu pour sites portfolio avec constructeur drag-and-drop et optimisation SEO.',
        },
      ],
    },
    certificates: {
      label: 'Réalisations',
      title: 'Certificats & Accréditations',
      subtitle: 'Certifications professionnelles et cours complétés',
      viewCredential: 'Voir Accréditation',
      items: [
        {
          name: 'Cours Complet Vue.js',
          issuer: 'Udemy',
          date: 'Émis Déc 2024',
          description:
            "Cours complet couvrant Vue 3 Composition API, gestion d'état Pinia et pratiques de développement modernes.",
          credentialUrl: '#',
        },
        {
          name: 'Développement Web Full Stack',
          issuer: 'Coursera',
          date: 'Émis Oct 2024',
          description:
            'Bootcamp complet de développement full-stack couvrant frontend, backend, bases de données et déploiement.',
          credentialUrl: '#',
        },
        {
          name: 'Fondamentaux du Design UI/UX',
          issuer: 'LinkedIn Learning',
          date: 'Émis Août 2024',
          description:
            "Certification professionnelle en principes et meilleures pratiques de conception d'interface et d'expérience utilisateur.",
          credentialUrl: '#',
        },
        {
          name: 'Développeur MongoDB',
          issuer: 'MongoDB University',
          date: 'Émis Juin 2024',
          description:
            "Certification MongoDB avancée couvrant la conception de bases de données, les pipelines d'agrégation et l'optimisation des performances.",
          credentialUrl: '#',
        },
      ],
    },
    contact: {
      label: 'Contactez-Moi',
      title: 'Me Contacter',
      subtitle:
        "Vous avez un projet en tête ? Travaillons ensemble pour créer quelque chose d'incroyable",
      letsTalk: 'Discutons',
      description:
        "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de votre vision.",
      info: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
      },
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre.email@exemple.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Comment puis-je vous aider ?',
        message: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet...',
        send: 'Envoyer le Message',
        sending: 'Envoi...',
        success: '✓ Message envoyé avec succès !',
        error: "✗ Une erreur s'est produite. Veuillez réessayer.",
      },
      footer: {
        copyright: '© 2026 Adnane El Kanbougi. Tous droits réservés.',
        builtWith: 'Créé avec ❤️ en utilisant Vue.js',
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      experience: 'الخبرة',
      education: 'التعليم',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل بي',
    },
    hero: {
      greeting: '👋 مرحباً، أنا',
      name: 'عدنان القنبوجي',
      roles: ['مطور Full Stack', 'مهتم بتصميم UI/UX', 'حلال المشاكل'],
      description:
        'مطور مغربي بخبرة تزيد عن 1.5 سنة في إنشاء تطبيقات ويب جميلة وعملية. محترف مرخص متحمس لإنشاء تجارب رقمية استثنائية.',
      getInTouch: 'تواصل معي',
      viewWork: 'شاهد أعمالي',
      scroll: 'تصفح',
    },
    about: {
      label: 'تعرف علي',
      title: 'نبذة عني',
      lead: 'أنا مطور Full Stack شغوف من المغرب بخبرة مهنية تبلغ 1.5 سنة. أتخصص في إنشاء تطبيقات ويب حديثة ومتجاوبة تجمع بين التصميم الجميل والوظائف القوية.',
      paragraph1:
        'بدأت رحلتي في تطوير الويب بفضول حول كيفية عمل الأشياء خلف الكواليس. اليوم، أنا محترف مرخص أفتخر بكتابة كود نظيف وقابل للصيانة وإنشاء تجارب مستخدم سلسة.',
      paragraph2:
        'أؤمن بأن البرمجيات الرائعة تُبنى عند تقاطع التميز التقني والتعاطف مع المستخدم. سواء كان تطبيق ويب معقداً أو صفحة هبوط بسيطة، أتعامل مع كل مشروع بنفس المستوى من التفاني والاهتمام بالتفاصيل.',
      highlights: {
        licensed: {
          title: 'محترف مرخص',
          text: 'مطور معتمد',
        },
        experience: {
          title: '1.5+ سنة',
          text: 'خبرة في الصناعة',
        },
        location: {
          title: 'مقيم في المغرب',
          text: 'متاح للعمل عن بُعد',
        },
      },
      stats: {
        experience: 'سنوات الخبرة',
        projects: 'المشاريع المكتملة',
        technologies: 'التقنيات المتقنة',
        satisfaction: 'رضا العملاء',
      },
    },
    experience: {
      label: 'رحلتي',
      title: 'الخبرة العملية',
      achievements: 'الإنجازات الرئيسية:',
      experiences: [
        {
          company: 'شركة تقنية',
          role: 'مطور Full Stack',
          period: '2024 - الحاضر',
          description:
            'تطوير وصيانة تطبيقات الويب باستخدام التقنيات الحديثة. التعاون مع فرق متعددة الوظائف لتقديم حلول عالية الجودة.',
          achievements: [
            'بناء تطبيقات ويب متجاوبة تخدم أكثر من 10 آلاف مستخدم',
            'تحسين أداء التطبيق بنسبة 40%',
            'تطبيق خطوط CI/CD مما قلل وقت النشر',
          ],
        },
        {
          company: 'وكالة رقمية',
          role: 'مطور واجهات أمامية',
          period: '2023 - 2024',
          description:
            'إنشاء واجهات مستخدم جميلة وعملية لمشاريع عملاء متنوعة. التركيز على التصميم المتجاوب وتجربة المستخدم.',
          achievements: [
            'تطوير أكثر من 15 موقعاً للعملاء',
            'تحقيق درجات أداء 95+ على Lighthouse',
            'توجيه المطورين المبتدئين',
          ],
        },
      ],
    },
    education: {
      label: 'الخلفية الأكاديمية',
      title: 'التعليم',
      subtitle: 'رحلتي الأكاديمية ومسار التعلم المستمر',
      highlights: 'النقاط البارزة:',
      items: [
        {
          degree: 'شهادة الإجازة',
          field: 'علوم الحاسوب / هندسة البرمجيات',
          institution: 'الجامعة',
          location: 'المغرب',
          period: '2020 - 2023',
          description:
            'أكملت شهادة البكالوريوس مع التركيز على تطوير البرمجيات والخوارزميات وتقنيات الويب الحديثة.',
          achievements: [
            'تخرجت بمرتبة الشرف',
            'أكملت مشاريع تطوير ويب متعددة',
            'شاركت في مسابقات البرمجة',
            'أساس قوي في أساسيات البرمجة',
          ],
        },
        {
          degree: 'الشهادات المهنية',
          field: 'تطوير الويب وتصميم UI/UX',
          institution: 'منصات التعلم عبر الإنترنت',
          location: 'عن بُعد',
          period: '2023 - الحاضر',
          description:
            'التعلم المستمر من خلال شهادات ودورات مختلفة عبر الإنترنت للبقاء محدثاً بأحدث التقنيات.',
          achievements: [
            'مفاهيم Vue.js المتقدمة',
            'أساسيات TypeScript',
            'مبادئ تصميم UI/UX الحديثة',
            'أفضل ممارسات تطوير Full Stack',
          ],
        },
      ],
    },
    skills: {
      label: 'ما أقوم به',
      title: 'المهارات والتقنيات',
      subtitle: 'التقنيات والأدوات التي أستخدمها لإحياء الأفكار',
      categories: {
        frontend: 'الواجهة الأمامية',
        backend: 'الواجهة الخلفية',
        tools: 'الأدوات وأخرى',
      },
    },
    projects: {
      label: 'معرض الأعمال',
      title: 'مشاريع مميزة',
      subtitle: 'بعض من أعمالي الأخيرة والمشاريع الجانبية',
      items: [
        {
          title: 'منصة التجارة الإلكترونية',
          description:
            'منصة تجارة إلكترونية حديثة مع إدارة المخزون في الوقت الفعلي، تكامل الدفع، ومصادقة المستخدم.',
        },
        {
          title: 'تطبيق إدارة المهام',
          description:
            'تطبيق تعاوني لإدارة المهام مع تحديثات في الوقت الفعلي، ميزات التعاون الجماعي، والتحليلات.',
        },
        {
          title: 'نظام حجز المطاعم',
          description:
            'نظام حجز عبر الإنترنت للمطاعم مع عرض القائمة، حجز الطاولات، وتقييمات العملاء.',
        },
        {
          title: 'لوحة تحكم وسائل التواصل الاجتماعي',
          description:
            'لوحة تحكم تحليلية لإدارة وسائل التواصل الاجتماعي مع تصور البيانات وميزات التقارير.',
        },
        {
          title: 'تطبيق توقعات الطقس',
          description: 'تطبيق طقس جميل مع توقعات مفصلة، خرائط، وتنبيهات طقس مخصصة.',
        },
        {
          title: 'نظام إدارة محتوى المعرض',
          description: 'نظام إدارة محتوى لمواقع المعرض مع منشئ السحب والإفلات وتحسين SEO.',
        },
      ],
    },
    certificates: {
      label: 'الإنجازات',
      title: 'الشهادات والاعتمادات',
      subtitle: 'الشهادات المهنية والدورات المكتملة',
      viewCredential: 'عرض الاعتماد',
      items: [
        {
          name: 'دورة Vue.js الكاملة',
          issuer: 'Udemy',
          date: 'صدر ديسمبر 2024',
          description:
            'دورة شاملة تغطي Vue 3 Composition API، إدارة الحالة Pinia، وممارسات التطوير الحديثة.',
          credentialUrl: '#',
        },
        {
          name: 'تطوير الويب Full Stack',
          issuer: 'Coursera',
          date: 'صدر أكتوبر 2024',
          description:
            'معسكر تطوير full-stack كامل يغطي الواجهة الأمامية والخلفية وقواعد البيانات والنشر.',
          credentialUrl: '#',
        },
        {
          name: 'أساسيات تصميم UI/UX',
          issuer: 'LinkedIn Learning',
          date: 'صدر أغسطس 2024',
          description: 'شهادة مهنية في مبادئ وأفضل ممارسات تصميم واجهة المستخدم وتجربة المستخدم.',
          credentialUrl: '#',
        },
        {
          name: 'مطور MongoDB',
          issuer: 'MongoDB University',
          date: 'صدر يونيو 2024',
          description:
            'شهادة MongoDB متقدمة تغطي تصميم قواعد البيانات، خطوط تجميع البيانات، وتحسين الأداء.',
          credentialUrl: '#',
        },
      ],
    },
    contact: {
      label: 'تواصل معي',
      title: 'اتصل بي',
      subtitle: 'هل لديك مشروع في ذهنك؟ لنعمل معاً لإنشاء شيء مذهل',
      letsTalk: 'لنتحدث',
      description:
        'أنا دائماً منفتح لمناقشة مشاريع جديدة، أفكار إبداعية، أو فرص لأكون جزءاً من رؤيتك.',
      info: {
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع',
      },
      form: {
        name: 'الاسم',
        namePlaceholder: 'اسمك',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'your.email@example.com',
        subject: 'الموضوع',
        subjectPlaceholder: 'كيف يمكنني مساعدتك؟',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرني عن مشروعك...',
        send: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال...',
        success: '✓ تم إرسال الرسالة بنجاح!',
        error: '✗ حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      },
      footer: {
        copyright: '© 2026 عدنان القنبوجي. جميع الحقوق محفوظة.',
        builtWith: 'صُنع بـ ❤️ باستخدام Vue.js',
      },
    },
  },
}

export function useI18n() {
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)

    // Set HTML dir attribute for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = computed(() => translations[currentLanguage.value])

  // Initialize language from localStorage or browser
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }

  return {
    currentLanguage,
    t,
    setLanguage,
  }
}
