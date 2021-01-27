import styled from 'styled-components'
import db from '../../../db.json'
import Link from 'next/link'

const borderRadius = db.theme.borderRadius

export const Wrapper = styled.section`
  width: 22rem;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 10px ${db.theme.colors.shadow};
  padding-bottom: 0.5rem;
  border-radius: ${borderRadius};
`

export const Title = styled.h1`
  font-size: 1.7rem;
  background-color: blue;
  color: ${db.theme.colors.light};
  width: 100%;
  text-align: center;
  margin: auto;
  margin-bottom: 0.5rem;
  padding: 0.8rem 0;
  border-radius: ${borderRadius} ${borderRadius} 0 0;
`

export function QuizLink({ href, title }) {
  const LinkText = styled.a`
    color: ${db.theme.colors.text};
    font-size: 1.4rem;
    text-decoration: none;
    text-align: center;
    margin: 0 1rem;
    margin: auto;
  `
  const LinkContainer = styled.div`
    padding: 0.5rem;
    box-shadow: 1px 1px 5px ${db.theme.colors.shadow};
    margin: 0.5rem;
    width: 19rem;
    display: flex;
    align-items: center;
    border-radius: ${borderRadius};
    cursor: pointer;
    transition: 200ms;

    &:hover {
      translate: 2px -2px;
    }
  `
  return (
    <Link href={href} passHref>
      <LinkContainer>
        <LinkText>{title}</LinkText>
      </LinkContainer>
    </Link>
  )
}


