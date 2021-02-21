import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, TextInput, Alert,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },




  centeredView: {
    padding: 20,
    paddingTop: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height:100
  },
  inputWrap: {
    flex: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingTop: 20
  },
  inputData: {
    fontSize: 14,
    color: "#6a4595",
    paddingTop: 20
  },
  inputcvv: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595"
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const RequestShiftChange = ({ route, navigation, reason_value }) => {
  const from = route?.params?.from
  return (
    <View style={styles.centeredView}>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >Reason</Text>
            <TextInput style={styles.inputData} value={reason_value} 
              />
          </View>
        </View>
        <View style={styles.fixToText}>
          <Button
            title="Cancel"
            onPress={() => {}}
          />
          <Button
            title="Submit"
            onPress={() => Alert.alert('Request Send Successfully')}
          />
        </View>
    </View>
  )
}

RequestShiftChange.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

RequestShiftChange.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default RequestShiftChange
