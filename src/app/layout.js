import "./globals.css";
import { Source_Sans_3 } from "next/font/google";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "WX Happiness Radar",
  description: "A happiness radar for WX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
