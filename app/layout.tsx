'use client'
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Providers } from "./GlobalReducer/Provider";
import { useSelector } from "react-redux";
import { RootState } from "./GlobalReducer/store";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '700']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const a = usePathname();

  return (
    <Providers>
        <html lang="en" className={poppins.className}>
          <body className="w-full flex justify-center bg-black text-white">
          {a !== '/login' && <Sidebar />}
            <div>{children}</div>
          </body>
        </html>
    </Providers>
  );
}
