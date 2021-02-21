import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, TextInput, Alert,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { ScrollView } from 'react-native-gesture-handler'
import {Picker} from '@react-native-community/picker';


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

const ModifyShift = ({ route, navigation, date_value, from_value, to_value, workers_value }) => {
  const from = route?.params?.from
  
  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.title} >Modify Shift</Text>

        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >Date</Text>
            <TextInput style={styles.inputData} value={date_value} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >From</Text>
            <TextInput style={styles.inputData} value={from_value} 
              />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >To</Text>
            <TextInput style={styles.inputData} value={to_value} 
              />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >Work Group</Text>
            <TextInput style={styles.inputData} value={date_value} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >Workers</Text>
            <Picker
              selectedValue={workers_value}
              style={{height: 50, width: 100}}>
              <Picker.Item label="User 1" value="user1" />
              <Picker.Item label="User 2" value="user2" />
            </Picker>          
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
      </ScrollView>
    </View>
  )
}

ModifyShift.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

ModifyShift.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default ModifyShift
