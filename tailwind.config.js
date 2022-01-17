module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primario: "#0276df",
        secundario: "#01b748",
        terciario: "#02b3dd",
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.500"), textDecoration: "none" },
              strong: { color: theme("colors.gray.300") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.400"),
                borderLeftColor: theme("colors.gray.200"),
              },
              h1: { color: theme("colors.secundario") },
              h2: { color: theme("colors.secundario") },
              h3: { color: theme("colors.secundario") },
              h4: { color: theme("colors.secundario") },
              th: { color: theme("colors.gray.600") },
              code: { color: theme("colors.gray.500") },
              "a code": { color: theme("colors.gray.500") },
              pre: {
                color: theme("colors.gray.400"),
                backgroundColor: theme("colors.gray.800"),
                textShadow: "none",
              },
              code: {
                color: theme("colors.gray.400"),
                backgroundColor: theme("colors.gray.800"),
                textShadow: "none",
              },
              thead: {
                color: theme("colors.gray.500"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
              ".token.operator": { background: "none !important" },
            },
          },
        }
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "hover", "focus", "group-hover"],
      animation: ["hover"],
      fontWeight: ["hover"],
      zIndex: ["responsive", "hover", "group-hover"],
      borderColor: ["responsive", "hover", "group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
