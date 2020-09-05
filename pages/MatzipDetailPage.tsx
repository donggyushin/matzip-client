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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fetchMatzipDetailData} from '../actions/MatzipDetailDataActions';

const MatzipDetailPage = ({route, navigation}: MatzipDetailProps) => {
  const dispatch = useDispatch();
  const matzipDetailReducer = useSelector(
    (state: RootReducerType) => state.MatzipDetailDataReducer,
  );

  const [windowWidth, setWindowWidth] = useState(0);
  const [worktimeExpanded, setWorktimeExpanded] = useState(false);

  useEffect(() => {
    const url = route.params.detailPageUrl;
    const windowWidth = Dimensions.get('window').width;
    setWindowWidth(windowWidth);
    dispatch(fetchMatzipDetailData(url));
  }, []);

  const toggleWorktimeExpanded = () => {
    setWorktimeExpanded((snapshot) => !snapshot);
  };

  const renderWorkTime = () => {};

  if (matzipDetailReducer.loading) {
    return <LoadingComponent />;
  } else {
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
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
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('../assets/icons8-call-100.png')}
                />
                <Text
                  style={{
                    color: COLORS.gray,
                  }}>
                  전화
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 1,
                height: '80%',
                backgroundColor: COLORS.lightGray,
              }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('../assets/icons8-share-120.png')}
                />
                <Text
                  style={{
                    color: COLORS.gray,
                  }}>
                  공유
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '88%',
            }}>
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                // alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
                source={require('../assets/icons8-location-96.png')}
              />
              <View>
                <Text style={{...styles.fontSize}}>
                  {matzipDetailReducer.matzip.address1}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  {matzipDetailReducer.matzip.address2.length !== 0 && (
                    <View
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 9,
                        backgroundColor: COLORS.green,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 4,
                      }}>
                      <Text style={{color: 'white'}}>
                        {matzipDetailReducer.matzip.address2.substr(0, 1)}
                      </Text>
                    </View>
                  )}
                  <Text style={{fontSize: 16, color: COLORS.gray}}>
                    {matzipDetailReducer.matzip.address2.substr(1)}
                  </Text>
                </View>
              </View>
            </View>
            {matzipDetailReducer.matzip.workTime.length !== 0 &&
            worktimeExpanded ? (
              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                  }}
                  source={require('../assets/icons8-clock-96.png')}
                />

                <View>
                  {matzipDetailReducer.matzip.workTime.map((value, index) => {
                    if (
                      index ===
                      matzipDetailReducer.matzip.workTime.length - 1
                    ) {
                      return (
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{...styles.fontSize, marginRight: 5}}>
                            {value}
                          </Text>
                          <TouchableOpacity onPress={toggleWorktimeExpanded}>
                            <Image
                              style={{
                                width: 18,
                                height: 18,
                              }}
                              source={require('../assets/icons8-collapse-arrow-90.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    } else {
                      return <Text style={{...styles.fontSize}}>{value}</Text>;
                    }
                  })}
                </View>
              </View>
            ) : undefined}
            {matzipDetailReducer.matzip.workTime.length !== 0 &&
            !worktimeExpanded ? (
              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                  }}
                  source={require('../assets/icons8-clock-96.png')}
                />
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{...styles.fontSize, marginRight: 5}}>
                      {matzipDetailReducer.matzip.workTime[0]}
                    </Text>
                    <TouchableOpacity onPress={toggleWorktimeExpanded}>
                      <Image
                        style={{
                          width: 18,
                          height: 18,
                        }}
                        source={require('../assets/icons8-expand-arrow-96.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : undefined}
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
    alignItems: 'center',
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
