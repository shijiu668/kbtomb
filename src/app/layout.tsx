import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kb to mb Image Resizer',
  description: 'A professional online image size adjustment tool that helps you easily resize image files while maintaining the best image quality. Supports various formats including JPG, PNG, and more.',
  keywords: 'kb to mb, Image Resizer, Image Compression, Image Resizing, Image Size, Online Tool, Image Optimization, File Size Adjustment.',
  authors: [{ name: 'kb to mb Image Resizer' }],
  openGraph: {
    title: 'kb to mb Image Resizer',
    description: 'A professional online image size adjustment tool that helps you easily resize image files while maintaining the best image quality. Supports various formats including JPG, PNG, and more.',
    type: 'website',
    locale: 'en',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a1a1a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
