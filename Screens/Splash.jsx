import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Splash = () => {
  // Use useRef to create a reference to the animated value
  const scaleValue = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    // Start animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.5, // Zoom in to 1.5x size
          duration: 1000, // Duration of zoom in
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1, // Zoom out back to original size
          duration: 1000, // Duration of zoom out
          useNativeDriver: true,
        }),
      ])
    ).start();
    
  }, [navigation, scaleValue]);

  useEffect(()=>{
   setTimeout(() => {
    navigation.replace("Auth")
   }, 3000);
  },[])

  console.log(navigation)

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { transform: [{ scale: scaleValue }] }]}>
        <Text style={styles.second}>Welcome </Text>
        Sai Kiran...
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF0F3",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  second: {
    fontSize: 30,
  },
});

export default Splash;
