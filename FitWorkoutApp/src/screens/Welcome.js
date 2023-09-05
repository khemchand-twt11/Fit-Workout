import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

function Welcome() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Image
        source={require('../assets/fitman.jpg')}
        className='h-screen w-full'
      />
      <View className='absolute bottom-32 flex justify-center items-center w-full'>
        <Text className='text-white text-4xl font-bold  font-mono mb-1'>
          FitWorkout
        </Text>
        <Text className='mb-10 text-white font-medium text-center text-2xl w-full'>
          Train Insane or Remain the Same.
        </Text>
        <TouchableOpacity className='bg-[#d5ff5f] max-w-md px-4 py-2 rounded-lg w-56'>
          <Text className='text-black text-center font-bold text-lg'>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
