import {Image, StyleSheet, Text, View} from 'react-native';

import {Dimensions} from 'react-native';
import {MatzipDataType} from '../actions/MatzipDataListActionTypes';
import React from 'react';

interface Props {
  matzipDataCell: MatzipDataType;
}

const MatzipDataCellComponent: React.FunctionComponent<Props> = ({
  matzipDataCell,
}) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View>
      {matzipDataCell.thumbnailUrls.length === 1 && (
        <View style={styles.row}>
          <Image
            source={{
              uri: matzipDataCell.thumbnailUrls[0],
            }}
            style={{
              width: windowWidth,
              height: windowWidth / 3,
            }}
          />
        </View>
      )}
      {matzipDataCell.thumbnailUrls.length === 2 && (
        <View style={styles.row}>
          <Image
            source={{
              uri: matzipDataCell.thumbnailUrls[0],
            }}
            style={{
              width: windowWidth / 2,
              height: windowWidth / 3,
            }}
          />
          <Image
            source={{
              uri: matzipDataCell.thumbnailUrls[1],
            }}
            style={{
              width: windowWidth / 2,
              height: windowWidth / 3,
            }}
          />
        </View>
      )}
      {matzipDataCell.thumbnailUrls.length >= 3 && (
        <View style={styles.row}>
          <Image
            source={{
              uri: matzipDataCell.thumbnailUrls[0],
            }}
            style={{
              width: windowWidth / 3,
              height: windowWidth / 3,
            }}
          />
          <Image
            source={{
              uri: matzipDataCell.thumbnailUrls[1],
            }}
            style={{
              width: windowWidth / 3,
              height: windowWidth / 3,
            }}
          />
          <Image
            source={{
              uri: matzipDataCell.thumbnailUrls[2],
            }}
            style={{
              width: windowWidth / 3,
              height: windowWidth / 3,
            }}
          />
        </View>
      )}
      <View style={{...styles.row, height: 32}}>
        <Text style={styles.title}>{matzipDataCell.title}</Text>
        <Text style={styles.category}>{matzipDataCell.category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
  },
  category: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
});

export default MatzipDataCellComponent;
