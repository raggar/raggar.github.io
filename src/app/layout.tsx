import "./globals.css";
import { Inter } from "next/font/google";
import { SectionContextProvider } from "@/context/sectioncontext";
const inter = Inter({ subsets: ["latin"] });
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Aggarwal",
  description: "Rahul Aggarwal Personal Portfolio",
  icons: {
    icon: '/gradient.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.6" />
      </head>
      <body
        className={`${montserrat.className} bg-gray-50 relative overflow-x-hidden`}
      >
        <SectionContextProvider>
          {children}
        </SectionContextProvider>
      </body>
    </html>
  );
}
