import React from 'react'
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  View,
} from 'react-native'
import Images from '../../constants/Images'
import { Block, Button, Text, theme } from 'galio-framework'
import themeOnboarding from '../../constants/Theme'

const { width, height } = Dimensions.get('screen')

const Onboarding = function ({ navigation }) {
  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <Block flex center>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block>
              <Text color="white" size={60}>
                Viaja y haz pedidos.
              </Text>
            </Block>
            <Block style={styles.subTitle}>
              <Text color="white" size={16}>
                Para poder continuar debes tener una cuenta o iniciar sesión.
              </Text>
            </Block>
          </Block>
          <Block center>
            <Button
              style={styles.button}
              color={themeOnboarding.COLORS.SECONDARY}
              onPress={(e) => navigation.navigate('App')}
              textStyle={{ color: themeOnboarding.COLORS.BLACK }}
            >
              Empezar
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeOnboarding.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  subTitle: {
    marginTop: 20,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
})

export default Onboarding
