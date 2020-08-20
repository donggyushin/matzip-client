import MainPage from '../pages/MainPage'
import { NAVIGATION_NAMES } from '../constants/Constants'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION_NAMES.mainStackNavigation.home.name} component={MainPage} options={{
        title: NAVIGATION_NAMES.mainStackNavigation.home.showName
      }} />
    </Stack.Navigator>
  )
}

export default MainStackNavigation