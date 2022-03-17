import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation, route}) => {
  /* 2. Get the param */
  //   const {itemId, otherParam} = route.params;
  const {count} = useSelector(state => state.count);

  const setParametersBuffer = () => {
    navigation.setParams({
      query: 'someText',
    });
  };
  return (
    <View style={styles.container}>
      <Text>HomeScreen {count}</Text>
      <Button
        title="Go to Products"
        onPress={() =>
          navigation.navigate('Product', {
            // passing parameters when navigating
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
  },
});
