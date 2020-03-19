import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card} from 'react-native-paper';

const Home = ()=>{
    const data = [
        {id:1,name:"Ayesha",position:"CEO",path:"https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:2,name:"Shaheer",position:"React Developer",path:"https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:3,name:"Saboor",position:"Engineer",path:"https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:4,name:"Mansoor",position:"Software Develoepr",path:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:5,name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
    ]
    const personList = data.map((person)=>{
        return(
        <Card style = {styles.mycard} key={person.id}>
        <View style={styles.myView}>
        <Image style={{width:50,height:50,borderRadius:25}}
        source={{uri:person.path}} />
        
        <View style={{marginLeft:15}}>
        <Text style = {styles.mytext}>{person.name}</Text>
        <Text>{person.position}</Text>
        </View>

        </View>
        
       </Card>
        )
    })

    return(
        <View>
            {personList}
        </View>
       

    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
    },
    myView:{
        flexDirection:"row",
        padding:6

    },
    mytext:{
        fontSize:19,
    },
    mytext1:{
        fontSize:9,
    }
})
export default Home