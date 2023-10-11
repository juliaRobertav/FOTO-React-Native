import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../firebaseConfig'
import axios from 'axios';
import {addDoc, collection} from 'firebase/firestore'
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [uf, setUf] = useState('')
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')

    const [image, setImage] = useState('')
    const [preview, setPreview] = useState('')
    
    const logar = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home')
                adicionar()
            })
            .catch((error) => {
                
                // console.log('Largatixa...')
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    const pesquisar = ()=>{
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then((res)=>{
                setLogradouro(res.data.logradouro)
                setLocalidade(res.data.localidade)
                setBairro(res.data.bairro)
                setUf(res.data.uf)
            })
    }

    async function adicionar(){
        await addDoc(collection(db, 'users'),{
            nome: nome,
            email: email,
            cep: cep,
            logradouro: logradouro,
            localidade: localidade,
            bairro: bairro,
            uf: uf,
            numero: numero
        })

    }



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
                <Text style={styles.title}>Cadastrar</Text>
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
            </View>

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


                <TextInput
                    placeholder='nome'
                    onChangeText={(e)=>setNome(e)}
                    value={nome}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='cep'
                    onChangeText={(e)=>setCep(e)}
                    value={cep}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='número'
                    onChangeText={(e)=>setNumero(e)}
                    value={numero}
                    style={styles.caixa}
                />
                <TouchableOpacity style={styles.btnOk}
                    onPress={pesquisar}
                >
                    <Text style={{ fontSize: 15 }}>Buscar</Text>
                </TouchableOpacity>

                <Text style={styles.caixaX}>{logradouro}</Text>
                <Text style={styles.caixaX}>{bairro}</Text>
                <Text style={styles.caixaX}>{localidade}</Text>
                <Text style={styles.caixaX}>{uf}</Text>
                <Text style={styles.caixaX}>{numero}</Text>


                <TextInput
                    placeholder='email'
                    onChangeText={(e)=>setEmail(e)}
                    value={email}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='password'
                    onChangeText={(e)=>setPassword(e)}
                    value={password}
                    style={styles.caixa}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.btnOk}
                    onPress={logar}
                >
                    <Text style={{ fontSize: 15 }}>OK</Text>
                </TouchableOpacity>
        </View>
    )
}