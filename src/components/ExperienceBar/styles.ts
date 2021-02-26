import styled, { css } from 'styled-components'

import { ExperienceBarProps } from './ExperienceBar'

export const ExperienceBarContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: ${theme.colors.grayLine};
      margin: 0 1.5rem;
      position: relative;
    }
  `}
`

export type ProgessBarProps = Pick<ExperienceBarProps, 'progress'>

export const ProgressBar = styled.div<ProgessBarProps>`
  ${({ theme, progress }) => css`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background: ${theme.colors.green};
      width: ${progress}%;
    }

    > span {
      position: absolute;
      top: 12px;
      left: ${progress}%;
      transform: translateX(-50%);
    }
  `}
`

export const InfoExperience = styled.span`
  font-size: 1rem;
`
