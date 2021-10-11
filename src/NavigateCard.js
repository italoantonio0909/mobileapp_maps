import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { setDestination } from './state/slices/navSlices'
import NavFavourites from './components/NavFavourites'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const NavigateCard = function ({ navigation }) {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={googlePlacesCustom}
            query={{ key: GOOGLE_MAPS_APIKEY, language: 'es' }}
            placeholder="A dónde vas?"
            fetchDetails={true}
            returnKeyType="search"
            debounce={400}
            onPress={(data, details) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              )
              navigation.navigate('NavigateOptionRide')
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateOptionRide')}
          style={tw`flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon type="font-awesome" color="white" size={16} name="car" />
          <Text style={tw`text-white text-center`}>Paseos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-between flex-row w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            type="ionicon"
            color="black"
            size={16}
            name="fast-food-outline"
          />
          <Text style={tw`text-black text-center`}>Comida</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const googlePlacesCustom = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})

export default NavigateCard
