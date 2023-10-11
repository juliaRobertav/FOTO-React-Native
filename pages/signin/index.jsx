import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebaseConfig'

export default function Login({ navigation }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const logar = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home', { usuario: user.email })
            })
            .catch((error) => {
                
                console.log('Largatixa...')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function cadastrar(){
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
                <TextInput
                    placeholder='email'
                    onChangeText={setEmail}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='password'
                    onChangeText={setPassword}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={logar}
                >
                    <Text style={{ fontSize: 25 }}>SignIn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={cadastrar}
                >
                    <Text style={{ fontSize: 25 }}>SignUp</Text>
                </TouchableOpacity>
        </View>
    )
}