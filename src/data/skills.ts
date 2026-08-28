import type { SkillCategory } from '../types/portfolio';

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        tag: 'Primary',
        description: 'Core object-oriented language used extensively for Android application development and business logic.',
        usage: 'Built Android applications, POJO models, asynchronous tasks, activity lifecycle handlers, and API integration.',
        level: 'Advanced',
        iconName: 'Coffee'
      },
      {
        name: 'C',
        tag: 'Foundational',
        description: 'Foundational programming language for low-level systems understanding, memory concepts, and algorithms.',
        usage: 'Data structures, algorithm design, pointer logic, and computational problem solving.',
        level: 'Practiced',
        iconName: 'Code'
      },
      {
        name: 'C++',
        tag: 'Systems & OOP',
        description: 'Object-oriented programming language emphasizing performance and structured memory handling.',
        usage: 'Object-oriented architecture, data structures, and algorithmic logic.',
        level: 'Practiced',
        iconName: 'Cpu'
      },
      {
        name: 'Python',
        tag: 'Emerging & Scripting',
        description: 'High-level programming language utilized for automation, algorithmic exploration, and cybersecurity scripts.',
        usage: 'Scripting, backend logic exploration, automation, and cybersecurity concepts.',
        level: 'Emerging',
        iconName: 'Terminal'
      }
    ]
  },
  {
    id: 'android',
    name: 'Android Development',
    skills: [
      {
        name: 'Android Studio',
        tag: 'Primary IDE',
        description: 'Official IDE for Android development with advanced debugging, profiler, and layout inspector.',
        usage: 'Core development environment for building, compiling, debugging, and testing Android apps.',
        level: 'Advanced',
        iconName: 'Smartphone'
      },
      {
        name: 'XML UI Design',
        tag: 'Layouts',
        description: 'Declarative layout language for crafting responsive Android interfaces and custom drawables.',
        usage: 'Crafted LinearLayout, RelativeLayout, ConstraintLayout, FrameLayout, and custom shape drawables.',
        level: 'Advanced',
        iconName: 'Layout'
      },
      {
        name: 'Material Design',
        tag: 'UI/UX Standards',
        description: 'Google’s design system for creating modern, consistent, accessible mobile user interfaces.',
        usage: 'Integrated Material buttons, text fields, cards, bottom sheets, and dark theme support.',
        level: 'Advanced',
        iconName: 'Palette'
      },
      {
        name: 'RecyclerView & Adapters',
        tag: 'Data Lists',
        description: 'High-performance UI component for rendering dynamic datasets with custom ViewHolder caching.',
        usage: 'Implemented responsive lists for complaints, health logs, and sign language catalogs.',
        level: 'Advanced',
        iconName: 'List'
      },
      {
        name: 'Intents & Navigation',
        tag: 'App Flow',
        description: 'Android communication mechanism for launching activities, passing data bundles, and handling flows.',
        usage: 'Seamless activity transitions, data transfer between screens, and deep-link routing.',
        level: 'Core',
        iconName: 'Navigation'
      },
      {
        name: 'SharedPreferences',
        tag: 'Local State',
        description: 'Key-value lightweight storage framework for saving user sessions, preferences, and offline tokens.',
        usage: 'Maintained persistent login states, user session flags, and theme configurations.',
        level: 'Core',
        iconName: 'HardDrive'
      },
      {
        name: 'Lottie Animations',
        tag: 'Motion',
        description: 'Vector animation library for rendering lightweight, interactive JSON-based micro-animations.',
        usage: 'Implemented success checkmarks, loading states, and habit completion celebratory effects.',
        level: 'Practiced',
        iconName: 'Sparkles'
      },
      {
        name: 'Image Slideshow',
        tag: 'Media UI',
        description: 'Interactive carousel and banner slider components for visual storytelling inside mobile views.',
        usage: 'Integrated dynamic banner carousels and health promotion slideshows.',
        level: 'Practiced',
        iconName: 'Image'
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    skills: [
      {
        name: 'PHP',
        tag: 'Server-Side',
        description: 'Server-side scripting language for authoring custom web endpoints, business logic, and database bridges.',
        usage: 'Developed custom REST API endpoints to process user authentication, complaints, and habit tracking.',
        level: 'Advanced',
        iconName: 'Server'
      },
      {
        name: 'REST API Design',
        tag: 'Web Services',
        description: 'Architectural pattern for creating stateless HTTP interfaces for seamless mobile-to-server data transfer.',
        usage: 'Designed structured GET/POST API endpoints with clean response codes and payload schemas.',
        level: 'Advanced',
        iconName: 'Network'
      },
      {
        name: 'JSON Handling',
        tag: 'Serialization',
        description: 'Lightweight data interchange format used for all mobile-backend request and response bodies.',
        usage: 'Parsed nested JSON objects, generated structured payloads, and mapped to Java POJO classes.',
        level: 'Advanced',
        iconName: 'FileJson'
      },
      {
        name: 'AsyncHttpClient',
        tag: 'Networking',
        description: 'Asynchronous HTTP library for executing non-blocking REST requests in Android applications.',
        usage: 'Handled asynchronous API calls, token authorization headers, and error response callbacks.',
        level: 'Advanced',
        iconName: 'Zap'
      }
    ]
  },
  {
    id: 'database',
    name: 'Database & Storage',
    skills: [
      {
        name: 'MySQL',
        tag: 'RDBMS',
        description: 'Relational database management system for structured, transactional, and relational data.',
        usage: 'Engineered normalized database schemas for users, complaint tickets, and lifestyle telemetry.',
        level: 'Advanced',
        iconName: 'Database'
      },
      {
        name: 'SQL Queries',
        tag: 'Querying',
        description: 'Structured Query Language for executing CRUD operations, table joins, and filtered lookups.',
        usage: 'Wrote optimized SELECT, INSERT, UPDATE, DELETE queries with joins and prepared statements.',
        level: 'Advanced',
        iconName: 'Layers'
      },
      {
        name: 'DBMS Principles',
        tag: 'Architecture',
        description: 'Database management system principles including ACID properties, indexing, and normalization.',
        usage: 'Designed relational schemas ensuring data integrity, minimal redundancy, and fast query execution.',
        level: 'Core',
        iconName: 'Server'
      },
      {
        name: 'XAMPP / Apache',
        tag: 'Local Server',
        description: 'Cross-platform web server environment containing Apache, MySQL, and PHP for local development.',
        usage: 'Configured local server stacks for rapid API testing, schema migrations, and Android client debugging.',
        level: 'Advanced',
        iconName: 'Globe'
      }
    ]
  },
  {
    id: 'cloud_dev',
    name: 'Cloud, Tools & Version Control',
    skills: [
      {
        name: 'Firebase',
        tag: 'Cloud Platform',
        description: 'Google’s mobile and web application development platform for cloud backend services.',
        usage: 'Explored Firebase cloud features, authentication concepts, and realtime notifications.',
        level: 'Practiced',
        iconName: 'Flame'
      },
      {
        name: 'Git',
        tag: 'VCS',
        description: 'Distributed version control system for tracking source code changes and branch management.',
        usage: 'Version control, atomic commits, branch workflows, and merge conflict resolution.',
        level: 'Advanced',
        iconName: 'GitBranch'
      },
      {
        name: 'GitHub',
        tag: 'Collaboration',
        description: 'Cloud-hosted platform for Git repositories, code review, issue tracking, and CI/CD basics.',
        usage: 'Published open source projects, managed repositories, and collaborated across development iterations.',
        level: 'Advanced',
        iconName: 'Github'
      },
      {
        name: 'Postman',
        tag: 'API Testing',
        description: 'Industry standard API platform for testing endpoints, payload validation, and request debugging.',
        usage: 'Tested PHP REST endpoints, inspected JSON response structures, and simulated error conditions.',
        level: 'Advanced',
        iconName: 'Send'
      }
    ]
  },
  {
    id: 'core_cs',
    name: 'Core Computer Science & Security',
    skills: [
      {
        name: 'OOP / OOPS',
        tag: 'Foundational',
        description: 'Object-Oriented Programming principles: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
        usage: 'Applied modular design, clean separation of concerns, and reusable software architectures.',
        level: 'Core',
        iconName: 'Box'
      },
      {
        name: 'Information Security',
        tag: 'Emerging Specialization',
        description: 'Foundational principles of confidentiality, integrity, availability, and threat mitigation.',
        usage: 'Studied secure application practices, password hashing, SQL injection prevention, and API sanitation.',
        level: 'Emerging',
        iconName: 'ShieldAlert'
      },
      {
        name: 'Internet of Things (IoT)',
        tag: 'Hardware-Software',
        description: 'Interconnected computing hardware and embedded devices communicating over networks.',
        usage: 'Academic exploration of networked sensor telemetry and communication protocols.',
        level: 'Practiced',
        iconName: 'Cpu'
      },
      {
        name: 'Problem Solving',
        tag: 'Analytical',
        description: 'Logical thinking, algorithmic decomposition, and systematic debugging under pressure.',
        usage: 'Applied strategic problem decomposition in development hurdles, hackathons, and competitive chess.',
        level: 'Core',
        iconName: 'CheckCircle2'
      }
    ]
  }
];
