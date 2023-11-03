import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/colors';

interface CustomBtnProps {
  text: string;
  onClick?: () => void;
  width?: number; 
  height?: number; 
}

export default function CustomBtn({ text, onClick, width, height }: CustomBtnProps) {
  return (
    <Pressable 
     style={({ pressed }) => [
       styles.buttonContainer,
       pressed && styles.buttonPressed, 
     ]}
     onPress={onClick}
     >
      <LinearGradient
        colors={[
          `${Colors.btn_color_shade_1}`,
          `${Colors.btn_color_shade_2}`,
          `${Colors.btn_color_shade_3}`,
        ]}
        style={[
          styles.button,
          { width: width, height: height }, 
        ]}
      >
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    borderColor:Colors.white,
    borderWidth: 1,
    marginTop:10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    
  },
  buttonPressed: {
    alignItems: 'center',
    borderRadius: 50, 
  },
  buttonText: {
    color: Colors.white,
  },
});



