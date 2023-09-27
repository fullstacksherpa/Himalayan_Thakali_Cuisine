/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth:{
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
  },
    extend: {
      backgroundImage: {
        pattern: "url('/photobox/img/body-bg-pattern.png')",
        hero: "url('/photobox/img/hero/bg.png')",
        menu: "url('/photobox/img/menu/bg.png')",
        testimonial: "url('/photobox/img/testimonial/bg.png')",
        newsletter: "url('/photobox/img/newsletter/bg.png')",
        footer: "url('/photobox/img/footer/bg.png')",
      },
      boxShadow: {
        navbarShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
      },
      colors:{
        gold: "#ffcc99",
        lightGreen:"#669b49",
        darkGreen:"#186049",
        priceGreen:"#6ab29b",
        textGreen:"#247158",
        textBrown:"#95877a",



      },
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
    },
    },
  },
  plugins: [],
}
