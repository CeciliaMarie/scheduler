import styled from 'styled-components'
import Head from 'next/head'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title> Chapman Four Year Scheduler </title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Merriweather+Sans:ital,wght@0,300;0,500;0,600;0,800;1,500&display=swap" rel="stylesheet"/>
      </Head>
      </Wrapper>
    )
}
