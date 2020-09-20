import { Text, View } from 'react-native';

import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

interface Props {
  visible: boolean
}

const InitialScreenComponent: React.FunctionComponent<Props> = ({ visible }) => (
  <Spinner
    overlayColor="white"
    visible={visible}
    customIndicator={<LoadingImageAsset />}
  />
);

const LoadingImageAsset = () => (
  <View>
    <Text>근처 음식점 데이터를 불러오고 있습니다...</Text>
  </View>
);

export default InitialScreenComponent;
