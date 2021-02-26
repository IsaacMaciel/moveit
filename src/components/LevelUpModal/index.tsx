import * as S from './styles'

export type LevelUpProps = {
  isOpen: boolean
  level: number
  setModalIsOpen: (open: boolean) => void
}

const LevelUpModal = ({ isOpen, level, setModalIsOpen }: LevelUpProps) => {
  return (
    <S.Overlay isOpen={isOpen}>
      <S.Container>
        <S.Header>{level}</S.Header>

        <S.Title>Parabéns</S.Title>
        <S.SubTitle>Você alcançou um novo level</S.SubTitle>

        <S.Button onClick={() => setModalIsOpen(false)}>
          <S.Image src="/icons/close.svg" />
        </S.Button>
      </S.Container>
    </S.Overlay>
  )
}

export default LevelUpModal
