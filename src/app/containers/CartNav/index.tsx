'use client'

import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { ToggleVisible } from '@/app/store/reducers/cartNav'
import { RootState } from '@/app/store'

export default function CartNav() {
  const dispatch = useDispatch()
  const isVisible = useSelector((state: RootState) => state.cartNav)

  return (
    <S.CartNav
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: isVisible ? 'translateX(100%)' : 'translateX(0)' }}
      transition={{ duration: 0.5 }}
    >
      <h1>Carrinho de compras</h1>
      <button onClick={() => dispatch(ToggleVisible())}>X</button>
      <div></div>
    </S.CartNav>
  )
}
