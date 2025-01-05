import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/components/layouts-components/header/Header";
import Footer from "@/app/components/layouts-components/footer/Footer";
import Head from "next/head";

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
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </Head>
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
        ;
}
