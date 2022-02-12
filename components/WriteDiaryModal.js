import { View, Text, Pressable, StyleSheet } from 'react-native';

const WriteDiaryModal = ({ navigation }) => {
  return (
      <View style={{ flex: 1 }}>
        <Pressable
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
          ]}
          onPress={navigation.goBack}
        />
        <View 
          style={{
            width: '100%', 
            height: '89%', 
            position: 'absolute', 
            bottom: 0, 
            backgroundColor: 'white',
            borderRadius: 30
            }}>
          <Text style={{textAlign: 'center'}}>Create Posts !! This is Modal</Text>
        </View>
      </View>
  )
}

export default WriteDiaryModal