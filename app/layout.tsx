import "./globals.css";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uploadfly • Really simple file uploads",
  description:
    "Uploadfly makes it easy to add file uploads to your applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider domain="uploadfly.cloud" trackOutboundLinks={true}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </PlausibleProvider>
  );
}
