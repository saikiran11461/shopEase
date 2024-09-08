import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { postRegisterUser } from '../Redux/Auth/action';

const Register = () => {

 const navigation = useNavigation();
 const dispatch = useDispatch();


 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [number,setNumber] = useState("");
 const [password,setPassword] = useState("");
 const [showError,setShowError] = useState(null)

 const handleSubmit= ()=>{
  console.log(name,email, number, password);
  const payload ={
    name,
    email,
    number,
    password
  }
  dispatch(postRegisterUser(payload))
  .then(res=>{
    console.log("response",res)
    if(res?.payload?.message === "Sign up successful"){
       navigation.navigate("Login")
    }
    if(res?.payload?.response?.data?.message){
      setShowError(res?.payload?.response?.data?.message)
    }

  })
  .catch(err=>{
    console.log(err)
  })
 }

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
      
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>Join us to start shopping!</Text>
      </View>

      <View style={styles.form}>
      {showError && <Text style={{color:'red',textAlign:"center", margin:"10px"}}>{showError}</Text>}
        <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Full Name" />
        <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        <TextInput value={number} onChangeText={setNumber} style={styles.input} placeholder="Number"  />
        <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      <TouchableOpacity  style={styles.button}  onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} >
        <Text style={styles.googleButtonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? <Text style={styles.link}>Log In</Text></Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF0F3',
    padding: 16,
    paddingVertical:60,
    
    justifyContent:"center"
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

export default Register;
