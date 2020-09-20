import { Text, View } from 'react-native';

import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

interface Props {
  visible: boolean
}

const LoadingComponent: React.FunctionComponent<Props> = ({ visible }) => (
  <Spinner
    overlayColor="white"
    visible={visible}
    customIndicator={<LoadingImageAsset />}
  />
);

const LoadingImageAsset = () => (
  <View>
    <Text>Changing Image will be here</Text>
  </View>
);

export default LoadingComponent;
