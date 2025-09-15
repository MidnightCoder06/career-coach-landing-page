import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BreakIntoTech - Alternative Tech Career Paths',
  description: 'Discover high-paying alternative tech careers that companies are desperately hiring for. Solutions Engineer, Sales Engineer, Technical Writer and more.',
  keywords: 'tech careers, solutions engineer, sales engineer, technical writer, developer advocate, career transition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}