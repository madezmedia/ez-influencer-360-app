import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EZ Influencer 360 | The AI-Powered Influencer Marketing Platform',
  description: 'Discover, connect, and collaborate with top influencers. AI-powered matching, real-time analytics, and seamless campaign management.',
  keywords: ['influencer marketing', 'creator economy', 'brand collaboration', 'AI marketing'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full bg-[#0a0a0f] text-white">{children}</body>
    </html>
  );
}
