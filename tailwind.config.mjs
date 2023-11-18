/** @type {import("tailwindcss").Config} */
export default
  {
    content:
      [
        "./src/**/*.{js,ts,jsx,tsx,mdx,astro}"
      ],
    theme:
    {
      colors:
      {
        "white": "#FFFFFF",
        "green": "#006400",
        "black": "#000000"
      },
      fontFamily:
      {
        primary: ["serif"]
      },
      container:
      {
        center: true
      }
    }
  };