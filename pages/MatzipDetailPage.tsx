import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {MatzipDetailProps} from '../navigations/MainStackNavigation';
import {RootReducerType} from '../Store';
import {fetchMatzipDetailData} from '../actions/MatzipDetailDataActions';

const MatzipDetailPage = ({route, navigation}: MatzipDetailProps) => {
  const dispatch = useDispatch();
  const matzipDetailReducer = useSelector(
    (state: RootReducerType) => state.MatzipDetailDataReducer,
  );

  useEffect(() => {
    const url = route.params.detailPageUrl;
    dispatch(fetchMatzipDetailData(url));
  }, []);

  useEffect(() => {
    if (matzipDetailReducer.loading === false) {
      console.log('fetched data!');
      console.log(matzipDetailReducer.matzip);
    }
  }, [matzipDetailReducer.loading]);

  return (
    <SafeAreaView>
      <Text>Detail page</Text>
    </SafeAreaView>
  );
};

export default MatzipDetailPage;
