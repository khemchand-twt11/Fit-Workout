import { Button, Text, View } from 'react-native'
const data = [
  { name: 'gaurav' },
  { name: 'saurabh' },
  { name: 'vivek' },
  { name: 'shri' },
  { name: 'manish' },
]
function Welcome({ navigation }) {
  return (
    <View className='bottom-0 border-2 mt-0  w-full'>
      <Text className='text-2xl'>hi hello</Text>
      <Button
        title='Get Started'
        onPress={() => navigation.navigate('UserProfile')}
      />
      {data.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  )
}

export default Welcome
