import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';
import Head from '../src/components/Head';
import Form from '../src/components/Form';

export default function Home() {
  const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    margin: 0;
  `;

  const ImageContainer = styled.div`
    width: calc(100vh);
    height: calc(100vh);
    position: relative;
  `;

  const Container = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5rem;
  `;

  return (
    <Wrapper>
      <Container>
        <Head />
        <Form />
      </Container>
      <ImageContainer>
        <Image
          src="/graduation.jpg"
          layout="fill"
          alt="Imagem de estudantes graduados"
          title="Imagem de estudantes graduados"
        />
      </ImageContainer>
    </Wrapper>
  );
}
