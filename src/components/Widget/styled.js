import styled from 'styled-components'
import db from '../../../db.json'
import Link from 'next/link'

const borderRadius = db.theme.borderRadius

export const Wrapper = styled.section`
  width: 20rem;
`

export const Box = styled.div`
  width: 100%;
  border: solid 2px black;
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  background-color: blue;
  color: ${db.theme.colors.light};
  border-radius: ${borderRadius} ${borderRadius} 0 0;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
`

export const QuizLink = ({children, href}) => {
  const LinkText = styled.a`
    text-decoration: none;
  `
  const LinkBox = styled.div`
    text-decoration: none;
  `
  return(
    <LinkBox>
      <Link href={href} passHref>
        <LinkText>{children}</LinkText>
      </Link>
    </LinkBox>
  )
}

export const box2 = styled.div`
  background-color: blue;
  border-radius: ${borderRadius};
  width: 100%;
`

export const box3 = styled.div`
  background-color: blue;
  border-radius: ${borderRadius};
  width: 100%;
`


