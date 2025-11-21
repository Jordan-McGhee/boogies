/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                headline: ['"Luckiest Guy"', 'cursive'],
            },
            colors: {
                'accent-green': '#70ffdf',
                'accent-pink': '#ff4df0',
                'light-purple': '#9d4dff',
                'dark-purple': '#773ac1',
            },
        },
    },
    plugins: [],
}