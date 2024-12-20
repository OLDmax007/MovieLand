import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";


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
        <Footer/>
        </body>
        </html>
    );
}
