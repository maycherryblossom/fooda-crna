import React, {useState} from 'react';
import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import LignInput from '../components/LignInput';
import ForSignUpButton from '../components/ForSignUpButton';
import { useSignUpDataContext } from '../contexts/SignUpDataContext';
import { signIn, signUp } from '../lib/auth';

function SignUpPassword({ route, navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    comfirmPassword: '',
  });
  const [loading, setLoading] = useState();
  const {setSignUpData} = useSignUpDataContext();
  const createChangeTextHandler = (name) => (value) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = async () => {
    Keyboard.dismiss();
    const SignUpData = {
      email: emailPush,
      password: form.password,
    };
    console.log(SignUpData);
    setSignUpData(SignUpData);
    console.log(setSignUpData.password);
    const { email, password } = SignUpData;
    const info = {email, password};
    setLoading(true);
    try {
      const {user} = await signUp(info);
      console.log(user);
    } catch (e) {
      Alert.alert('실패');
      console.log(e)
    } finally {
      setLoading(false);
    }
  }
  const { emailPush } = route.params;
  return (
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        style={{ alignSelf: 'stretch', marginTop:100 }}
      >
      <Text style={styles.text}>비밀번호</Text>
      <View style={styles.form}>
        <LignInput
          hasMarginBottom
          placeholder="비밀번호를 입력하세요"
          value={form.password}
          onSubmitEditing={onSubmit}
          onChangeText={createChangeTextHandler('password')}
          autoCapitalize="none"
          autoCorrect={false}
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
              navigation.navigate("Tabs")
              // navigation.navigate('SignUpPassword', {emailPush: form.email})
            }}
            loading={loading}
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

export default SignUpPassword;