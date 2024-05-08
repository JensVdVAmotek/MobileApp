import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationBar from '../components/NavigationBar';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const Header = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: -90px;
  margin-top: 70px;
  margin-left: 10px;
`;

const ArrowContainer = styled.View`
  padding: 10px;
`;

const ProfileContainer = styled.View`
  padding: 20px;
  margin-top: -150px;
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

const Greeting = () => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Goedemorgen';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Goedemiddag';
  } else {
    greeting = 'Goedeavond';
  }

  return <ProfileName>{greeting}</ProfileName>;
};

const SettingsContainer = styled.ScrollView`
  margin-top: 20px;
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

const ArrowBackIcon = ({ onPress }) => (
  <ArrowContainer>
    <TouchableOpacity onPress={onPress}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </TouchableOpacity>
  </ArrowContainer>
);

const ProfileSettingsScreen = () => {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('loggedIn') === 'true';
      setLoggedIn(isLoggedIn);
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.setItem('loggedIn', 'false');
    setLoggedIn(false);
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    navigation.navigate('Login', { setLoggedIn });
  };

  return (
    <Container>
      <Header>
        <ArrowBackIcon onPress={() => navigation.goBack()} />
      </Header>
      <ProfileContainer>
        <ProfileImage source={require('../assets/Profile.jpeg')} />
        <Greeting />
      </ProfileContainer>
      <SettingsContainer>
       
       
        <SettingsOption onPress={() => loggedIn ? handleLogout() : handleLogin()}>
          <SettingsText style={{ color: loggedIn ? 'red' : 'green' }}>{loggedIn ? 'Uitloggen' : 'Inloggen'}</SettingsText>
          <Ionicons name="chevron-forward-outline" size={24} color={loggedIn ? 'red' : 'green'} />
        </SettingsOption>
      </SettingsContainer>
     <NavigationBar />
    </Container>
  );
};

export default ProfileSettingsScreen;
