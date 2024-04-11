import { fetchProducts } from '@/app/Apis'
import { useQuery } from '@tanstack/react-query'

export default function Checkout() {
  const { error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  if (isLoading) {
    return 'loading'
  }
  if (error) return <div>Error: {error.message}</div>
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div></div>
      <span></span>
    </div>
  )
}
