import "./globals.css";
import localFont from "next/font/local";

const ritma = localFont({
    src: "../public/fonts/ritma-medium.woff",
    variable: "--font-ritma",
});

const signifier = localFont({
    src: "../public/fonts/signifier-regular.woff2",
    variable: "--font-signifier",
});

const signifierItalic = localFont({
    src: "../public/fonts/signifier-regular-italic.woff2",
    variable: "--font-signifier-italic",
});
//todo: setup metadata on all pages for nice document tab titles, SEO, etc.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ritma.variable} ${signifier.variable} ${signifierItalic.variable} !overflow-x-hidden tracking-wider`}
      >
        {children}
      </body>
    </html>
  );
}
