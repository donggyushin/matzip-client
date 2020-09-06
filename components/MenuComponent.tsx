import {Image, Text, View} from 'react-native';

import {COLORS} from '../constants/Constants';
import {Menu} from '../actions/MatzipDetailDataActionTypes';
import React from 'react';

interface Props {
  menu: Menu;
}

const MenuComponent: React.FunctionComponent<Props> = ({menu}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: 90,
    }}>
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {menu.text}
      </Text>
      <Text
        style={{
          color: COLORS.orange,
        }}>
        {menu.price}
      </Text>
    </View>
    <View>
      {menu.imageUrl.length !== 0 && (
        <Image
          style={{
            width: 90,
            height: 90,
          }}
          source={{
            uri: menu.imageUrl,
          }}
        />
      )}
    </View>
  </View>
);

export default MenuComponent;
