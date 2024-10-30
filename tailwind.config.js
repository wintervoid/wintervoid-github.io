/** @type {import('tailwindcss').Config} */
const { variants } = require("@catppuccin/palette");

// Log the variants object to check its structure
console.log(variants);

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {

            },
        },
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            // Prefix for the color utility classes
            prefix: "ctp",
            // Default flavor of colors to use
            defaultFlavour: "frappe",
        }),
    ],
};
