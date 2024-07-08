import "./globals.css";
import PlausibleProvider from "next-plausible";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider domain="uploadfly.co" trackOutboundLinks={true}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </PlausibleProvider>
  );
}
