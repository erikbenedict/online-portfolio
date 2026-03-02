import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Erik Benedict | Full-Stack Software Engineer',
  description: 'Microsoft Certified Azure Developer specializing in React, Next.js, TypeScript, and cloud-native architectures. 2+ years building production systems for startups and enterprises.',
  keywords: ['Full-Stack Developer', 'Azure Developer', 'React', 'Next.js', 'TypeScript', 'Cloud Engineer'],
  authors: [{ name: 'Erik Benedict' }],
  openGraph: {
    title: 'Erik Benedict | Full-Stack Software Engineer',
    description: 'Microsoft Certified Azure Developer specializing in React, Next.js, TypeScript, and cloud-native architectures.',
    url: 'https://erikbenedict.com',
    siteName: 'Erik Benedict Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erik Benedict | Full-Stack Software Engineer',
    description: 'Microsoft Certified Azure Developer specializing in React, Next.js, TypeScript, and cloud-native architectures.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}