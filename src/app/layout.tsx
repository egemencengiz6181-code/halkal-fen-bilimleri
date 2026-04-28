import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zekeriyakoyfenbilimleri.com'),
  title: {
    default: 'Halkalı Fen Bilimleri',
    template: '%s | Halkalı Fen Bilimleri',
  },
  description: "Küçükçekmece — Halkalı Nazmi Arıkan Fen Bilimleri Dershanesi. YKS, TYT ve AYT'de hedef üniversiteye giden yol.",
  authors: [{ name: 'Halkalı Fen Bilimleri', url: 'https://www.zekeriyakoyfenbilimleri.com' }],
  creator: 'Halkalı Fen Bilimleri',
  publisher: 'Halkalı Fen Bilimleri',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/logos/logolar.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Halkalı Fen Bilimleri',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@halkalifenbilimleri',
    creator: '@halkalifenbilimleri',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
