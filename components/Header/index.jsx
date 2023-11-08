import React from "react"
import {View, Text, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import { Feather} from '@expo/vector-icons'

//só é reconhecido em android - se recebeu - está android : está em iphone 
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>User</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#fff"/>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
    },

})