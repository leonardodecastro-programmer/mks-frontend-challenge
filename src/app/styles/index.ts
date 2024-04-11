import { Montserrat } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

const montserrat = Montserrat({ subsets: ['latin'] })

export const colors = {
  principal: {
    DEFAULT: '#0F52BA'
  },
  neutral: {
    80: '#eeeeee',
    90: '#bfbfbf',
    100: '#c8c8c87f',
    110: '#373737',
    120: '#2c2c2c'
  }
}

export const GlobalStyle = createGlobalStyle`
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
    5. Default font family
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: ${montserrat.style.fontFamily};
    overflow-x: hidden;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
    8. Remove default border styles
    9. Add cursor pointer
  */
  input, button, textarea, select {
    font: inherit;
    border: none;
    cursor: pointer;
  }
  /*
    10. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    11. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  main {
    position: absolute;
  }
`
