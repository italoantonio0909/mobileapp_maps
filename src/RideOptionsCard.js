import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: 1,
    title: 'Uber X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 2,
    title: 'Uber XL',
    multiplier: 1,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 3,
    title: 'Uber LUX',
    multiplier: 1,
    image: 'https://links.papareact.com/7pf',
  },
]
const RideOptionsCard = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 z-50 left-5 p-3 rounded-full`}
        >
          <Icon type="fontawesome" name="chevron-left" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Selecciona un auto</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, image, multiplier } }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-10`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl`}>$5.40</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  )
}

export default RideOptionsCard
