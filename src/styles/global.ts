import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  css
} from 'styled-components'

type GlobalStyleProps = {
  prop?: string
}
const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  `}
}

body,input, textarea, button {
  font: 400 16px "Inter",sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`

export default GlobalStyles
