import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../constants/Constants';
import {Dimensions} from 'react-native';
import {MatzipDataType} from '../actions/MatzipDataListActionTypes';
import React from 'react';

interface Props {
  matzipDataCell: MatzipDataType;
  goToDetail: (matzipData: MatzipDataType) => void;
}

const MatzipDataCellComponent: React.FunctionComponent<Props> = ({
  matzipDataCell,
  goToDetail,
}) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity onPress={() => goToDetail(matzipDataCell)}>
      <View style={styles.container}>
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
        <View style={{...styles.row, height: 38}}>
          <Text style={styles.title}>{matzipDataCell.title}</Text>
          {matzipDataCell.category.length !== 0 && (
            <Text style={styles.category}>{matzipDataCell.category}</Text>
          )}
          {matzipDataCell.delievery.length !== 0 && (
            <View style={styles.delievery}>
              <Text style={styles.delieveryText}>
                {matzipDataCell.delievery}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            ...styles.row,
            paddingLeft: 10,
            marginBottom: 10,
          }}>
          <Text style={styles.description}>{matzipDataCell.description}</Text>
        </View>
        <View
          style={{
            ...styles.row,
            paddingLeft: 7,
            height: 20,
          }}>
          <Text style={styles.star}>⭐️ {matzipDataCell.star}</Text>
          <Text style={styles.review}>{matzipDataCell.visitorReview}</Text>
          <Text style={styles.review}>{matzipDataCell.blogReview}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    color: COLORS.blue,
  },
  category: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
  delievery: {
    backgroundColor: COLORS.green,
    padding: 2,
    borderRadius: 4,
    marginLeft: 4,
  },
  delieveryText: {
    color: 'white',
  },
  star: {
    fontSize: 16,
    marginRight: 10,
  },
  review: {
    marginLeft: 7,
    fontSize: 16,
    color: 'gray',
  },
  description: {
    fontSize: 16,
  },
});

export default MatzipDataCellComponent;
