import type {Metadata} from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/header/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
    title: "MovieLand",
    description: "Explore MovieLand, your ultimate destination for discovering top-rated movies, " +
        "latest releases, and timeless classics. Find detailed information, " +
        "reviews, and trailers for all your favorite films.",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        </body>
        </html>
    );
}
