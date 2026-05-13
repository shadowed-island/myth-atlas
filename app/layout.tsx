import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Myth Atlas",
  description: "Explore mythology and folklore across a luminous 3D world globe."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="extension-blob-error-filter"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.addEventListener("error", function (event) {
  var source = typeof event.filename === "string" ? event.filename : "";
  var message = typeof event.message === "string" ? event.message : "";
  if (source.indexOf("blob:") === 0 && message.indexOf("addListener") !== -1) {
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  }
}, true);
`
          }}
        />
        {children}
      </body>
    </html>
  );
}
