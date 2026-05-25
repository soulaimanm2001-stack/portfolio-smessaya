import "./globals.css";

export const metadata = {
  title: "Soulaiman • Automatisation & IA",
  description: "Portfolio automatisation et IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}