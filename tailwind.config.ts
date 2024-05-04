import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        chivo: ["var(--font-chivo)"],
      },
      backgroundImage: {
        "radial-light":
          "radial-gradient(at top right, rgba(255, 255, 255, 0.3), rgba(200, 200, 200, 0.3), rgba(255, 200, 200, 0.5), rgba(200, 255, 200, 0.3))",
        "radial-dark":
          "radial-gradient(at top left, rgba(0, 0, 0, 0.3), rgba(50, 50, 50, 0.5), rgba(100, 100, 100, 0.3), rgba(0, 100, 100, 0.5))",
      },
    },
  },
  plugins: [],
}) satisfies Config;
