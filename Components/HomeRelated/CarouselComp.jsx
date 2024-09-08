import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const carouselItems = [
  {
    title: 'Item 1',
    image: 'https://images.pexels.com/photos/28173130/pexels-photo-28173130/free-photo-of-brooklyn-train-in-front-of-new-york-city-city-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Item 2',
    image: 'https://images.pexels.com/photos/27100647/pexels-photo-27100647/free-photo-of-view-of-colorful-hot-air-balloons-flying-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Item 3',
    image: 'https://images.pexels.com/photos/28216176/pexels-photo-28216176/free-photo-of-a-white-bike-leaning-against-a-red-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const CarouselComp = () => {
  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={250}
        data={carouselItems}
        scrollAnimationDuration={1000}
        autoplay={true}              
        autoplayInterval={2000}       
        loop={true}                  
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    height: 220,
    // backgroundColor:"red"
  },
  slide: {
    backgroundColor: '#eee',
    borderColor: 'white',
    width: '88%',
   
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 8,
  },
});

export default CarouselComp;
