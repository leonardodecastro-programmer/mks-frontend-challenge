'use client'

import CartButton from '@/app/components/CartButton'
import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <CartButton />
    </S.Header>
  )
}
