import Image from 'next/image'
import Widget from '../src/components/Widget'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
`

const ImageContainer = styled.div`
  width: 100vh;
  height: 100vh;
  position: relative;
`


export default function Home() {
  return (
    <Wrapper>
      <Widget />
      <ImageContainer>
        <Image 
          src='/graduation.jpg'
          layout="fill"
          alt="Imagem de estudantes graduados"
          title="Imagem de estudantes graduados"
        />
      </ImageContainer>
    </Wrapper>
  )
}
