import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from '@ant-design/react-native';
import styled from 'styled-components/native';

// Styled components
const Card = styled.View`
  border-radius: 6px;
  background-color: #FFF;
  padding: 16px;
  margin-top: 16px;
`;

const ImageContainer = styled.View`
  border-radius: 6px;
  overflow: hidden;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
`;

const Price = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: 4px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

// Styled TouchableOpacity for ButtonContainer
const ButtonContainer = styled(TouchableOpacity)`
  margin-top: 12px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

// ProductItem component
const ProductItem = ({ route }) => {
  const { title, price, imageUrl } = route.params;

  return (
    <Card>
      <ImageContainer>
        <StyledImage source={imageUrl} />
      </ImageContainer>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Description>
        Our products combine functional utility with elegance...
      </Description>
      <ButtonContainer>
        <Button type="primary">Add to cart</Button>
      </ButtonContainer>
    </Card>
  );
};

export default ProductItem;
