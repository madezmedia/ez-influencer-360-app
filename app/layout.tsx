import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EZ Influencer 360 - AI Music Video Platform',
  description: 'Create AI music video influencers in minutes. Professional videos without technical skills.',
  keywords: 'AI influencer, music video, content creation, AI video',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
