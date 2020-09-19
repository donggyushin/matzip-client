import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import ImageDetailModal from '../components/ImageDetailModal';
import MainPage from '../pages/MainPage';
import {MatzipDataType} from '../actions/MatzipDataListActionTypes';
import MatzipDetailPage from '../pages/MatzipDetailPage';
import MatzipListPage from '../pages/MatzipListPage';
import React from 'react';
import {RouteProp} from '@react-navigation/native';

type StackParamList = {
  MainPage: undefined;
  MatzipListPage: {
    area1Name: string;
    area2Name: string;
    area3Name: string;
    category: string;
    matzipList: MatzipDataType[];
  };
  MatzipDetailPage: {
    detailPageUrl: string;
    title: string;
  };
  Main: undefined;
  ImageModal: {
    imageUrl: string;
    title: string;
  };
};

export type MainPageNavigationProp = StackNavigationProp<
  StackParamList,
  'MainPage'
>;
export type MatzipListPageNavigationProp = StackNavigationProp<
  StackParamList,
  'MatzipListPage'
>;
export type MatzipListPageRouteProp = RouteProp<
  StackParamList,
  'MatzipListPage'
>;
export type MatzipListProps = {
  route: MatzipListPageRouteProp;
  navigation: MatzipListPageNavigationProp;
};

export type MatzipDetailPageRouteProp = RouteProp<
  StackParamList,
  'MatzipDetailPage'
>;

export type MatzipDetailPageNavigationProp = StackNavigationProp<
  StackParamList,
  'MatzipDetailPage'
>;
export type MatzipDetailProps = {
  route: MatzipDetailPageRouteProp;
  navigation: MatzipDetailPageNavigationProp;
};

type ImageModalNavigationProp = StackNavigationProp<
  StackParamList,
  'ImageModal'
>;
type ImageModalRouteProp = RouteProp<StackParamList, 'ImageModal'>;
export type ImageModalProps = {
  route: ImageModalRouteProp;
  navigation: ImageModalNavigationProp;
};

const Stack = createStackNavigator<StackParamList>();
const RootStack = createStackNavigator<StackParamList>();

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

const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode={'modal'}>
      <RootStack.Screen
        name={'Main'}
        component={MainStackNavigation}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        options={({route}: ImageModalProps) => ({
          headerLeft: () => null,
          title: route.params.title,
        })}
        name={'ImageModal'}
        component={ImageDetailModal}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
