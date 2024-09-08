import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getMenProducts } from '../../Redux/App/action';
import { useNavigation } from '@react-navigation/native';

const MenRecomended = () => {
    const store = useSelector(state => state.app.menProducts);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    
    useEffect(() => {
        dispatch(getMenProducts())
            .then(res => {
                // Handle success if necessary
            })
            .catch(err => {
                console.log("err", err);
            });
    }, [dispatch]);

    return (
        <View >
   <TouchableOpacity onPress={() => navigation.push('ProductStack', { screen: 'MenCollection' })}>
    <Text>go to men</Text>
   </TouchableOpacity>

              <Text  style={Styles.viewAllText}>View All</Text>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          
            {
                store?.splice(0,5).map((item, index) => (
                    <View key={index}>
                        <Image style={Styles.image} source={{ uri: item.image }} /> 
                        <Text style={Styles.title}>{item.title}</Text>
                        <Text style={Styles.price}>${item.price}</Text>
                    </View>
                ))
            }
        </ScrollView>

        </View>
      
    );
};

const Styles = StyleSheet.create({
    viewAllText: {
        textAlign: "right",
        marginVertical: 15,
        fontFamily: "poppins",
        fontWeight: "400",
        fontSize: 12,
        marginHorizontal: 10,
        color: "grey"
    },
    image: {
        width: 150,  
        height: 240,
        borderRadius:20,
        marginLeft:10
    },
    title:{
        fontSize:18,
        fontWeight:500,
        lineHeight:27,
        color:"#444444",
        marginLeft:13
    },
    price:{
        fontSize:18,
        fontWeight:500,
        lineHeight:27,
        color:"#9C9C9C",
        marginLeft:13
    }

});

export default MenRecomended;
