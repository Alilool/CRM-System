import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreCRM",
  description: "A modern CRM dashboard UI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              if (theme === "dark" || (!theme && prefersDark)) {
                document.documentElement.classList.add("dark");
              }
            `,
          }}
        />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
