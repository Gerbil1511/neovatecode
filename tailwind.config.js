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
            },
            colors: {
                brand: '#111111',      // black
                accent: '#e63946',     // gritty red
                paper: '#f5f5f4',      // dusty white
                grime: '#2d2d2d',      // charcoal
                mold: '#6b705c',       // olive
                bruise: '#6a4c93',     // muted purple
                neon: '#39ff14',       // acid green
                mustard: '#b08a24',    // dark mustard
                rust: '#964329',       // dark orange/red
                stone: '#b8ab7f',      // dark beige
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
