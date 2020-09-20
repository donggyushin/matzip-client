import { Button, Modal, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants/Constants'
import React from 'react'

interface Props {
 visible: boolean,
 closeModal: () => void,
 getCurrentLocation: () => void,
 requestAuthorize: () => void
}

const RequestLocationModal: React.FunctionComponent<Props> = ({ visible, closeModal, requestAuthorize }) => {
 const allowLocation = () => {

  requestAuthorize()
  closeModal()
 }
 return <Modal animationType={'slide'} transparent={true} visible={visible}>
  <View style={styles.ModalContainer}>
   <View style={styles.Card}>
    <View style={styles.ErrorContainerView}>
     <Text style={[styles.TextThick, styles.TextWhiteColor, styles.TextBig]}>Error!!</Text>
    </View>
    <View style={[styles.ErrorMessageContainer]}>
     <Text style={{ textAlign: 'center' }}>{"위치 정보를 받아오는데 실패하였습니다."}</Text>
     <Text style={{ textAlign: 'center' }}>{"'맛집찾아줘' 에서 해당 디바이스에서 위치 정보를 받아오는데 허용하시겠습니까?"}</Text>
    </View>
    <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: "center" }}>
     <Button title={'허용'} onPress={allowLocation} />
     <Button title={'취소'} onPress={closeModal} />
    </View>
   </View>
  </View>
 </Modal>
}

const styles = StyleSheet.create({
 ModalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.2)'
 },
 Card: {
  backgroundColor: 'white',
  width: '80%',
  // height: 270,
  borderRadius: 16,
  overflow: 'hidden'
 },
 ErrorContainerView: {
  backgroundColor: COLORS.blue,
  width: '100%',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center'
 },
 TextWhiteColor: {
  color: 'white'
 },
 TextThick: {
  fontWeight: 'bold'
 },
 TextBig: {
  fontSize: 20
 },
 ErrorMessageContainer: {

  paddingTop: 20,
  paddingHorizontal: 10,
  paddingBottom: 20,

 }
})

export default RequestLocationModal