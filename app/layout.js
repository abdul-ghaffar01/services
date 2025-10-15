import "./globals.css";

export const metadata = {
  title: "AG S2 House | Web Development & Deployment Services by Abdul Ghaffar",
  description:
    "AG S2 House (Software & Server House) offers professional web development, VPS setup, and Dockerized deployment services by Abdul Ghaffar.",
  keywords: [
    "AG S2 House",
    "IAbdulGhaffar",
    "web development",
    "deployment services",
    "docker",
    "vps setup",
    "server management",
    "next.js developer",
    "tailwind developer",
  ],
  authors: [{ name: "Abdul Ghaffar", url: "https://iabdulghaffar.com" }],
  creator: "Abdul Ghaffar",
  publisher: "AG S2 House",
  metadataBase: new URL("https://services.iabdulghaffar.com"),
  openGraph: {
    title:
      "AG S2 House | Web & Server Deployment Services by Abdul Ghaffar",
    description:
      "Professional website development and deployment services including Dockerized setups, VPS configuration, and maintenance — by Abdul Ghaffar.",
    url: "https://services.iabdulghaffar.com",
    siteName: "AG S2 House",
    images: [
      {
        url: "/og-image.png", // Place this in /public folder
        width: 1200,
        height: 630,
        alt: "AG S2 House – Web & Server Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AG S2 House | Web & Server Deployment Services",
    description:
      "Website development and Dockerized deployment services by Abdul Ghaffar.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
