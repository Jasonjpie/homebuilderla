import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import App from '@/components/common/App'
import { Providers } from '@/store/provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Builder LA',
  description: 'Your Trusted Construction Partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='overflow-hidden' lang="en">
       <head>
        <link rel="shortcut icon" type='image/svg+xml' href="/homebuilder_smaller_logo.svg" />
      </head>
        <body className={`relative max-w-[1560px] w-full h-[100vh] mx-auto ${inter.className}`}>
          <Providers>
           <App>{children}</App>
          </Providers>,
        </body>
    </html>
  )
}
