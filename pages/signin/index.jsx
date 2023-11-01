import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './styles'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebaseConfig'

export default function Login({ navigation }) {

    const imagem_fundo= './assets/imagens/LoginPage.jpg'
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loginAttempts, setLoginAttempts] = useState(0); 
    const [isScreenLocked, setIsScreenLocked] = useState(false);
    
     const logar = () => {
    if (isScreenLocked) {
      return; // Não faça nada se a tela estiver bloqueada
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home', { usuario: user.email });
      })
      .catch((error) => {
        setLoginAttempts(loginAttempts + 1);

        console.log('Lagartixa...');
        const errorCode = error.code;
        const errorMessage = error.message;

        if (loginAttempts >= 2) {
          // Bloqueie a tela definindo isScreenLocked como true
          setIsScreenLocked(true);
          console.log('Você atingiu o número máximo de tentativas. Bloqueando tela...');
        }
      });
  }

    function cadastrar(){
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
          <ImageBackground
            source={require(imagem_fundo)}
            style={styles.container}
          >
          {isScreenLocked ? (
              <Text style={styles.title}>Tela bloqueada. Entre em contato com o suporte.</Text>
          
          ) : (
            <View>
              <Text style={styles.title}>Login</Text>
              <TextInput
                placeholder="email"
                onChangeText={setEmail}
                value={email}
                style={styles.caixa}
              />
              <TextInput
                placeholder="password"
                onChangeText={setPassword}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
              />
    
              <TouchableOpacity style={styles.btnOk} onPress={logar}>
                <Text style={{ fontSize: 25 }}>SignIn</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={styles.btnOk} onPress={cadastrar}>
                <Text style={{ fontSize: 25 }}>SignUp</Text>
              </TouchableOpacity>
            </View>
          )}
          </ImageBackground>
        </View>
      );
    }