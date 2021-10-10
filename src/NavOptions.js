import { Icon } from 'react-native-elements'
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { selectOrigin } from './state/slices/navSlices'

const data = [
  {
    id: 123,
    title: 'Pedir un carro',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 456,
    title: 'Ordenar comida',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen',
  },
]
const NavOPtions = function (props) {
  const navigation = useNavigation()
  const origin = useSelector(selectOrigin)
  console.log('actual ', origin)

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              color="white"
              name="arrowright"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  )
}

export default NavOPtions
