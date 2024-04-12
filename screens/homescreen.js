import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; // Importeer useNavigation

const Container = styled.View`
  flex: 1;
`;

const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 30px;
`;

const TopContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-left: 136px;
  margin-top: 45px;
`;

const BottomContainer = styled.View`
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 62px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-top: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #a7151c;
  padding: 10px 70px;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default function HomeScreen() {
  const navigation = useNavigation(); // Gebruik useNavigation om toegang te krijgen tot navigatiefuncties

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../assets/sofacropped.png')}
        resizeMode="cover"
      >
        <TopContainer>
          <LogoContainer>
            <LogoImage source={require('../assets/logo_rr-interieur.png')} />
          </LogoContainer>
        </TopContainer>
        <BottomContainer>
          {/* Voeg navigatie toe aan onPress van de knop */}
          <Button onPress={() => navigation.navigate('secondpage')}>
            <ButtonText>Ontdek</ButtonText>
          </Button>
        </BottomContainer>
      </ImageBackground>
    </Container>
  );
}
