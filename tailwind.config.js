export default {
    darkMode: 'class',

    content: [
        './app/**/*.vue',
        './app/**/*.ts',
        './app/**/*.js',
    ],

    theme: {
        extend: {
            colors: {
                'tl-navy': '#1b3a6b',
                'tl-orange': '#f97316',
                'tl-light': '#f8fafc',
                'tl-dark': '#0f172a',
                'tl-gray': '#64748b',
            },
            fontFamily: {
                chillax: ['Chillax', 'sans-serif'],
            },
            animation: {
                marquee: 'marquee 18s linear infinite',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to:   { transform: 'translateX(-50%)' },
                },
            },
        },
    },
}