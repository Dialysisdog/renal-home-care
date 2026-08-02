import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import TopBar from "@/components/TopBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Cẩm nang chạy thận tại nhà | Home Dialysis Guide",
  description:
    "Trang thông tin song ngữ Việt–Anh dành cho người bệnh và người chăm sóc chạy thận tại nhà. A bilingual Vietnamese–English guide for home dialysis patients and caregivers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <LanguageProvider>
          <TopBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
