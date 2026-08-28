import type { ServiceItem } from '../types/portfolio';

export const servicesData: ServiceItem[] = [
  {
    id: 'full-stack-android',
    number: '01',
    title: 'Full-Stack Android Development',
    description: 'End-to-end design and engineering of feature-rich native Android applications connecting frontend XML layouts to PHP backend REST APIs and structured MySQL databases.',
    technologies: ['Android (Java)', 'PHP', 'REST APIs', 'MySQL', 'JSON Architecture'],
    iconName: 'Smartphone'
  },
  {
    id: 'android-app-dev',
    number: '02',
    title: 'Android App Development',
    description: 'Modern Android applications crafted using Java, clean XML layouts, Google Material Design, fluid animations, RecyclerViews, bottom navigation, and API integration.',
    technologies: ['Java', 'XML', 'Material UI', 'ConstraintLayout', 'RecyclerView'],
    iconName: 'AppWindow'
  },
  {
    id: 'rest-api-backend',
    number: '03',
    title: 'REST API & Backend Integration',
    description: 'Developing and connecting robust PHP-based REST endpoints, handling JSON request/response pipelines, asynchronous networking, and payload error handling.',
    technologies: ['PHP', 'REST API', 'JSON', 'AsyncHttpClient', 'Postman'],
    iconName: 'Server'
  },
  {
    id: 'firebase-integration',
    number: '04',
    title: 'Firebase Integration',
    description: 'Integrating Firebase cloud capabilities, authentication workflows, remote configuration, and real-time mobile app capabilities.',
    technologies: ['Firebase Auth', 'FCM Notifications', 'Cloud Database', 'Android SDK'],
    iconName: 'Flame'
  },
  {
    id: 'database-development',
    number: '05',
    title: 'Database Development',
    description: 'Designing normalized relational database schemas in MySQL, writing optimized SQL queries, executing ACID CRUD operations, and ensuring application-data integrity.',
    technologies: ['MySQL', 'SQL Queries', 'XAMPP', 'Relational Schema Design'],
    iconName: 'Database'
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design for Mobile & Web',
    description: 'Designing clean, modern, responsive, user-friendly mobile and web interfaces with high readability, balanced typography, intuitive flows, and micro-interactions.',
    technologies: ['Material Design', 'Mobile Wireframing', 'Responsive UI', 'Lottie Motion'],
    iconName: 'Layout'
  },
  {
    id: 'website-development',
    number: '07',
    title: 'Website Development',
    description: 'Building modern, clean, responsive frontend web interfaces utilizing semantic HTML, modern styling, and structured web layouts.',
    technologies: ['HTML5', 'Modern CSS', 'Responsive Layouts', 'UI Components'],
    iconName: 'Globe'
  },
  {
    id: 'git-github-integration',
    number: '08',
    title: 'Git / GitHub Integration & Versioning',
    description: 'Structured version control workflows, atomic commits, repository architecture, collaborative branching, and code integration.',
    technologies: ['Git CLI', 'GitHub', 'Branching Strategy', 'Code Management'],
    iconName: 'GitBranch'
  },
  {
    id: 'cybersecurity-emerging',
    number: '09',
    title: 'Cybersecurity (Emerging Specialization)',
    description: 'Actively advancing practical knowledge in application security, vulnerability identification, secure coding practices, API authorization checks, and information security fundamentals.',
    technologies: ['App Security', 'API Hardening', 'Input Sanitization', 'Information Security'],
    isEmerging: true,
    iconName: 'ShieldCheck'
  }
];
