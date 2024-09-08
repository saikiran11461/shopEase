import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { postLoginUser } from '../Redux/Auth/action';
import { useDispatch } from 'react-redux';





const Login = () => {

 const navigation = useNavigation();
 const dispatch = useDispatch();

 const [email,setEmail] = useState(null);
 const [password,setPassword] = useState(null);
 const [showError,setShowError] = useState(null);

 const handleSubmit = ()=>{
  // const payload={
  //   email,
  //   password
  // }
  //   dispatch(postLoginUser(payload))
  //   .then(res=>{
  //     console.log("response", res)
  //     if(res?.payload?.message === "login success"){
  //       navigation.navigate("App")
  //     }
  //     if(res?.payload?.response?.data?.message){
  //       setShowError(res?.payload?.response?.data?.message)
  //     }
  //   })
  //   .catch(err=>{
  //     console.log("error", err)
  //   })

  navigation.navigate("AppTabs")
 }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>Join us to start shopping!</Text>
      </View>

      <View style={styles.form}>
        {showError && <Text style={{color:"red", textAlign:"center"}}>{showError}</Text>}

        <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="Password" secureTextEntry />

      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} >
        <Text style={styles.googleButtonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Not Register Yet ? <Text style={styles.link}>Register</Text></Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF0F3',
    padding: 16,
    paddingVertical:100
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  form: {
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: 'black', // Google Red
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#FF6F61',
    fontWeight: 'bold',
  },
});

export default Login;
