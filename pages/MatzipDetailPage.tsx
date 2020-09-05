import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../constants/Constants';
import LoadingComponent from '../components/LoadingComponent';
import {MatzipDetailProps} from '../navigations/MainStackNavigation';
import {RootReducerType} from '../Store';
import {fetchMatzipDetailData} from '../actions/MatzipDetailDataActions';

const MatzipDetailPage = ({route, navigation}: MatzipDetailProps) => {
  const dispatch = useDispatch();
  const matzipDetailReducer = useSelector(
    (state: RootReducerType) => state.MatzipDetailDataReducer,
  );

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const url = route.params.detailPageUrl;
    const windowWidth = Dimensions.get('window').width;
    setWindowWidth(windowWidth);
    dispatch(fetchMatzipDetailData(url));
  }, []);

  if (matzipDetailReducer.loading) {
    return <LoadingComponent />;
  } else {
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.row}>
            <Image
              source={{
                uri: matzipDetailReducer.matzip.thumbnails[0],
              }}
              style={{
                width: windowWidth / 2,
                height: windowWidth / 2,
              }}
            />
            <Image
              source={{
                uri: matzipDetailReducer.matzip.thumbnails[1],
              }}
              style={{
                width: windowWidth / 2,
                height: windowWidth / 2,
              }}
            />
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri: matzipDetailReducer.matzip.thumbnails[2],
              }}
              style={{
                width: windowWidth / 2,
                height: windowWidth / 2,
              }}
            />
            <Image
              source={{
                uri: matzipDetailReducer.matzip.thumbnails[3],
              }}
              style={{
                width: windowWidth / 2,
                height: windowWidth / 2,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginTop: 7,
            }}>
            <Text
              style={{
                color: COLORS.gray,
                ...styles.fontSize,
              }}>
              {matzipDetailReducer.matzip.title2}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginTop: 7,
            }}>
            <Text style={styles.fontSize}>
              ⭐️{matzipDetailReducer.matzip.star.substr(0, 4)}
            </Text>
            <Text style={{color: COLORS.gray, ...styles.fontSize}}>{'/5'}</Text>
            <View style={styles.dot} />
            <Text style={{...styles.fontSize, ...styles.fontBlue}}>
              {matzipDetailReducer.matzip.visitorsReview}
            </Text>
            <View style={styles.dot} />
            <Text style={{...styles.fontSize, ...styles.fontBlue}}>
              {matzipDetailReducer.matzip.blogReview}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  scrollView: {
    paddingBottom: 70,
  },
  fontSize: {
    fontSize: 18,
  },
  dot: {
    backgroundColor: COLORS.gray,
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  fontBlue: {
    color: COLORS.blue,
  },
});

export default MatzipDetailPage;
