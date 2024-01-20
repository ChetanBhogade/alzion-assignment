import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Styles from './CardStyles';
import FastImage from 'react-native-fast-image';

const Card = ({title, price, imageUrl, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.root}>
        <View style={Styles.infoArea}>
          <View>
            <Text style={Styles.cardTag}>Air Purifier</Text>
          </View>
          <Text style={Styles.cardTitle}>{title}</Text>
          <View style={Styles.actionArea}>
            <Text style={Styles.cardPrice}>${price}</Text>
            <FastImage
              source={require('../../assets/icons/likeFilledIcon.png')}
              style={Styles.likeIcon}
              resizeMode={FastImage.resizeMode.contain}
            />
            <FastImage
              source={require('../../assets/icons/cartIcon.png')}
              style={Styles.cartIcon}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>
        <View style={Styles.cardImageArea}>
          <FastImage
            source={{
              uri: imageUrl,
            }}
            style={Styles.cardImage}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
