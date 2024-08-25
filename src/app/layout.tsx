// layout.tsx

import React, { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>BestMovies</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen">
        <header>
          <h1 className="text-2xl font-bold">BestMovies</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 BestMovies. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
