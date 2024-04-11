import styled from 'styled-components'
import { colors } from '@/app/styles'
import { motion } from 'framer-motion'

export const CartNav = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 486px;
  background-color: ${colors.principal.DEFAULT};
  color: white;
`
