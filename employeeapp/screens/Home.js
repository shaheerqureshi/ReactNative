import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card} from 'react-native-paper'

const Home = ()=> {
    const data = [
        {id:1,name:"shaheer",position:"web dev"},
        {id:2,name:"Ayesha",position:"mob dev"},
        {id:3,name:"Saboor",position:"ML dev"},
        {id:4,name:"Mansoor",position:"web dev"},
    ]
    const itemList = data.map((item) =>{
        return (
            <Card style={styles.mycard} key={item.id}>
            <View style = {styles.cardView}>
            <Image 
               style = {{width:60,height:60,borderRadius:30}} 
                source={{uri:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
            />
            <View style={{marginLeft:10}}>
              <Text style= {styles.text}>{item.name}</Text>
              <Text>{item.position}</Text>
            </View>
            

            </View>
            
        </Card>

        )
    })
    return(
       <View>
           {itemList}
       </View>
        
        
    )
}
const styles = StyleSheet.create({
    mycard:{
        margin:5
    },
    cardView:{
    flexDirection:"row",
    padding:6
    },
    text:{
        fontSize:25
    }
})
export default Home
