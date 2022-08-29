import styled from "styled-components";
import React from 'react';
import { mobile } from "../responsive";

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
  width: 40%;
  padding: 20px;
  background-color: transparent;
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    ${mobile({ fontSize: "7px" })}
`;

const Button = styled.button`
    width: 40%;
    // border: none;
    padding: 15px 20px;
    background-color: #E77B13;
    border: 30;
    border-color: black;
    color: white;
    cursor: pointer;
    margin-left: 160px;
    transition: all 0.5s ease; 
    &: hover{
        background-color: #E77B13 ;
        opacity: 0.85;
        transform: scale(1.05);
    }
    ${mobile({ marginLeft: "30px", padding: "10px 0px 10px 0px",fontSize: "10px" })}
    
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>REGISTER AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" /> 
          <Agreement> 
            By creating an account, I consent to the processing of my personal 
            data in accordance with the <b>PRIVACY POLICY</b> 
          </Agreement> 
          <Button>CREATE ACCOUNT</Button> 
        </Form> 
      </Wrapper> 
    </Container>
  );
};

export default Register;