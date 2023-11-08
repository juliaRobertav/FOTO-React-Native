import React, {useState} from 'react';
import {View, Text} from 'react-native'
import styles from './styles'
import Header from '../../components/header';



export default function Home(){
    return(
        <View style={styles.container}>
          <Header />
          <Text style={styles.title}>Home</Text>
        </View>
    )
}