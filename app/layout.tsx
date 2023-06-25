import Header from "@/components/Header";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Houston Science Festival",
  description: "We're kicking off Hispanic Heritage Month with style!"
};

const myFont = localFont({ src: "../public/font/Trebuchet-MS.ttf" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-[100vh] bg-[#202B52] text-white ${myFont.className} relative`}>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
