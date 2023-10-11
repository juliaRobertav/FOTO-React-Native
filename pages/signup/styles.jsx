import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#a7c1eb',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    caixa:{
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:10,
    },
    caixaX:{
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
        backgroundColor:'#bbb',
    },
    title:{
        fontSize: 40,
        fontWeight:'bold'
    },
    caixas:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    btnOk:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        height:50,
        backgroundColor:'#5a7bb0',
        alignItems:'center',
        justifyContent:'center',
    },
    foto:{
        borderRadius:10,
        width:'70%',
        height:300,
        backgroundColor:'#aaa',
        alignItems:'center',
        justifyContent:'center',
    },
})

export default styles