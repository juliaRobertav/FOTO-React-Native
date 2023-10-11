import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8c352e',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    title:{
        fontSize: 40,
        fontWeight:'bold'
    },
    botao:{
        marginTop:20,
        borderRadius:10,
        width:'30%',
        height:50,
        backgroundColor:'#5a7bb0',
        alignItems:'center',
        justifyContent:'center',
    },
    caixas:{
        marginTop:20,
        borderRadius:10,
        width:'70%',
        height:50,
        backgroundColor:'#aaa',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:10,
    },
    foto:{
        borderRadius:10,
        width:'70%',
        height:300,
        backgroundColor:'#aaa',
        alignItems:'center',
        justifyContent:'center',
    },
    foto1:{
        borderRadius:10,
        width:'100%',
        height:300,
        backgroundColor:'#aaa',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default styles