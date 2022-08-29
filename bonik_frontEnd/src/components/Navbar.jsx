import { Badge } from "@material-ui/core";
import { Search,ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive"

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px 20px 20px;  
    display: flex;
    align-item: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-item: center;
    margin-bottom: 35px;
    margin-left:100px;
    ${mobile({ display: "none" })}

    // justify-content: space-around;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    align-item: center;
    margin-top: 10px;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    align-item: center;
    margin-left: 25px;
    margin-bottom: 50px;
    padding: 5px;
    border-radius: 8px;
    ${mobile({ display: "none" })}
    
`;

const Input = styled.input` 
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.div`
    padding: 00px 20px;
    height: 30%;
    weight: 20%;
    ${mobile({ height: "20px" , weight:"10px", padding: "5px"})}
`;

const Image = styled.img`
    height: 100%;
    weight: 100%;
    z-index: 2;
    ${mobile({ zIndex: 1, justifyContent: "center"})}

`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
    margin-right:100px;
    ${mobile({ flex: 2, justifyContent: "center", marginRight: "1px"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    // margin-right: 25px;
    margin-top: 10px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray",fontSize:22}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <Image src="images/bonik_logo1.png"/>
                </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined color="action" />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar