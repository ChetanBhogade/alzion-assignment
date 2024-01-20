import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {SharedElement} from 'react-navigation-shared-element';
import Styles from './CardStyles';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
}

interface ICard {
  product: IProduct;
  onPress: () => void;
}

const Card = ({product, onPress}: ICard) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.root}>
        <View style={Styles.infoArea}>
          <View>
            <Text style={Styles.cardTag}>Air Purifier</Text>
          </View>
          <Text style={Styles.cardTitle}>{product.name}</Text>
          <View style={Styles.actionArea}>
            <Text style={Styles.cardPrice}>${product.price}</Text>
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
          <SharedElement id={`item.${product.id}.image`}>
            <FastImage
              source={{
                uri: product.image,
              }}
              style={Styles.cardImage}
              resizeMode={FastImage.resizeMode.contain}
            />
          </SharedElement>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
