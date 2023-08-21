import "./globals.css";
import PlausibleProvider from "next-plausible";

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
        <meta
          property="og:image"
          content="https://cdn.uploadfly.cloud/y6TiT6/2jvPlRvxO02YfHOa.png"
        />
        <meta
          name="twitter:image"
          content="https://cdn.uploadfly.cloud/y6TiT6/2jvPlRvxO02YfHOa.png"
        />
        <body>{children}</body>
      </html>
    </PlausibleProvider>
  );
}
