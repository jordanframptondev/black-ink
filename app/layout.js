import "./globals.css";
import localFont from "next/font/local";
import { ResourcesProvider } from './context/ResourcesContext';

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

export const metadata = {
  title: {
    default: 'Black Ink',
    template: '%s | Black Ink'
  },
  description: 'We facilitate the selection, design, and implementation of strategic projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ritma.variable} ${signifier.variable} ${signifierItalic.variable} !overflow-x-hidden tracking-wider`}
      >
        <ResourcesProvider>
          {children}
        </ResourcesProvider>
      </body>
    </html>
  );
}
