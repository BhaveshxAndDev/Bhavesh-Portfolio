/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0B0B0F",
        card: "#111116",
        cardHover: "#181820",
        borderDark: "rgba(255, 255, 255, 0.08)",
        borderGlow: "rgba(255, 107, 0, 0.3)",
        borderCyanGlow: "rgba(0, 240, 255, 0.3)",
        accent: {
          orange: "#FF5722",
          warm: "#FF6B00",
          amber: "#FFA000",
          cyan: "#00F0FF",
          blue: "#0070F3",
          purple: "#8B5CF6",
        },
        textMuted: "#A1A1AA",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 30%, rgba(255, 107, 0, 0.25) 0%, rgba(255, 87, 34, 0.12) 35%, rgba(5, 5, 5, 0.95) 70%, #050505 100%)',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'orange-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FF3D00 50%, #E60049 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #00F0FF 0%, #0070F3 100%)',
      },
      boxShadow: {
        'glow-orange': '0 0 40px -10px rgba(255, 107, 0, 0.5)',
        'glow-orange-lg': '0 0 80px -15px rgba(255, 107, 0, 0.4)',
        'glow-cyan': '0 0 40px -10px rgba(0, 240, 255, 0.4)',
        'glow-subtle': '0 10px 30px -10px rgba(0,0,0,0.8)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 6s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
