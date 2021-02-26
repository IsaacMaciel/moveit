import styled, { css } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-left: 1.5rem;

    > strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.colors.title};
    }

    > p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    > p > img {
      margin-right: 0.5rem;
    }
  `}
`
