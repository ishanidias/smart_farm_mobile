import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import MyShifts from 'scenes/MyShifts'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import RequestShiftChange from '../../../scenes/RequestShiftChange'
import ModifyShift from '../../../scenes/ModifyShift'
import ViewAllShifts from '../../../scenes/ViewAllShifts'
import ViewIssue from '../../../scenes/ViewIssue'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)


export const MyShiftsNavigator = () => (
  <Stack.Navigator
    initialRouteName="MyShifts"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="MyShifts"
      component={MyShifts}
      options={({ navigation }) => ({
        title: 'MyShifts',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="RequestShiftChange"
      component={RequestShiftChange}
      options={{
        title: 'RequestShiftChange',
      }}
    />
  </Stack.Navigator>
)


export const ViewAllShiftsNavigator = () => (
  <Stack.Navigator
    initialRouteName="ViewAllShifts"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="ViewAllShifts"
      component={ViewAllShifts}
      options={({ navigation }) => ({
        title: 'ViewAllShifts',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="ModifyShift"
      component={ModifyShift}
      options={{
        title: 'ModifyShift',
      }}
    />
  </Stack.Navigator>
)


export const ViewIssueNavigator = () => (
  <Stack.Navigator
    initialRouteName="ViewIssue"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="ViewIssue"
      component={ViewIssue}
      options={({ navigation }) => ({
        title: 'ViewIssue',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    
    
  </Stack.Navigator>
)
