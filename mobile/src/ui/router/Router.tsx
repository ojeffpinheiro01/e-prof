import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import { NavigationTheme } from '../themes/app-theme'

import Index from '../../pages/index';
import Search from '../../pages/search-prof';

import Logo from '../../../assets/img/logos/e-prof-logo.png'


const Stack = createStackNavigator()

export type RootStackParamList = {
    Index: undefined;
    SearchProfs: undefined;
};


const Router: React.FC = () => {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator>
                <Stack.Screen name={'Index'} component={Index}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: () => (
                            <Image
                                style={{ width: 150, height: 50, resizeMode: 'contain', }}
                                source={Logo} />
                        )
                    }} />
                <Stack.Screen name={'Search'} component={Search}
                    options={{ title: 'Procurar professor' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;