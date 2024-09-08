import React from 'react'
import { View,Text, StyleSheet, Image} from 'react-native'
import FontAwsome from "@expo/vector-icons/FontAwesome"
import Apps from "../../assets/apps.png"
import Logo from "../../assets/Ellipse 2.png"
import { TextInput } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/FontAwesome"
import Vector from "../../assets/Vector.png"
const Header = () => {
  return (
    <View>
       <View style={Styles.profileContainer}>
            <Image style={Styles.image} source={Apps} />
            <Image style={Styles.image} source={Logo} />
       </View>
       <View style={Styles.Heading}>
        <Text style={Styles.HeadingText}>Match Your Style</Text>
       </View>
       <View style={Styles.inputContainer}>
        <TextInput style={Styles.Input}/>
        <Image  source={Vector} style={Styles.icon}/>
       </View>
    </View>
  )
}


const Styles = StyleSheet.create({
    profileContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        marginBottom:10
    },
    image:{
        width:40,
        height:40
    },
    Heading:{
        marginVertical:10
    },
    HeadingText:{
        fontSize:28,
        fontWeight:400,
        lineHeight:42
    },
    Input:{
   
     paddingVertical:14,
     borderRadius:12,
     backgroundColor:"white",
     paddingHorizontal:50,
     fontSize:20


    },
    inputContainer:{
        position:"relative"
    },
    icon:{
       width:18.5,
       height:18.5,
       position:"absolute",
       top:15,
       left:20
    }
})
export default Header