import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../ui/router/Router'

import ButtonStyled from '../ui/components/inputs/Button/Button';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

interface IndexProps{
  navigation: NavigationProp;
}

const Index: React.FC<IndexProps> = ({ navigation }) => {
  return(
      <View style={{ flex: 1, justifyContent: 'center' }}>
          <ButtonStyled mode={'contained'} 
            onPress={() => {navigation.navigate('Search')}}>
              Procurar professor
            </ButtonStyled>
      </View>
  )
}

export default Index;