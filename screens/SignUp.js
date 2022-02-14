import React, {useState} from 'react';
import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Platform, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import LignInput from '../components/LignInput';
import ForSignUpButton from '../components/ForSignUpButton';
import { useSignUpDataContext } from '../contexts/SignUpDataContext';

function SignUp({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const {setSignUpData} = useSignUpDataContext();
  const createChangeTextHandler = (name) => (value) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    Keyboard.dismiss();
    const SignUpData = {
      email: form.email,
      password: '',
    };
    console.log(SignUpData);
    setSignUpData(SignUpData);
    console.log(setSignUpData.email);
  }
  return (
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        style={{ alignSelf: 'stretch', marginTop:100 }}
      >
      <Text style={styles.text}>이메일</Text>
      <View style={styles.form}>
        <LignInput
          hasMarginBottom
          placeholder="이메일을 입력하세요"
          value={form.email}
          onChangeText={createChangeTextHandler('email')}
          autoCapitalize='none'
          autoCompleteType="email"
          keyboardType="email-address"
          onSubmitEditing={onSubmit}
          returnKeyType="done"
          />
      </View>
      </ScrollView>
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         keyboardVerticalOffset={Platform.select({ios: 80})}
         style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'stretch', marginBottom: 10 }}
        >
        <View style={styles.buttons}>
          <ForSignUpButton 
            style={styles.button}
            title="계속하기"
            onPress={() => {
              onSubmit()
              navigation.navigate('SignUpPassword', {emailPush: form.email})
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  text: {
    marginLeft: 38,
    fontSize: 20,
  },
  form: {
    marginTop: 12,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    padding: 10
  },
  button: {
    position: 'absolute',
    bottom: 30,
  },
  keyboardAvoidingView: {
    flex:1
  }
});

export default SignUp;