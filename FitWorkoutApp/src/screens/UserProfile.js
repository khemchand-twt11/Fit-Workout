// UserProfileScreen.js
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

function UserProfileScreen() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const handleSaveProfile = () => {
    // Save user profile data here
  }

  return (
    <View style='flex: 1, justify-center, items-center'>
      <Text style='text-2xl, mb-4'>User Profile</Text>
      <TextInput
        style='border, rounded-md, p-2, w-80, mb-2'
        placeholder='Name'
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style='border, rounded-md, p-2, w-80, mb-2'
        placeholder='Age'
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style='border, rounded-md, p-2, w-80, mb-2'
        placeholder='Gender'
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <Button title='Save Profile' onPress={handleSaveProfile} />
    </View>
  )
}

export default UserProfileScreen
