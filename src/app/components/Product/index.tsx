import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { useQuery } from '@tanstack/react-query'
import Skeleton from '@/app/components/Skeleton'
import * as S from './styles'
import { Product as ProductType } from '@/app/types'
import { add } from '@/app/store/reducers/cart'
import { fetchProducts } from '@/app/Apis'

export default function Product() {
  const dispatch = useDispatch()

  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  if (isLoading) {
    return (
      <>
        {[...Array(8)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </>
    )
  }
  if (error) return <div>Error: {error.message}</div>

  return data.products.map((product: ProductType) => (
    <S.ProductContainer key={product.id}>
      <S.ProductSpecs>
        <img src={product.photo} alt={product.name} />
        <S.NameAndPriceContainer>
          <h1>{product.name}</h1>
          <S.PriceContainer>{`R$${product.price}`}</S.PriceContainer>
        </S.NameAndPriceContainer>
        <p>{product.description}</p>
      </S.ProductSpecs>
      <button onClick={() => dispatch(add(product))}>
        <Image
          src="./shopping-bag.svg"
          alt="Shopping bag"
          width={17}
          height={19}
        />
        <h3>COMPRAR</h3>
      </button>
    </S.ProductContainer>
  ))
}
