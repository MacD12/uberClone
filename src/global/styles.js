import {getStatusBarHeight} from 'react-native-status-bar-height';

console.log(getStatusBarHeight());

console.log(getStatusBarHeight(true));


export const colors = {
    buttons:"#ff8c52",
    grey:"#bebebe",
    grey1:'#43484d',
    grey2:'#5e6977',
    grey3:'#86939e',
    grey4:'#bdc6cf',
    grey5:'#e1e811',
    grey6:"#f2f9f9",
    grey7:"#f2f9f9",
    grey10:"#d6d6d6",
    cardComment:'#86939e',
    cardbackground:"white",
    statusbar:"#ff8c52",
    heaherText:"white",
    lightgreen: '#66DF48',
    blue:'#286ef0',
    black:"#000000",
    white:"#ffffff",
    darkBlue:"2d328a",
    pagebackground:"white"

}
export const parameters={
    statusBarHeight :getStatusBarHeight(),
    headerHeight:70,

    styledButton:{
        backgroundColor:"#ff8c52",
        alignContent:"center",
        justifyContent:"center",
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },

    buttonTitle:{
        color:"white",
        fontSize:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
}

export const title ={
    color:"#ff8c52",
    fontSize:20,
    fontWeight:"bold"
}