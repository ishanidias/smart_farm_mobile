import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, TextInput, ScrollView,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { Calendar } from 'react-native-calendars'
import { Card, ListItem, Icon } from 'react-native-elements'


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

})

const issue_list = [
  {
     date: '2021-03-10',
     time: '10.00 am to 2.00 pm',
     issue_type: 'Type 1',
     issue: 'Issue 1',
  },
  {
     date: '2021-03-10',
     time: '10.00 am to 2.00 pm',
     issue_type: 'Type 1',
     issue: 'Issue 1',
  },
 ]

const ViewIssue = ({ navigation, status_value, from_value, note_value }) => (

    <View style={styles.centeredView}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.title} >View Issue</Text>
        <Calendar
          markedDates={{
            '2021-02-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2021-02-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true}
          }}
          />
        
        <Card>
          {
            issue_list.map((u, i) => {
              return (
                <Card>
                  <View key={i} style={styles.user}>
                    <Text style={styles.name}>Date: {u.date}</Text>
                    <Text style={styles.name}>Time: {u.time}</Text>
                    <Text style={styles.name}>Issue type: {u.issue_type}</Text>
                    <Text style={styles.name}>Issue: {u.issue}</Text>

                  </View>
                </Card>
              );
            })
          }
        </Card>

      </ScrollView>
    </View >
)

ViewIssue.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

ViewIssue.defaultProps = {
  navigation: { navigate: () => null },
}

export default ViewIssue
