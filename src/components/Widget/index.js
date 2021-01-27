import * as S from './styled'

export default function Widget() {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>Questões de vestibulares</S.Title>
        <S.QuizLink href="/" title='Ciências da natureza'>Ciências da natureza</S.QuizLink>
        <S.QuizLink href="/" title='Matemática'>Matemática</S.QuizLink>
        <S.QuizLink href="/" title='Linguagens e códigos'>Linguagens e códigos</S.QuizLink>
        <S.QuizLink href="/" title='Ciências humanas'>Ciências humanas</S.QuizLink>
      </S.Box>
    </S.Wrapper>
  )
}
