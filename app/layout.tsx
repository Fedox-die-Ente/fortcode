import type { Metadata, Viewport } from "next";
import { Inter, Red_Hat_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-redhatdisplay"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const viewport: Viewport = {
  themeColor: "#428DFF"
};

export const metadata: Metadata = {
  title: "FortCode - The best. I guess.",
  description: "Convert your text into fortcode.",
  authors: [{ name: "Fedox", url: "https://fedox.ovh" }],
  keywords: ["fortnite", "fortcode", "text encoding", "encoder"],
  applicationName: "FortCode",
  creator: "Fedox",
  icons: {
    icon: 'favicon.ico'
  },
  publisher: "Fedox"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${redHatDisplay.className} ${spaceGrotesk.className} flex flex-col min-h-screen w-full`}>
        <NavBar />
        <main className="w-full flex-grow flex items-center justify-center bg-dark-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
