module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebf4ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1a365d", // blue-900 - Deep navy
          DEFAULT: "#1a365d", // blue-900
        },
        secondary: {
          50: "#f9fafb", // gray-50
          100: "#f3f4f6", // gray-100
          200: "#e5e7eb", // gray-200
          300: "#d1d5db", // gray-300
          400: "#9ca3af", // gray-400
          500: "#6b7280", // gray-500
          600: "#4b5563", // gray-600
          700: "#2d3748", // gray-700 - Charcoal
          800: "#1f2937", // gray-800
          900: "#111827", // gray-900
          DEFAULT: "#2d3748", // gray-700
        },
        accent: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#ef4444", // red-500
          600: "#e53e3e", // red-600 - Breaking news red
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
          DEFAULT: "#e53e3e", // red-600
        },
        background: "#ffffff", // white
        surface: "#f7fafc", // gray-50
        text: {
          primary: "#1a202c", // gray-900
          secondary: "#718096", // gray-500
        },
        success: {
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400
          500: "#38a169", // green-500
          600: "#38a169", // green-600 - Verified content green
          700: "#2f855a", // green-700
          800: "#276749", // green-800
          900: "#22543d", // green-900
          DEFAULT: "#38a169", // green-600
        },
        warning: {
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          200: "#fbd38d", // orange-200
          300: "#f6ad55", // orange-300
          400: "#ed8936", // orange-400
          500: "#ed8936", // orange-500 - Developing story orange
          600: "#dd6b20", // orange-600
          700: "#c05621", // orange-700
          800: "#9c4221", // orange-800
          900: "#7b341e", // orange-900
          DEFAULT: "#ed8936", // orange-500
        },
        error: "#e53e3e", // red-600
        border: {
          DEFAULT: "#e2e8f0", // gray-300
          accent: "#e53e3e", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        accent: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'headline-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-lg': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'headline-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-sm': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'cta-lg': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'cta-md': ['1rem', { lineHeight: '1.4', fontWeight: '600' }],
        'accent-md': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
        'accent-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      boxShadow: {
        'minimal': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'breaking': '0 0 0 2px #e53e3e, 0 0 0 4px rgba(229, 62, 62, 0.2)',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'breaking-pulse': 'breaking-pulse 2s infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'breaking-pulse': {
          '0%': {
            'border-color': '#e53e3e',
            'box-shadow': '0 0 0 0 rgba(229, 62, 62, 0.4)',
          },
          '70%': {
            'box-shadow': '0 0 0 4px rgba(229, 62, 62, 0)',
          },
          '100%': {
            'border-color': '#e53e3e',
            'box-shadow': '0 0 0 0 rgba(229, 62, 62, 0)',
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
    },
  },
  plugins: [],
}