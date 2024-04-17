import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export default NavigationBar;
