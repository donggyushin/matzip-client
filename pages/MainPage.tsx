import {
  Alert,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Geolocation from '@react-native-community/geolocation';
import InitialScreenComponent from '../components/InitialScreenComponent';
import {MainPageNavigationProp} from '../navigations/MainStackNavigation';
import {RootReducerType} from '../Store';
import {fetchAddress} from '../actions/AddressActions';
import {fetchingChineseData} from '../actions/ChineseDataListActions';
import {fetchingDateData} from '../actions/DateDataListActions';
import {getLocation} from '../actions/LocationActions';

type Props = {
  navigation: MainPageNavigationProp;
};

const MainPage = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const locationReducer = useSelector(
    (state: RootReducerType) => state.LocationReducer,
  );
  const addressReducer = useSelector(
    (state: RootReducerType) => state.AddressReducer,
  );

  const chineseReducer = useSelector(
    (state: RootReducerType) => state.ChineseDataListReducer,
  );
  const dateReducer = useSelector(
    (state: RootReducerType) => state.DateDataListReducer,
  );
  const dessertReducer = useSelector(
    (state: RootReducerType) => state.DessertDataListReducer,
  );
  const japaneseReducer = useSelector(
    (state: RootReducerType) => state.JapaneseDataListReducer,
  );
  const koreanReducer = useSelector(
    (state: RootReducerType) => state.KoreanDataListReducer,
  );
  const nearByReducer = useSelector(
    (state: RootReducerType) => state.NearByDataListReducer,
  );

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    }
  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    }
  }, []);

  useEffect(() => {
    if (!locationReducer.loading) {
      dispatch(
        fetchAddress(
          locationReducer.location.longitude,
          locationReducer.location.latitude,
        ),
      );
    }
  }, [locationReducer.loading]);

  // 모든 데이터를 호출
  useEffect(() => {
    if (!addressReducer.loading) {
      const {area1Name, area2Name, area3Name} = addressReducer.address;
      if (area1Name && area2Name && area3Name) {
        dispatch(fetchingChineseData(area1Name, area2Name, area3Name));
        dispatch(fetchingDateData(area1Name, area2Name, area3Name));
      }
    }
  }, [addressReducer.loading]);

  useEffect(() => {
    if (!dateReducer.loading) {
      console.log(dateReducer.matzipList);
      console.log('데이트 호출');
    }
  }, [dateReducer.loading]);

  const getCurrentLocation = () => {
    //alert("callLocation Called");
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        dispatch(getLocation(currentLongitude, currentLatitude));
        setRefreshing(false);
      },
      (error) => {
        console.log(error);
        Alert.alert('맛집찾아줘', error.message);
        setRefreshing(false);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const goToListPage = (category: string) => {
    if (addressReducer.loading || addressReducer.error) {
      Alert.alert('맛집찾아줘', '현재 유저의 위치가 파악되지 않았습니다.');
      return;
    }

    navigation.navigate('MatzipListPage', {
      area1Name: addressReducer.address.area1Name,
      area2Name: addressReducer.address.area2Name,
      area3Name: addressReducer.address.area3Name,
      category,
    });
  };

  if (
    chineseReducer.loading ||
    dateReducer.loading ||
    dessertReducer.loading ||
    japaneseReducer.loading ||
    koreanReducer.loading ||
    nearByReducer.loading
  ) {
    return <InitialScreenComponent />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.scrollView}>
        <View style={styles.viewContainer}>
          <TouchableOpacity
            style={{
              ...styles.row,
              flex: 0.7,
              ...styles.shadowBox,
            }}
            onPress={() => goToListPage('맛집')}>
            <Text style={{...styles.text}}>근처맛집</Text>
          </TouchableOpacity>
          <View style={{...styles.row}}>
            <TouchableOpacity
              onPress={() => goToListPage('한식')}
              style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>한식</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => goToListPage('일식')}
              style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>일식</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.row}}>
            <TouchableOpacity
              onPress={() => goToListPage('데이트')}
              style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>데이트</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => goToListPage('중식')}
              style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>중식</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => goToListPage('디저트')}
            style={{...styles.row, flex: 0.7, ...styles.shadowBox}}>
            <Text style={{...styles.text}}>디저트</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
  },
});

export default MainPage;
