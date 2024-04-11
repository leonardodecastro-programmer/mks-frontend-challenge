import type { Metadata } from 'next'

import ReactQueryProvider from './utils/Providers'
import StyledComponentsRegistry from './lib/registry'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
