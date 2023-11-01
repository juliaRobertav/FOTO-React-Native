import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#a7c1eb',
        backgroundImage: 'assets/LoginPage.jpg',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // width: '100%',
        // height: '100vh',
        textAlign: 'center',
        display: 'flex',
    },

    caixa:{
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:10,
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
})

export default styles