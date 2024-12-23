import "./globals.css";
import { ReactNode } from "react"; // Import ReactNode type for children

export const metadata = {
  title: "Aryansh Rao - Portfolio",
  description: "Portfolio website of a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode; // Explicitly type 'children'
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Fonts link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Honk&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
