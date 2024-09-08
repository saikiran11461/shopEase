import React from 'react'
import { View,Text,TouchableOpacity, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const Recommended = () => {
  const tags = [
    "Trending Now","Popular",,"Women","Kids","All", "Men"
  ]
  return (
    <View>
       <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={Styles.Container}>
       {
        tags?.map((item,index)=>(
          <TouchableOpacity  key={index} style={Styles.btn}>
            <Text style={Styles.text}>{item}</Text>
          </TouchableOpacity>
        ))
       }
       </ScrollView>
       
    </View>
  )
}

const Styles =  StyleSheet.create({
  btn:{
   
    paddingHorizontal:10,
    paddingVertical:8,
    borderRadius:13,
    marginHorizontal:2,
    backgroundColor:'#DFDCDC'
  },
  Container:{
    display: 'flex',
    flexDirection: 'row',
  },
  text:{
    fontSize:16,
    color:"#938F8F",
    fontWeight:600,
    lineHeight:24
    
  }
})

export default Recommended