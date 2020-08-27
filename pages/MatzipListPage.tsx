import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {MatzipListPageRouteProp} from '../navigations/MainStackNavigation';
import React from 'react';

type Props = {
  route: MatzipListPageRouteProp;
};

const MatzipListPage = ({route}: Props) => {
  return (
    <SafeAreaView>
      <Text>{route.params.category}</Text>
    </SafeAreaView>
  );
};

export default MatzipListPage;
