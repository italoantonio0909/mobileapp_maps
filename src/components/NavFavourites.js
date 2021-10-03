import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
const data = [
  {
    id: 1,
    icon: 'home',
    location: 'Paseo',
    destination:
      'El Paseo Shopping Daule, Vicente de Piedrahita, Guayaquil, Daule, Ecuador',
  },
  {
    id: 2,
    icon: 'home',
    location: 'Casa',
    destination:
      'El Paseo Shopping Daule, Vicente de Piedrahita, Guayaquil, Daule, Ecuador',
  },
]
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  )
}

const styles = StyleSheet.create({})

export default NavFavourites
