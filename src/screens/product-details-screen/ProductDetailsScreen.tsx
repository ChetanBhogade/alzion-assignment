import {View, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

import Styles from './ProductDetailsScreenStyles';
import {SharedElement} from 'react-navigation-shared-element';
import {IProduct} from '../../components/Card/Card';

const ProductDetailsScreen = ({route}: any) => {
  const {productData}: {productData: IProduct} = route.params;

  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <View style={Styles.infoArea}>
          <Text style={Styles.tag}>Air Purifier</Text>
          <Text style={Styles.title}>{productData.name}</Text>
          <View style={Styles.detailContainer}>
            <View>
              <Text style={Styles.sectionTitle}>Price</Text>
              <Text style={Styles.sectionValue}>{productData.price}</Text>
            </View>
            <View>
              <Text style={Styles.sectionTitle}>Size</Text>
              <Text style={Styles.sectionValue}>{productData.size}</Text>
            </View>
          </View>
          <View style={Styles.actionArea}>
            <FastImage
              source={require('../../assets/icons/cartIcon.png')}
              style={Styles.cartIcon}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={Styles.likeIconWrapper}>
              <FastImage
                source={require('../../assets/icons/likeFilledIcon.png')}
                style={Styles.likeIcon}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </View>
          <View style={Styles.imageArea}>
            <SharedElement id={`item.${productData.id}.image`}>
              <FastImage
                source={{
                  uri: productData.image,
                }}
                style={Styles.cardImage}
                resizeMode={FastImage.resizeMode.contain}
              />
            </SharedElement>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
