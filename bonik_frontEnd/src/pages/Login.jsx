import styled from "styled-components";
import React from 'react';
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
//   padding: 80%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.94)
    ),
    url("images/bonik_logo2.png")
      center;
  background-size: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ backgroundSize: "100px" })}
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: transparent;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;

const Button = styled.button`
    width: 40%;
    // border: none;
    padding: 15px 20px;
    background-color: #E77B13;
    border: 30;
    border-color: black;
    color: white;
    cursor: pointer;
    margin: 0px 0px 10px 100px;
    transition: all 0.5s ease; 
    &: hover{
        background-color: #E77B13 ;
        opacity: 0.85;
        transform: scale(1.05);
    }
    
`;

const Link = styled.a`
  margin: 5px 0px 0px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>NEW USER? CREATE A NEW ACCOUNT HERE</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;