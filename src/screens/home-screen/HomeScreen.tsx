import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Styles from './HomeScreenStyles';
import Card from '../../components/Card/Card';
import {RootNavigationTypes} from '../../navigations/NavigationModel';

const HomeScreen = ({navigation}: any) => {
  const [listData, setListData] = useState<any[]>([]);

  const fetchData = () => {
    axios
      .get('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
      .then(response => {
        console.log('response.data: ', response.data);
        setListData(response.data);
      })
      .catch(error => {
        console.log('got an error: ', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <View style={Styles.listArea}>
          <FlatList
            data={listData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <Card
                  title={item.name}
                  price={item.price}
                  imageUrl={item.image}
                  onPress={() =>
                    navigation.navigate(
                      RootNavigationTypes.ProductDetailsScreen,
                      {
                        productData: item,
                      },
                    )
                  }
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
