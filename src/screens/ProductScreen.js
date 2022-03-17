import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import {useFocusEffect} from '@react-navigation/native';
import Button from '@ant-design/react-native/lib/button';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../store/count/countSlice';

const ProductScreen = props => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.count);

  function ProfileWithSub({navigation}) {
    React.useEffect(() => {
      const unsubscribe = props.navigation.addListener('focus', () => {
        // Screen was focused
        // Do something
      });

      return unsubscribe;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);
  }
  function Profile() {
    useFocusEffect(
      // instead of regular use effect
      // connected with screen lifecycle
      React.useCallback(() => {
        // Do something when the screen is focused

        return () => {
          // Do something when the screen is unfocused
          // Useful for cleanup functions
        };
      }, []),
    );
  }
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
      <Button
        style={styles.button}
        onPress={() => dispatch(increment(1))} //navigation.navigate('Product')}
        // onPress={() => props.navigation.goBack()} //navigation.navigate('Product')}
      >
        <IconFill size={30} name="account-book" />
        <IconOutline size={30} name="account-book" />
        Back to home but count is {count}
      </Button>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'green',
  },
});
