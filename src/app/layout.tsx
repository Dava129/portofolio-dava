import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Mahasiswa Teknik Informatika yang fokus pada pengembangan aplikasi mobile, machine learning, dan software engineering.",
  keywords: ["Flutter", "Python", "Mobile Developer", "AI", "Informatika"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
