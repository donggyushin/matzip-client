import {Text, View} from 'react-native';

import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingComponent = () => (
  <Spinner
    overlayColor="white"
    visible={true}
    customIndicator={<LoadingImageAsset />}
  />
);

const LoadingImageAsset = () => (
  <View>
    <Text>Changing Image will be here</Text>
  </View>
);

export default LoadingComponent;
