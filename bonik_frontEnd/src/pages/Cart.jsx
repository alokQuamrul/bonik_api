import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

// Fix the Responsiveness

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
    font-weight: bold;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    // font-weight: 200;
    text-align: center;
    font-weight: bold;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 100px 50px 100px;
    ${mobile({ margin: "0px" })}
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => 
        props.type === "filled" && "black"};
    background-color: ${(props) =>
        props.type === "filled" ? "#E77B13" : "transparent"};
    color: ${(props) => 
        props.type === "filled" && "white"};
        transition: all 0.5s ease; 
    &: hover{
        transform: scale(1.05);
    }
    border-radius: 10px;
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    ${mobile({ display: "none" })}


`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
    margin-left: 100px;
    ${mobile({ marginLeft: "none" })}
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Image = styled.img`
    width: 200px;
    height: 230px;
`;

const Details = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ padding: "1px" })}
`;

const ProductName = styled.span`
    ${mobile({ padding: "5px" })}
`;

const ProductId = styled.span`
    ${mobile({ padding: "5px" })}
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
    ${mobile({ padding: "5px" })}
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 30px;
    ${mobile({ margin: "5px 10px" })}
`;

const ProductAmount = styled.div`
    font-size: 18px;
    margin: 10px;
    ${mobile({ margin: "5px 10px" })}
`;

const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Hr1 = styled.hr`
    background-color: gray;
    border: none;
    height: 1px;
`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid gray;
    border-radius: 10px;
    padding: 20px;
    height: 69vh;
    margin-right: 100px;
    ${mobile({ marginLeft: "70px" })}
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    margin-top: 50px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="filled">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="images/13.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> FOTUA (KHADI/KHODDER)
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="#59116d" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> 500tk </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="images/20.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Mandala T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>250tk</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>750tk</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>100tk</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>0%</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>850tk</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Hr1 />
      <Footer />
    </Container>
  );
};

export default Cart;