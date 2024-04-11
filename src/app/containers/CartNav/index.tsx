'use client'

import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import * as S from './styles'
import { ToggleVisible } from '@/app/store/reducers/cartNav'
import { RootState } from '@/app/store'

export default function CartNav() {
  const dispatch = useDispatch()
  const isVisible = useSelector((state: RootState) => state.cartNav)

  const handleClick = () => {
    console.log(isVisible) // Mostra o valor de isVisible no console
    dispatch(ToggleVisible())
  }

  return (
    <motion.div
      initial={{ x: isVisible ? 0 : '-100%' }}
      animate={{ x: isVisible ? 0 : '-100%' }}
      exit={{ x: 0 }}
      transition={{ duration: 1.3 }}
    >
      <S.CartNav>
        <h1>Carrinho de compras</h1>
        <button onClick={handleClick}>X</button>
        <div></div>
      </S.CartNav>
    </motion.div>
  )
}
