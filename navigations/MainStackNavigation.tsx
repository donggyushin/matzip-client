import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import MatzipDetailPage from '../pages/MatzipDetailPage';
import MatzipListPage from '../pages/MatzipListPage';
import React from 'react';
import {RouteProp} from '@react-navigation/native';

type MainStackParamList = {
  MainPage: undefined;
  MatzipListPage: {
    area1Name: string;
    area2Name: string;
    area3Name: string;
    category: string;
  };
  MatzipDetailPage: {
    detailPageUrl: string;
    title: string;
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

export type MatzipDetailPageRouteProp = RouteProp<
  MainStackParamList,
  'MatzipDetailPage'
>;

const Stack = createStackNavigator<MainStackParamList>();

type MatzipListProps = {
  route: MatzipListPageRouteProp;
};

type MatzipDetailProps = {
  route: MatzipDetailPageRouteProp;
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
      <Stack.Screen
        name={'MatzipDetailPage'}
        component={MatzipDetailPage}
        options={({route}: MatzipDetailProps) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
