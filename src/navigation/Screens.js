import React from 'react'
import { Dimensions, SafeAreaView, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Onboarding from '../screens/onboarding/onboarding'
import { SignUp, SignIn } from '../screens/authentication/'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const { width } = Dimensions.get('screen')

function AuthenticationStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      //drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="SignInStack"
    >
      <Drawer.Screen name="SignInStack" component={SignInStack} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  )
}

function SignInStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        option={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Home"
        component={Onboarding}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      ></Stack.Screen>
      {/* <Stack.Screen
        name="AuthenticationStack"
        component={AuthenticationStack}
      /> */}
    </Stack.Navigator>
  )
}
