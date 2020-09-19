import { Button, Modal, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants/Constants'
import React from 'react'

interface Props {
 visible: boolean,
 errorMessage: string,
 closeModal: () => void
}

const ErrorModal: React.FunctionComponent<Props> = ({ visible, errorMessage, closeModal }) => {
 return <Modal animationType={'fade'} transparent={true} visible={visible}>
  <View style={styles.ModalContainer}>
   <View style={styles.Card}>
    <View style={styles.ErrorContainerView}>
     <Text style={[styles.TextThick, styles.TextWhiteColor, styles.TextBig]}>Error!!</Text>
    </View>
    <View style={[styles.ErrorMessageContainer]}>
     <Text>{errorMessage}</Text>
    </View>
    <View style={{ marginBottom: 10 }}>
     <Button title={'닫기'} onPress={closeModal} />
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
  height: 270,
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
  flex: 1,
  alignItems: 'center',
  paddingTop: 20,
  paddingHorizontal: 10
 }
})

export default ErrorModal