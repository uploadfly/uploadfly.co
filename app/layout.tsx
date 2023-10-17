import "./globals.css";
import PlausibleProvider from "next-plausible";

export const metadata = {
  title: "UploadFly • Really simple file uploads",
  description:
    "UploadFly makes it easy to add file uploads to your applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider domain="uploadfly.co" trackOutboundLinks={true}>
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
