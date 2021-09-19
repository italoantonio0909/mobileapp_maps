import { Block, Text } from 'galio-framework'
import React from 'react'
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native'
import Images from '../../constants/Images'
import Theme from '../../constants/Theme'

const { width, height } = Dimensions.get('screen')

function SignIn(props) {
  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={Images.Onboarding}
        style={{ width, height, zIndex: 1 }}
      >
        <Block flex middle>
          <Block style={styles.loginContainer}></Block>
        </Block>
      </ImageBackground>
    </Block>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
})
export default SignIn
