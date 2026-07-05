import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abdülkadir Yılmaz — Software Engineer",
  description:
    "Backend odaklı yazılım geliştirici. Spring Boot, PostgreSQL, React/TypeScript. Projeler ve teknik blog.",
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
