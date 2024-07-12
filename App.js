import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <View>
      <Text>Uber Clone</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:Colors.white,
    paddingBottom:30
  },

  header:{
    backgroundColor:colors.blue,
    paddingTop:parameters.statusBatHeight,
    height:parameters.headerHeight,
    alignItems:"flex-start"
  },

  image1:{
    height:100,
    width:100,
  },

  image2:{
    height:60,
    width:60,
    borderRadius:30,
  },

  home:{
    backgroundColor:colors.blue,
    paddingLeft:20,
  },

  text1:{
    color:Colors.white,
    fontSize:21,
    paddingBottom:20,
    paddingTop:20
  },

  text2:{
    color:Colors.white,
    fontSize:16
  },

  view1:{
    flexDirection:"row",
    flex:1,
    paddingTop:30
  },

  button1:{
    height:40,
    width:150,
    backgroundColor:colors.black,
    borderRadius:20,
    alignItems:"center",
    marginTop:20
  },

  button1Text:{
    color:Colors.white,
    fontSize:17,
    marginTop:-2
  },

  card:{
    alignItems:"center",
    margin:SCREEN_WIDTH/22
  },

  view2:{
    marginBottom:5,
    borderRadius:15,
    backgroundColor:colors.grey6
  },

  title:{
    color:Colors.black,
    fontSize:16,
  },
  
  view3:{
    flexDirection:"row",
    marginTop :5,
    height:50,
    backgroundColor:colors.grey6,
    alignItems:"center",
    justifyContent:"space-between",
    marginHorizontal:15
  },

  text3:{
    marginLeft:15,
    fontSize:20,
    color:Colors.black,
  },

  view4:{
    flexDirection:"row",
    alignItems:"center",
    marginRight:15,
    backgroundColor:"white",
    paddingHorizontal:10,
    paddingVertical:2,
    borderRadius:20,
  },

  view5:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:Colors.grey4,
    borderBottomWidth:1,
    flex:1
  },

  view6:{
    alignItems:"center",
    flex:5,
    flexDirection:"row"
  },

  view7:{
    backgroundColor:Colors.colors.grey6,
    height:50,
    width:40,
    borderRadius:20,
    alignItems:"center",
    marginRight:20
  },

  map:{
  height: 150,
  marginVertical:0,
  width:SCREEN_WIDTH*0.92
  },

  text4:{
    fontSize:20,
    color:Colors.black,
    marginBottom:20
  },

  icon1:{
    marginLeft:10,
    marginTop:5
  },

  view8:{
    flex:4,
    marginTop:-25
  },

  carsArounf:{
    width:28,
    height:14,
  },

  Location: {
    width:16,
    height:16,
    borderRadius:8,
    backgroundColor:Colors.blue,
    alignItems:"center",
    justifyContent:"center",
  },

  view9:{
    width:4,
    height:4,
    borderRadius:2,
    backgroundColor:'white',
  }



})