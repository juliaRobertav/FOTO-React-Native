import React, {useState} from 'react';
import {View, Text} from 'react-native'
import styles from './styles'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Home(){
    const [uid, setUid] = useState('')
    const [email, setEmail] = useState('')
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const mail = user.email
        setUid(uid)
        setEmail(mail)
      } else {
        setUid('No user...')

    }
    });
    

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.title}>{email}</Text>
        </View>
    )
}