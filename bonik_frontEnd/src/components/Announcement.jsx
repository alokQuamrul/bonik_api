import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 20px;
    background-color: #E77B13;
    color: white;
    display: flex;
    alogn-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 750;
    
`;

const Announcement = () => {
  return (
    <Container>
        Mega Offer!! Free Shipping on Orders Over 1000tk!!!!
    </Container>
  )
}

export default Announcement  