import styled, { css } from 'styled-components'

import { LevelUpProps } from './index'

export const Overlay = styled.div<LevelUpProps>`
  ${({ isOpen }) => css`
    background: rgba(242, 243, 245, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: ${isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.85);
    text-align: center;
    position: relative;
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    font-size: 8.75rem;
    font-weight: 600;
    color: ${theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  `}
`

export const Title = styled.strong`
  ${({ theme }) => css`
    font-size: 2.25rem;
    color: ${theme.colors.title};
  `}
`

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    color: ${theme.colors.text};
    margin-top: 0.25rem;
  `}
`

export const Button = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;

  font-size: 0;
`

export const Image = styled.img``
