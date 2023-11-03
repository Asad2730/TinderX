import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/colors';
import CustomBtn from '../components/CustomBtn';

const { width, height } = Dimensions.get('window');

export default function Login() {


  return (
    <LinearGradient
      colors={[
        `${Colors.primary_shade_1}`,
        `${Colors.primary_shade_1}`,
        `${Colors.primary_shade_3}`,
        `${Colors.primary_shade_4}`,
      ]}
      style={styles.container}
    >
      <View style={styles.contentView}>

        <View style={styles.logoView}>
          
          <View style={styles.logo}>
            <Image source={require('../assets/logo.png')} />
            <Text style={styles.logtxt}>Tinder</Text>
          </View>

          <View style={styles.txtSection}>
            <Text style={styles.txtStyle}>
              By Tapping Create Account or Sign In, You agree To
            </Text>
            <Text style={styles.underline}> Terms,</Text>
            <Text> Learn how we Process Your data in our </Text>
            <Text style={styles.underline}> Privacy Policy,</Text>
            <Text> and </Text>
            <Text style={styles.underline}> Cookies Policy.</Text>
          </View>
        </View>


        <View style={styles.btnsContainer}>
          <CustomBtn
            height={height * 0.08}
            width={width * 0.8}
            text={'SIGN IN WITH APPLE'}
          />
        </View>

        <View style={styles.btnsContainer}>
          <CustomBtn
            height={height * 0.1}
            width={width * 0.8}
            text={'SIGN IN WITH FACEBOOK'}
          />
        </View>

        <View style={styles.btnsContainer}>
          <CustomBtn
            height={height * 0.1}
            width={width * 0.8}
            text={'SIGN IN WITH PHONENUMBER'}
          />
        </View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    alignItems: 'center',
    width: width * 0.5,
    flexDirection: 'column'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    flexDirection: 'row',
  },
  txtStyle: {
    color: Colors.white,
    width: 80,
  },
  logtxt: {
    color: Colors.white,
    width: 100,
  },
  underline: {
    textDecorationLine: 'underline',
    color: Colors.light_white,
  },
  colView: {
    flexDirection: 'column'
  },
  btnsContainer: {
    marginTop: 10,
  },
  txtSection: {
    marginTop: 200,
  },
});
