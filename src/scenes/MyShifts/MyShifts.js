import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, TextInput, ScrollView,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { Calendar } from 'react-native-calendars'

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
  textlabel: {
    color: "black",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  textvalue: {
    color: "black",
    fontWeight: "bold",
    left: 120,
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

  // title: {
  //   color: "#000000",
  //   fontWeight: "bold",
  //   fontSize: 20
  // }
})

const MyShifts = ({ navigation, status_value, from_value, note_value }) => (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home Screen</Text>
    //   {/* <Button
    //     title="Go to Details"
    //     color="white"
    //     backgroundColor={colors.lightPurple}
    //     onPress={() => {
    //       navigation.navigate('Details', { from: 'Profile' })
    //     }}
    //   /> */}
    // </View>

    <View style={styles.centeredView}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.title} >My Shifts</Text>
        <Calendar
          markedDates={{
            '2021-02-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2021-02-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true}
          }}
          />
        
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >Status</Text>
            <TextInput style={styles.inputData} value={status_value} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >From</Text>
            <TextInput style={styles.inputData} value={from_value}  />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.label} >Note</Text>
            <TextInput style={styles.inputData} value={note_value}  
              // multiline
              // numberOfLines={4}
              />
          </View>
        </View>

        <View style={styles.fixToText}>
          <Button
            title="Request Change"
            color="#2f7a4d"
            onPress={() => 
              navigation.navigate('RequestShiftChange', { from: 'MyShifts' })
            }
            />
        </View>

      </ScrollView>
    </View >
)

MyShifts.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

MyShifts.defaultProps = {
  navigation: { navigate: () => null },
}

export default MyShifts
