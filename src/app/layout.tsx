import "~/styles/globals.css";
import Header from "~/components/Header";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { cn } from "~/utils/cn";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JJ Otchere-Baffour Portfolio",
  description:
    "Portfolio of JJ Otchere-Baffour using Next.js, TailwindCSS, and Framer Motion",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className={cn(
          "overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900",
          `font-sans ${inter.variable} `,
        )}
      >
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <main className="container mx-auto px-4">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
