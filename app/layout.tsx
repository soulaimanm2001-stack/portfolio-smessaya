import "./globals.css";

export const metadata = {
  title: "Soulaiman • Automatisation & IA",
  description: "Portfolio automatisation et intelligence artificielle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}