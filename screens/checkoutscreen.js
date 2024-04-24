import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import NavigationBar from '../components/NavigationBar';
import { addItem, removeItem, setQuantity } from '../redux/cartSlice'; // Import setQuantity action

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center; /* Align items vertically */
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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 16px; /* Add horizontal padding */
`;

const ProductDetails = styled(View)`
  flex: 1;
  margin-left: 16px; /* Add left margin for spacing */
`;

const ProductImage = styled(Image)`
  width: 80px;
  height: 80px;
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
  justify-content: flex-end; /* Align items to the right */
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

const CheckoutScreen = () => {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.title]: product.quantity || 1 }), {})
  );

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + parseFloat(product.price) * quantities[product.title], 0).toFixed(2);
  };

  const handleQuantityChange = (title, value) => {
    const newQuantities = { ...quantities, [title]: value };
    setQuantities(newQuantities);
    dispatch(setQuantity({ title, quantity: value })); // Dispatch setQuantity action
  };

  const handleRemoveItem = (title) => {
    dispatch(removeItem(title)); // Dispatch removeItem action
    const newQuantities = { ...quantities };
    delete newQuantities[title];
    setQuantities(newQuantities);
  };

  return (
    <Container>
      <Header>
        <Title>Checkout</Title>
      </Header>
      <SecondHeader>
        <SecondHeaderTitle>Shopping Cart</SecondHeaderTitle>
        <SecondHeaderText>{products.length} items</SecondHeaderText>
        <Divider />
      </SecondHeader>
      <ShoppingCartList>
        {products.map((product) => (
          <ProductContainer key={product.title}>
            <TouchableOpacity onPress={() => handleRemoveItem(product.title)}>
              <Ionicons name="ios-close" size={20} color="#333" />
            </TouchableOpacity>
            <ProductImage source={{ uri: product.imageUrl }} />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>${product.price} each</ProductPrice>
            </ProductDetails>
            <QuantitySelector>
              <QuantityButton onPress={() => handleQuantityChange(product.title, quantities[product.title] - 1)}>
                <Ionicons name="ios-remove" size={20} color="#333" />
              </QuantityButton>
              <QuantityText>{quantities[product.title]}</QuantityText>
              <QuantityButton onPress={() => handleQuantityChange(product.title, quantities[product.title] + 1)}>
                <Ionicons name="ios-add" size={20} color="#333" />
              </QuantityButton>
            </QuantitySelector>
          </ProductContainer>
        ))}
      </ShoppingCartList>
      <TotalContainer>
        <TotalText>Total: ${calculateTotal()}</TotalText>
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
