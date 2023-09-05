import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'
import AppNavigation from './src/navigation/AppNavigation'

NativeWindStyleSheet.setOutput({
  default: 'native',
})
export default function App() {
  return <AppNavigation />
}
