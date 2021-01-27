import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';

export default function Home() {
  const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
  `;

  const ImageContainer = styled.div`
    width: 100vh;
    height: 100vh;
    position: relative;
  `;

  return (
    <Wrapper>
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

