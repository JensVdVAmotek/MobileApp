import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, FlatList, Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebase'; // Importeer je Firebase-configuratie
import { collection, getDocs } from 'firebase/firestore';
// Importeer firestore vanuit je firebase-configuratiebestand
import { firestore } from '../firebase';
import NavigationBar from '../components/NavigationBar';


const { width } = Dimensions.get('window');

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const MenuButton = styled(TouchableOpacity)`
  padding: 5px; 
`;

const MenuContent = styled(Animated.View)`
  position: absolute;
  top: -80px;
  left: 10px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  z-index: 1;
`;

const MenuItem = styled(TouchableOpacity)`
  padding: 10px;
`;

const MenuItemText = styled(Text)`
  font-size: 16px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 400;
  color: #333;
  margin: 20px 0;
  text-align: center;
`;

const SearchInput = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  border: solid 1px lightgrey;
`;

const InputField = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
`;

const SearchIcon = styled(AntDesign)`
  margin-left: 5px;
`;

const CartButton = styled(TouchableOpacity)`
  padding: 5px;
`;

const SearchArea = styled(View)`
  padding: 10px;
`;

const Categories = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

const CategoryContainer = styled(View)`
  border-radius: 20px;
  overflow: hidden;
`;

const CategoryLink = styled(Text)`
  color: ${props => props.isSelected ? '#fff' : '#333'};
  background-color: ${props => props.isSelected ? '#2B2B2B' : '#fff'};
  padding: 10px 20px;
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

const SecondPage = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const flatListRef = useRef();
  const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef(new Animated.Value(-300)).current;
  const [products, setProducts] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    Animated.spring(menuAnimation, {
      toValue: isMenuOpen ? -300 : 0,
      useNativeDriver: true,
    }).start();
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    setCurrentFirstIndex(0);
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const handleProductPress = (item) => {
    navigation.navigate('ProductItem', {
      title: item.Title,
      price: item.Price,
      imageUrl: item.ImageUrl
    });
  };
  

  const fetchProductsFromFirestore = async () => {
    try {
      const productsCollection = collection(firestore, 'Products');
      const querySnapshot = await getDocs(productsCollection);
      const productsData = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        productsData.push({
          id: doc.id,
          Title: data.Title,
          ImageUrl: data.ImageUrl,
          Price: data.Price, // Geen conversie nodig als het al een number is
          Category: data.Category,
          Productnummer: data.Productnummer
        });
      });
      
      
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  

  useEffect(() => {
    fetchProductsFromFirestore();
  }, []);

  const filteredProducts = products.filter(product => {
    return product.Title.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory === '' || product.Category === selectedCategory);
  });

  return (
    <Container>
      <Header>
        <MenuButton onPress={toggleMenu}>
          <AntDesign name="menu-fold" size={24} color="black" />
        </MenuButton>
        <CartButton>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </CartButton>
      </Header>
      <Title>Vind moderne meubels voor jou</Title>
      <Animated.View style={{ zIndex: isMenuOpen ? 2 : 0, transform: [{ translateX: menuAnimation }] }}>
        <MenuContent>
          <MenuItem>
            <MenuItemText>Stoelen</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText>Zetels</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText>Buitenstoelen</MenuItemText>
          </MenuItem>
        </MenuContent>
      </Animated.View>
      <SearchArea>
        <SearchInput>
          <SearchIcon name="search1" size={15} color="grey" />
          <InputField
            placeholder="Zoek Meubels"
            onChangeText={text => setSearchTerm(text)}
            value={searchTerm}
          />
        </SearchInput>
      </SearchArea>
      <Categories>
        <TouchableOpacity onPress={() => handleCategorySelect('Chair')}>
          <CategoryContainer>
            <CategoryLink isSelected={selectedCategory === 'Chair'}>Chair</CategoryLink>
          </CategoryContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategorySelect('Sofa')}>
          <CategoryContainer>
            <CategoryLink isSelected={selectedCategory === 'Sofa'}>Sofa</CategoryLink>
          </CategoryContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategorySelect('Table')}>
          <CategoryContainer>
            <CategoryLink isSelected={selectedCategory === 'Table'}>Table</CategoryLink>
          </CategoryContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategorySelect('Lamp')}>
          <CategoryContainer>
            <CategoryLink isSelected={selectedCategory === 'Lamp'}>Lamp</CategoryLink>
          </CategoryContainer>
        </TouchableOpacity>
      </Categories>
      <FlatList
        ref={flatListRef}
        horizontal
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <ProductCard>
              <ProductImage source={{ uri: item.ImageUrl }} />
              <ProductTitle>{item.Title}</ProductTitle>
              <ProductPrice>{item.Price}</ProductPrice>
            </ProductCard>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={width * 0.4 + 20}
      />
       <NavigationBar />
    </Container>
  );
};

export default SecondPage;
