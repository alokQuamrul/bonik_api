
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 100vh;
    position: relative;
    ${mobile({ height: "20vh" })}

`;

const Image = styled.img`
     width: 100%;
     height: 100%;
     object-fit: cover;

`;

const Info = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 30px;

`;

const Button = styled.button`
    border: none;
    padding: 10px;
    color: gray;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
`;




const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem