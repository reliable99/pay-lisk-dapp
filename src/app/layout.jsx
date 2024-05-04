import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pay-Lisk",
  description: "Send money to your family and friends around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster className="toast" position="bottom-left" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
