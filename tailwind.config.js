/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                custombackground: "#65b891",
                customtext: "#073b4c"
            }
        },
    },
    plugins: [],
}