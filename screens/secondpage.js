import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Button } from '@ant-design/react-native'; 
import { AntDesign } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled(View)`
  padding: 10px;
  background-color: #f8f8f8;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const SearchArea = styled(View)`
  padding: 10px;
`;

const Categories = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

const SearchInput = styled(TextInput)`
  background-color: #f0f0f2;
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
`;


const CategoryButton = styled(Button)`
  flex: 1;
  margin: 0 5px;
`;

const ProductCard = styled(View)`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: ${width * 0.4}px;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 150px;
  border-radius: 5px;
`;

const ProductTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const ProductPrice = styled(Text)`
  font-size: 16px;
  color: #333;
  margin-top: 5px;
`;

const ScrollButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const products = [
  { id: '1', title: 'Stylish Chair', price: '$150.99', imageUrl: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Comfortable Sofa', price: '$250.99', imageUrl: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Stylish Chair', price: '$150.99', imageUrl: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Comfortable Sofa', price: '$250.99', imageUrl: 'https://via.placeholder.com/150' },

];

const SecondPage = () => {
  const flatListRef = useRef();
  const [currentFirstIndex, setCurrentFirstIndex] = useState(0);

  const handleScrollNext = () => {
    const nextIndex = currentFirstIndex + 1;
    if (nextIndex < products.length) {
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      setCurrentFirstIndex(nextIndex);
    }
  };

  return (
    <Container>
      <Header>
        <Text>14:31</Text>
        <View style={{ flexDirection: 'row' }}>
         
        </View>
      </Header>
      <SearchArea>
        <SearchInput placeholder="Search furniture" />
      </SearchArea>
      <Categories>
        <CategoryButton type="ghost">Chair</CategoryButton>
        <CategoryButton type="ghost">Sofa</CategoryButton>
        <CategoryButton type="ghost">Table</CategoryButton>
        <CategoryButton type="ghost">Lamp</CategoryButton>
      </Categories>
      <View>
        <FlatList
          ref={flatListRef}
          horizontal
          data={products}
          renderItem={({ item }) => (
            <ProductCard key={item.id}>
              <ProductImage source={{ uri: item.imageUrl }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductCard>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={width * 0.4 + 20} 
        />
        <ScrollButton onPress={handleScrollNext}>
          <AntDesign name="right" size={24} color="black" />
        </ScrollButton>
      </View>
      
    </Container>
  );
};

export default SecondPage;
