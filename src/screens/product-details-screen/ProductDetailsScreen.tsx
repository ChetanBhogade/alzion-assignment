import {View, Text} from 'react-native';
import React from 'react';
import Styles from './ProductDetailsScreenStyles';
import FastImage from 'react-native-fast-image';

const ProductDetailsScreen = ({navigation, route}: any) => {
  const {productData} = route.params;

  return (
    <View style={Styles.root}>
      <View>
        <Text>{productData.name}</Text>
      </View>
      <View>
        <FastImage
          source={{
            uri: productData.image,
          }}
          style={Styles.cardImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
