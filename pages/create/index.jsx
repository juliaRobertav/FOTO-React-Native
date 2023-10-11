import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { storage, db } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { Entypo, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

export default function Create() {
    const [texto, setTexto] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState('')


    const gallery = async () => {
        const result = ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setPreview((await result).assets[0].uri)
        }
    }
    const webcam = async () => {
        const result = ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setPreview((await result).assets[0].uri)
        }
    }
    // ################## Imagem #####################

    useEffect(() => {
        if (!image) {
            setImage(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(image)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    const upload = (e) => {
        e.preventDefault()

        const file = image

        if (!file) { console.log('Faltou imagem...') }
        if (!nome) { console.log('Faltou nome...') }
        if (!email) { console.log('Faltou email...') }

        if (image == null) return

        const storageRef = ref(
            storage,
            `images/${nome.replace(/ +/, '') + '_' + image.name}`
        )

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', snapshot => { })
        console.log('Nome: ', nome);
        console.log('email', email);
        console.log('Foto', `images/${nome.replace(/ +/, '') + '_' + image.name}`);

        adicionar()

    }


    async function adicionar() {

        await addDoc(collection(db, 'pessoas'), {
            name: nome,
            email: email,
            status: false,
            photo: nome.replace(/ +/, '') + '_' + image.name,
        })
        setEmail('')
        setNome('')
        setTexto('Cadastrado com sucesso!!')
        setPreview(undefined)
    }



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Create</Text>
            </View>

            <View style={styles.foto}>
                <Image source={{ uri: (preview) }} style={styles.foto1} />
            </View>
            <View style={{  justifyContent:'space-between', flexDirection: 'row', width:'50%' }}>
                <TouchableOpacity
                    style={styles.btn}  
                    onPress={gallery}
                >
                    <AntDesign
                        name="picture"
                        size={30}
                        color={'#1d9fdb'}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={webcam}
                >
                    <Entypo
                        name="camera"
                        size={30}
                        color={'#1d9fdb'}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.caixas}>
                <TextInput
                    placeholder='Nome'
                    value={nome}
                    onChangeText={(e) => setNome(e)}
                />
            </View>

            <View style={styles.caixas}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />
            </View>

            <TouchableOpacity
                style={styles.botao}
                onPress={upload}
            >
                <Text style={{ fontSize: 20 }}>Ok</Text>
            </TouchableOpacity>
        </View>
    )
}