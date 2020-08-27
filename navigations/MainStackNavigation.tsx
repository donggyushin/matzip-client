import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import MatzipListPage from '../pages/MatzipListPage';
import React from 'react';
import {RouteProp} from '@react-navigation/native';

type MainStackParamList = {
  MainPage: undefined;
  MatzipListPage: {
    address1Name: string;
    address2Name: string;
    address3Name: string;
    category: string;
  };
};

export type MainPageNavigationProp = StackNavigationProp<
  MainStackParamList,
  'MainPage'
>;
export type MatzipListPageNavigationProp = StackNavigationProp<
  MainStackParamList,
  'MatzipListPage'
>;
export type MatzipListPageRouteProp = RouteProp<
  MainStackParamList,
  'MatzipListPage'
>;

const Stack = createStackNavigator<MainStackParamList>();

type MatzipListProps = {
  route: MatzipListPageRouteProp;
};

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainPage'}
        component={MainPage}
        options={{
          title: '맛집찾아줘',
        }}
      />
      <Stack.Screen
        name={'MatzipListPage'}
        component={MatzipListPage}
        options={({route}: MatzipListProps) => ({
          title:
            route.params.category === '맛집'
              ? '근처맛집'
              : route.params.category,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
