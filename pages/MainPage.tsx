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
import {RootReducerType} from '../Store';
import {fetchAddress} from '../actions/AddressActions';
import {getLocation} from '../actions/LocationActions';

const MainPage = () => {
  const dispatch = useDispatch();
  const locationReducer = useSelector(
    (state: RootReducerType) => state.LocationReducer,
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
        Alert.alert('맛집찾아줘', error.message);
        setRefreshing(false);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

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
            }}>
            <Text style={{...styles.text}}>근처맛집</Text>
          </TouchableOpacity>
          <View style={{...styles.row}}>
            <TouchableOpacity style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>한식</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>일식</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.row}}>
            <TouchableOpacity style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>양식</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.column, ...styles.shadowBox}}>
              <Text style={{...styles.text}}>중식</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
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
