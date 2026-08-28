import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'digital-complaint-management',
    slug: 'digital-complaint-management',
    number: '01',
    title: 'Digital Complaint Management',
    tagline: 'Systematic citizen grievance reporting and administrative resolution portal',
    category: 'Full-Stack Application',
    categoryBadge: 'Full-Stack Android',
    problem: 'Manual complaint registers, paper-based workflows, and informal communication channels make complaint submission, status tracking, officer assignment, and timely resolution slow and error-prone.',
    solution: 'A streamlined digital complaint management Android application enabling users to seamlessly submit complaints, receive auto-generated Complaint IDs, and track live status updates, while administrators and assigned officers manage, inspect, and update resolution remarks systematically.',
    features: [
      'Secure User Registration & Authentication with session handling',
      'Categorized Complaint Submission with department routing',
      'Unique Complaint ID Generation for immediate receipt and verification',
      'Detailed Complaint Descriptions and contact validation',
      'Dynamic Complaint Listing with real-time status badges (Pending, In Progress, Resolved)',
      'Comprehensive Complaint Details view with timeline and officer remarks',
      'Administrative & Officer Management panel to update workflow states',
      'Search and filter capabilities by Category, Status, and Complaint ID',
      'Structured Database Records with transactional integrity',
      'Optimized REST API communication over secure JSON payloads'
    ],
    technologies: [
      'Java',
      'XML',
      'PHP',
      'REST API',
      'JSON',
      'MySQL',
      'XAMPP',
      'RecyclerView',
      'Git/GitHub'
    ],
    role: 'Android Developer + Backend/API Integration',
    contributions: [
      'Designed Android UI/UX layouts in XML adhering to modern Material Design guidelines',
      'Developed custom RecyclerView adapters with optimized ViewHolder recycling for smooth list rendering',
      'Constructed complete complaint details view with responsive state changes',
      'Authored and integrated custom PHP REST APIs for multi-step CRUD workflows',
      'Connected backend endpoints to MySQL database instances running under Apache/XAMPP',
      'Implemented robust JSON parsing and POJO (Plain Old Java Object) data models',
      'Programmed dynamic complaint status update pipelines (Pending → In Progress → Resolved)',
      'Conducted end-to-end integration testing across Android client, network endpoints, and MySQL database'
    ],
    architecturePipeline: [
      {
        from: 'Android UI / XML',
        to: 'Java Business Logic',
        protocol: 'Local Intent & Event Handling',
        description: 'User enters complaint info; input is sanitized and packed into POJO models'
      },
      {
        from: 'Java App Layer',
        to: 'PHP REST Endpoints',
        protocol: 'HTTP POST / GET (JSON)',
        description: 'Async network requests transmit serialized JSON payloads to PHP backend'
      },
      {
        from: 'PHP Backend Script',
        to: 'MySQL Database',
        protocol: 'SQL PDO Prepared Statements',
        description: 'Sanitized SQL queries execute complaint insertion, status updates, and fetches'
      },
      {
        from: 'MySQL Database',
        to: 'Android Client',
        protocol: 'JSON Response Stream',
        description: 'Database result sets formatted as JSON array and parsed directly into RecyclerView UI'
      }
    ],
    challenges: [
      {
        challenge: 'Handling asynchronous network responses smoothly without freezing the Android UI thread',
        solution: 'Used background asynchronous execution and POJO mapping with UI callback handlers to ensure 60fps scrolling and instant feedback.'
      },
      {
        challenge: 'Maintaining real-time complaint status consistency across user and admin roles',
        solution: 'Implemented structured status enum states in MySQL with standardized JSON response codes verified before UI refresh.'
      }
    ],
    futureScope: [
      'Push notification alerts on complaint status transitions via Firebase Cloud Messaging (FCM)',
      'Geo-location tagging with Google Maps SDK integration for pinpoint grievance localization',
      'Camera and file attachment support for evidence photos/documents upload',
      'Role-based granular permissions dashboard for multi-tier departmental officers'
    ],
    githubUrl: 'https://github.com/BhaveshxAndDev',
    featured: true,
    accentColor: '#FF6B00',
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
  },
  {
    id: 'vitalyx',
    slug: 'vitalyx',
    number: '02',
    title: 'Vitalyx',
    tagline: 'All-in-one centralized health, fitness, and daily habit management platform',
    category: 'Health-Tech',
    categoryBadge: 'Health-Tech Android',
    problem: 'Health-conscious individuals often struggle with fragmented daily tracking, needing separate applications for workouts, diet logs, water intake, sleep patterns, BMI calculation, and daily habit consistency.',
    solution: 'Vitalyx consolidates wellness activities into one cohesive Android application, offering an intuitive personalized dashboard, calculated biometric assessments, hydration reminders, workout regimens, and habit tracking analytics.',
    features: [
      'User Authentication with Secure Login & Password Recovery',
      'Comprehensive Personal Profile with biometric baseline setup',
      'Dynamic Health Dashboard aggregating daily wellness metrics',
      'Integrated BMI Calculator with instant health categorization',
      'Structured Workout & Exercise routine planner',
      'Diet & Nutrition log with caloric and macronutrient reference',
      'Smart Water Intake Tracker with interactive hydration logging',
      'Sleep Duration and Consistency tracking',
      'Habit Tracking with daily completion checklists and streak analytics',
      'Custom Timed Notifications for hydration and workouts',
      'Curated Daily Health Tips & Lifestyle challenges',
      'Light and Dark mode theme support with fluid Lottie animations',
      'Planned Future Scope: AI-powered personalized health assistant'
    ],
    technologies: [
      'Android Studio',
      'Java',
      'XML',
      'Material Design',
      'PHP',
      'REST API',
      'MySQL',
      'XAMPP',
      'JSON',
      'AsyncHttpClient',
      'SharedPreferences',
      'Lottie',
      'Git/GitHub'
    ],
    role: 'Android Developer + Backend/API Integration',
    contributions: [
      'Architected user authentication flow and local session storage using SharedPreferences',
      'Designed responsive Material Design layouts with custom vectors and high-performance XML drawables',
      'Engineered REST API integration using AsyncHttpClient for non-blocking network calls',
      'Built backend PHP endpoints and normalized MySQL tables for user metrics and habit logs',
      'Integrated Lottie animations for rewarding user habit completions and interactive feedback',
      'Implemented client-side input validation and error handling for mathematical biometric calculations',
      'Optimized memory usage during list rendering and image caching for buttery-smooth navigation'
    ],
    architecturePipeline: [
      {
        from: 'Android Client UI',
        to: 'Local Storage (SharedPreferences)',
        protocol: 'Key-Value Cache',
        description: 'Instant local persistence of session tokens, UI theme, and offline habit toggles'
      },
      {
        from: 'Java App Engine',
        to: 'PHP REST API',
        protocol: 'AsyncHttpClient (HTTP/JSON)',
        description: 'Asynchronously syncs logged water, sleep, and fitness data to the server'
      },
      {
        from: 'PHP Backend',
        to: 'MySQL Database',
        protocol: 'SQL Queries',
        description: 'Stores historical telemetry and aggregates daily statistics per user ID'
      },
      {
        from: 'Server Response',
        to: 'Vitalyx Dashboard UI',
        protocol: 'JSON Payload',
        description: 'Feeds live progress bars, streak meters, and daily summaries into the UI'
      }
    ],
    challenges: [
      {
        challenge: 'Synchronizing multi-metric health data efficiently without overwhelming the network',
        solution: 'Batch-processed health updates and utilized lightweight JSON structures with localized SharedPreferences caching.'
      },
      {
        challenge: 'Creating a modern aesthetic that balances dense health telemetry with clean readability',
        solution: 'Implemented Material Design cards with high-contrast typography, clear status indicators, and subtle micro-animations.'
      }
    ],
    futureScope: [
      'AI-Powered Health Assistant for intelligent workout and meal recommendations (Planned future feature)',
      'Wearable hardware integration (Smartwatch / Fitness band heart rate & step sync via Bluetooth)',
      'Cloud data backup and automatic synchronization across multiple Android devices',
      'Social challenges and community leaderboards for habit accountability'
    ],
    githubUrl: 'https://github.com/BhaveshxAndDev',
    featured: true,
    accentColor: '#00F0FF',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: 'sign-bridge-visionx',
    slug: 'sign-bridge-visionx',
    number: '03',
    title: 'Sign Bridge VisionX',
    tagline: 'Breaking communication barriers through visual sign-language translation',
    category: 'Hackathon Project',
    categoryBadge: 'Hackathon Project 🏆',
    isHackathon: true,
    problem: 'Individuals who communicate via sign language experience substantial communication barriers when interacting with peers, healthcare providers, or service workers who do not understand sign language.',
    solution: 'Sign Bridge VisionX provides an accessible visual sign-language phrase library paired with instant trilingual translations (English, Hindi, and Marathi), enabling intuitive two-way communication across daily life scenarios.',
    features: [
      'Comprehensive Sign-Language Visual Phrase Library with step-by-step imagery',
      'Categorized situational domains: Greetings, Healthcare, Emergency, Education, Workplace, Shopping, Daily Life, and Travel',
      'Instant Multilingual Translations into English, Hindi, and Marathi',
      'High-resolution Sign Language reference media and gesture illustrations',
      'Instant Search and Filter across hundreds of common conversational phrases',
      'Curated "Popular & Emergency Signs" quick-access launcher',
      'Detailed Phrase View with pronunciation, context, and visual demonstrations',
      'Offline caching for critical emergency phrases and basic gestures',
      'User Registration, Login, Profile Management, and Password Reset',
      'Dynamic backend API sync for continuous library expansion'
    ],
    technologies: [
      'Java',
      'XML',
      'PHP',
      'MySQL',
      'REST API',
      'XAMPP',
      'JSON',
      'Lottie',
      'AsyncHttpClient',
      'Git/GitHub'
    ],
    role: 'Android Developer / Full-Stack Android Developer',
    contributions: [
      'Designed and executed complete Android UI layout optimized for fast accessibility in high-pressure scenarios',
      'Programmed trilingual string mapping and dynamic language switching between English, Hindi, and Marathi',
      'Developed PHP backend endpoints to serve categorized sign media and multilingual metadata',
      'Implemented robust offline fallback mechanisms for emergency communication cards',
      'Integrated AsyncHttpClient for fast media caching and JSON data parsing',
      'Collaborated intensely during the Hackathon cycle to architect, code, test, and present the functioning solution'
    ],
    architecturePipeline: [
      {
        from: 'Android UI / Category Selector',
        to: 'AsyncHttpClient Request',
        protocol: 'HTTP GET with Language Header',
        description: 'User selects category and target language (English/Hindi/Marathi)'
      },
      {
        from: 'Network Layer',
        to: 'PHP REST API Backend',
        protocol: 'JSON Request Router',
        description: 'Routes query to fetch corresponding gesture images and multilingual strings'
      },
      {
        from: 'PHP Backend',
        to: 'MySQL Relational Database',
        protocol: 'SQL Query with Join',
        description: 'Queries phrase_master, language_translations, and media_assets tables'
      },
      {
        from: 'MySQL Result',
        to: 'Android Dynamic Card UI',
        protocol: 'Optimized JSON + Image Cache',
        description: 'Renders visual sign gesture cards with corresponding multilingual captions'
      }
    ],
    challenges: [
      {
        challenge: 'Rapidly delivering a robust, fully connected mobile and backend architecture within hackathon time constraints',
        solution: 'Architected a modular POJO structure and clean REST endpoints early, enabling rapid UI binding and reliable API tests.'
      },
      {
        challenge: 'Supporting multi-script rendering (Devanagari script for Hindi & Marathi alongside English) with correct typography',
        solution: 'Implemented customized font asset bindings and UTF-8 encoding across MySQL, PHP, and Android TextViews.'
      }
    ],
    futureScope: [
      'Real-time Computer Vision camera integration to recognize user hand signs using ML models',
      'Text-to-speech audio playback in English, Hindi, and Marathi for auditory communication',
      'Community phrase submission with peer moderation for regional sign dialect enrichment',
      'Wearable haptic feedback for confirmed message delivery'
    ],
    githubUrl: 'https://github.com/BhaveshxAndDev',
    featured: true,
    accentColor: '#8B5CF6',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  }
];
