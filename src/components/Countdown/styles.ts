import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${theme.colors.title};

    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  `}
`

export const Div = styled.div`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${theme.colors.white};
    box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    > span {
      flex: 1;
    }

    > span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    > span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  `}
`

export const Button = styled.button`
  ${({ theme, disabled }) => css`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    background: ${theme.colors.blue};
    color: ${theme.colors.white};

    ${!disabled &&
    css`
      &:hover {
        background: ${theme.colors.blueDark};
      }
    `}
    ${disabled &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.text};
      cursor: not-allowed;
    `}
  `}
`

export const ButtonActive = styled(Button)`
  ${({ theme, disabled }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.title};

    ${!disabled &&
    css`
      &:hover {
        background: ${theme.colors.red};
        color: ${theme.colors.white};
      }
    `}
  `}
`
