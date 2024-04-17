import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import NavigationBar from '../components/NavigationBar';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const SecondHeader = styled(View)`
  background-color: white;
  padding: 16px;
  margin-left: 5px;
`;

const SecondHeaderTitle = styled(Text)`
  font-size: 32px;
  font-weight: 500;
  text-align: left;
  color: #333;
`;

const SecondHeaderText = styled(Text)`
  font-size: 13px;
  margin-top: 5px;
  font-weight: 500;
  color: #333;
`;

const Divider = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: black;
  margin-top: 8px;
`;

const ShoppingCartList = styled(ScrollView)`
  padding: 16px;
`;

const ProductContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductDetails = styled(View)`
  flex: 1;
`;

const ProductImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
`;

const ProductTitle = styled(Text)`
  font-size: 16px;
  color: #333;
`;

const ProductPrice = styled(Text)`
  font-size: 16px;
  color: #333;
  margin-top: 8px;
`;

const QuantitySelector = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const QuantityButton = styled(TouchableOpacity)`
  padding: 4px;
`;

const QuantityText = styled(Text)`
  margin: 0 8px;
`;

const TotalContainer = styled(View)`
  padding: 16px;
`;

const TotalText = styled(Text)`
  font-size: 16px;
  color: #333;
  text-align: right;
`;

const CheckoutButton = styled(TouchableOpacity)`
  background-color: #000;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 60px;

`;

const CheckoutButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  
`;

const IconWrapper = styled(View)`
  padding: 8px;
  border-radius: 30px;
  background-color: grey;
  margin-top: 10px;
`;

const ArrowBackIcon = () => (
  <IconWrapper>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
      <Path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </Svg>
  </IconWrapper>
);

const HeartIcon = () => (
  <IconWrapper>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
      <Path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </Svg>
  </IconWrapper>
);

const CheckoutScreen = () => {
  const [products, setProducts] = useState([
    { id: '12332', title: 'Leather Chair', color: 'Brown', price: '228.00', quantity: 4 },
    { id: '12356', title: 'Coffee Table', color: 'Cherry', price: '128.00', quantity: 1 }
  ]);

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + parseFloat(product.price) * product.quantity, 0).toFixed(2);
  };

  const incrementQuantity = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decrementQuantity = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  return (
    <Container>
      <Header>
        <ArrowBackIcon />
        <HeartIcon />
      </Header>
      <SecondHeader>
        <SecondHeaderTitle>Shopping Cart</SecondHeaderTitle>
        <SecondHeaderText>2 items</SecondHeaderText>
        <Divider />
      </SecondHeader>
      <ShoppingCartList>
        {products.map(product => (
          <ProductContainer key={product.id}>
            <ProductImage source={require('../assets/Blackchair.png')} />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>Colour: {product.color} | Item #{product.id}</ProductPrice>
            </ProductDetails>
            <QuantitySelector>
              <QuantityButton onPress={() => decrementQuantity(product.id)}>
                <Ionicons name="remove-outline" size={16} color="black" />
              </QuantityButton>
              <QuantityText>{product.quantity}</QuantityText>
              <QuantityButton onPress={() => incrementQuantity(product.id)}>
                <Ionicons name="add-outline" size={16} color="black" />
              </QuantityButton>
            </QuantitySelector>
          </ProductContainer>
        ))}
      </ShoppingCartList>
      <TotalContainer>
        <TotalText>Sub total ${calculateTotal()}</TotalText>
        <TotalText>(Total does not include shipping)</TotalText>
      </TotalContainer>
      <CheckoutButton>
        <CheckoutButtonText>Check out</CheckoutButtonText>
      </CheckoutButton>
      <NavigationBar />
    </Container>
  );
};

export default CheckoutScreen;
