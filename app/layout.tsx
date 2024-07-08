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
        <body>{children}</body>
      </html>
    </PlausibleProvider>
  );
}
