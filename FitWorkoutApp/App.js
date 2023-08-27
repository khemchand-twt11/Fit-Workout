import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'

NativeWindStyleSheet.setOutput({
  default: 'native',
})
export default function App() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='font-bold text-lg'>
        Open up App.js to working on your app!
      </Text>
      <StatusBar style='auto' />
    </View>
  )
}
