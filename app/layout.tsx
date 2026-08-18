import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
import "./globals.css";

export const metadata: Metadata = {
  title: "Akash Kulkarni | Embedded IoT Engineer",
  description: "Portfolio of Akash Kulkarni, an embedded and IoT engineer building dependable systems from sensor hardware to edge dashboards.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
