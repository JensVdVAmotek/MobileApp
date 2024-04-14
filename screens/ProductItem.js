import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Rate, Button } from '@ant-design/react-native';

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

const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const Reviews = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 8px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

const ButtonContainer = styled.View`
  margin-top: 12px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const product = {
  imageUrl: require('../assets/Blackchair.png'), // Make sure the path is correct
};

const ProductItem = () => {
  return (
    <Card>
      <ImageContainer>
        {/* <StyledImage source={product.imageUrl} /> */}
      </ImageContainer>
      <Title>Curved Chair</Title>
      <Price>$320</Price>
      <RateContainer>
        <Rate defaultValue={4.5} count={5} />
        <Reviews>(347 Reviews)</Reviews>
      </RateContainer>
      <Description>
        Our products combine functional utility with elegance...
      </Description>
      <ButtonContainer as={TouchableOpacity}>
        <Button type="primary">Add to cart</Button>
      </ButtonContainer>
    </Card>
  );
};

export default ProductItem;
