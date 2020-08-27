import {Alert, FlatList, SafeAreaView, Text} from 'react-native';
import {
  MatzipListPageNavigationProp,
  MatzipListPageRouteProp,
} from '../navigations/MainStackNavigation';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {APP_NAME} from '../constants/Constants';
import LoadingComponent from '../components/LoadingComponent';
import MatzipDataCellComponent from '../components/MatzipDataCell';
import {RootReducerType} from '../Store';
import {fetchingMatzipData} from '../actions/MatzipDataListActions';

type Props = {
  route: MatzipListPageRouteProp;
  navigation: MatzipListPageNavigationProp;
};

const MatzipListPage = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const matzipListDataState = useSelector(
    (state: RootReducerType) => state.MatzipDataListReducer,
  );

  useEffect(() => {
    callFetchingMatzipListData();
  }, []);

  const callFetchingMatzipListData = () => {
    const {area1Name, area2Name, area3Name, category} = route.params;
    dispatch(fetchingMatzipData(area1Name, area2Name, area3Name, category));
  };

  const goBack = () => {
    navigation.goBack();
  };

  if (matzipListDataState.error) {
    Alert.alert(
      APP_NAME,
      matzipListDataState.error,
      [{text: 'OK', onPress: goBack}],
      {cancelable: false},
    );
  }

  if (matzipListDataState.loading) {
    return <LoadingComponent />;
  } else {
    return (
      <SafeAreaView>
        <FlatList
          data={matzipListDataState.matzipList}
          keyExtractor={(_, index) => `${index}`}
          renderItem={(data) => (
            <MatzipDataCellComponent matzipDataCell={data.item} />
          )}
        />
      </SafeAreaView>
    );
  }
};

export default MatzipListPage;
