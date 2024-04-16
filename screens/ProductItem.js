import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Make sure to install this package

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const Header = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: -90px;
`;

const IconContainer = styled(TouchableOpacity)`
  padding: 5px;
`;

const IconWrapper = styled(View)`
  padding: 8px;
  border-radius: 30px;
  background-color: grey;
  margin-top: 50px;
  color: white;
`;

const Card = styled.View`
  border-radius: 20px;
  background-color: #eeeeee;
  padding: 20px;
  margin-left: 40px;
  margin-right: 40px;
`;

const ImageContainer = styled.View`
  border-radius: 6px;
  overflow: hidden;
  margin-top: 10px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 400px;
  align-self: center;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 25px;
  margin-top: 4px;
`;

const Price = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top:5px;
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 20px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
  margin-bottom: 20px;
`;

const LinkButton = styled.TouchableOpacity`
  margin-top: 12px;
  padding: 15px 100px;
  background-color: #2B2B2B;
  border-radius: 50px;
  align-self: center;
`;

const LinkButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const NavBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  background-color: white;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;

const NavBarIcon = styled(TouchableOpacity)`
  align-items: center;
`;

const NavBarText = styled.Text`
  font-size: 10px;
  color: #333;
`;

const NavigationBar = () => {
  const navigation = useNavigation();
  
  return (
    <NavBarContainer>
       <NavBarIcon onPress={() => navigation.navigate('secondpage')}>
        <Ionicons name="home-outline" size={24} color="#333" />
        <NavBarText>Home</NavBarText>
      </NavBarIcon>
      <NavBarIcon onPress={() => navigation.navigate('Checkoutscreen')}>
        <Ionicons name="cart-outline" size={24} color="#333" />
        <NavBarText>Cart</NavBarText>
      </NavBarIcon>
      <NavBarIcon onPress={() => navigation.navigate('Favorites')}>
        <Ionicons name="heart-outline" size={24} color="#333" />
        <NavBarText>Favorites</NavBarText>
      </NavBarIcon>
      <NavBarIcon onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={24} color="#333" />
        <NavBarText>Profile</NavBarText>
      </NavBarIcon>
    </NavBarContainer>
  );
};

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

const ProductItem = ({ route }) => {
  const { title, price, imageUrl } = route.params;
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <IconContainer onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </IconContainer>
        <IconContainer>
          <HeartIcon />
        </IconContainer>
      </Header>
      <ImageContainer>
        <StyledImage source={imageUrl} />
      </ImageContainer>
      <Card>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Description>
          The stylish chair is the most simple way to pull your room into the new modern look.
        </Description>
        <LinkButton onPress={() => console.log('Add to cart pressed')}>
          <LinkButtonText>Add to cart</LinkButtonText>
        </LinkButton>
      </Card>
      {/* White bar at the bottom */}
      <View style={{ backgroundColor: 'white', flex: 1 }} />
      <NavigationBar />
    </Container>
  );
};

export default ProductItem;
