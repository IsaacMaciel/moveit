import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background: ${theme.colors.white};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
  `}
`

export const NotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }
  > p > img {
    margin-bottom: 1rem;
  }
`

export const Active = styled.div`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    flex-direction: column;

    > header {
      color: ${theme.colors.blue};
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 1px solid ${theme.colors.grayLine};
    }

    > main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    > main > strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${theme.colors.title};
      margin: 1.5rem 0 1rem;
    }

    > main > p {
      line-height: 1.5;
    }
  `}
`

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
export const Button = styled.button`
  ${({ theme }) => css`
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color: ${theme.colors.white};

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`

export const Succeeded = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.green};
  `}
`

export const Failure = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.red};
  `}
`
