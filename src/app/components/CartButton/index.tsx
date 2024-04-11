'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/store'

import * as S from './styles'
import { ToggleVisible } from '@/app/store/reducers/cartNav'

export default function CartButton() {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.cart.itens)

  return (
    <S.CartButton onClick={() => dispatch(ToggleVisible())}>
      <S.StyledImage
        src="./shopping-cart.svg"
        alt="Shopping cart"
        width={12}
        height={11}
      />
      <span className="text-xs">{itens.length}</span>
    </S.CartButton>
  )
}
