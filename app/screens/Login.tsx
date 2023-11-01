import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native';

import { Colors } from '../utils/colors';

export default function Login() {
 const { width, height } = Dimensions.get('window');
  return (
      <View style = {styles.container}>
        
     </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundImage: 'linear-gradient(45deg, #f06, #9f6)',
    },
  });
  