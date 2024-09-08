import Header from '../Components/HomeRelated/Header'
import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CarouselComp from '../Components/HomeRelated/CarouselComp'
import Recommended from '../Components/HomeRelated/Recommended'
import MenRecomended from '../Components/HomeRelated/MenRecomended'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
   <ScrollView>
     <SafeAreaView style={Styles.container}>
        <Header/>
        <CarouselComp/>
        <Recommended/>
        <MenRecomended/>
        <MenRecomended/>
    </SafeAreaView>
   </ScrollView>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FDF0F3",
    paddingHorizontal:25,
  
  }
})
export default Home