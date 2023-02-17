/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
            },
            boxShadow: {
                'y': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);'
            }
        },
    },
    screens: {
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '4k': '2560px'
    },
    plugins: [],
    darkMode: 'class',
}
