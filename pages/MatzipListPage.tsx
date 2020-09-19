import {FlatList, SafeAreaView} from 'react-native';

import MatzipDataCellComponent from '../components/MatzipDataCell';
import {MatzipDataType} from '../actions/MatzipDataListActionTypes';
import {MatzipListProps} from '../navigations/MainStackNavigation';
import React from 'react';

const MatzipListPage = ({route, navigation}: MatzipListProps) => {
  const goToDetail = (matzipData: MatzipDataType) => {
    navigation.navigate('MatzipDetailPage', {
      detailPageUrl: matzipData.detailPageUrl,
      title: matzipData.title,
    });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={route.params.matzipList}
        keyExtractor={(_, index) => `${index}`}
        renderItem={(data) => (
          <MatzipDataCellComponent
            goToDetail={goToDetail}
            matzipDataCell={data.item}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MatzipListPage;
