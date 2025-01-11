import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Автоломбард Алматы",
  description: "Автоломбард Прогресс, кредиты под залог авто с правом управления и без",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}
        <GoogleAnalytics gaId="G-CC3SW4T50C" />
      </body>
    </html>
  );
}
