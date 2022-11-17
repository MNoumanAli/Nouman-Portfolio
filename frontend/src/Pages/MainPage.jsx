import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Project from '../Components/Project'

const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    background-color: #161414;
    width : 100vw;
    height : 100vh
`
const Title = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    padding : 30px;
    color  : white; 
    height : 30vh;
    p{
        margin : 0;
        font-size : 4.7rem;
        font-weight : bold
    }
   
`
const Content = styled.div`
    box-sizing : border-box;
    padding : 20px;
    height : 65vh;
    display: grid;
    grid-template-columns : repeat(12 , 1fr);
    grid-template-rows : 35% 60%;
    grid-gap : 20px 
`
export default function MainPage() {
  return (
    <Container>
        <Title>
            <p>Muhammad Nouman Ali</p>
        </Title>
        <Content>
            <About/>
            <Project/>
            <Contact/>
        </Content>
    </Container>
   
  )
}
