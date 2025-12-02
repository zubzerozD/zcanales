import "./globals.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Navigation } from "./components/nav"; // <--- Importamos el componente
import { SpeedInsights } from "@vercel/speed-insights/next"; // <--- Importamos Speed Insights
import { Footer } from "./components/footer"; // <--- Importamos el componente Footer


export const metadata: Metadata = {
  title: {
    default: "zubzerozD",
    template: "%s | zubzerozD",
  },
  description: "",
  openGraph: {
    title: "zubzerozD",
    description: "",
    url: "https://zubzerozD",
    siteName: "zubzerozD",
    images: [
      {
        url: "https://zubzerozD/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "zubzerozD",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/public/zubzerozd.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={[inter.variable, calSans.variable].join(" ")}
    suppressHydrationWarning={true}
    data-lt-installed="true"
    >
      <head>
        {/* Aquí puedes agregar scripts de analítica si los necesitas */}
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Navigation /> {/* <--- Aquí se renderiza el menú flotante */}
        {children}
        <SpeedInsights /> {/* <--- Aquí se renderiza Speed Insights */}
        <Footer /> {/* <--- Aquí se renderiza el pie de página */}
      </body>
    </html>
  );
}