import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install this package

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
`;

const CheckoutButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const CheckoutScreen = () => {
  
  const products = [
    { id: '12332', title: 'Leather Chair', color: 'Brown', price: '228.00', quantity: 4 },
    { id: '12356', title: 'Coffee Table', color: 'Cherry', price: '128.00', quantity: 1 }
  ];

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + parseFloat(product.price) * product.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <Header>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Title>Shopping Cart</Title>
        <Ionicons name="create-outline" size={24} color="black" />
      </Header>
      <ShoppingCartList>
        {products.map((product) => (
          <ProductContainer key={product.id}>
            <ProductImage source={require('../assets/Blackchair.png')} />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>Colour: {product.color} | Item #{product.id}</ProductPrice>
            </ProductDetails>
            <QuantitySelector>
              <QuantityButton>
                <Ionicons name="remove-outline" size={16} color="black" />
              </QuantityButton>
              <QuantityText>{product.quantity}</QuantityText>
              <QuantityButton>
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
    </Container>
  );
};

export default CheckoutScreen;
