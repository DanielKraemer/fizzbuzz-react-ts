module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            scale: {
                102: '1.02',
                105: '1.05',
            },
        },
    },
    variants: {
        extend: {
            animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover'],
        },
    },
    plugins: [],
};
