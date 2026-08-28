export interface AndroidDependency {
  id: string;
  name: string;
  version: string;
  gradleImplementation: string;
  purpose: string;
  usedFor: string;
  category: 'Image & Media' | 'Scanning & QR' | 'Animation' | 'UI & Slideshow' | 'Networking';
}

export const androidDependenciesData: AndroidDependency[] = [
  {
    id: 'glide',
    name: 'Glide',
    version: '4.16.0',
    gradleImplementation: 'implementation("com.github.bumptech.glide:glide:4.16.0")',
    purpose: 'High-performance image loading, memory caching, and smooth bitmap transformation framework.',
    usedFor: 'Loading remote user avatars, sign language gesture reference cards, and dynamic media without UI stutter.',
    category: 'Image & Media'
  },
  {
    id: 'zxing',
    name: 'ZXing Android Embedded',
    version: '4.3.0',
    gradleImplementation: 'implementation("com.journeyapps:zxing-android-embedded:4.3.0")',
    purpose: 'Barcode and QR code scanning library integration for Android applications.',
    usedFor: 'Quick QR verification of complaint tracking tokens and rapid physical identifier parsing.',
    category: 'Scanning & QR'
  },
  {
    id: 'lottie',
    name: 'Lottie Android',
    version: '6.6.0',
    gradleImplementation: 'implementation("com.airbnb.android:lottie:6.6.0")',
    purpose: 'Vector animation library for rendering native vector animations exported as Adobe After Effects JSON.',
    usedFor: 'Interactive habit completion confetti, animated success checkmarks, and sleek loading telemetry in Vitalyx.',
    category: 'Animation'
  },
  {
    id: 'imageslideshow',
    name: 'ImageSlideshow',
    version: '0.1.2',
    gradleImplementation: 'implementation("com.github.denzcoskun:ImageSlideshow:0.1.2")',
    purpose: 'Customizable banner image carousel slider with indicators and automated auto-scroll.',
    usedFor: 'Featured health tips carousel in Vitalyx and multi-card visual tutorials in Android layouts.',
    category: 'UI & Slideshow'
  },
  {
    id: 'asynchttpclient',
    name: 'AsyncHttpClient',
    version: '1.4.11',
    gradleImplementation: 'implementation("com.loopj.android:android-async-http:1.4.11")',
    purpose: 'Asynchronous callback-based HTTP client library optimized for Android background networking.',
    usedFor: 'Executing non-blocking REST API calls to PHP backends, JSON response parsing, and session token transmission.',
    category: 'Networking'
  }
];
