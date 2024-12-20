import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/components/header/Header";
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
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            />
        </Head>
        <body>
        <Header/>
        {children}
        </body>
        </html>
    );
}
