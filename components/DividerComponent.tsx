import {COLORS} from '../constants/Constants';
import React from 'react';
import {View} from 'react-native';

const DividerComponent = () => (
  <View
    style={{
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    }}>
    <View
      style={{
        width: '95%',
        height: 1,
        backgroundColor: COLORS.lightGray,
      }}
    />
  </View>
);

export default DividerComponent;
