import React from 'react'
import { View , Image, StyleSheet,ActivityIndicator,Text} from 'react-native'
import Route from './d'

class Splas extends React.Component{
    state={
        role:true
    }
   
    render(){
          setTimeout(()=>{
      this.setState({
          role:false
      })
  } ,5000)
    if (this.state.role) {
      return (
        <View style={styles.MainSplash}>
          <Image
                source={require('../image/quran.png')}
               style={{height:100,width:100}}
          />
          <ActivityIndicator size='large' />
          
        </View>
      );
     
     
    }
    return(
        
    <Route />
    
    )
    }
    
}
const styles = StyleSheet.create({
 MainSplash:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
  },
  
  ContainerView:{
    flex:1
  },
  
  
})
export default Splas