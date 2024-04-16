import React from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const SettingsContainer = styled.ScrollView`
  margin-top:20px;
  margin-left: 30px;
  margin-right: 30px;
`;

const SettingsOption = styled.TouchableOpacity`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SettingsText = styled.Text`
  font-size: 18px;
`;

const ProfileContainer = styled.View`
  padding: 20px;
  margin-top: 100px;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const ProfileName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
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

const NavBarIcon = styled.TouchableOpacity`
  align-items: center;
`;

const NavBarText = styled.Text`
  font-size: 12px;
  color: #333;
`;

const ProfileSettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ProfileContainer>
        {/* Vervang 'path-to-profile-image.png' door het werkelijke pad naar de afbeelding */}
        <ProfileImage source={require('../assets/Profile.jpeg')} />
        <ProfileName>Jens Van de Velde</ProfileName>
      </ProfileContainer>
      <SettingsContainer>
        <SettingsOption onPress={() => {}}>
          <SettingsText>Wijzig profielnaam</SettingsText>
          <Ionicons name="chevron-forward-outline" size={24} color="#333" />
        </SettingsOption>
        <SettingsOption onPress={() => {}}>
          <SettingsText>Wijzig wachtwoord</SettingsText>
          <Ionicons name="chevron-forward-outline" size={24} color="#333" />
        </SettingsOption>
        <SettingsOption onPress={() => {}}>
          <SettingsText>Wijzig e-mailadres</SettingsText>
          <Ionicons name="chevron-forward-outline" size={24} color="#333" />
        </SettingsOption>
        <SettingsOption onPress={() => navigation.navigate('LoginScreen')}>
          <SettingsText style={{ color: 'red' }}>Uitloggen</SettingsText>
          <Ionicons name="chevron-forward-outline" size={24} color="red" />
        </SettingsOption>
      </SettingsContainer>
      
      <NavBarContainer>
        <NavBarIcon onPress={() => navigation.navigate('secondpage')}>
          <Ionicons name="home-outline" size={24} color="#333" />
          <NavBarText>Home</NavBarText>
        </NavBarIcon>
        <NavBarIcon onPress={() => navigation.navigate('Checkoutscreen')}>
          <Ionicons name="cart-outline" size={24} color="#333" />
          <NavBarText>Winkelwagen</NavBarText>
        </NavBarIcon>
        <NavBarIcon onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart-outline" size={24} color="#333" />
          <NavBarText>Favorieten</NavBarText>
        </NavBarIcon>
        <NavBarIcon onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#333" />
          <NavBarText>Profiel</NavBarText>
        </NavBarIcon>
      </NavBarContainer>
    </Container>
  );
};

export default ProfileSettingsScreen;
