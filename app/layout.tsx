import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abdülkadir Yılmaz — Software Engineer",
  description:
    "Backend odaklı yazılım geliştirici. Spring Boot, PostgreSQL, React/TypeScript. Projeler ve teknik blog.",
  metadataBase: new URL("https://abdulkadir-yilmaz.netlify.app"),
  openGraph: {
    title: "Abdülkadir Yılmaz — Backend Software Engineer",
    description:
      "Backend odaklı yazılım geliştirici. Spring Boot, PostgreSQL, React/TypeScript. Projeler ve teknik blog.",
    url: "https://abdulkadir-yilmaz.netlify.app",
    siteName: "Abdülkadir Yılmaz",
    locale: "tr_TR",
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
  keywords: [
    "backend developer",
    "Spring Boot",
    "PostgreSQL",
    "React",
    "TypeScript",
    "yazılım mühendisi",
    "sistem programlama",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen font-sans antialiased">
        <Nav />
        <main className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
