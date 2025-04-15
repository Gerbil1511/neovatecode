module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx}', // Add the paths to your template files
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Anton', 'sans-serif'],
                body: ['Space Grotesk', 'sans-serif'],
                // heading: ['"Bebas Neue"', 'sans-serif'],
                // body: ['"DM Sans"', 'sans-serif'],
            },
            colors: {
                brand: '#111111',
                accent: '#ff004d',

            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
