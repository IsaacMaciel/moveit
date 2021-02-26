import * as S from './styles'

type ProfileProps = {
  level: number
}

const Profile = ({ level }: ProfileProps) => {
  return (
    <S.ProfileContainer>
      <S.Avatar src="https://github.com/diego3g.png" alt="Diego Fernandes" />
      <S.Content>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </S.Content>
    </S.ProfileContainer>
  )
}

export default Profile
