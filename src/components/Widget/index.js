import * as S from './styled'

export default function Widget() {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>Questões de vestibulares</S.Title>
        <S.QuizLink href="/">Ciências da natureza</S.QuizLink>
        <S.QuizLink href="/">Matemática</S.QuizLink>
        <S.QuizLink href="/">Linguagens e códigos</S.QuizLink>
        <S.QuizLink href="/">Ciências humanas</S.QuizLink>
      </S.Box>
    </S.Wrapper>
  )
}
