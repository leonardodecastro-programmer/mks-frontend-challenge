'use client'

import { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { setupStore } from '@/app/store'
import { Provider } from 'react-redux'

import { GlobalStyle } from '@/app/styles'

const store = setupStore()

export default function ReactQueryProvider({
  children
}: {
  children: ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  )
}
